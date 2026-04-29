---
repo: openclaw/openclaw
cluster_id: gitcrawl-14015-dedupe-only-20260429-remote
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
  - "#55886"
candidates:
  - "#40067"
  - "#42962"
  - "#48908"
  - "#54526"
  - "#55487"
  - "#55886"
  - "#60137"
  - "#60576"
  - "#63780"
  - "#66342"
  - "#67672"
  - "#70676"
  - "#71086"
cluster_refs:
  - "#38130"
  - "#39471"
  - "#40058"
  - "#40067"
  - "#40076"
  - "#40124"
  - "#40574"
  - "#40844"
  - "#42962"
  - "#47405"
  - "#48908"
  - "#51986"
  - "#54526"
  - "#55487"
  - "#55838"
  - "#55886"
  - "#56153"
  - "#60137"
  - "#60576"
  - "#62265"
  - "#62726"
  - "#62815"
  - "#63780"
  - "#65323"
  - "#66342"
  - "#67672"
  - "#69148"
  - "#70676"
  - "#71086"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55886 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14015 on 2026-04-29."
---

# Gitcrawl Cluster 14015

Generated from local gitcrawl run cluster 14015 for `openclaw/openclaw`.

Display title:

> fix(telegram): cool down transient sendChatAction failures

Cluster shape from gitcrawl:

- total members: 29
- issues: 0
- pull requests: 29
- open candidates in local store: 13
- representative: #55886, currently open in local store
- latest member update: 2026-04-28T22:51:06.870532267Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38130 fix(slack): prevent auth-failure retry storm by disabling SDK auto-reconnect
- #39471 fix(database): add WAL journal mode and transient SQLite error handling
- #40058 feat: Add append tool to solve Write tool data loss issue
- #40076 feat: implement append tool to solve Write tool data loss issue
- #40124 fix: classify transient SQLite errors as non-fatal
- #40574 feat(write): add append mode to prevent silent data loss
- #40844 telegram: treat explicit network request failures as recoverable in send context
- #47405 fix(gateway): classify SQLite transient errors as non-fatal
- #51986 fix: use WAL journal mode for memory index database
- #55838 fix(telegram): backoff for transient network errors in sendChatAction
- #56153 fix(telegram): add max retries and backoff to sendChatAction
- #62265 fix(exec): catch onUpdate errors when agent run ends while exec still produces output
- #62726 fix(agents): prevent gateway crash on concurrent channel sessions (#62670)
- #62815 fix(exec): prevent gateway crash from agent listener error
- #65323 fix(gateway): prevent crash on late tool_execution_update after agent run teardown
- #69148 Gateway/runtime: classify reasonless promise rejections as transient

Open candidates:

- #40067 fix(gateway): do not crash on Playwright dialog race unhandled rejection
- #42962 fix(agents): suppress gateway schema lookup warning noise
- #48908 fix(telegram): retry 421 misdirected request responses
- #54526 Fix slack channels error
- #55487 fix(gateway): survive transient network/TLS errors in uncaughtException handler
- #55886 fix(telegram): cool down transient sendChatAction failures
- #60137 fix(infra): handle Slack SDK empty-message wrapper and undefined rejection reasons
- #60576 fix(infra): treat undefined/null unhandled rejections as non-fatal
- #63780 fix(telegram): suppress recoverable uncaught network failures
- #66342 fix(slack): stop provider gracefully on auth errors instead of crashing gateway
- #67672 fix(slack): close WebSocket connections on provider stop to prevent leak
- #70676 Fix/gateway silent revocation failures
- #71086 fix(pi): suppress stale mutating-tool warnings after successful reply
