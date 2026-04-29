---
repo: openclaw/openclaw
cluster_id: gitcrawl-2120-dedupe-only-20260429-remote
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
  - "#57046"
candidates:
  - "#65974"
cluster_refs:
  - "#40237"
  - "#45875"
  - "#47319"
  - "#48066"
  - "#49576"
  - "#49780"
  - "#50942"
  - "#52424"
  - "#52563"
  - "#55561"
  - "#56996"
  - "#57045"
  - "#57046"
  - "#60980"
  - "#63701"
  - "#64011"
  - "#65974"
  - "#66866"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57046 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2120 on 2026-04-29."
---

# Gitcrawl Cluster 2120

Generated from local gitcrawl run cluster 2120 for `openclaw/openclaw`.

Display title:

> [Bug] cron add CLI validation failed: job must be object

Cluster shape from gitcrawl:

- total members: 18
- issues: 18
- pull requests: 0
- open candidates in local store: 1
- representative: #57046, currently closed in local store
- latest member update: 2026-04-28T21:29:55.50066806Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40237 [Bug]: Gateway WS self-contention still unresolved — cron tool timeouts from active sessions (#5703/#6508 circular-duped)
- #45875 [Bug] Cron Tool Parameter Validation Error
- #47319 [Bug]: gateway crashes after second cron add (exit code 1)
- #48066 [Bug] Feishu plugin causes Gateway crash
- #49576 [Bug]: 飞书消息导致Gateway崩溃 - v2026.3.13
- #49780 [Bug] cron job payload loses nested object properties during serialization
- #50942 [Bug]: Cron schedule object format not accepted (contradicts documentation)
- #52424 cron create/list fails with 'gateway closed (1000)' handshake timeout on Windows
- #52563 [Bug]: Cron task configuration error causes Gateway crash
- #55561 [Bug]: cron status abnormal when Discord plugin is enabled (v2026.3.24)
- #56996 [Bug] cron add CLI validation failed: job must be object
- #57045 [Bug] cron add CLI validation failed: job must be object
- #57046 [Bug] cron add CLI validation failed: job must be object
- #60980 [Bug]: Channels table empty and Telegram/Discord unavailable on Windows despite valid config and installed deps
- #63701 [Bug]: Gateway cron broken after plugin schema compilation error: Maximum call stack size exceeded
- #64011 [Bug]: Discord gateway crash exits OpenClaw on Windows with "Attempted to reconnect zombie connection after disconnecting first"
- #66866 [Bug]: excessive RESUMEs from Discord Gateway integration (carbon)

Open candidates:

- #65974 [Bug]:
