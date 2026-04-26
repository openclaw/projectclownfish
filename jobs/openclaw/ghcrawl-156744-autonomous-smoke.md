---
repo: openclaw/openclaw
cluster_id: ghcrawl-156744-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#61667"
candidates:
  - "#61233"
  - "#61647"
  - "#61653"
  - "#61667"
cluster_refs:
  - "#61233"
  - "#61647"
  - "#61653"
  - "#61667"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #61667 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156744 on 2026-04-26."
---

# GHCrawl Cluster 156744

Generated from local ghcrawl run cluster 156744 for `openclaw/openclaw`.

Display title:

> [Bug]: Exact command hashing in `exec` approvals renders `allow-always` ineffective for dynamic commands

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #61667, currently open in local store
- latest member update: 2026-04-24T18:56:23.810Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #61233 Bug: allow-always does not persist — each command triggers new approval
- #61647 [Bug]: exec approval 的命令哈希机制导致 allow-always 无法有效覆盖常用命令
- #61653 [Bug]: # Bug Report: exec approval 的命令哈希机制导致 allow-always 无法有效覆盖常用命令
- #61667 [Bug]: Exact command hashing in `exec` approvals renders `allow-always` ineffective for dynamic commands
