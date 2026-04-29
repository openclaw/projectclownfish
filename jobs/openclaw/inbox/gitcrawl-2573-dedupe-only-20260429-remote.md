---
repo: openclaw/openclaw
cluster_id: gitcrawl-2573-dedupe-only-20260429-remote
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
  - "#64427"
candidates:
  - "#64427"
  - "#67020"
cluster_refs:
  - "#64427"
  - "#67020"
  - "#67987"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64427 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2573 on 2026-04-29."
---

# Gitcrawl Cluster 2573

Generated from local gitcrawl run cluster 2573 for `openclaw/openclaw`.

Display title:

> [Bug]: Slack dmHistoryLimit not implemented — DM sessions start with zero history context

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #64427, currently open in local store
- latest member update: 2026-04-27T22:51:37.488346351Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #67987 [Bug]: DM session context missing outbound bot messages even when userToken is configured

Open candidates:

- #64427 [Bug]: Slack dmHistoryLimit not implemented — DM sessions start with zero history context
- #67020 Slack: dmHistoryLimit defined in config schema but never wired — DMs lose all channel context
