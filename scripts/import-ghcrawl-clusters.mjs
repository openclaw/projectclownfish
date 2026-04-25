#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const clusterIds = args._.map((value) => Number(value)).filter(Boolean);
const repo = String(args.repo ?? "openclaw/openclaw");
const dbPath = path.resolve(String(args.db ?? path.join(os.homedir(), ".config", "ghcrawl", "ghcrawl.db")));
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), "jobs", repo.split("/")[0])));
const mode = String(args.mode ?? "plan");
const suffix = typeof args.suffix === "string" ? args.suffix : "";
const allowInstantClose = Boolean(args["allow-instant-close"]);

if (clusterIds.length === 0) {
  console.error("usage: node scripts/import-ghcrawl-clusters.mjs <cluster-id> [...] [--repo owner/repo] [--db path] [--out dir] [--mode plan|autonomous] [--suffix name] [--allow-instant-close]");
  process.exit(2);
}
if (!["plan", "execute", "autonomous"].includes(mode)) {
  console.error("mode must be plan, execute, or autonomous");
  process.exit(2);
}

fs.mkdirSync(outDir, { recursive: true });

for (const clusterId of clusterIds) {
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
  const fileStem = suffix ? `ghcrawl-${clusterId}-${slugify(suffix)}` : `ghcrawl-${clusterId}-${slug}`;
  const filePath = path.join(outDir, `${fileStem}.md`);
  const clusterSlug = suffix ? `ghcrawl-${clusterId}-${slugify(suffix)}` : `ghcrawl-${clusterId}-${slug}`;
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
    "blocked_actions:",
    "  - force_push",
    "  - bypass_checks",
    "  - merge",
    "  - fix",
    "require_human_for:",
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
    ...(mode === "autonomous" || mode === "execute"
      ? [
          `allow_instant_close: ${allowInstantClose ? "true" : "false"}`,
          "allow_fix_pr: false",
          "allow_merge: false",
          "allow_post_merge_close: false",
        ]
      : []),
    `canonical_hint: ${quoteYaml(canonicalHint(representative))}`,
    `notes: ${quoteYaml(`Generated from ghcrawl run cluster ${clusterId} on ${new Date().toISOString().slice(0, 10)}.`)}`,
    "---",
    "",
    `# GHCrawl Cluster ${clusterId}`,
    "",
    `Generated from local ghcrawl run cluster ${clusterId} for \`${repo}\`.`,
    "",
    "Display title:",
    "",
    `> ${representative.title || "Untitled representative"}`,
    "",
    "Cluster shape from ghcrawl:",
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
  console.log(path.relative(repoRoot(), filePath));
}

function sqliteJson(sql) {
  const output = execFileSync("sqlite3", ["-json", dbPath, sql], {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  }).trim();
  return JSON.parse(output || "[]");
}

function sqlNumber(value) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`unsafe cluster id: ${value}`);
  }
  return String(value);
}

function yamlList(values) {
  if (values.length === 0) return ["  []"];
  return values.map((value) => `  - ${quoteYaml(value)}`);
}

function quoteYaml(value) {
  return JSON.stringify(String(value));
}

function canonicalHint(representative) {
  if (!representative.number) return "No ghcrawl representative was available; worker must choose a live canonical.";
  if (representative.state === "open") {
    return `ghcrawl representative #${representative.number} is open; worker must verify it is still the best live canonical.`;
  }
  return `ghcrawl representative #${representative.number} is ${representative.state}; worker must verify whether an open canonical should replace it.`;
}

function goalText(mode) {
  if (mode === "plan") {
    return "Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.";
  }
  return "Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.";
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
