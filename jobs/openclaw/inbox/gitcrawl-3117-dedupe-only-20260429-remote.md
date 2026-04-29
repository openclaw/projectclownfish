---
repo: openclaw/openclaw
cluster_id: gitcrawl-3117-dedupe-only-20260429-remote
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
  - "#52357"
candidates:
  - "#52357"
cluster_refs:
  - "#52357"
  - "#54930"
  - "#59706"
  - "#63621"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52357 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3117 on 2026-04-29."
---

# Gitcrawl Cluster 3117

Generated from local gitcrawl run cluster 3117 for `openclaw/openclaw`.

Display title:

> i18n(zh-TW): rewrite locale with Taiwan-standard terminology + full key parity

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #52357, currently open in local store
- latest member update: 2026-04-28T18:04:42.591177639Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54930 i18n: Complete zh-TW translation for usage, cron modules
- #59706 i18n(zh-TW): achieve full 504/504 key parity with Taiwan-standard terminology
- #63621 i18n(zh-TW): add glossary for Taiwan-standard control UI terminology

Open candidates:

- #52357 i18n(zh-TW): rewrite locale with Taiwan-standard terminology + full key parity
