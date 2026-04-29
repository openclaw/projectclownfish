---
repo: openclaw/openclaw
cluster_id: gitcrawl-8791-dedupe-only-20260429-remote
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
  - "#54909"
candidates:
  - "#40155"
  - "#54909"
  - "#68429"
cluster_refs:
  - "#40155"
  - "#54909"
  - "#63282"
  - "#68429"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54909 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 8791 on 2026-04-29."
---

# Gitcrawl Cluster 8791

Generated from local gitcrawl run cluster 8791 for `openclaw/openclaw`.

Display title:

> [Bug]: Telegram inline button callback_query not routed to agent — hallucination instead of tool call

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 3
- representative: #54909, currently open in local store
- latest member update: 2026-04-28T22:51:06.869780446Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #63282 Telegram: inline button taps arrive as text messages instead of callback_query events

Open candidates:

- #40155 [Bug]: Telegram channel generates different results to WebUI chat
- #54909 [Bug]: Telegram inline button callback_query not routed to agent — hallucination instead of tool call
- #68429 [Bug]: Telegram inline-button first callback can run before session bootstrap context is loaded
