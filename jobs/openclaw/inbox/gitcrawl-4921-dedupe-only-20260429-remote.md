---
repo: openclaw/openclaw
cluster_id: gitcrawl-4921-dedupe-only-20260429-remote
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
  - "#41654"
candidates:
  - "#42243"
cluster_refs:
  - "#41654"
  - "#42243"
  - "#42244"
  - "#54417"
  - "#64925"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41654 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4921 on 2026-04-29."
---

# Gitcrawl Cluster 4921

Generated from local gitcrawl run cluster 4921 for `openclaw/openclaw`.

Display title:

> Cron subagent API errors (e.g. thinking block rejection) leak as visible channel messages

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #41654, currently closed in local store
- latest member update: 2026-04-28T21:55:43.775149649Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41654 Cron subagent API errors (e.g. thinking block rejection) leak as visible channel messages
- #42244 [Bug]: Announce delivery silently suppresses message tool sends AND skips announce — zero delivery
- #54417 Subagent errors (e.g. 429 Rate Limit) are not surfaced to user, messages appear to be swallowed
- #64925 [Bug] Silent agent errors (isError=true) never surface to TUI or Telegram — user sees 2-min typing indicator expire

Open candidates:

- #42243 [Bug]: Announce delivery posts raw error JSON to channels when cron run fails
