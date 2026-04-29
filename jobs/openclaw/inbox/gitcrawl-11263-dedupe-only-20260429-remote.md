---
repo: openclaw/openclaw
cluster_id: gitcrawl-11263-dedupe-only-20260429-remote
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
  - "#63019"
candidates:
  - "#56498"
cluster_refs:
  - "#45756"
  - "#56498"
  - "#63019"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63019 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 11263 on 2026-04-29."
---

# Gitcrawl Cluster 11263

Generated from local gitcrawl run cluster 11263 for `openclaw/openclaw`.

Display title:

> bug(control-ui): WhatsApp relink can stay stuck on logging in even when backend wait succeeds

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #63019, currently closed in local store
- latest member update: 2026-04-28T05:49:57.67385852Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45756 WhatsApp QR login hangs after scan — 515 restart not handled in startWebLoginWithQr
- #63019 bug(control-ui): WhatsApp relink can stay stuck on logging in even when backend wait succeeds

Open candidates:

- #56498 [Bug]: unable to connect WhatsApp and Telegram accounts
