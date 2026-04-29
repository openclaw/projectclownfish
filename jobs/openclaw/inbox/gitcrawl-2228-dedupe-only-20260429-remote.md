---
repo: openclaw/openclaw
cluster_id: gitcrawl-2228-dedupe-only-20260429-remote
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
  - "#46257"
candidates:
  - "#43383"
  - "#58351"
cluster_refs:
  - "#43383"
  - "#46257"
  - "#48011"
  - "#58351"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46257 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2228 on 2026-04-29."
---

# Gitcrawl Cluster 2228

Generated from local gitcrawl run cluster 2228 for `openclaw/openclaw`.

Display title:

> Sandboxed sessions receive inaccessible host skill paths in <available_skills> (read fails with ‘Path escapes sandbox root’)

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 2
- representative: #46257, currently closed in local store
- latest member update: 2026-04-28T07:04:52.52337726Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46257 Sandboxed sessions receive inaccessible host skill paths in <available_skills> (read fails with ‘Path escapes sandbox root’)
- #48011 [Bug]: Non-workspace skills are inaccessible to the agent when sandbox is in workspaceAccess: "rw" mode

Open candidates:

- #43383 [Bug]: Sandboxed non-main sessions expose host skill paths that are unreadable inside the sandbox
- #58351 workspaceOnly: true blocks agent from reading skill files
