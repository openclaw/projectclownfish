---
repo: openclaw/openclaw
cluster_id: ghcrawl-156623-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#52126"
candidates:
  - "#41502"
  - "#52126"
  - "#52759"
  - "#56403"
  - "#62775"
  - "#68673"
  - "#70877"
cluster_refs:
  - "#41502"
  - "#52126"
  - "#52759"
  - "#56403"
  - "#62775"
  - "#68673"
  - "#70877"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #52126 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156623 on 2026-04-26."
---

# GHCrawl Cluster 156623

Generated from local ghcrawl run cluster 156623 for `openclaw/openclaw`.

Display title:

> fix: extend loopDetection to cover exec tool calls (#34574)

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #52126, currently open in local store
- latest member update: 2026-04-24T18:56:29.349Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41502 fix: exec tool loop detection bypassed by volatile details fields
- #52126 fix: extend loopDetection to cover exec tool calls (#34574)
- #52759 fix: enable loop detection + graceful read offset (closes #52680)
- #56403 fix: enable tool-call loop detection by default
- #62775 fix: enable loop detection by default, add critical blocking for generic_repeat
- #68673 fix: collapse no-progress update_plan churn (AI-assisted)
- #70877 fix(tools): enable loop detection by default to prevent infinite tool call loops
