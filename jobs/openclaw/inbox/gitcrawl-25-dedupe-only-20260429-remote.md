---
repo: openclaw/openclaw
cluster_id: gitcrawl-25-dedupe-only-20260429-remote
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
  - "#38894"
candidates:
  - "#31172"
  - "#56435"
  - "#59771"
cluster_refs:
  - "#31172"
  - "#38894"
  - "#39085"
  - "#42206"
  - "#42940"
  - "#43862"
  - "#46727"
  - "#47114"
  - "#48382"
  - "#48384"
  - "#50822"
  - "#53534"
  - "#56435"
  - "#59771"
  - "#66148"
  - "#68491"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38894 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 25 on 2026-04-29."
---

# Gitcrawl Cluster 25

Generated from local gitcrawl run cluster 25 for `openclaw/openclaw`.

Display title:

> fix(feishu): prevent duplicate messages when streaming + card mode enabled

Cluster shape from gitcrawl:

- total members: 16
- issues: 0
- pull requests: 16
- open candidates in local store: 3
- representative: #38894, currently closed in local store
- latest member update: 2026-04-27T22:51:34.491447892Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38894 fix(feishu): prevent duplicate messages when streaming + card mode enabled
- #39085 fix(feishu): treat block payloads as snapshots to avoid duplication with tool calls
- #42206 feat(feishu): implement CardKit-based streaming output
- #42940 fix(feishu): prevent streaming card duplication on multi-final replies
- #43862 fix(feishu): prevent merging unrelated final replies in streaming card
- #46727 fix(feishu): prevent duplicate streaming cards via synchronous re-entry guard
- #47114 fix(feishu): prevent duplicate messages by waiting for streaming to start
- #48382 fix(feishu): improve streaming card update performance
- #48384 feat(feishu): add tool/compaction status to streaming cards and prevent duplicate final cards
- #50822 fix(feishu): suppress duplicate final delivers from thinking models
- #53534 fix(feishu): refine streaming card delivery
- #66148 fix(feishu): remove streaming card update throttle to prevent duplicates
- #68491 fix(feishu): prevent duplicate message after streaming card close (#67791)

Open candidates:

- #31172 feat(feishu): add streamingThrottleMs config parameter
- #56435 fix(feishu): update interactive cards in place and avoid duplicate replies
- #59771 Fix Feishu streaming recovery after transient reply errors
