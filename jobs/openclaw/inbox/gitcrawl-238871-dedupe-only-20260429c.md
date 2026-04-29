---
repo: openclaw/openclaw
cluster_id: gitcrawl-238871-dedupe-only-20260429c
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
  - "#48945"
candidates:
  - "#40530"
  - "#48945"
  - "#63148"
cluster_refs:
  - "#40530"
  - "#48945"
  - "#63148"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48945 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238871 on 2026-04-29."
---

# Gitcrawl Cluster 238871

Generated from local gitcrawl run cluster 238871 for `openclaw/openclaw`.

Display title:

> feat(feishu): skip @-mention for thread follow-ups in topic-scoped sessions

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #48945, currently open in local store
- latest member update: 2026-04-28T17:52:26.610Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40530 feat(feishu): add requireMentionInThread to allow thread replies without @mention
- #48945 feat(feishu): skip @-mention for thread follow-ups in topic-scoped sessions
- #63148 feat(feishu): scope DM topic sessions + per-topic dispatch parallelism
