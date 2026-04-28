---
repo: openclaw/openclaw
cluster_id: ghcrawl-156776-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
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
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #48945 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156776 on 2026-04-26."
---

# GHCrawl Cluster 156776

Generated from local ghcrawl run cluster 156776 for `openclaw/openclaw`.

Display title:

> feat(feishu): skip @-mention for thread follow-ups in topic-scoped sessions

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #48945, currently open in local store
- latest member update: 2026-04-25T07:30:10.181Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40530 feat(feishu): add requireMentionInThread to allow thread replies without @mention
- #48945 feat(feishu): skip @-mention for thread follow-ups in topic-scoped sessions
- #63148 feat(feishu): scope DM topic sessions + per-topic dispatch parallelism
