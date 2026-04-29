---
repo: openclaw/openclaw
cluster_id: gitcrawl-14090-dedupe-only-20260429-remote
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
  - "#40220"
candidates:
  - "#40220"
  - "#46748"
cluster_refs:
  - "#40220"
  - "#46748"
  - "#50151"
  - "#67116"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40220 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14090 on 2026-04-29."
---

# Gitcrawl Cluster 14090

Generated from local gitcrawl run cluster 14090 for `openclaw/openclaw`.

Display title:

> [Bug]: 日志时间字段不一致（_meta.date 用 UTC，time 用本地时间）

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 2
- representative: #40220, currently open in local store
- latest member update: 2026-04-28T07:04:51.953585023Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50151 日志文件按 UTC 日期命名导致 Asia/Shanghai 时区下日志分散
- #67116 [Feature]: "Can 'openclaw logs --follow' be set to use local time by default?"

Open candidates:

- #40220 [Bug]: 日志时间字段不一致（_meta.date 用 UTC，time 用本地时间）
- #46748 OpenClaw logs display UTC time instead of local timezone
