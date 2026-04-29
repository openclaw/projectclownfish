---
repo: openclaw/openclaw
cluster_id: gitcrawl-4604-dedupe-only-20260429-remote
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
  - "#40535"
candidates:
  - "#56398"
cluster_refs:
  - "#40535"
  - "#44040"
  - "#44279"
  - "#56398"
  - "#60836"
  - "#62238"
  - "#68235"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40535 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4604 on 2026-04-29."
---

# Gitcrawl Cluster 4604

Generated from local gitcrawl run cluster 4604 for `openclaw/openclaw`.

Display title:

> fix(exec-approvals): reject non-persistable allow-always approvals

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 1
- representative: #40535, currently closed in local store
- latest member update: 2026-04-26T00:47:04.185Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40535 fix(exec-approvals): reject non-persistable allow-always approvals
- #44040 fix(exec-approvals): persist allow-always entries for bare basename commands
- #44279 fix: issue where Always Allow fails silently and does not persist allowlist for unresolved short commands
- #60836 fix confident
- #62238 kas
- #68235 fix: issue 53120

Open candidates:

- #56398 fix(gateway): keep two-phase exec approvals pending when no approval …
