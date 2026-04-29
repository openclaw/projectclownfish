---
repo: openclaw/openclaw
cluster_id: gitcrawl-238854-dedupe-only-20260429c
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
  - "#60886"
candidates:
  - "#60542"
  - "#60886"
  - "#66522"
  - "#73160"
cluster_refs:
  - "#60542"
  - "#60886"
  - "#66522"
  - "#73160"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60886 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238854 on 2026-04-29."
---

# Gitcrawl Cluster 238854

Generated from local gitcrawl run cluster 238854 for `openclaw/openclaw`.

Display title:

> [Bug] sessions.json sessionId and sessionFile point to different transcript files causing history mismatch

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #60886, currently open in local store
- latest member update: 2026-04-28T10:53:11.698Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #60542 BUG: Persisted main session row can become stale and diverge from transcript, wedging new input
- #60886 [Bug] sessions.json sessionId and sessionFile point to different transcript files causing history mismatch
- #66522 [Bug] Session index (sessions.json) rebuilds on Gateway restart, causing complete loss of session history without warning
- #73160 Bug: Session restart recovery fails silently on timeout, causing permanent context loss
