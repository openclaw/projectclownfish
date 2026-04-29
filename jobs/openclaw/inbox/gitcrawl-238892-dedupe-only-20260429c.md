---
repo: openclaw/openclaw
cluster_id: gitcrawl-238892-dedupe-only-20260429c
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
  - "#50248"
candidates:
  - "#46369"
  - "#50248"
  - "#63897"
cluster_refs:
  - "#46369"
  - "#50248"
  - "#63897"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50248 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238892 on 2026-04-29."
---

# Gitcrawl Cluster 238892

Generated from local gitcrawl run cluster 238892 for `openclaw/openclaw`.

Display title:

> Bug: sessions cleanup --fix-missing can prune fresh cron sessions with valid transcripts

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #50248, currently open in local store
- latest member update: 2026-04-29T08:43:37.833Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46369 [Bug]: cron.remove does not clean up session records in sessions.json
- #50248 Bug: sessions cleanup --fix-missing can prune fresh cron sessions with valid transcripts
- #63897 [Bug]: `sessions cleanup --fix-missing` wants to prune valid session entries because `sessionFile` paths are stale/mismatched
