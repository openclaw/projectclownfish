---
repo: openclaw/openclaw
cluster_id: gitcrawl-1510-dedupe-only-20260429-remote
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
  - "#35119"
candidates:
  - "#35119"
cluster_refs:
  - "#35119"
  - "#43591"
  - "#45234"
  - "#49811"
  - "#58442"
  - "#59784"
  - "#70120"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #35119 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1510 on 2026-04-29."
---

# Gitcrawl Cluster 1510

Generated from local gitcrawl run cluster 1510 for `openclaw/openclaw`.

Display title:

> Bug: HTTP 500 (server_error) from Codex does not trigger model fallback chain

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 1
- representative: #35119, currently open in local store
- latest member update: 2026-04-28T22:51:06.949242473Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43591 Codex API server_error (500) not recognized by model failover classifier
- #45234 Agents/failover: raw OpenAI Codex server_error payloads do not trigger fallback
- #49811 [Bug] Rate limit 错误未触发快速 failover，导致 10 分钟超时阻塞
- #58442 [Bug]: Model failover fails to trigger on Coding Plan quota exceeded (429) errors, causing infinite message processing loops
- #59784 [Bug]: Subscription quota limit ("You've hit your limit") classified as billing error, blocks model fallback
- #70120 [Bug] server_is_overloaded / service_unavailable_error does not trigger model fallback, causing repeated retries against the same overloaded endpoint

Open candidates:

- #35119 Bug: HTTP 500 (server_error) from Codex does not trigger model fallback chain
