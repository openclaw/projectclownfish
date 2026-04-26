---
repo: openclaw/openclaw
cluster_id: ghcrawl-156779-autonomous-smoke
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
  - "#42410"
candidates:
  - "#40768"
  - "#40782"
  - "#42410"
cluster_refs:
  - "#40768"
  - "#40782"
  - "#42410"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #42410 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156779 on 2026-04-26."
---

# GHCrawl Cluster 156779

Generated from local ghcrawl run cluster 156779 for `openclaw/openclaw`.

Display title:

> [Feature]: Feishu: multi-bot @mention matching fails due to app-scoped open_id — need fallback identity resolution

Cluster shape from ghcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #42410, currently open in local store
- latest member update: 2026-04-25T07:30:09.952Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40768 Feishu: @mention not recognized in group when multiple bots share the same group (open_id app-scoped mismatch)
- #40782 fix(feishu): use union_id as fallback for @mention detection in multi-bot groups
- #42410 [Feature]: Feishu: multi-bot @mention matching fails due to app-scoped open_id — need fallback identity resolution
