#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";

const CLOSE_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
  "post_merge_close",
]);
const MERGE_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const ROUTE_SECURITY_ACTIONS = new Set(["route_security"]);
const FIX_REPAIR_STRATEGIES = new Set([
  "repair_contributor_branch",
  "replace_uneditable_branch",
  "new_fix_pr",
  "already_fixed_on_main",
  "needs_human",
]);
const MUTATING_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "label",
  "comment",
  "merge_candidate",
  "merge_canonical",
  "open_fix_pr",
  "post_merge_close",
]);
const FIX_ACTIONS = new Set(["fix_needed", "build_fix_artifact", "open_fix_pr"]);

const args = parseArgs(process.argv.slice(2));
const inputs = args._;

if (inputs.length === 0) {
  console.error("usage: node scripts/review-results.mjs <result.json|run-dir|artifact-dir> [...]");
  process.exit(2);
}

const reports = inputs.flatMap((input) => reviewInput(path.resolve(input)));
const failed = reports.some((report) => report.status === "failed");
console.log(JSON.stringify({ status: failed ? "failed" : "passed", reports }, null, 2));
if (failed) process.exit(1);

function reviewInput(inputPath) {
  const resultPaths = findResultPaths(inputPath);
  if (resultPaths.length === 0) {
    return [
      {
        input: relative(inputPath),
        status: "failed",
        failures: ["no result.json found"],
        warnings: [],
      },
    ];
  }
  return resultPaths.map(reviewResult);
}

function findResultPaths(inputPath) {
  if (!fs.existsSync(inputPath)) return [];
  if (fs.statSync(inputPath).isFile()) {
    return path.basename(inputPath) === "result.json" ? [inputPath] : [];
  }
  const out = [];
  for (const entry of fs.readdirSync(inputPath, { recursive: true })) {
    const candidate = path.join(inputPath, String(entry));
    if (path.basename(candidate) === "result.json" && fs.statSync(candidate).isFile()) {
      out.push(candidate);
    }
  }
  return out.sort();
}

function reviewResult(resultPath) {
  const runDir = path.dirname(resultPath);
  const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
  const plan = readSiblingJson(runDir, "cluster-plan.json");
  const failures = [];
  const warnings = [];
  const itemByRef = buildItemMap(plan, result.repo);
  const actionCounts = {};

  if (!Array.isArray(result.actions)) failures.push("result.actions must be an array");
  if (!result.repo) failures.push("result.repo is required");
  if (!result.cluster_id) failures.push("result.cluster_id is required");
  if (!result.mode) failures.push("result.mode is required");
  const actions = Array.isArray(result.actions) ? result.actions : [];
  if (!plan && actions.length > 0) {
    failures.push("missing cluster-plan.json preflight artifact");
  } else if (!plan) {
    warnings.push("missing cluster-plan.json preflight artifact for actionless result");
  }
  if (result.status === "executed") {
    failures.push("worker result status must not be executed; only the applicator records execution");
  }

  const closeActions = [];
  const fixActions = [];
  const mergeActions = [];
  const hasFixPath = actions.some((action) => FIX_ACTIONS.has(String(action.action ?? "")) && ["planned", "blocked"].includes(action.status));
  for (const action of actions) {
    const name = String(action.action ?? "");
    actionCounts[name] = (actionCounts[name] ?? 0) + 1;
    const target = String(action.target ?? "");
    const item = itemByRef.get(target);
    const clusterScopedFixAction = isClusterScopedFixAction(action, result);

    if (!target) failures.push("action missing target");
    if (!name) failures.push(`${target || "unknown target"} missing action`);
    if (!action.idempotency_key) failures.push(`${target} missing idempotency_key`);
    if (!Array.isArray(action.evidence) || action.evidence.length === 0) {
      failures.push(`${target} missing evidence`);
    }
    if (!clusterScopedFixAction && !action.target_kind) failures.push(`${target} missing target_kind`);
    if (!clusterScopedFixAction && !action.target_updated_at) failures.push(`${target} missing target_updated_at`);
    if (!clusterScopedFixAction && item && action.target_updated_at && item.updated_at !== action.target_updated_at) {
      failures.push(`${target} target_updated_at does not match preflight`);
    }
    if (evidenceHasExternalUrl(action.evidence ?? [])) {
      failures.push(`${target} evidence contains non-GitHub external URL`);
    }
    if (item?.security_sensitive && MUTATING_ACTIONS.has(name)) {
      failures.push(`${target} mutating action targets security-sensitive item`);
    }
    if (ROUTE_SECURITY_ACTIONS.has(name)) {
      if (action.classification !== "security_sensitive") {
        failures.push(`${target} route_security action must use security_sensitive classification`);
      }
      if (action.status !== "skipped" && action.status !== "planned") {
        failures.push(`${target} route_security action status must be skipped or planned`);
      }
      if (item && item.security_sensitive !== true) {
        warnings.push(`${target} route_security target was not marked security_sensitive in preflight`);
      }
    }
    if (name === "needs_human" && /security-sensitive|security boundary|central .*security|security triage/i.test(String(action.reason ?? ""))) {
      failures.push(`${target} security routing must use route_security instead of needs_human`);
    }

    if (action.status === "executed") {
      failures.push(`${target} action status must not be executed; only the applicator records execution`);
    }
    const blockedMergeCandidate = MERGE_ACTIONS.has(name) && action.status === "blocked";
    if (result.mode === "plan" && MUTATING_ACTIONS.has(name) && action.status !== "planned" && !blockedMergeCandidate) {
      failures.push(`${target} mutating recommendation is not planned-only`);
    }
    if (CLOSE_ACTIONS.has(name)) {
      closeActions.push(action);
      if (!item) failures.push(`${target} close action missing preflight item`);
      if (item && item.state !== "open") failures.push(`${target} close action targets ${item.state} item`);
      if (action.status !== "planned" && !isFixFirstBlockedCloseAction(action, hasFixPath)) {
        failures.push(`${target} close action status must be planned or fix-first blocked`);
      }
      const canonicalRef = normalizeRef(action.canonical ?? action.duplicate_of);
      const candidateRef = normalizeRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
      if (name === "close_low_signal") {
        if (action.classification !== "low_signal") {
          failures.push(`${target} low-signal close action must use low_signal classification`);
        }
        if (action.target_kind !== "pull_request") {
          failures.push(`${target} low-signal close action must target a pull request`);
        }
      } else if (!canonicalRef && !candidateRef) {
        failures.push(`${target} close action missing canonical/duplicate/candidate target`);
      }
      if (
        item?.kind === "pull_request" &&
        ["close_superseded", "close_fixed_by_candidate", "post_merge_close"].includes(name)
      ) {
        const comment = String(action.comment ?? "");
        if (!/\bcredit|attribut|thanks @|thank you @|source PR\b/i.test(comment)) {
          failures.push(`${target} PR closeout comment must preserve contributor credit`);
        }
      }
      if (canonicalRef) {
        const canonicalItem = itemByRef.get(canonicalRef);
        if (!canonicalItem) failures.push(`${target} close action canonical ${canonicalRef} missing preflight item`);
        if (canonicalRef === normalizeRef(target)) failures.push(`${target} close action canonical points at itself`);
      }
      if (candidateRef) {
        const candidateItem = itemByRef.get(candidateRef);
        if (!candidateItem) failures.push(`${target} close action candidate ${candidateRef} missing preflight item`);
        if (candidateRef === normalizeRef(target)) failures.push(`${target} close action candidate points at itself`);
      }
    }
    if (FIX_ACTIONS.has(name)) {
      fixActions.push(action);
    }
    if (MERGE_ACTIONS.has(name)) {
      mergeActions.push(action);
      if (!item) failures.push(`${target} merge action missing preflight item`);
      if (item && item.state !== "open") failures.push(`${target} merge action targets ${item.state} item`);
      if (item && item.kind !== "pull_request") failures.push(`${target} merge action target is ${item.kind}`);
      if (action.target_kind !== "pull_request") failures.push(`${target} merge action requires pull_request target_kind`);
      if (action.status !== "planned" && action.status !== "blocked") {
        failures.push(`${target} merge action status must be planned or blocked`);
      }
    }
  }

  if (fixActions.length > 0) {
    validateFixArtifact(result.fix_artifact, failures);
  }
  const plannedMergeActions = mergeActions.filter((action) => action.status === "planned");
  if (plannedMergeActions.length > 0) {
    validateMergePreflight(result.merge_preflight, plannedMergeActions, failures);
  }

  if (result.canonical) {
    const canonicalRef = normalizeRef(result.canonical);
    const canonical = itemByRef.get(canonicalRef);
    if (!canonical) warnings.push(`canonical ${result.canonical} was not in preflight`);
    if (canonical && canonical.state !== "open") {
      const usedByCloseAction = closeActions.some((action) => {
        const actionCanonical = normalizeRef(action.canonical ?? action.duplicate_of);
        const actionCandidate = normalizeRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
        return actionCanonical === canonicalRef || actionCandidate === canonicalRef;
      });
      if (usedByCloseAction) {
        failures.push(`canonical ${result.canonical} is ${canonical.state}`);
      } else {
        warnings.push(`canonical ${result.canonical} is ${canonical.state}; treating as historical evidence only`);
      }
    }
  }
  if ((result.needs_human ?? []).length > 0 && result.status === "planned") {
    warnings.push("planned result includes needs_human entries");
  }

  return {
    result: relative(resultPath),
    status: failures.length > 0 ? "failed" : "passed",
    mode: result.mode,
    cluster_id: result.cluster_id,
    result_status: result.status,
    actions: actions.length,
    action_counts: actionCounts,
    failures,
    warnings,
  };
}

function isClusterScopedFixAction(action, result) {
  const name = String(action.action ?? "");
  const target = String(action.target ?? "");
  return FIX_ACTIONS.has(name) && (target === `cluster:${result.cluster_id}` || target === result.cluster_id);
}

function isFixFirstBlockedCloseAction(action, hasClusterFixPath) {
  if (action.status !== "blocked") return false;
  if (!hasClusterFixPath) return false;
  const text = [action.reason, action.comment, ...(action.evidence ?? [])].join("\n");
  return /fix[- ]first|requires? a fix|requires? ProjectClownfish fix|fix PR|fix path|canonical fix path|merged canonical fix|replacement PR|replacement fix|pending .*fix|after .*fix .*lands?|open_fix_pr|build_fix_artifact/i.test(text);
}

function validateMergePreflight(mergePreflight, mergeActions, failures) {
  if (!Array.isArray(mergePreflight)) {
    failures.push("merge action requires merge_preflight");
    return;
  }
  const preflightByTarget = new Map();
  for (const item of mergePreflight) {
    const target = normalizeRef(item?.target);
    if (target) preflightByTarget.set(target, item);
  }
  for (const action of mergeActions) {
    const target = normalizeRef(action.target);
    const preflight = preflightByTarget.get(target);
    if (!preflight) {
      failures.push(`${target} merge action missing merge_preflight entry`);
      continue;
    }
    if (preflight.security_status !== "cleared") {
      failures.push(`${target} merge_preflight.security_status must be cleared`);
    }
    if (preflight.comments_status !== "resolved") {
      failures.push(`${target} merge_preflight.comments_status must be resolved`);
    }
    if (preflight.bot_comments_status !== "resolved") {
      failures.push(`${target} merge_preflight.bot_comments_status must be resolved`);
    }
    for (const key of [
      "security_evidence",
      "comments_evidence",
      "bot_comments_evidence",
      "validation_commands",
    ]) {
      if (!Array.isArray(preflight[key]) || preflight[key].length === 0) {
        failures.push(`${target} merge_preflight.${key} must be a non-empty list`);
      }
    }
    const codexReview = preflight.codex_review;
    if (!codexReview || typeof codexReview !== "object") {
      failures.push(`${target} merge_preflight.codex_review is required`);
      continue;
    }
    if (codexReview.command !== "/review") {
      failures.push(`${target} merge_preflight.codex_review.command must be /review`);
    }
    if (!["passed", "clean"].includes(codexReview.status)) {
      failures.push(`${target} merge_preflight.codex_review.status must be passed or clean`);
    }
    if (codexReview.findings_addressed !== true) {
      failures.push(`${target} merge_preflight.codex_review.findings_addressed must be true`);
    }
    if (!Array.isArray(codexReview.evidence) || codexReview.evidence.length === 0) {
      failures.push(`${target} merge_preflight.codex_review.evidence must be a non-empty list`);
    } else if (!codexReview.evidence.some((entry) => /\/review|codex review/i.test(String(entry)))) {
      failures.push(`${target} merge_preflight.codex_review.evidence must mention /review or Codex review`);
    }
  }
}

function validateFixArtifact(fixArtifact, failures) {
  if (!fixArtifact || typeof fixArtifact !== "object") {
    failures.push("fix action requires fix_artifact");
    return;
  }
  for (const key of ["summary", "pr_title", "pr_body"]) {
    if (typeof fixArtifact[key] !== "string" || fixArtifact[key].trim() === "") {
      failures.push(`fix_artifact.${key} is required`);
    }
  }
  for (const key of ["affected_surfaces", "likely_files", "linked_refs", "validation_commands", "credit_notes"]) {
    if (!Array.isArray(fixArtifact[key]) || fixArtifact[key].length === 0) {
      failures.push(`fix_artifact.${key} must be a non-empty list`);
    }
  }
  if (typeof fixArtifact.changelog_required !== "boolean") {
    failures.push("fix_artifact.changelog_required must be boolean");
  }
  if (!FIX_REPAIR_STRATEGIES.has(fixArtifact.repair_strategy)) {
    failures.push("fix_artifact.repair_strategy is required");
  }
  if (fixArtifact.repair_strategy === "replace_uneditable_branch") {
    if (!Array.isArray(fixArtifact.source_prs) || fixArtifact.source_prs.length === 0) {
      failures.push("replacement fix artifact must list source_prs");
    }
    if (!Array.isArray(fixArtifact.branch_update_blockers) || fixArtifact.branch_update_blockers.length === 0) {
      failures.push("replacement fix artifact must list branch_update_blockers");
    }
    const creditText = [
      ...(fixArtifact.credit_notes ?? []),
      fixArtifact.pr_body ?? "",
      ...(fixArtifact.source_prs ?? []),
    ].join("\n");
    if (!/https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/pull\/\d+/.test(creditText)) {
      failures.push("replacement fix artifact credit must include original PR URL");
    }
  }
}

function readSiblingJson(runDir, filename) {
  const direct = path.join(runDir, filename);
  if (fs.existsSync(direct)) return JSON.parse(fs.readFileSync(direct, "utf8"));
  for (const entry of fs.readdirSync(runDir, { recursive: true })) {
    const candidate = path.join(runDir, String(entry));
    if (path.basename(candidate) === filename && fs.statSync(candidate).isFile()) {
      return JSON.parse(fs.readFileSync(candidate, "utf8"));
    }
  }
  return null;
}

function buildItemMap(plan, repo) {
  const items = plan?.item_matrix ?? plan?.items ?? [];
  const out = new Map();
  for (const item of items) {
    const ref = normalizeRef(item.ref ?? item.target ?? item.url);
    if (!ref) continue;
    out.set(ref, item);
    out.set(`https://github.com/${repo}/issues/${ref.slice(1)}`, item);
    out.set(`https://github.com/${repo}/pull/${ref.slice(1)}`, item);
  }
  return out;
}

function evidenceHasExternalUrl(evidence) {
  return evidence.some((item) => {
    const text = typeof item === "string" ? item : JSON.stringify(item);
    const urls = text.match(/https?:\/\/[^\s)\]"']+/g) ?? [];
    return urls.some((url) => !url.includes("github.com/"));
  });
}

function normalizeRef(ref) {
  const match = String(ref).match(/(?:issues|pull)\/(\d+)\b|^#?(\d+)$/);
  if (!match) return "";
  return `#${match[1] ?? match[2]}`;
}

function relative(filePath) {
  const rel = path.relative(repoRoot(), filePath);
  return rel.startsWith("..") ? filePath : rel;
}
