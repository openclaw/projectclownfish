import fs from "node:fs";
import path from "node:path";

export function repoRoot() {
  return path.resolve(import.meta.dirname, "..");
}

export function readText(relativePath) {
  return fs.readFileSync(path.join(repoRoot(), relativePath), "utf8");
}

export function parseJob(filePath) {
  const absolute = path.resolve(filePath);
  const raw = fs.readFileSync(absolute, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`missing YAML frontmatter: ${filePath}`);
  }
  return {
    path: absolute,
    relativePath: path.relative(repoRoot(), absolute),
    frontmatter: parseSimpleYaml(match[1]),
    body: match[2].trim(),
    raw,
  };
}

export function parseSimpleYaml(text) {
  const out = {};
  let currentKey = null;

  for (const line of text.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;

    const listMatch = line.match(/^\s+-\s+(.*)$/);
    if (listMatch && currentKey) {
      if (!Array.isArray(out[currentKey])) out[currentKey] = [];
      out[currentKey].push(parseScalar(listMatch[1]));
      continue;
    }

    const kv = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!kv) {
      throw new Error(`unsupported YAML line: ${line}`);
    }

    currentKey = kv[1];
    const value = kv[2] ?? "";
    out[currentKey] = value === "" ? [] : parseScalar(value);
  }

  return out;
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((part) => parseScalar(part))
      .filter((part) => part !== "");
  }
  return trimmed;
}

export function validateJob(job) {
  const errors = [];
  const fm = job.frontmatter;

  requireString(errors, fm, "repo");
  requireString(errors, fm, "cluster_id");
  requireString(errors, fm, "mode");
  requireArray(errors, fm, "allowed_actions");
  requireArray(errors, fm, "candidates");

  if (typeof fm.repo === "string" && !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(fm.repo)) {
    errors.push("repo must be owner/repo");
  }
  if (fm.mode && !["plan", "execute", "autonomous"].includes(fm.mode)) {
    errors.push("mode must be plan, execute, or autonomous");
  }
  for (const key of [
    "allowed_actions",
    "blocked_actions",
    "require_human_for",
    "canonical",
    "candidates",
    "cluster_refs",
  ]) {
    if (fm[key] !== undefined && !Array.isArray(fm[key])) {
      errors.push(`${key} must be a list`);
    }
  }
  for (const action of fm.allowed_actions ?? []) {
    if (!["comment", "label", "close", "merge", "fix", "raise_pr"].includes(action)) {
      errors.push(`unsupported allowed action: ${action}`);
    }
  }
  for (const ref of [...(fm.canonical ?? []), ...(fm.candidates ?? [])]) {
    if (!/^#?[0-9]+$/.test(String(ref))) {
      errors.push(`candidate refs must look like #123: ${ref}`);
    }
  }
  for (const ref of fm.cluster_refs ?? []) {
    if (!isGithubRef(ref)) {
      errors.push(`cluster_refs must look like #123 or a GitHub issue/PR URL: ${ref}`);
    }
  }
  for (const key of [
    "allow_instant_close",
    "allow_low_signal_pr_close",
    "allow_fix_pr",
    "allow_merge",
    "allow_post_merge_close",
  ]) {
    if (fm[key] !== undefined && typeof fm[key] !== "boolean") {
      errors.push(`${key} must be true or false`);
    }
  }
  for (const key of ["canonical_hint", "target_checkout", "triage_policy"]) {
    if (fm[key] !== undefined && typeof fm[key] !== "string") {
      errors.push(`${key} must be a string`);
    }
  }

  return errors;
}

function requireString(errors, object, key) {
  if (typeof object[key] !== "string" || object[key].trim() === "") {
    errors.push(`${key} is required`);
  }
}

function requireArray(errors, object, key) {
  if (!Array.isArray(object[key]) || object[key].length === 0) {
    errors.push(`${key} must be a non-empty list`);
  }
}

export function renderPrompt(job, requestedMode, context = {}) {
  const mode = requestedMode ?? job.frontmatter.mode;
  const modePrompt =
    mode === "autonomous"
      ? "prompts/autonomous.md"
      : mode === "execute"
        ? "prompts/execute.md"
        : "prompts/plan-only.md";
  const parts = [
    readText("prompts/worker-system.md"),
    readText(modePrompt),
    "## Dedupe policy",
    readText("instructions/dedupe.md"),
    "## Closure policy",
    readText("instructions/closure-policy.md"),
    "## Merge policy",
    readText("instructions/merge-policy.md"),
    ...(job.frontmatter.triage_policy === "low_signal_prs"
      ? ["## Low-signal PR policy", readText("instructions/low-signal-prs.md")]
      : []),
    "## Job file",
    "```md",
    job.raw.trim(),
    "```",
  ];

  for (const [title, filePath] of [
    ["Cluster preflight artifact", context.clusterPlanPath],
    ["Fix artifact", context.fixArtifactPath],
  ]) {
    if (!filePath) continue;
    const absolute = path.resolve(filePath);
    parts.push(`## ${title}`, `Path: \`${path.relative(repoRoot(), absolute)}\``, "```json", fs.readFileSync(absolute, "utf8").trim(), "```");
  }

  parts.push(
    "## Required final output",
    "Return JSON matching `schemas/codex-result.schema.json` and nothing else.",
  );

  return parts.join("\n\n");
}

function isGithubRef(value) {
  const text = String(value ?? "");
  return /^#?[0-9]+$/.test(text) || /^https:\/\/github\.com\/[^/]+\/[^/]+\/(?:issues|pull)\/[0-9]+/.test(text);
}

export function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) {
      args._.push(arg);
      continue;
    }
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

export function assertAllowedOwner(repo, allowedOwner) {
  if (!allowedOwner) return;
  const owner = repo.split("/")[0];
  if (owner !== allowedOwner) {
    throw new Error(`repo owner ${owner} does not match CLOWNFISH_ALLOWED_OWNER=${allowedOwner}`);
  }
}

export function makeRunDir(job, mode) {
  const slug = `${path.basename(job.path, ".md")}-${mode}-${new Date().toISOString().replace(/[:.]/g, "-")}`;
  const dir = path.join(repoRoot(), ".projectclownfish", "runs", slug);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}
