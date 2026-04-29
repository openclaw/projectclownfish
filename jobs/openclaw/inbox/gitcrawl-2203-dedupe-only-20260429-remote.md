---
repo: openclaw/openclaw
cluster_id: gitcrawl-2203-dedupe-only-20260429-remote
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
  - "#65669"
candidates:
  - "#40218"
  - "#42327"
  - "#50982"
  - "#59441"
  - "#65636"
  - "#66023"
  - "#69975"
  - "#70046"
cluster_refs:
  - "#40218"
  - "#42327"
  - "#43695"
  - "#44270"
  - "#46177"
  - "#49388"
  - "#50982"
  - "#51581"
  - "#51969"
  - "#59441"
  - "#59456"
  - "#60890"
  - "#65636"
  - "#65669"
  - "#66023"
  - "#69975"
  - "#70046"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65669 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2203 on 2026-04-29."
---

# Gitcrawl Cluster 2203

Generated from local gitcrawl run cluster 2203 for `openclaw/openclaw`.

Display title:

> feat: support custom job IDs in cron add command

Cluster shape from gitcrawl:

- total members: 17
- issues: 7
- pull requests: 10
- open candidates in local store: 8
- representative: #65669, currently closed in local store
- latest member update: 2026-04-28T21:55:43.767025298Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43695 Cron delivery ignores threadId for Telegram forum topics
- #44270 Cron tool drops Telegram direct-chat thread context when inferring delivery target
- #46177 fix(cron): clarify default timezone for cron expressions
- #49388 fix(telegram): missing buildToolContext causes message tool, cron, and sessions_send to lose thread context
- #51581 feat(cron): add --thread-id flag to cron create/edit for Telegram forum topics
- #51969 Agents/cron tool: document IANA tz for cron schedules (#51922) (#51922)
- #59456 [Docs/UX]:  help text is misleading — says "cron expressions" only, but should also apply to  datetime strings
- #60890 fix(cron): support thread-id in cron add/edit and paged lookup
- #65669 feat: support custom job IDs in cron add command

Open candidates:

- #40218 cron: optional custom job id and duplicate-id validation
- #42327 fix(cli): accept positional id for cron runs
- #50982 [Feature]: cron jobs don't support --thread-id, can't send to Telegram topic
- #59441 [Bug]: cron add --at does not support HH:MM time-only strings; --tz has no effect on --at
- #65636 [Feature]: cron add: support custom job IDs via --id
- #66023 feat(cron): support custom job ids on add
- #69975 fix(cli): clarify --tz help text for offset-less --at values
- #70046 fix(cron): support HH:MM time-only strings in --at; apply --tz to time-only input
