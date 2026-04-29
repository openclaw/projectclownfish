---
repo: openclaw/openclaw
cluster_id: gitcrawl-2262-dedupe-only-20260429-remote
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
  - "#68815"
candidates:
  - "#50472"
  - "#68815"
cluster_refs:
  - "#50472"
  - "#66941"
  - "#68810"
  - "#68815"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68815 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2262 on 2026-04-29."
---

# Gitcrawl Cluster 2262

Generated from local gitcrawl run cluster 2262 for `openclaw/openclaw`.

Display title:

> [Bug]: Comprehensive issues: CLI exit code 1, memory leak, crash dumps not uploaded, skill-interceptor auto-recovery

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 2
- representative: #68815, currently open in local store
- latest member update: 2026-04-28T05:49:59.035538824Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #66941 [Bug]: QClaw客服号(wechat-access)无法连接，Gateway进程不启动
- #68810 [Bug]: Windows QClaw gateway exit code 1, WebSocket message delivery failure, crash dumps not uploaded

Open candidates:

- #50472 [Windows] Gateway exits silently without crash log
- #68815 [Bug]: Comprehensive issues: CLI exit code 1, memory leak, crash dumps not uploaded, skill-interceptor auto-recovery
