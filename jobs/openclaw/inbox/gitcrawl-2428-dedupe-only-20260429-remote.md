---
repo: openclaw/openclaw
cluster_id: gitcrawl-2428-dedupe-only-20260429-remote
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
  - "#44671"
candidates:
  - "#44671"
cluster_refs:
  - "#44612"
  - "#44671"
  - "#46614"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44671 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2428 on 2026-04-29."
---

# Gitcrawl Cluster 2428

Generated from local gitcrawl run cluster 2428 for `openclaw/openclaw`.

Display title:

> fix(docker): allow whitespace in config and workspace paths

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #44671, currently open in local store
- latest member update: 2026-04-28T04:44:23.543597928Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44612 fix(docker): allow whitespace in OPENCLAW_CONFIG_DIR path
- #46614 Fix whitespace in config dir (Issue 44599)

Open candidates:

- #44671 fix(docker): allow whitespace in config and workspace paths
