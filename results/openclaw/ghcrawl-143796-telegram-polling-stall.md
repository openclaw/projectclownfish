---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143796-telegram-polling-stall"
mode: "plan"
run_id: "24931170014"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24931170014"
head_sha: "e6fc44c785086090541174c0309c5ed6ca780083"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T01:27:46.135Z"
canonical: "#69147"
canonical_issue: "#69147"
canonical_pr: null
actions_total: 15
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143796-telegram-polling-stall

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24931170014](https://github.com/openclaw/projectclownfish/actions/runs/24931170014)

Workflow conclusion: success

Worker result: planned

Canonical: #69147

## Summary

Planned split into six open issue families. #69147 should replace closed representative #63516 for the intermittent Telegram long-poll stall family. Other open canonicals should remain separate: #71066 for transport or fetch-fallback no-poll failures, #67034 for multi-account stall avalanches, #62031 for restart/init silent Telegram failure, #60400 for the 2026.4.2 all-channel empty-table regression, and #58064 for LaunchAgent cross-channel restart failure. No safe auto-closures are recommended because the remaining open reports retain distinct platform, version, supervisor, or scope details.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #69147 | keep_canonical | planned | canonical | Best live replacement for closed representative #63516. |
| #50174 | keep_related | planned | related | Related stall symptom, but Windows-specific transport errors and Discord instability make auto-closure unsafe. |
| #60088 | keep_related | planned | related | Same degraded-reply family, but the first-message-specific reproduction is too narrow for duplicate closure. |
| #67034 | keep_canonical | planned | canonical | Distinct high-concurrency stall family with no broader open issue covering the same synchronized 16-account failure mode. |
| #71066 | keep_canonical | planned | canonical | Best open anchor for current transport or fetch-fallback no-poll failures. |
| #59833 | keep_related | planned | related | Related no-poll transport family, but the WSL2 startup signature differs from #71066. |
| #62031 | keep_canonical | planned | canonical | Best open canonical for Telegram-specific restart or init silent-failure reports spanning v2026.3.24+. |
| #55727 | keep_related | planned | related | Same silent-start family, but early 2026.3.24 behavior should stay open until maintainers confirm full coverage by #62031. |
| #64178 | keep_related | planned | related | Likely same silent-start family, but later-version confirmation makes auto-closure unsafe. |
| #60400 | keep_canonical | planned | canonical | Best open canonical for the 2026.4.2 all-channel startup regression. |
| #60646 | keep_related | planned | related | Same regression family, but Linux plus WhatsApp scope makes auto-closure unsafe. |
| #61195 | keep_related | planned | related | Related 2026.4.2 startup regression, but the fresh-boot angle is worth preserving. |
| #61273 | keep_related | planned | related | Related 2026.4.2 startup regression, but it carries its own platform and version confirmation. |
| #58064 | keep_canonical | planned | canonical | Best open canonical for LaunchAgent-specific cross-channel restart failures. |
| #61712 | keep_related | planned | related | Same LaunchAgent restart family, but narrower Telegram-only report. |

## Needs Human

- none
