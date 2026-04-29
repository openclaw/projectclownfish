---
repo: openclaw/openclaw
cluster_id: gitcrawl-1756-dedupe-only-20260429-remote
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#66192"
candidates:
  - "#40472"
  - "#49310"
  - "#59582"
  - "#66289"
  - "#67302"
  - "#69026"
cluster_refs:
  - "#40472"
  - "#49310"
  - "#52745"
  - "#59582"
  - "#62602"
  - "#64862"
  - "#66192"
  - "#66289"
  - "#67302"
  - "#69026"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66192 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1756 on 2026-04-29."
---

# Gitcrawl Cluster 1756

Generated from local gitcrawl run cluster 1756 for `openclaw/openclaw`.

Display title:

> fix(tui): reset activity after late terminal events

Cluster shape from gitcrawl:

- total members: 10
- issues: 0
- pull requests: 10
- open candidates in local store: 6
- representative: #66192, currently closed in local store
- latest member update: 2026-04-28T22:51:07.603633881Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52745 fix(tui): clear stuck streaming when final has no active run in flight
- #62602 fix:(tui) reset stale streaming state after event gaps
- #64862 fix(tui): recover activity status when no runs are in flight
- #66192 fix(tui): reset activity after late terminal events

Open candidates:

- #40472 fix(tui): refresh on external session reset and clear stale run state
- #49310 fix: keep tui busy during follow-up waits
- #59582 fix(tui): keep active run alive across fallback error events
- #66289 fix(tui): resolve streaming status stuck indefinitely after run completes
- #67302 fix(tui): always reset status to idle when all streaming runs finalize regardless of event ordering
- #69026 fix(tui): raise streaming watchdog threshold to 120s and suppress false-positive warning
