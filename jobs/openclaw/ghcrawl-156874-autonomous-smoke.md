---
repo: openclaw/openclaw
cluster_id: ghcrawl-156874-autonomous-smoke
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
  - "#62832"
candidates:
  - "#55121"
  - "#60047"
  - "#62832"
cluster_refs:
  - "#55121"
  - "#60047"
  - "#62832"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #62832 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156874 on 2026-04-26."
---

# GHCrawl Cluster 156874

Generated from local ghcrawl run cluster 156874 for `openclaw/openclaw`.

Display title:

> fix: add "file" param alias to tool display path resolution

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #62832, currently open in local store
- latest member update: 2026-04-24T18:56:27.383Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55121 fix(tool-display): show file path when args use file alias
- #60047 fix: add 'file' param alias to resolvePathArg for verbose tool summaries
- #62832 fix: add "file" param alias to tool display path resolution
