---
repo: openclaw/openclaw
cluster_id: ghcrawl-156601-autonomous-smoke
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
  - "#43861"
candidates:
  - "#43861"
  - "#46985"
  - "#47377"
  - "#47399"
  - "#54374"
  - "#59057"
  - "#60063"
  - "#63994"
  - "#65457"
cluster_refs:
  - "#43861"
  - "#46985"
  - "#47377"
  - "#47399"
  - "#54374"
  - "#59057"
  - "#60063"
  - "#63994"
  - "#65457"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #43861 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156601 on 2026-04-26."
---

# GHCrawl Cluster 156601

Generated from local ghcrawl run cluster 156601 for `openclaw/openclaw`.

Display title:

> fix(gateway): stop deduplicating repeated characters in streaming deltas

Cluster shape from ghcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 9
- representative: #43861, currently open in local store
- latest member update: 2026-04-25T07:30:11.291Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43861 fix(gateway): stop deduplicating repeated characters in streaming deltas
- #46985 fix(ui): dedupe cumulative streaming text around tool interruptions
- #47377 fix(ui): deduplicate cumulative streaming text in webchat segments
- #47399 fix(ui): deduplicate streaming chat segments to prevent growing duplicate bubbles
- #54374 fix(gateway): avoid duplicate pre-tool text in streaming chat deltas
- #59057 perf(gateway): cap delta overlap search to prevent O(n*m) freeze on repeated chars
- #60063 fix(streaming): resolve overlapping chunk duplication in chat stream assembler
- #63994 fix(gateway): avoid collapsing repeated chars when merging assistant chat deltas
- #65457 fix(gateway): stop dropping repeated markdown tokens in chat stream merge
