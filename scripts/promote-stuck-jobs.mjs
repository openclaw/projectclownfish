#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw");
const inboxDir = path.resolve(String(args.inbox ?? path.join(repoRoot(), "jobs", repo, "inbox")));
const stuckDir = path.resolve(String(args.stuck ?? path.join(repoRoot(), "jobs", repo, "outbox", "stuck")));
const reportPath = path.resolve(String(args.report ?? path.join(repoRoot(), "results", "stuck-job-promotion.json")));
const apply = Boolean(args.apply || args.execute);
const sort = String(args.sort ?? "name");

if (!["name", "mtime", "size"].includes(sort)) {
  throw new Error("sort must be name, mtime, or size");
}

const candidates = listJobs(stuckDir).sort(sort === "mtime" ? sortOldestFirst : sort === "size" ? sortLargestFirst : sortByName);
const limit = limitArg("limit", 20, candidates.length);
const selected = candidates.slice(0, limit);
const rows = selected.map((job) => promoteJob(job));
const report = {
  status: apply ? "applied" : "dry_run",
  repo,
  inbox_dir: path.relative(repoRoot(), inboxDir),
  stuck_dir: path.relative(repoRoot(), stuckDir),
  sort,
  limit,
  generated_at: new Date().toISOString(),
  totals: {
    available: candidates.length,
    selected: selected.length,
    promoted: rows.filter((row) => row.status === "promoted").length,
    planned: rows.filter((row) => row.status === "planned").length,
    blocked: rows.filter((row) => row.status === "blocked").length,
  },
  jobs: rows,
};

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
writeMarkdownReport(report, reportPath.replace(/\.json$/i, ".md"));
console.log(JSON.stringify(report, null, 2));

function listJobs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => {
      const filePath = path.join(dir, entry.name);
      return {
        name: entry.name,
        source: filePath,
        destination: path.join(inboxDir, entry.name),
        mtimeMs: fs.statSync(filePath).mtimeMs,
        ...readJobSummary(filePath),
      };
    });
}

function promoteJob(job) {
  const base = {
    job: job.name,
    source: path.relative(repoRoot(), job.source),
    destination: path.relative(repoRoot(), job.destination),
    total_members: job.totalMembers,
    open_candidates: job.openCandidates,
    title: job.title,
  };
  if (fs.existsSync(job.destination)) {
    return { ...base, status: "blocked", reason: "destination already exists" };
  }
  if (!apply) return { ...base, status: "planned", reason: "dry run" };

  fs.mkdirSync(inboxDir, { recursive: true });
  fs.renameSync(job.source, job.destination);
  return { ...base, status: "promoted", reason: "moved to inbox" };
}

function sortByName(left, right) {
  return left.name.localeCompare(right.name);
}

function sortOldestFirst(left, right) {
  return left.mtimeMs - right.mtimeMs || sortByName(left, right);
}

function sortLargestFirst(left, right) {
  return right.totalMembers - left.totalMembers || right.openCandidates - left.openCandidates || sortByName(left, right);
}

function readJobSummary(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return {
    totalMembers: Number(raw.match(/- total members:\s*(\d+)/)?.[1] ?? 0),
    openCandidates: Number(raw.match(/- open candidates in local store:\s*(\d+)/)?.[1] ?? 0),
    title: raw.match(/Display title:\n\n>\s*(.+)/)?.[1] ?? "",
  };
}

function limitArg(name, fallback, allCount) {
  const raw = args[name];
  if (raw === undefined || raw === true) return fallback;
  if (String(raw).toLowerCase() === "all") return allCount;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function writeMarkdownReport(report, filePath) {
  const rows = report.jobs
    .map((job) => `| ${job.job} | ${job.total_members ?? 0} | ${job.open_candidates ?? 0} | ${job.status} | ${job.source} | ${job.destination} | ${job.reason} |`)
    .join("\n");
  const body = `# Stuck Job Promotion

Mode: ${report.status}

| Metric | Count |
| --- | ---: |
| Available | ${report.totals.available} |
| Selected | ${report.totals.selected} |
| Planned | ${report.totals.planned} |
| Promoted | ${report.totals.promoted} |
| Blocked | ${report.totals.blocked} |

| Job | Members | Open | Status | Source | Destination | Reason |
| --- | ---: | ---: | --- | --- | --- | --- |
${rows || "| _None_ |  |  |  |  |  |  |"}
`;
  fs.writeFileSync(filePath, body, "utf8");
}
