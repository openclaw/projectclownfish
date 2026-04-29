---
repo: openclaw/openclaw
cluster_id: gitcrawl-13687-dedupe-only-20260429-remote
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
  - "#46300"
candidates:
  - "#46300"
  - "#70682"
cluster_refs:
  - "#41033"
  - "#42353"
  - "#44114"
  - "#46065"
  - "#46300"
  - "#70682"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46300 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13687 on 2026-04-29."
---

# Gitcrawl Cluster 13687

Generated from local gitcrawl run cluster 13687 for `openclaw/openclaw`.

Display title:

> Sandbox: allow writes with workspaceAccess none

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 2
- representative: #46300, currently open in local store
- latest member update: 2026-04-28T11:40:35.803888728Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41033 fix(agents): allow /agent reads in ro sandbox guards
- #42353 fix(sandbox): honor workspaceAccess 'none' for main workspace mount
- #44114 fix(sandbox): preserve file permissions when editing via sandbox file-tool (#44077)
- #46065 fix(sandbox): workspaceAccess 'none' should mount sandbox workspace as read-write

Open candidates:

- #46300 Sandbox: allow writes with workspaceAccess none
- #70682 fix: add workspaceOnly enforcement to read tool (#70573)
