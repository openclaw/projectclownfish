---
repo: openclaw/openclaw
cluster_id: ghcrawl-199254-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#56454"
candidates:
  - "#54495"
  - "#56454"
  - "#57223"
  - "#63046"
  - "#63483"
  - "#67929"
cluster_refs:
  - "#54495"
  - "#56454"
  - "#57223"
  - "#63046"
  - "#63483"
  - "#67929"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #56454 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199254 on 2026-04-26."
---

# GHCrawl Cluster 199254

Generated from local ghcrawl run cluster 199254 for `openclaw/openclaw`.

Display title:

> fix: make image tool timeout configurable

Cluster shape from ghcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 6
- representative: #56454, currently open in local store
- latest member update: 2026-04-24T18:56:27.642Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54495 fix(image-gen): make image generation timeout configurable via AgentModelConfig
- #56454 fix: make image tool timeout configurable
- #57223 Agents: resolve image tool relative paths from workspace
- #63046 fix: image tool respects tools.media.image.timeoutSeconds config
- #63483 fix(agents): honor image tool timeoutSeconds #62944
- #67929 fix(image): respect configured timeout on MiniMax VLM fallback path
