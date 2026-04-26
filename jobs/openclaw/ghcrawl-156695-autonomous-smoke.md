---
repo: openclaw/openclaw
cluster_id: ghcrawl-156695-autonomous-smoke
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
  - "#45800"
candidates:
  - "#27065"
  - "#45800"
  - "#54499"
  - "#56611"
cluster_refs:
  - "#27065"
  - "#45800"
  - "#54499"
  - "#56611"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45800 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156695 on 2026-04-26."
---

# GHCrawl Cluster 156695

Generated from local ghcrawl run cluster 156695 for `openclaw/openclaw`.

Display title:

> [Feature Request] Prevent accidental /new session reset — add confirmation dialog or relocate "+" button

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #45800, currently open in local store
- latest member update: 2026-04-24T18:56:33.151Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #27065 [Feature]: Confirmation dialog for "New session" button in Control UI
- #45800 [Feature Request] Prevent accidental /new session reset — add confirmation dialog or relocate "+" button
- #54499 WebChat mobile UX: + (New Session) button too close to Send causes accidental session resets
- #56611 Control UI: + button easily confused with attachment — add option to hide or reposition
