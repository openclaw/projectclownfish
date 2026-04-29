---
repo: openclaw/openclaw
cluster_id: gitcrawl-14092-dedupe-only-20260429-remote
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
  - "#57184"
candidates:
  - "#57184"
  - "#59577"
cluster_refs:
  - "#44120"
  - "#45988"
  - "#57184"
  - "#59577"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57184 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14092 on 2026-04-29."
---

# Gitcrawl Cluster 14092

Generated from local gitcrawl run cluster 14092 for `openclaw/openclaw`.

Display title:

> Fix session sync during session-start full reindex

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #57184, currently open in local store
- latest member update: 2026-04-25T09:37:58.955Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44120 fix(memory): shouldSyncSessions skips sessions during full reindex
- #45988 fix(memory): check needsFullReindex before reason to prevent session index loss on restart

Open candidates:

- #57184 Fix session sync during session-start full reindex
- #59577 fix(memory): incremental session sync (#40919)
