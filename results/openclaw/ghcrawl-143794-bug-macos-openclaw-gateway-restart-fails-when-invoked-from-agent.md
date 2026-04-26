---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143794-bug-macos-openclaw-gateway-restart-fails-when-invoked-from-agent"
mode: "plan"
run_id: "24931325652"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24931325652"
head_sha: "75185936126d75ebb182e229f44f6cda4edd81cd"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.142Z"
canonical: "#67335"
canonical_issue: "#67335"
canonical_pr: null
actions_total: 15
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# ghcrawl-143794-bug-macos-openclaw-gateway-restart-fails-when-invoked-from-agent

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24931325652](https://github.com/openclaw/projectclownfish/actions/runs/24931325652)

Workflow conclusion: success

Worker result: needs_human

Canonical: #67335

## Summary

The preflight live state no longer matches the job exactly: listed candidates #57104 and #57379 are already closed, the remaining candidates span multiple families, and #64052 is still mixed/ambiguous. For the main macOS launchd-lifecycle outage family, #67335 is the safest open replacement canonical for closed #40306, but execute-mode closure should wait for a split review.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40089 | keep_related | planned | related | Specific restart/update manifestation of the broader macOS LaunchAgent-removal family that #67335 now best represents. |
| #46466 | keep_independent | planned | independent | Install-context eligibility for launchctl bootstrap is separate from the restart/unload regression family in this cluster. |
| #53475 | keep_related | planned | related | Same launchd service-availability family, but the reported on-demand-only respawn behavior is narrower than the broader lifecycle-removal canonical. |
| #53742 | keep_independent | planned | independent | Installer secret persistence is a separate security/configuration family and should not be deduped into the restart/unload canonical. |
| #54861 | keep_related | planned | related | Auto-update rapid-restart outage is a related manifestation of the same macOS LaunchAgent lifecycle instability, but not safe to collapse into a duplicate from the artifact alone. |
| #57104 | needs_human | blocked | needs_human | Live state drift: this candidate is no longer open, so no safe plan action should be inferred from the stale candidate list. |
| #57379 | needs_human | blocked | needs_human | Live state drift: this candidate is no longer open, so no safe plan action should be inferred from the stale candidate list. |
| #58254 | keep_related | planned | related | Related macOS auto-update reproduction with useful version-specific evidence; keep open rather than collapsing it into a duplicate. |
| #60885 | keep_related | planned | related | Specific launchd template/race diagnosis for the same macOS availability failure family tracked by #67335. |
| #61340 | keep_independent | planned | independent | Linux systemd secret persistence is outside the macOS LaunchAgent restart/unload family and should be handled separately. |
| #63562 | keep_related | planned | related | The outage belongs to the same family as #67335, but the report is broader and should stay related rather than be deduped. |
| #64052 | needs_human | blocked | needs_human | Safe dedupe is unclear from the artifact alone because the report mixes multiple failure families and could still contain unique work. |
| #67335 | keep_canonical | planned | canonical | Safest live open replacement for closed #40306 and the best umbrella thread for the remaining macOS launchd lifecycle outage family. |
| #70612 | keep_independent | planned | independent | Later-version secret-embedding regression belongs with installer secret-hygiene follow-up work, not the main restart/unload canonical. |
| #71060 | keep_related | planned | related | Specific stop/restart drain-time path inside the broader lifecycle-removal family; keep as a related diagnostic thread. |

## Needs Human

- Listed candidates #57104 and #57379 are already closed in the preflight live state, so the cluster changed materially after job generation.
- The current candidate set spans multiple families: macOS launchd lifecycle/removal (#67335 and related), installer secret persistence (#53742/#61340/#70612), and headless install context (#46466). Any execute-mode closure plan should be split by family first.
- #64052 mixes launchd lifecycle breakage with embedded-token/install symptoms, so artifact-only evidence is not enough for safe dedupe.
