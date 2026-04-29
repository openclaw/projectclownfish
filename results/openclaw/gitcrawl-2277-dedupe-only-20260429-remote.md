---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2277-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132456569"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132456569"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:42:36.686Z"
canonical: "https://github.com/openclaw/openclaw/issues/65177"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65177"
canonical_pr: null
actions_total: 39
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2277-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132456569](https://github.com/openclaw/clownfish/actions/runs/25132456569)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65177

## Summary

Autonomous classification only. The closed representative #56942 is superseded by #65177 for the Feishu botName migration gap, but the hydrated cluster is over-broad, so unrelated open issues are kept in their own subfamilies. No close, merge, or fix-PR action is safe from this run; security-sensitive evidence is scoped to #51623, #51803, and #63101.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 39 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #56942 | keep_closed | skipped | superseded | Closed historical representative; not a mutation target. |
| #65177 | keep_canonical | planned | canonical | Best open canonical for the obsolete #56942 representative family. |
| #39138 | keep_closed | skipped | duplicate | Already closed; no close action allowed. |
| #55231 | keep_closed | skipped | duplicate | Already closed; no close action allowed. |
| #63897 | keep_closed | skipped | duplicate | Already closed; no close action allowed. |
| #55564 | keep_canonical | planned | canonical | Canonical for the stale outbound delivery-recovery replay subfamily. |
| #42157 | keep_related | planned | related | Same restart-loss family as #51620, but Telegram webhook durability is a distinct provider-specific root cause. |
| #42273 | keep_canonical | planned | canonical | Canonical for the backup large-state exclusion/progress subfamily. |
| #44288 | keep_related | planned | related | Useful implementation candidate, but not merge-ready and this job cannot fix or merge. |
| #45573 | keep_canonical | planned | canonical | Distinct Telegram group session persistence bug; not a duplicate of the delivery or Feishu families. |
| #50248 | keep_canonical | planned | canonical | Canonical for the stale sessionFile cleanup-pruning subfamily. |
| #69954 | keep_related | planned | related | Active candidate PR should stay open for author/maintainer revision; merge is blocked by unresolved review and job policy. |
| #50442 | keep_related | planned | related | Related backup reliability issue, but not the same root cause as #42273 large-state exclusion handling. |
| #51620 | keep_canonical | planned | canonical | Canonical for the broad inbound/followup restart-loss subfamily. |
| #51623 | route_security | planned | security_sensitive | Route exact PR to central OpenClaw security handling; do not mutate it in Clownfish. |
| #51803 | route_security | planned | security_sensitive | Route exact PR to central OpenClaw security handling; do not mutate it in Clownfish. |
| #54200 | keep_independent | planned | independent | Config discovery migration bug, not a duplicate of Feishu schema, backup, or session cleanup issues. |
| #54877 | keep_related | planned | related | Related sessions cleanup UX defect, but not the destructive stale sessionFile root cause tracked by #50248. |
| #55792 | keep_related | planned | related | Related to inbound restart reliability but broader product/API work than #51620. |
| #56609 | keep_related | planned | related | Related session-history preservation topic; not a high-confidence duplicate of any hydrated canonical issue. |
| #73471 | keep_related | planned | related | Related to #56609 session-history preservation, but it is a distinct doctor orphan-classification bug. |
| #56827 | keep_independent | planned | independent | Distinct large-session-store diagnostic scalability issue. |
| #57562 | keep_related | planned | related | Related Feishu strict-schema migration failure, but not enough evidence for duplicate closeout to #65177. |
| #57567 | keep_related | planned | related | Related to Feishu botName migration but too broad for duplicate closeout. |
| #58626 | keep_independent | planned | independent | Independent upgrade path-rewrite issue. |
| #61321 | keep_canonical | planned | canonical | Canonical for the same-agent stale-root sessionFile remap subfamily. |
| #61322 | keep_related | planned | related | Useful candidate PR, but not merge-ready and this job cannot repair or merge it. |
| #63101 | route_security | planned | security_sensitive | Route exact item to central OpenClaw security handling due to leaked-secret evidence in the hydrated discussion. |
| #63266 | keep_related | planned | related | Related workspace migration diagnostic issue; not security-sensitive by itself and not a duplicate of stale absolute sessionFile handling. |
| #63572 | keep_related | planned | related | Related workspace migration path-detection issue; not duplicative enough for closure. |
| #63998 | keep_canonical | planned | canonical | Canonical for the transcript crash-loop recovery subfamily. |
| #64707 | keep_related | planned | related | Related Feishu config/status regression, but distinct from #65177. |
| #65353 | keep_related | planned | related | Related to #65358 but includes unique stale CLI path work; do not close one half of the unresolved paired report. |
| #65358 | keep_canonical | planned | canonical | Canonical for the 2026.4.10 memory/session continuity hardening subfamily. |
| #65564 | keep_related | planned | related | Related sessionFile/transcript integrity issue, but not the same cleanup prune path as #50248. |
| #65786 | keep_related | planned | related | Related Feishu strict-schema migration family, but not a duplicate of #65177. |
| #66360 | keep_related | planned | related | Related transcript growth/OOM issue with unique maintenance configuration scope. |
| #67417 | keep_independent | planned | independent | Independent backup archiver race, not the same root cause as large-state exclusion or temp cleanup. |
| #68191 | keep_independent | planned | independent | Independent cron task-registry audit/status bug; do not fold into inbound or delivery restart-loss issues. |

## Needs Human

- none
