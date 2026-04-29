---
repo: openclaw/openclaw
cluster_id: gitcrawl-277-dedupe-only-20260429-remote
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
  - "#37634"
candidates:
  - "#31331"
  - "#36525"
  - "#37634"
  - "#39497"
  - "#44077"
  - "#59613"
  - "#59718"
  - "#65316"
cluster_refs:
  - "#31331"
  - "#36525"
  - "#37634"
  - "#39497"
  - "#44077"
  - "#46026"
  - "#57230"
  - "#59063"
  - "#59613"
  - "#59718"
  - "#65316"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #37634 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 277 on 2026-04-29."
---

# Gitcrawl Cluster 277

Generated from local gitcrawl run cluster 277 for `openclaw/openclaw`.

Display title:

> sandbox: keep workspaceAccess none workspaces writable

Cluster shape from gitcrawl:

- total members: 11
- issues: 11
- pull requests: 0
- open candidates in local store: 8
- representative: #37634, currently open in local store
- latest member update: 2026-04-28T22:51:06.900202734Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46026 Bug: workspaceAccess: "none" mounts sandbox workspace as read-only instead of read-write
- #57230 [Bug]: sandboxed agents fail file access and file sending for host absolute workspace paths
- #59063 Sandboxed agents cannot reliably consume downloaded files because host workspace paths are returned instead of /workspace paths

Open candidates:

- #31331 [Bug]: Docker Install + Sandbox can't workspaceAccess at all
- #36525 [Feature]: agents.defaults.sandbox.workspaceAccess语义重构，修改挂载目录。
- #37634 sandbox: keep workspaceAccess none workspaces writable
- #39497 [Bug]: read tool path guard rejects valid /agent/ mount paths in workspaceAccess: "ro" sandboxed sessions
- #44077 [Bug]: Sandbox file-tool edits rewrite workspace files to 0600, causing EACCES on host-side file tools
- #59613 [Bug]: sandbox container lack of permission to read write files
- #59718 [Feature]: Allow writable custom binds with workspaceAccess: "none" for least-privilege sandbox access
- #65316 [Bug]: Sandboxed sessions can expose write-capable file tools even when no effective writable workspace target is available
