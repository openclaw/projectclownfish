---
repo: openclaw/openclaw
cluster_id: ghcrawl-191461-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#59613"
candidates:
  - "#31331"
  - "#36525"
  - "#37634"
  - "#39497"
  - "#44077"
  - "#57230"
  - "#59063"
  - "#59613"
  - "#65316"
cluster_refs:
  - "#31331"
  - "#36525"
  - "#37634"
  - "#39497"
  - "#44077"
  - "#57230"
  - "#59063"
  - "#59613"
  - "#65316"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #59613 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 191461 on 2026-04-26."
---

# GHCrawl Cluster 191461

Generated from local ghcrawl run cluster 191461 for `openclaw/openclaw`.

Display title:

> [Bug]: sandbox container lack of permission to read write files

Cluster shape from ghcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #59613, currently open in local store
- latest member update: 2026-04-26T21:32:46.195Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #31331 [Bug]: Docker Install + Sandbox can't workspaceAccess at all
- #36525 [Feature]: agents.defaults.sandbox.workspaceAccess语义重构，修改挂载目录。
- #37634 sandbox: keep workspaceAccess none workspaces writable
- #39497 [Bug]: read tool path guard rejects valid /agent/ mount paths in workspaceAccess: "ro" sandboxed sessions
- #44077 [Bug]: Sandbox file-tool edits rewrite workspace files to 0600, causing EACCES on host-side file tools
- #57230 [Bug]: sandboxed agents fail file access and file sending for host absolute workspace paths
- #59063 Sandboxed agents cannot reliably consume downloaded files because host workspace paths are returned instead of /workspace paths
- #59613 [Bug]: sandbox container lack of permission to read write files
- #65316 [Bug]: Sandboxed sessions can expose write-capable file tools even when no effective writable workspace target is available
