---
repo: openclaw/openclaw
cluster_id: ghcrawl-156673-autonomous-smoke
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
  - "#48234"
candidates:
  - "#48234"
  - "#65283"
  - "#65431"
  - "#66625"
  - "#69648"
cluster_refs:
  - "#48234"
  - "#65283"
  - "#65431"
  - "#66625"
  - "#69648"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48234 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156673 on 2026-04-26."
---

# GHCrawl Cluster 156673

Generated from local ghcrawl run cluster 156673 for `openclaw/openclaw`.

Display title:

> Bug: Image tool with MiniMax vision model not working

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #48234, currently open in local store
- latest member update: 2026-04-24T18:56:25.830Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48234 Bug: Image tool with MiniMax vision model not working
- #65283 image tool fails with MiniMax Coding Plan API key: Model does not support images
- #65431 [Bug] image tool: Model does not support images despite input: ["text", "image"] in config
- #66625 image tool fails with Minimax VLM model
- #69648 [Bug] MiniMax-M2.7 image understanding not working - isMinimaxVlmModel hardcoded to only accept MiniMax-VL-01
