---
repo: openclaw/openclaw
cluster_id: gitcrawl-3269-dedupe-only-20260429-remote
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
  - "#57523"
candidates:
  - "#58358"
cluster_refs:
  - "#39454"
  - "#57523"
  - "#57753"
  - "#58358"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57523 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3269 on 2026-04-29."
---

# Gitcrawl Cluster 3269

Generated from local gitcrawl run cluster 3269 for `openclaw/openclaw`.

Display title:

> [Bug]: Kimi k2p5 (anthropic-messages): "Unexpected event order: message_start before message_stop" — chat unusable

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #57523, currently closed in local store
- latest member update: 2026-04-28T05:49:58.191082697Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39454 fix: Anthropic SDK crashes when proxy/relay retransmits SSE stream — patch & workaround
- #57523 [Bug]: Kimi k2p5 (anthropic-messages): "Unexpected event order: message_start before message_stop" — chat unusable
- #57753 [Bug]: anthropic-messages SSE state machine fails to reset between tool-use loop iterations — "Unexpected event order, got message_start before receiving message_stop"

Open candidates:

- #58358 [Bug]: OpenClaw mishandles message_stop for KimiCodingPlan Anthropic format (not present in v2026.3.1)
