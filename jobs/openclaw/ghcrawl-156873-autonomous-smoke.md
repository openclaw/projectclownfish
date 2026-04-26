---
repo: openclaw/openclaw
cluster_id: ghcrawl-156873-autonomous-smoke
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
  - "#60773"
candidates:
  - "#54671"
  - "#60773"
  - "#61331"
cluster_refs:
  - "#54671"
  - "#60773"
  - "#61331"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #60773 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156873 on 2026-04-26."
---

# GHCrawl Cluster 156873

Generated from local ghcrawl run cluster 156873 for `openclaw/openclaw`.

Display title:

> docs: encode Control UI gatewayUrl examples

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #60773, currently open in local store
- latest member update: 2026-04-24T18:56:27.552Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54671 Docs: clarify Docker pairing in Control UI
- #60773 docs: encode Control UI gatewayUrl examples
- #61331 docs(zh-CN): encode Control UI gatewayUrl examples
