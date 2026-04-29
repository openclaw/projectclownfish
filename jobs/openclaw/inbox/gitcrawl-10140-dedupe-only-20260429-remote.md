---
repo: openclaw/openclaw
cluster_id: gitcrawl-10140-dedupe-only-20260429-remote
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
  - "#59429"
candidates:
  - "#59429"
cluster_refs:
  - "#59429"
  - "#63090"
  - "#67789"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59429 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 10140 on 2026-04-29."
---

# Gitcrawl Cluster 10140

Generated from local gitcrawl run cluster 10140 for `openclaw/openclaw`.

Display title:

> feat: add claude-memory-optimizer skill

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #59429, currently open in local store
- latest member update: 2026-04-25T17:12:54.212Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #63090 feat: add memory-layer skill
- #67789 feat(skill): add willow-memory-health ClawHub skill

Open candidates:

- #59429 feat: add claude-memory-optimizer skill
