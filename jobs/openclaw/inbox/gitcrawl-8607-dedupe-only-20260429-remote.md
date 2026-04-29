---
repo: openclaw/openclaw
cluster_id: gitcrawl-8607-dedupe-only-20260429-remote
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
  - "#54360"
candidates:
  - "#57146"
cluster_refs:
  - "#54360"
  - "#57146"
  - "#57224"
  - "#70506"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54360 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 8607 on 2026-04-29."
---

# Gitcrawl Cluster 8607

Generated from local gitcrawl run cluster 8607 for `openclaw/openclaw`.

Display title:

> fix(skills): remove unsupported gh-issues frontmatter

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #54360, currently closed in local store
- latest member update: 2026-04-27T22:51:37.121315121Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54360 fix(skills): remove unsupported gh-issues frontmatter
- #57224 Skills: replace legacy gh-issues clawdbot paths
- #70506 fix(skills/gh-issues): hoist stale-lock window into a single STALE_LOCK_MINUTES constant

Open candidates:

- #57146 Use ~/.openclaw paths in gh-issues skill docs
