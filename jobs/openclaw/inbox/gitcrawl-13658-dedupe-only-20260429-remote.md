---
repo: openclaw/openclaw
cluster_id: gitcrawl-13658-dedupe-only-20260429-remote
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
  - "#46527"
candidates:
  - "#51515"
cluster_refs:
  - "#39921"
  - "#42586"
  - "#46527"
  - "#51515"
  - "#52770"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46527 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13658 on 2026-04-29."
---

# Gitcrawl Cluster 13658

Generated from local gitcrawl run cluster 13658 for `openclaw/openclaw`.

Display title:

> fix(health): use runtime snapshot for channel summaries

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 1
- representative: #46527, currently closed in local store
- latest member update: 2026-04-28T18:51:14.992213627Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39921 fix(gateway): preserve runtime-backed health state
- #42586 fix(gateway): merge runtime state into health endpoint channel snapshots
- #46527 fix(health): use runtime snapshot for channel summaries
- #52770 fix(gateway): guard getRuntimeSnapshot() and preserve probe intent in health refresh

Open candidates:

- #51515 fix(health): bound gateway health snapshots and normalize legacy cron
