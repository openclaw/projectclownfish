#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  assertAllowedOwner,
  makeRunDir,
  parseArgs,
  parseJob,
  repoRoot,
  validateJob,
} from "./lib.mjs";

const MAX_LINKED_REFS = Number(process.env.CLOWNFISH_MAX_LINKED_REFS ?? 0);
const HYDRATE_COMMENTS = process.env.CLOWNFISH_HYDRATE_COMMENTS === "1";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const offline = Boolean(args.offline);

if (!jobPath) {
  console.error("usage: node scripts/plan-cluster.mjs <job.md> [--run-dir dir] [--offline]");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

const runDir = args["run-dir"]
  ? path.resolve(String(args["run-dir"]))
  : makeRunDir(job, `${job.frontmatter.mode}-cluster-plan`);
fs.mkdirSync(runDir, { recursive: true });

const seedRefs = uniqueRefs([
  ...(job.frontmatter.canonical ?? []),
  ...(job.frontmatter.candidates ?? []),
  ...(job.frontmatter.cluster_refs ?? []),
].map((ref) => normalizeRef(job.frontmatter.repo, ref)));

const externalRefs = seedRefs.filter((ref) => ref.repo !== job.frontmatter.repo);
const seedNumbers = seedRefs
  .filter((ref) => ref.repo === job.frontmatter.repo)
  .map((ref) => ref.number);

const items = new Map();
const linkedRefs = new Map();
const pending = [...new Set(seedNumbers)].map((number) => ({ number, depth: 0 }));
let linkedHydrateCount = 0;
const branch = offline ? offlineMainBranch(job.frontmatter.repo) : fetchMainBranch(job.frontmatter.repo);

while (pending.length > 0) {
  const next = pending.shift();
  const number = next?.number;
  if (!number || items.has(number)) continue;

  const item = offline
    ? offlineItem(job.frontmatter.repo, number, job)
    : hydrateItem(job.frontmatter.repo, number);
  items.set(number, item);

  if (offline || next.depth > 0) continue;
  for (const linked of extractLinkedRefs(job.frontmatter.repo, item)) {
    const key = `${linked.repo}#${linked.number}`;
    linkedRefs.set(key, linked);
    const alreadyPending = pending.some((entry) => entry.number === linked.number);
    if (
      linked.repo === job.frontmatter.repo &&
      !items.has(linked.number) &&
      !alreadyPending &&
      linkedHydrateCount < MAX_LINKED_REFS
    ) {
      pending.push({ number: linked.number, depth: next.depth + 1 });
      linkedHydrateCount += 1;
    }
  }
}

const itemList = [...items.values()].sort((left, right) => left.number - right.number);
const plan = {
  repo: job.frontmatter.repo,
  cluster_id: job.frontmatter.cluster_id,
  mode: job.frontmatter.mode,
  source_job: job.relativePath,
  generated_at: new Date().toISOString(),
  offline,
  main: branch,
  scope: {
    seed_refs: seedRefs.map(formatNormalizedRef),
    linked_refs: [...linkedRefs.values()].map(formatNormalizedRef).sort(),
    external_refs: externalRefs.map(formatNormalizedRef).sort(),
    expansion_policy:
      MAX_LINKED_REFS > 0
        ? "Hydrates job-provided refs and a bounded number of first-hop refs linked from those items."
        : "Hydrates job-provided refs only; first-hop linked refs are recorded but not expanded by default.",
    max_linked_refs: MAX_LINKED_REFS,
    hydrate_comments: HYDRATE_COMMENTS,
  },
  items: itemList.map((item) => summarizeItem(item, job)),
  canonical_candidates: canonicalCandidates(itemList, job),
  safety_gates: [
    "re-fetch live state before every close/comment/label/merge/fix action",
    "stop with needs_human when canonical choice is unclear",
    "stop with needs_human when checks fail, conflicts exist, or cluster state changes",
    "preserve contributor credit in every closeout comment",
  ],
};

const fixArtifact = buildFixArtifact(plan, job);
const clusterPlanPath = path.join(runDir, "cluster-plan.json");
const fixArtifactPath = path.join(runDir, "fix-artifact.json");
fs.writeFileSync(clusterPlanPath, `${JSON.stringify(plan, null, 2)}\n`);
fs.writeFileSync(fixArtifactPath, `${JSON.stringify(fixArtifact, null, 2)}\n`);

console.log(
  JSON.stringify(
    {
      cluster_plan: path.relative(repoRoot(), clusterPlanPath),
      fix_artifact: path.relative(repoRoot(), fixArtifactPath),
      items: itemList.length,
      offline,
    },
    null,
    2,
  ),
);

function hydrateItem(repo, number) {
  const issue = ghJson(["api", `repos/${repo}/issues/${number}`]);
  const comments = HYDRATE_COMMENTS ? ghPaged(`repos/${repo}/issues/${number}/comments`) : [];
  const pullRequest = issue.pull_request ? ghJson(["api", `repos/${repo}/pulls/${number}`]) : null;
  const files = pullRequest ? ghPaged(`repos/${repo}/pulls/${number}/files`) : [];
  const commits = pullRequest ? ghPaged(`repos/${repo}/pulls/${number}/commits`) : [];
  const checks = pullRequest ? ghPrChecks(repo, number) : [];

  return {
    repo,
    number,
    ref: `#${number}`,
    kind: pullRequest ? "pull_request" : "issue",
    state: issue.state,
    title: issue.title,
    html_url: issue.html_url,
    author: issue.user?.login,
    author_association: issue.author_association,
    labels: (issue.labels ?? []).map((label) => label.name ?? label).filter(Boolean),
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    closed_at: issue.closed_at,
    body: issue.body ?? "",
    body_excerpt: excerpt(issue.body),
    comments_count: issue.comments ?? comments.length,
    comments: comments.map((comment) => ({
      author: comment.user?.login,
      author_association: comment.author_association,
      created_at: comment.created_at,
      updated_at: comment.updated_at,
      body: comment.body ?? "",
      body_excerpt: excerpt(comment.body),
    })),
    pull_request: pullRequest
      ? {
          draft: pullRequest.draft,
          mergeable: pullRequest.mergeable,
          mergeable_state: pullRequest.mergeable_state,
          base_ref: pullRequest.base?.ref,
          head_ref: pullRequest.head?.ref,
          head_repo: pullRequest.head?.repo?.full_name,
          head_sha: pullRequest.head?.sha,
          additions: pullRequest.additions,
          deletions: pullRequest.deletions,
          changed_files: pullRequest.changed_files,
          files: files.map((file) => ({
            filename: file.filename,
            status: file.status,
            additions: file.additions,
            deletions: file.deletions,
          })),
          commits: commits.map((commit) => ({
            sha: commit.sha,
            message: firstLine(commit.commit?.message),
            author: commit.author?.login ?? commit.commit?.author?.name,
          })),
          checks,
        }
      : null,
  };
}

function summarizeItem(item, job) {
  return {
    repo: item.repo,
    ref: item.ref,
    number: item.number,
    kind: item.kind,
    state: item.state,
    title: item.title,
    url: item.html_url,
    author: item.author,
    author_association: item.author_association,
    labels: item.labels,
    created_at: item.created_at,
    updated_at: item.updated_at,
    closed_at: item.closed_at,
    body_excerpt: item.body_excerpt,
    comments_count: item.comments_count ?? item.comments.length,
    classification_hint: classificationHint(item, job),
    pull_request: item.pull_request
      ? {
          draft: item.pull_request.draft,
          mergeable: item.pull_request.mergeable,
          mergeable_state: item.pull_request.mergeable_state,
          base_ref: item.pull_request.base_ref,
          head_ref: item.pull_request.head_ref,
          head_repo: item.pull_request.head_repo,
          head_sha: item.pull_request.head_sha,
          changed_files: item.pull_request.changed_files,
          additions: item.pull_request.additions,
          deletions: item.pull_request.deletions,
          files: item.pull_request.files,
          commits: item.pull_request.commits,
          checks: item.pull_request.checks,
        }
      : null,
  };
}

function buildFixArtifact(plan, job) {
  return {
    repo: plan.repo,
    cluster_id: plan.cluster_id,
    mode: plan.mode,
    generated_at: plan.generated_at,
    source_job: plan.source_job,
    target_checkout: job.frontmatter.target_checkout ?? null,
    permissions: {
      allow_instant_close: job.frontmatter.allow_instant_close === true,
      allow_fix_pr: job.frontmatter.allow_fix_pr === true,
      allow_merge: job.frontmatter.allow_merge === true,
      allow_post_merge_close: job.frontmatter.allow_post_merge_close === true,
    },
    canonical_candidates: plan.canonical_candidates,
    item_matrix: plan.items.map((item) => ({
      ref: item.ref,
      kind: item.kind,
      state: item.state,
      updated_at: item.updated_at,
      hint: item.classification_hint,
    })),
    drive_plan: {
      instant_close:
        job.frontmatter.allow_instant_close === true
          ? "Worker may emit close_duplicate, close_superseded, or close_fixed_by_candidate actions only with live target_updated_at and canonical/candidate evidence."
          : "Disabled by job frontmatter.",
      canonical_fix:
        job.frontmatter.allow_fix_pr === true
          ? "If no viable canonical PR exists and the bug still reproduces, emit fix_needed plus a build_fix_artifact action with files, tests, changelog, and PR plan."
          : "Worker may identify canonical fixes but must not plan a fix PR.",
      merge:
        job.frontmatter.allow_merge === true
          ? "Worker may recommend merge_canonical only after checks, review state, review-bot comments, conflicts, and changelog are clean."
          : "Merge recommendations must stay non-mutating.",
      post_merge_close:
        job.frontmatter.allow_post_merge_close === true
          ? "After canonical fix confirmation, worker may emit post_merge_close closeout actions for covered refs."
          : "Post-merge closure disabled by job frontmatter.",
    },
    required_validation: [
      "prove current main behavior before fix, merge, fixed-by-candidate, or post-merge closeout actions",
      "for pure issue-dedupe closeout, prove the canonical issue and duplicate targets are live and current",
      "hydrate every provided and linked item before classification",
      "fetch Greptile, Codex, Asile, CodeRabbit, Copilot, and similar review-bot comments for every canonical or candidate PR",
      "address each actionable review-bot finding or mark the item needs_human with the unresolved blocker",
      "show canonical URL or explain needs_human",
      "include targeted tests and changelog plan for fix artifacts",
      "include full GitHub URLs in closure rationale",
    ],
  };
}

function canonicalCandidates(items, job) {
  const canonicalNumbers = new Set((job.frontmatter.canonical ?? []).map((ref) => normalizeRef(job.frontmatter.repo, ref).number));
  return items
    .filter((item) => canonicalNumbers.has(item.number) || item.kind === "pull_request")
    .map((item) => ({
      ref: item.ref,
      kind: item.kind,
      state: item.state,
      title: item.title,
      url: item.html_url,
      hint: classificationHint(item, job),
      checks: item.pull_request?.checks ?? [],
    }));
}

function classificationHint(item, job) {
  const canonicalNumbers = new Set((job.frontmatter.canonical ?? []).map((ref) => normalizeRef(job.frontmatter.repo, ref).number));
  if (canonicalNumbers.has(item.number)) return "canonical_hint";
  if (item.state !== "open") return "already_closed";
  if (item.kind === "pull_request" && item.pull_request?.draft === false) return "open_pr_candidate";
  if (item.kind === "pull_request") return "draft_pr_candidate";
  return "open_issue_candidate";
}

function extractLinkedRefs(defaultRepo, item) {
  const texts = [
    item.title,
    item.body,
    ...item.comments.map((comment) => comment.body),
    item.pull_request?.commits?.map((commit) => commit.message).join("\n"),
  ];
  return uniqueRefs(texts.flatMap((text) => refsFromText(defaultRepo, text)));
}

function refsFromText(defaultRepo, text) {
  const refs = [];
  const ownerRepo = defaultRepo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const urlPattern = new RegExp(
    `https://github\\.com/(${ownerRepo}|[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+)/(?:issues|pull)/(\\d+)`,
    "g",
  );
  for (const match of String(text ?? "").matchAll(urlPattern)) {
    refs.push(normalizeRef(defaultRepo, `https://github.com/${match[1]}/issues/${match[2]}`));
  }
  for (const match of String(text ?? "").matchAll(/(^|[^A-Za-z0-9_])#(\d+)\b/g)) {
    refs.push({ repo: defaultRepo, number: Number(match[2]) });
  }
  return refs;
}

function normalizeRef(defaultRepo, value) {
  const text = String(value ?? "").trim();
  const shorthand = text.match(/^#?(\d+)$/);
  if (shorthand) return { repo: defaultRepo, number: Number(shorthand[1]) };
  const url = text.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/(?:issues|pull)\/(\d+)/);
  if (url) return { repo: url[1], number: Number(url[2]) };
  return { repo: defaultRepo, number: 0 };
}

function uniqueRefs(refs) {
  const seen = new Set();
  const out = [];
  for (const ref of refs) {
    if (!ref?.repo || !ref.number) continue;
    const key = `${ref.repo}#${ref.number}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(ref);
  }
  return out;
}

function formatNormalizedRef(ref) {
  return ref.repo === job.frontmatter.repo ? `#${ref.number}` : `https://github.com/${ref.repo}/issues/${ref.number}`;
}

function fetchMainBranch(repo) {
  const branch = ghJson(["api", `repos/${repo}/branches/main`]);
  return {
    name: "main",
    sha: branch.commit?.sha,
    url: branch._links?.html,
  };
}

function offlineMainBranch(repo) {
  return {
    name: "main",
    sha: null,
    url: `https://github.com/${repo}/tree/main`,
    note: "offline mode did not fetch current main",
  };
}

function offlineItem(repo, number, job) {
  return {
    repo,
    number,
    ref: `#${number}`,
    kind: "unknown",
    state: "unknown",
    title: `offline seed #${number}`,
    html_url: `https://github.com/${repo}/issues/${number}`,
    author: null,
    author_association: null,
    labels: [],
    created_at: null,
    updated_at: null,
    closed_at: null,
    body: job.body,
    body_excerpt: excerpt(job.body),
    comments: [],
    pull_request: null,
  };
}

function ghJson(ghArgs) {
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: process.env,
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
  return JSON.parse(text || "null");
}

function ghPaged(apiPath) {
  const pages = ghJson(["api", apiPath, "--paginate", "--slurp"]);
  if (!Array.isArray(pages)) return [];
  return pages.flatMap((page) => (Array.isArray(page) ? page : []));
}

function ghPrChecks(repo, number) {
  try {
    const text = execFileSync(
      "gh",
      ["pr", "checks", String(number), "--repo", repo, "--json", "name,state,bucket,link"],
      {
        cwd: repoRoot(),
        encoding: "utf8",
        env: process.env,
        maxBuffer: 16 * 1024 * 1024,
        stdio: ["ignore", "pipe", "pipe"],
      },
    ).trim();
    return JSON.parse(text || "[]");
  } catch (error) {
    return [{ error: firstLine(error?.stderr || error?.message || String(error)) }];
  }
}

function excerpt(text, limit = 1200) {
  const value = String(text ?? "").replace(/\s+/g, " ").trim();
  if (value.length <= limit) return value;
  return `${value.slice(0, limit - 3)}...`;
}

function firstLine(text) {
  return String(text ?? "").split(/\r?\n/)[0] ?? "";
}
