---
repo: openclaw/openclaw
cluster_id: gitcrawl-7961-dedupe-only-20260429-remote
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
  - "#52125"
candidates:
  - "#52125"
cluster_refs:
  - "#33082"
  - "#43483"
  - "#52125"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52125 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 7961 on 2026-04-29."
---

# Gitcrawl Cluster 7961

Generated from local gitcrawl run cluster 7961 for `openclaw/openclaw`.

Display title:

> TTS tags not processed in cron announce delivery

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #52125, currently open in local store
- latest member update: 2026-04-28T18:51:14.959534396Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #33082 Cron delivery drops TTS tool media (voice notes never reach Telegram)
- #43483 TTS tool hangs indefinitely in isolated cron sessions (never returns, always times out)

Open candidates:

- #52125 TTS tags not processed in cron announce delivery
