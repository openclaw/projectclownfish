---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1957-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131311478"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131311478"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-29T20:17:21.612Z"
canonical: "https://github.com/openclaw/openclaw/issues/56915"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56915"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72534"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-1957-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131311478](https://github.com/openclaw/clownfish/actions/runs/25131311478)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/56915

## Summary

Closed representative #48266 is obsolete. The current canonical path for the recursive grouped-skill discovery subfamily is open issue #56915 with open PR #72534 as the best hydrated fix candidate, but merge and fix actions are blocked by the job. No high-confidence close/comment/label mutation is safe for the open candidates: the remaining open issues/PRs are related but distinct, broad, still under review, or require maintainer policy judgment. Security-sensitive linked PR #60144 is scoped to central security routing only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48266 | keep_closed | skipped | superseded | Closed context ref; no close/comment/label action is valid. |
| #56915 | keep_canonical | planned | canonical | Best surviving issue for the recursive grouped-skill discovery subfamily. |
| #72534 | keep_canonical | planned | canonical | Canonical PR candidate, but this worker cannot merge and should not close the linked issue before the fix lands. |
| #69663 | keep_related | planned | related | Related alternate PR; keep open rather than close useful contributor work in this dedupe-only pass. |
| #40043 | keep_related | planned | related | Related broad PR with unresolved review findings and unrelated scope. |
| #43735 | keep_related | planned | related | Same skills visibility area, but different root cause and no safe duplicate closeout. |
| #44051 | keep_related | planned | related | Related skills-loader bug, but not a duplicate of #56915 and not safely covered by a viable hydrated PR. |
| #44129 | keep_related | planned | related | Related but broad/unresolved PR for the #44051 subfamily. |
| #49408 | needs_human | planned | needs_human | Maintainer policy judgment is needed: support root-escaping managed-skill symlinks or document extraDirs/ClawHub as the supported path. |
| #38713 | keep_related | planned | related | Related skills UX PR, but independent from the canonical recursive discovery path. |
| #60144 | route_security | planned | security_sensitive | Security-sensitive linked ref must be quarantined to central OpenClaw security handling. |

## Needs Human

- #49408 requires maintainer policy judgment on whether root-escaping symlinked managed skills should be supported or explicitly documented as unsupported in favor of skills.load.extraDirs/ClawHub.
