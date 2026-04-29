---
repo: openclaw/openclaw
cluster_id: gitcrawl-238872-dedupe-only-20260429c
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
  - "#40534"
candidates:
  - "#40534"
  - "#73186"
  - "#73363"
cluster_refs:
  - "#40534"
  - "#73186"
  - "#73363"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40534 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238872 on 2026-04-29."
---

# Gitcrawl Cluster 238872

Generated from local gitcrawl run cluster 238872 for `openclaw/openclaw`.

Display title:

> fix(cron): filter reasoning/thinking payloads from announce delivery

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #40534, currently open in local store
- latest member update: 2026-04-28T17:52:27.008Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40534 fix(cron): filter reasoning/thinking payloads from announce delivery
- #73186 [Bug]: Thinking/reasoning content leaks into cron announce delivery for Matrix/Feishu
- #73363 fix(memory-core): keep isReasoning on payloads, skip reasoning blocks in cron-announce summary (#73186)
