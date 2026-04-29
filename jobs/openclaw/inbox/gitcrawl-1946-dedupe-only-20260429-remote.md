---
repo: openclaw/openclaw
cluster_id: gitcrawl-1946-dedupe-only-20260429-remote
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
  - "#63994"
candidates:
  - "#46985"
  - "#47377"
  - "#47399"
  - "#54374"
  - "#60063"
  - "#66499"
cluster_refs:
  - "#43861"
  - "#46985"
  - "#47377"
  - "#47399"
  - "#54374"
  - "#59057"
  - "#60063"
  - "#63769"
  - "#63994"
  - "#65457"
  - "#66497"
  - "#66499"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63994 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1946 on 2026-04-29."
---

# Gitcrawl Cluster 1946

Generated from local gitcrawl run cluster 1946 for `openclaw/openclaw`.

Display title:

> fix(gateway): avoid collapsing repeated chars when merging assistant chat deltas

Cluster shape from gitcrawl:

- total members: 12
- issues: 2
- pull requests: 10
- open candidates in local store: 6
- representative: #63994, currently closed in local store
- latest member update: 2026-04-28T15:57:31.251462056Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43861 fix(gateway): stop deduplicating repeated characters in streaming deltas
- #59057 perf(gateway): cap delta overlap search to prevent O(n*m) freeze on repeated chars
- #63769 [Bug] Gateway WebSocket chat stream may drop repeated consecutive characters in merged assistant text
- #63994 fix(gateway): avoid collapsing repeated chars when merging assistant chat deltas
- #65457 fix(gateway): stop dropping repeated markdown tokens in chat stream merge
- #66497 WebSocket delta corruption with inline directive tags

Open candidates:

- #46985 fix(ui): dedupe cumulative streaming text around tool interruptions
- #47377 fix(ui): deduplicate cumulative streaming text in webchat segments
- #47399 fix(ui): deduplicate streaming chat segments to prevent growing duplicate bubbles
- #54374 fix(gateway): avoid duplicate pre-tool text in streaming chat deltas
- #60063 fix(streaming): resolve overlapping chunk duplication in chat stream assembler
- #66499 fix(gateway): WebSocket delta corruption with inline directive tags
