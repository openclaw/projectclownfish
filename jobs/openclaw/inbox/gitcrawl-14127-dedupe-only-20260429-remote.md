---
repo: openclaw/openclaw
cluster_id: gitcrawl-14127-dedupe-only-20260429-remote
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
  - "#57515"
candidates:
  - "#54242"
  - "#54243"
cluster_refs:
  - "#54242"
  - "#54243"
  - "#57515"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57515 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14127 on 2026-04-29."
---

# Gitcrawl Cluster 14127

Generated from local gitcrawl run cluster 14127 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw backup create --verify fails with duplicate entry path when workspace contains symlinks

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #57515, currently closed in local store
- latest member update: 2026-04-28T07:04:52.332664906Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #57515 [Bug]: openclaw backup create --verify fails with duplicate entry path when workspace contains symlinks

Open candidates:

- #54242 [Bug]: backup archives can contain hardlink targets with '..' that fail broad extraction on macOS tar
- #54243 [Bug]: `backup create --no-include-workspace` still includes workspace contents via `~/.openclaw` state asset
