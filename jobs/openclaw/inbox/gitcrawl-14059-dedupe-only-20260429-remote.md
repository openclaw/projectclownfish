---
repo: openclaw/openclaw
cluster_id: gitcrawl-14059-dedupe-only-20260429-remote
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
  - "#51292"
candidates:
  - "#25789"
  - "#51287"
  - "#62284"
cluster_refs:
  - "#25789"
  - "#49825"
  - "#51287"
  - "#51292"
  - "#60151"
  - "#62284"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51292 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14059 on 2026-04-29."
---

# Gitcrawl Cluster 14059

Generated from local gitcrawl run cluster 14059 for `openclaw/openclaw`.

Display title:

> feat: configurable exec approval timeout via approvals.timeoutMs

Cluster shape from gitcrawl:

- total members: 6
- issues: 3
- pull requests: 3
- open candidates in local store: 3
- representative: #51292, currently closed in local store
- latest member update: 2026-04-28T22:51:07.472686517Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49825 Discord: make exec approval timeout configurable
- #51292 feat: configurable exec approval timeout via approvals.timeoutMs
- #60151 [Feature] Configurable exec tool timeout upper bound in openclaw.json

Open candidates:

- #25789 tools(exec): add configurable approval timeout
- #51287 [Feature]: Configurable Exec Approval timeout
- #62284 feat: time-bounded exec approvals (approve for N minutes/hours)
