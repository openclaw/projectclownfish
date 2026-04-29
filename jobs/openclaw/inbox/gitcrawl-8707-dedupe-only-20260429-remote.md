---
repo: openclaw/openclaw
cluster_id: gitcrawl-8707-dedupe-only-20260429-remote
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
  - "#54656"
candidates:
  - "#54564"
  - "#54656"
  - "#54671"
  - "#54677"
  - "#60773"
cluster_refs:
  - "#37678"
  - "#54564"
  - "#54656"
  - "#54671"
  - "#54677"
  - "#54954"
  - "#60773"
  - "#61331"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54656 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 8707 on 2026-04-29."
---

# Gitcrawl Cluster 8707

Generated from local gitcrawl run cluster 8707 for `openclaw/openclaw`.

Display title:

> Docs: clarify Hetzner VPS access flow

Cluster shape from gitcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 5
- representative: #54656, currently open in local store
- latest member update: 2026-04-28T22:51:07.340083028Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37678 docs(fly): clarify gateway token setup and pairing flow
- #54954 docs: add AllowTcpForwarding requirement to Hetzner SSH tunnel guide
- #61331 docs(zh-CN): encode Control UI gatewayUrl examples

Open candidates:

- #54564 docs: add AllowTcpForwarding prerequisite to Hetzner SSH tunnel step
- #54656 Docs: clarify Hetzner VPS access flow
- #54671 Docs: clarify Docker pairing in Control UI
- #54677 Docs: warn about Hetzner compose port merges
- #60773 docs: encode Control UI gatewayUrl examples
