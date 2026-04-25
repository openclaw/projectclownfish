---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143801-autonomous-smoke"
mode: "autonomous"
run_id: "24943078008"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24943078008"
head_sha: "3160a4e666957ca2e0f65fdc0a4d41ba982f99b1"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-25T23:44:56.679Z"
canonical: "https://github.com/openclaw/openclaw/pull/50020"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/50020"
actions_total: 30
apply_executed: 0
apply_blocked: 0
apply_skipped: 30
needs_human_count: 5
---

# ghcrawl-143801-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24943078008](https://github.com/openclaw/projectclownfish/actions/runs/24943078008)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/50020

## Summary

Historical representative #50020 is closed, and the hydrated refs do not reduce to a single safe open replacement. The live preflight snapshot is over-clustered across Telegram delivery/threading, session/transcript lifecycle, payload.model resolution, heartbeat mirror routing, and unrelated outliers, so no high-confidence close/comment/label actions are safe.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 30 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 30 |
| Needs human | 5 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40571 | needs_human | skipped | independent | action status is blocked |
| #43469 | needs_human | skipped | independent | action status is blocked |
| #43695 | keep_closed | skipped | related | action status is skipped |
| #43767 | keep_closed | skipped | related | action status is skipped |
| #43808 | needs_human | skipped | related | action status is blocked |
| #44240 | keep_closed | skipped | related | action status is skipped |
| #44270 | needs_human | skipped | needs_human | action status is blocked |
| #44325 | needs_human | skipped | superseded | action status is blocked |
| #44351 | needs_human | skipped | superseded | action status is blocked |
| #44412 | needs_human | skipped | needs_human | action status is blocked |
| #49572 | keep_closed | skipped | related | action status is skipped |
| #49704 | needs_human | skipped | related | action status is blocked |
| #50020 | keep_closed | skipped | canonical | action status is skipped |
| #56572 | keep_closed | skipped | related | action status is skipped |
| #56624 | keep_independent | skipped | independent | action is not an auto-closure action |
| #57136 | keep_closed | skipped | related | action status is skipped |
| #57367 | keep_closed | skipped | related | action status is skipped |
| #57470 | keep_independent | skipped | independent | action is not an auto-closure action |
| #58304 | keep_closed | skipped | related | action status is skipped |
| #58318 | keep_closed | skipped | related | action status is skipped |
| #58893 | needs_human | skipped | independent | action status is blocked |
| #59020 | needs_human | skipped | related | action status is blocked |
| #59069 | keep_related | skipped | related | action is not an auto-closure action |
| #61291 | keep_closed | skipped | related | action status is skipped |
| #64708 | needs_human | skipped | related | action status is blocked |
| #65176 | needs_human | skipped | independent | action status is blocked |
| #65179 | needs_human | skipped | superseded | action status is blocked |
| #67398 | keep_independent | skipped | independent | action is not an auto-closure action |
| #68555 | needs_human | skipped | related | action status is blocked |
| #70619 | keep_closed | skipped | related | action status is skipped |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40571 | needs_human | blocked | independent | Independent bug and not safe for autonomous triage while live checks are failing. |
| #43469 | needs_human | blocked | independent | Out-of-cluster linked PR with failing checks; leave for human split, not dedupe. |
| #43695 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #43767 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #43808 | needs_human | blocked | related | Related Telegram topic-delivery subfamily, but failing checks block autonomous canonical or close decisions. |
| #44240 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #44270 | needs_human | blocked | needs_human | Overlapping candidate PRs exist, but no merge-ready canonical is safe for autonomous routing. |
| #44325 | needs_human | blocked | superseded | Likely superseded by the later follow-up chain ending at #44412, but failing checks on the family make contributor-safe closure a human task. |
| #44351 | needs_human | blocked | superseded | Likely superseded by #44412, but live failures in the PR family make contributor-safe closure a human task. |
| #44412 | needs_human | blocked | needs_human | Best current candidate in the #44270 subfamily, but not safe to treat as canonical while live checks fail. |
| #49572 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #49704 | needs_human | blocked | related | Related Telegram delivery family, but a different root cause from #43808/#59069/#64708 and blocked by failing CI. |
| #50020 | keep_closed | skipped | canonical | Historical representative only; already closed. |
| #56572 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #56624 | keep_independent | planned | independent | Separate bug with passing checks; keep open as an independent fix path, not a dedupe target for #50020. |
| #57136 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #57367 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #57470 | keep_independent | planned | independent | Clean independent fix in the model-override subfamily; keep open, but it does not replace #50020 as cluster-wide canonical. |
| #58304 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #58318 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #58893 | needs_human | blocked | independent | Independent draft behavior change with incomplete CI; leave for human triage, not autonomous dedupe. |
| #59020 | needs_human | blocked | related | Related session/transcript family, but not the same root cause as #50020 and blocked by failing checks. |
| #59069 | keep_related | planned | related | Related Telegram delivery subfamily with passing checks, but distinct from #43808 delivery.threadId plumbing and from the #44270 DM-thread inference line. |
| #61291 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #64708 | needs_human | blocked | related | Related Telegram delivery subfamily, but failing checks block autonomous routing or closure. |
| #65176 | needs_human | blocked | independent | Independent stacked-branch outlier with failing checks; keep out of autonomous dedupe. |
| #65179 | needs_human | blocked | superseded | Likely superseded by #57470, but the stacked unrelated change and failing checks make contributor-safe closure a human task. |
| #67398 | keep_independent | planned | independent | Passing independent heartbeat fix; keep open as its own path, not as a canonical replacement for #50020. |
| #68555 | needs_human | blocked | related | Related model-selection subfamily, but it conflicts with #57470's allow-explicit-override behavior and needs human product choice. |
| #70619 | keep_closed | skipped | related | Already closed; historical evidence only. |

## Needs Human

- No single open canonical replaces closed representative #50020. The hydrated refs split into at least five root-cause families: Telegram delivery/threading (#43808/#44270/#44325/#44351/#44412/#49704/#59069/#64708), session/transcript lifecycle (#56624/#59020 plus closed #50020/#58318/#61291/#70619), payload.model resolution (#57470/#65179/#68555), heartbeat isolated-session routing (#67398), and outliers (#40571/#43469/#58893/#65176).
- #44270 cannot be auto-routed: #44325 and #44351 are likely superseded by #44412, but #44412 still has failing protocol and secrets checks in the live preflight state.
- The payload.model line cannot be auto-closed: #65179 looks superseded by the smaller passing #57470, but it carries unrelated #65176 SSRF changes and failing core/extension/check jobs.
- Several open refs still have failing or insufficient live validation (#40571, #43469, #43808, #49704, #58893, #59020, #64708, #65176, #65179, #68555), so autonomous close/comment/label actions would violate the failing_checks guard.
- Closed context refs (#50020, #57136, #58318, #61291 and other closed issues) are evidence only. The provided artifact does not prove a merged-on-main cluster-wide canonical replacement.
