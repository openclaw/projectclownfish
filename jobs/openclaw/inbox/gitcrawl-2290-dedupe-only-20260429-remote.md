---
repo: openclaw/openclaw
cluster_id: gitcrawl-2290-dedupe-only-20260429-remote
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
  - "#66876"
candidates:
  - "#64825"
  - "#67052"
  - "#67053"
  - "#69081"
cluster_refs:
  - "#62395"
  - "#64825"
  - "#66876"
  - "#67052"
  - "#67053"
  - "#69081"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66876 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2290 on 2026-04-29."
---

# Gitcrawl Cluster 2290

Generated from local gitcrawl run cluster 2290 for `openclaw/openclaw`.

Display title:

> TUI: status bar stuck on "streaming" after response completes

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 4
- representative: #66876, currently closed in local store
- latest member update: 2026-04-28T22:51:07.143949446Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #62395 TUI can stay stuck in streaming state after reply is finished
- #66876 TUI: status bar stuck on "streaming" after response completes

Open candidates:

- #64825 TUI stuck on 'streaming' indicator after run completes — finalizeRun() doesn't transition UI when wasActiveRun is false
- #67052 TUI streaming indicator stays active long after response content finishes
- #67053 TUI streaming indicator stays active long after response content finishes
- #69081 [Bug]: TUI: "streaming" status desyncs from actual run state
