---
repo: openclaw/openclaw
cluster_id: gitcrawl-6981-dedupe-only-20260429-remote
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
  - "#48883"
candidates:
  - "#39513"
  - "#44973"
  - "#48883"
cluster_refs:
  - "#39513"
  - "#44973"
  - "#48883"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48883 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6981 on 2026-04-29."
---

# Gitcrawl Cluster 6981

Generated from local gitcrawl run cluster 6981 for `openclaw/openclaw`.

Display title:

> Cron: constrain main-session system events

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #48883, currently open in local store
- latest member update: 2026-04-28T15:00:42.978543602Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39513 docs: Clarify Main Session Cron behavior and HEARTBEAT.md integration
- #44973 fix(cron): deduplicate main-session systemEvent in heartbeat prompt (issue #44922)
- #48883 Cron: constrain main-session system events
