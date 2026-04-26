---
repo: openclaw/openclaw
cluster_id: ghcrawl-156865-autonomous-smoke
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
  - "#60677"
candidates:
  - "#52943"
  - "#60274"
  - "#60677"
cluster_refs:
  - "#52943"
  - "#60274"
  - "#60677"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #60677 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156865 on 2026-04-26."
---

# GHCrawl Cluster 156865

Generated from local ghcrawl run cluster 156865 for `openclaw/openclaw`.

Display title:

> fix(imessage): filter tapback reactions in imsg rpc inbound processing

Cluster shape from ghcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #60677, currently open in local store
- latest member update: 2026-04-24T18:56:29.334Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52943 feat(imessage): wire typing indicators via imsg v0.5.0 CLI
- #60274 [Bug]: iMessage plugin (imsg rpc) does not filter tapback reactions — treated as regular messages
- #60677 fix(imessage): filter tapback reactions in imsg rpc inbound processing
