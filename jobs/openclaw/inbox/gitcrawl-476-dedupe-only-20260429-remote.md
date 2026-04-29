---
repo: openclaw/openclaw
cluster_id: gitcrawl-476-dedupe-only-20260429-remote
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
  - "#39284"
candidates:
  - "#39284"
cluster_refs:
  - "#39284"
  - "#42781"
  - "#60160"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39284 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 476 on 2026-04-29."
---

# Gitcrawl Cluster 476

Generated from local gitcrawl run cluster 476 for `openclaw/openclaw`.

Display title:

> feat(sessions_spawn): add contextFiles and inheritContext options

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #39284, currently open in local store
- latest member update: 2026-04-28T22:51:06.911707855Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42781 feat(sessions_spawn): add lightContext param to skip workspace bootstrap files
- #60160 [feat subagents]: Add includeContext to sessions_spawn with safe injection and model-aware cropping of parent session context.

Open candidates:

- #39284 feat(sessions_spawn): add contextFiles and inheritContext options
