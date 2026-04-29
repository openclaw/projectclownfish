---
repo: openclaw/openclaw
cluster_id: gitcrawl-6118-dedupe-only-20260429-remote
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
  - "#45759"
candidates:
  - "#45759"
  - "#56096"
cluster_refs:
  - "#39536"
  - "#45759"
  - "#48892"
  - "#55811"
  - "#56096"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45759 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6118 on 2026-04-29."
---

# Gitcrawl Cluster 6118

Generated from local gitcrawl run cluster 6118 for `openclaw/openclaw`.

Display title:

> Telegram typing keepalive loop lacks circuit breaker, causes gateway crash on network failure

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 2
- representative: #45759, currently open in local store
- latest member update: 2026-04-28T17:25:21.535903518Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39536 [Bug]: Gateway lacks circuit breaker — model repetition loop sent 32 duplicate messages to Telegram in 3 minutes
- #48892 Telegram: 421 Misdirected Request not retried, causing silent message drops
- #55811 Telegram sendChatAction retry spam during transient failures

Open candidates:

- #45759 Telegram typing keepalive loop lacks circuit breaker, causes gateway crash on network failure
- #56096 Bug: Telegram sendChatAction infinite retry loop with no backoff
