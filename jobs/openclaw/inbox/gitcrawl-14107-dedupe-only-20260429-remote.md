---
repo: openclaw/openclaw
cluster_id: gitcrawl-14107-dedupe-only-20260429-remote
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
  - "#63272"
candidates:
  - "#63272"
cluster_refs:
  - "#14264"
  - "#63272"
  - "#69299"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63272 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14107 on 2026-04-29."
---

# Gitcrawl Cluster 14107

Generated from local gitcrawl run cluster 14107 for `openclaw/openclaw`.

Display title:

> feat(cli): `skills uninstall` design proposal + prior art reconciliation

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #63272, currently open in local store
- latest member update: 2026-04-28T22:51:07.282490738Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #14264 [Feature Request] Add clawhub uninstall command for clean skill removal
- #69299 [Feature]: Register `skills.uninstall` RPC (mirror of `skills.install`)

Open candidates:

- #63272 feat(cli): `skills uninstall` design proposal + prior art reconciliation
