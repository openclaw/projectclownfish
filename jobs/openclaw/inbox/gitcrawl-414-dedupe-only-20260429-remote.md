---
repo: openclaw/openclaw
cluster_id: gitcrawl-414-dedupe-only-20260429-remote
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
  - "#39013"
candidates:
  - "#39013"
cluster_refs:
  - "#39013"
  - "#56698"
  - "#67361"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39013 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 414 on 2026-04-29."
---

# Gitcrawl Cluster 414

Generated from local gitcrawl run cluster 414 for `openclaw/openclaw`.

Display title:

> Hook-injected virtual files show as `undefined` in `/context list`, and session memory keeps recalling hook content as if it were real session history

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #39013, currently open in local store
- latest member update: 2026-04-28T15:00:42.837305891Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #56698 Bug: Hook bootstrap virtual files accumulate on every restart (no dedup)
- #67361 Hook-delivered messages lost on bootstrap-context:full — agent can't recall its own notifications

Open candidates:

- #39013 Hook-injected virtual files show as `undefined` in `/context list`, and session memory keeps recalling hook content as if it were real session history
