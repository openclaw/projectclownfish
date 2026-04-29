---
repo: openclaw/openclaw
cluster_id: gitcrawl-8112-dedupe-only-20260429-remote
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
  - "#52571"
candidates:
  - "#43404"
  - "#47663"
  - "#52571"
  - "#71170"
cluster_refs:
  - "#43404"
  - "#47663"
  - "#52571"
  - "#71170"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52571 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 8112 on 2026-04-29."
---

# Gitcrawl Cluster 8112

Generated from local gitcrawl run cluster 8112 for `openclaw/openclaw`.

Display title:

> fix: suppress reminder guard for sweep-backed reminders

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #52571, currently open in local store
- latest member update: 2026-04-28T04:44:24.177720352Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43404 fix(cron): support isolated cron jobs in reminder guard + preserve counter across compaction
- #47663 fix(messages): add `unscheduledReminderNote` config to disable reminder guard note
- #52571 fix: suppress reminder guard for sweep-backed reminders
- #71170 fix(auto-reply): add reminderGuard opt-out for external schedulers
