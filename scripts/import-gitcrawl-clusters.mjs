#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { hasSecuritySignalText, parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw/openclaw");
const dbPath = path.resolve(String(args.db ?? path.join(os.homedir(), ".config", "gitcrawl", "gitcrawl.db")));
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), "jobs", repo.split("/")[0], "inbox")));
const mode = String(args.mode ?? "plan");
const suffix = typeof args.suffix === "string" ? args.suffix : "";
const allowInstantClose = Boolean(args["allow-instant-close"]);
const editEnabledByDefault = mode === "autonomous" || mode === "execute";
const allowMerge = booleanArg("allow-merge", editEnabledByDefault);
const allowFixPr = booleanArg("allow-fix-pr", editEnabledByDefault);
const allowPostMergeClose = booleanArg("allow-post-merge-close", allowMerge || allowFixPr);
const skipExisting = args["skip-existing"] !== "false";
const skipSecurity = args["include-security"] !== true && args["skip-security"] !== "false";
const skipFeatureRequests = args["include-feature-requests"] !== true && args["skip-feature-requests"] !== "false";
const fromGitcrawl = Boolean(args["from-gitcrawl"] || args["from-ghcrawl"] || args.all);
const limit = numberArg("limit", 40);
const minSize = numberArg("min-size", 2);
let clusterIds = args._.map((value) => Number(value)).filter(Boolean);
const selectingFromGitcrawl = clusterIds.length === 0 && fromGitcrawl;

if (selectingFromGitcrawl) {
  clusterIds = selectClusterIds();
}

if (clusterIds.length === 0) {
  console.error(
    "usage: node scripts/import-gitcrawl-clusters.mjs <cluster-id> [...] [--from-gitcrawl] [--limit N] [--repo owner/repo] [--db path] [--out dir] [--mode plan|autonomous] [--suffix name] [--allow-instant-close] [--allow-merge true|false] [--allow-fix-pr true|false] [--allow-post-merge-close true|false]",
  );
  process.exit(2);
}
if (!["plan", "execute", "autonomous"].includes(mode)) {
  console.error("mode must be plan, execute, or autonomous");
  process.exit(2);
}

fs.mkdirSync(outDir, { recursive: true });

const existingClusterIds = skipExisting ? existingGitcrawlClusterIds(outDir) : new Set();
const existingMemberRefs = skipExisting ? existingGitcrawlMemberRefs(outDir, suffix) : new Map();
let createdCount = 0;

for (const clusterId of clusterIds) {
  if (selectingFromGitcrawl && createdCount >= limit) break;
  if (existingClusterIds.has(clusterId)) {
    console.error(`skip existing cluster: ${clusterId}`);
    continue;
  }

  const members = sqliteJson(`
    select
      c.id as cluster_id,
      c.member_count,
      c.created_at as cluster_created_at,
      c.closed_at_local,
      c.close_reason_local,
      rt.number as representative_number,
      rt.kind as representative_kind,
      rt.state as representative_state,
      rt.title as representative_title,
      t.number,
      t.kind,
      t.state,
      t.title,
      t.body,
      t.labels_json,
      t.updated_at
    from clusters c
    join cluster_members cm on cm.cluster_id = c.id
    join threads t on t.id = cm.thread_id
    left join threads rt on rt.id = c.representative_thread_id
    where c.id = ${sqlNumber(clusterId)}
    order by t.number;
  `);

  if (members.length === 0) {
    console.error(`cluster not found: ${clusterId}`);
    continue;
  }
  const overlappingRefs = members
    .map((member) => Number(member.number))
    .filter((number) => existingMemberRefs.has(number));
  if (overlappingRefs.length > 0) {
    const examples = overlappingRefs
      .slice(0, 4)
      .map((number) => `#${number}`)
      .join(", ");
    const existingFiles = [...new Set(overlappingRefs.flatMap((number) => existingMemberRefs.get(number) ?? []))];
    console.error(
      `skip existing member overlap cluster: ${clusterId} ${members[0].representative_title ?? ""} (${examples}${overlappingRefs.length > 4 ? ", ..." : ""}; ${existingFiles.slice(0, 2).join(", ")})`,
    );
    continue;
  }

  const securitySensitiveMembers = members.filter((member) =>
    hasSecuritySignalText(member.title, member.body, safeJson(member.labels_json)),
  );
  const securitySensitive = securitySensitiveMembers.length > 0;
  if (securitySensitive && skipSecurity) {
    const refs = securitySensitiveMembers.map((member) => `#${member.number}`).join(", ");
    console.error(`skip security-sensitive cluster: ${clusterId} ${members[0].representative_title ?? ""} (${refs})`);
    continue;
  }
  if (skipFeatureRequests && isProductFeatureRequest(members[0].representative_title)) {
    console.error(`skip product feature-request cluster: ${clusterId} ${members[0].representative_title ?? ""}`);
    continue;
  }

  const first = members[0];
  const representative = {
    number: first.representative_number,
    kind: first.representative_kind,
    state: first.representative_state,
    title: first.representative_title,
  };
  const openMembers = members.filter((member) => member.state === "open");
  const closedMembers = members.filter((member) => member.state !== "open");
  const issueCount = members.filter((member) => member.kind === "issue").length;
  const pullRequestCount = members.filter((member) => member.kind === "pull_request").length;
  const latestUpdatedAt = members.map((member) => member.updated_at).sort().at(-1);
  const slug = slugify(representative.title || `cluster-${clusterId}`);
  const fileStem = suffix ? `gitcrawl-${clusterId}-${slugify(suffix)}` : `gitcrawl-${clusterId}-${slug}`;
  const filePath = path.join(outDir, `${fileStem}.md`);
  const clusterSlug = suffix ? `gitcrawl-${clusterId}-${slugify(suffix)}` : `gitcrawl-${clusterId}-${slug}`;
  const canonical = representative.number ? [`#${representative.number}`] : [];

  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterSlug}`,
    `mode: ${mode}`,
    "allowed_actions:",
    "  - comment",
    "  - label",
    "  - close",
    ...(allowMerge ? ["  - merge"] : []),
    ...(allowFixPr ? ["  - fix", "  - raise_pr"] : []),
    "blocked_actions:",
    "  - force_push",
    "  - bypass_checks",
    ...(allowMerge ? [] : ["  - merge"]),
    ...(allowFixPr ? [] : ["  - fix"]),
    "require_human_for:",
    "  - security_sensitive",
    "  - failing_checks",
    "  - conflicting_prs",
    "  - unclear_canonical",
    "  - broad_code_delta",
    "canonical:",
    ...yamlList(canonical),
    "candidates:",
    ...yamlList(openMembers.map((member) => `#${member.number}`)),
    "cluster_refs:",
    ...yamlList(members.map((member) => `#${member.number}`)),
    "security_policy: central_security_only",
    "security_sensitive: false",
    ...(mode === "autonomous" || mode === "execute"
      ? [
          `allow_instant_close: ${allowInstantClose ? "true" : "false"}`,
          `allow_fix_pr: ${allowFixPr ? "true" : "false"}`,
          `allow_merge: ${allowMerge ? "true" : "false"}`,
          `allow_post_merge_close: ${allowPostMergeClose ? "true" : "false"}`,
          `require_fix_before_close: ${allowFixPr || allowMerge ? "true" : "false"}`,
        ]
      : []),
    `canonical_hint: ${quoteYaml(canonicalHint(representative))}`,
    `notes: ${quoteYaml(jobNotes(clusterId, securitySensitiveMembers))}`,
    "---",
    "",
    `# Gitcrawl Cluster ${clusterId}`,
    "",
    `Generated from local gitcrawl run cluster ${clusterId} for \`${repo}\`.`,
    "",
    "Display title:",
    "",
    `> ${representative.title || "Untitled representative"}`,
    "",
    "Cluster shape from gitcrawl:",
    "",
    `- total members: ${members.length}`,
    `- issues: ${issueCount}`,
    `- pull requests: ${pullRequestCount}`,
    `- open candidates in local store: ${openMembers.length}`,
    `- representative: #${representative.number}, currently ${representative.state} in local store`,
    `- latest member update: ${latestUpdatedAt}`,
    "",
    "## Goal",
    "",
    goalText(mode),
    "",
    "## Member Inventory",
    "",
    "Closed context refs:",
    "",
    ...bulletList(closedMembers),
    "",
    "Open candidates:",
    "",
    ...bulletList(openMembers),
    "",
  ].join("\n");

  fs.writeFileSync(filePath, markdown);
  createdCount += 1;
  console.log(path.relative(repoRoot(), filePath));
}

function selectClusterIds() {
  return sqliteJson(`
    select
      c.id,
      c.member_count
    from clusters c
    where c.closed_at_local is null
      and c.member_count >= ${sqlNumber(minSize)}
    order by c.member_count desc, c.id asc
  `).map((row) => Number(row.id)).filter(Boolean);
}

function sqliteJson(sql) {
  const output = execFileSync("sqlite3", ["-json", dbPath, sql], {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  }).trim();
  return JSON.parse(output || "[]");
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
}

function booleanArg(name, fallback) {
  const value = args[name];
  if (value === undefined) return fallback;
  if (value === true || value === "true") return true;
  if (value === false || value === "false") return false;
  throw new Error(`--${name} must be true or false`);
}

function sqlNumber(value) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`unsafe cluster id: ${value}`);
  }
  return String(value);
}

function safeJson(value) {
  try {
    return JSON.parse(value || "[]");
  } catch {
    return [];
  }
}

function isProductFeatureRequest(title) {
  return /^\s*\[?\s*feature(?:\s+(?:request|proposal))?\b/i.test(String(title ?? ""));
}

function existingGitcrawlClusterIds(dir) {
  if (!fs.existsSync(dir)) return new Set();
  const ids = new Set();
  for (const entry of fs.readdirSync(dir, { recursive: true })) {
    const file = path.join(dir, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(/\b(?:ghcrawl|gitcrawl)-(\d+)\b/g)) ids.add(Number(match[1]));
  }
  return ids;
}

function existingGitcrawlMemberRefs(dir, suffix) {
  const refs = new Map();
  if (!fs.existsSync(dir)) return refs;
  const suffixSlug = suffix ? slugify(suffix) : "";
  for (const entry of fs.readdirSync(dir, { recursive: true })) {
    const file = path.join(dir, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    if (suffixSlug && !path.basename(file).endsWith(`-${suffixSlug}.md`)) continue;
    const text = fs.readFileSync(file, "utf8");
    const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
    const clusterRefs = frontmatter?.[1].match(/^cluster_refs:\n((?:  - .+\n?)*)/m)?.[1] ?? "";
    for (const match of clusterRefs.matchAll(/#(\d+)/g)) {
      const number = Number(match[1]);
      if (!Number.isSafeInteger(number)) continue;
      const files = refs.get(number) ?? [];
      files.push(path.relative(repoRoot(), file));
      refs.set(number, files);
    }
  }
  return refs;
}

function yamlList(values) {
  if (values.length === 0) return ["  []"];
  return values.map((value) => `  - ${quoteYaml(value)}`);
}

function quoteYaml(value) {
  return JSON.stringify(String(value));
}

function canonicalHint(representative) {
  if (!representative.number) return "No gitcrawl representative was available; worker must choose a live canonical.";
  if (representative.state === "open") {
    return `gitcrawl representative #${representative.number} is open; worker must verify it is still the best live canonical.`;
  }
  return `gitcrawl representative #${representative.number} is ${representative.state}; worker must verify whether an open canonical should replace it.`;
}

function goalText(mode) {
  if (mode === "plan") {
    return "Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.";
  }
  return "Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.";
}

function jobNotes(clusterId, securitySensitiveMembers) {
  const base = `Generated from gitcrawl run cluster ${clusterId} on ${new Date().toISOString().slice(0, 10)}.`;
  if (securitySensitiveMembers.length === 0) return base;
  return `${base} Security-sensitive refs ${securitySensitiveMembers.map((member) => `#${member.number}`).join(", ")} must be routed with route_security and must not block unrelated non-security work.`;
}

function bulletList(members) {
  if (members.length === 0) return ["- none"];
  return members.map((member) => `- #${member.number} ${member.title}`);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64)
    .replace(/-+$/g, "") || "cluster";
}
