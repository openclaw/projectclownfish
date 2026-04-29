---
repo: openclaw/openclaw
cluster_id: gitcrawl-238795-dedupe-only-20260429c
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
  - "#59613"
candidates:
  - "#31331"
  - "#44077"
  - "#57230"
  - "#59063"
  - "#59613"
  - "#65316"
cluster_refs:
  - "#31331"
  - "#44077"
  - "#57230"
  - "#59063"
  - "#59613"
  - "#65316"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59613 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238795 on 2026-04-29."
---

# Gitcrawl Cluster 238795

Generated from local gitcrawl run cluster 238795 for `openclaw/openclaw`.

Display title:

> [Bug]: sandbox container lack of permission to read write files

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #59613, currently open in local store
- latest member update: 2026-04-29T08:43:38.226Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #31331 [Bug]: Docker Install + Sandbox can't workspaceAccess at all
- #44077 [Bug]: Sandbox file-tool edits rewrite workspace files to 0600, causing EACCES on host-side file tools
- #57230 [Bug]: sandboxed agents fail file access and file sending for host absolute workspace paths
- #59063 Sandboxed agents cannot reliably consume downloaded files because host workspace paths are returned instead of /workspace paths
- #59613 [Bug]: sandbox container lack of permission to read write files
- #65316 [Bug]: Sandboxed sessions can expose write-capable file tools even when no effective writable workspace target is available
