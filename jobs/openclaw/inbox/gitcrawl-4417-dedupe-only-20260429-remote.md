---
repo: openclaw/openclaw
cluster_id: gitcrawl-4417-dedupe-only-20260429-remote
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
  - "#39886"
candidates:
  - "#63494"
cluster_refs:
  - "#39874"
  - "#39886"
  - "#63494"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39886 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4417 on 2026-04-29."
---

# Gitcrawl Cluster 4417

Generated from local gitcrawl run cluster 4417 for `openclaw/openclaw`.

Display title:

> fix(session): prevent webchat route leak on channel-agnostic session keys

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #39886, currently closed in local store
- latest member update: 2026-04-25T08:47:53.645Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39874 fix(gateway): prevent chat.send cross-channel leakage on configured main
- #39886 fix(session): prevent webchat route leak on channel-agnostic session keys

Open candidates:

- #63494 fix: preserve external routing for group/topic webchat sessions
