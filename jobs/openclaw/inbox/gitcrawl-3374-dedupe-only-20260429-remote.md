---
repo: openclaw/openclaw
cluster_id: gitcrawl-3374-dedupe-only-20260429-remote
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
  - "#62307"
candidates:
  - "#62307"
  - "#66061"
  - "#70813"
cluster_refs:
  - "#62307"
  - "#66061"
  - "#70813"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62307 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3374 on 2026-04-29."
---

# Gitcrawl Cluster 3374

Generated from local gitcrawl run cluster 3374 for `openclaw/openclaw`.

Display title:

> feat(whatsapp): handle message edits and revocations

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #62307, currently open in local store
- latest member update: 2026-04-27T22:51:28.882424804Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62307 feat(whatsapp): handle message edits and revocations
- #66061 fix(whatsapp): narrow inbound dedupe keys
- #70813 feat(whatsapp): support edit and unsend actions
