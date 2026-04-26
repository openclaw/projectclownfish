---
repo: openclaw/openclaw
cluster_id: ghcrawl-156910-autonomous-smoke
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
  - "#67485"
candidates:
  - "#63719"
  - "#66908"
  - "#67485"
cluster_refs:
  - "#63719"
  - "#66908"
  - "#67485"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #67485 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156910 on 2026-04-26."
---

# GHCrawl Cluster 156910

Generated from local ghcrawl run cluster 156910 for `openclaw/openclaw`.

Display title:

> openclaw update loses bin symlink in nvm environment

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #67485, currently open in local store
- latest member update: 2026-04-24T18:56:20.916Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63719 openclaw update can leave the global openclaw bin missing after npm global update
- #66908 npm link gets broken after openclaw update via Control UI
- #67485 openclaw update loses bin symlink in nvm environment
