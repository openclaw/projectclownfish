---
repo: openclaw/openclaw
cluster_id: gitcrawl-14131-dedupe-only-20260429-remote
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
  - "#58889"
candidates:
  - "#58887"
cluster_refs:
  - "#58887"
  - "#58889"
  - "#63759"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58889 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14131 on 2026-04-29."
---

# Gitcrawl Cluster 14131

Generated from local gitcrawl run cluster 14131 for `openclaw/openclaw`.

Display title:

> feat(typing): show typing indicator immediately on voice message receipt, before STT transcription

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #58889, currently closed in local store
- latest member update: 2026-04-28T18:04:42.418061578Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #58889 feat(typing): show typing indicator immediately on voice message receipt, before STT transcription
- #63759 [Bug]: Telegram typing indicator starts too late on slow turns, leaving an initial silent gap

Open candidates:

- #58887 feat(typing): show typing indicator immediately on voice message receipt, before STT transcription
