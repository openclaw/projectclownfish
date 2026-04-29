---
repo: openclaw/openclaw
cluster_id: gitcrawl-3592-dedupe-only-20260429-remote
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
  - "#9132"
candidates:
  - "#9132"
  - "#51184"
cluster_refs:
  - "#9132"
  - "#46792"
  - "#51030"
  - "#51184"
  - "#52323"
  - "#58961"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #9132 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3592 on 2026-04-29."
---

# Gitcrawl Cluster 3592

Generated from local gitcrawl run cluster 3592 for `openclaw/openclaw`.

Display title:

> Control UI: Add status indicator for sessions (active/completed/timed out)

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 2
- representative: #9132, currently open in local store
- latest member update: 2026-04-28T22:51:07.48164768Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46792 Dashboard: distinguish active sessions from completed/archived ones
- #51030 Sub-Agent Activity: show human-readable task labels instead of raw session IDs
- #52323 Cron isolated sessions should display job name as session label in Control UI
- #58961 Control UI: Show task label + 'completed' instead of 'terminated' for finished subagent sessions

Open candidates:

- #9132 Control UI: Add status indicator for sessions (active/completed/timed out)
- #51184 Feature: Surface cron job name / session label in /status and statusline
