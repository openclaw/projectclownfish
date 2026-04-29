---
repo: openclaw/openclaw
cluster_id: gitcrawl-14032-dedupe-only-20260429-remote
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
  - "#46025"
candidates:
  - "#46947"
  - "#47187"
  - "#68422"
cluster_refs:
  - "#44961"
  - "#44995"
  - "#45307"
  - "#45308"
  - "#45347"
  - "#45593"
  - "#45896"
  - "#46025"
  - "#46947"
  - "#47187"
  - "#48039"
  - "#54592"
  - "#68422"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46025 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14032 on 2026-04-29."
---

# Gitcrawl Cluster 14032

Generated from local gitcrawl run cluster 14032 for `openclaw/openclaw`.

Display title:

> fix(ui): constrain context notice icon size to prevent viewport overflow

Cluster shape from gitcrawl:

- total members: 13
- issues: 0
- pull requests: 13
- open candidates in local store: 3
- representative: #46025, currently closed in local store
- latest member update: 2026-04-28T11:40:35.764294355Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44961 fix(ui): add missing styles for scroll-pill button to prevent SVG overflow
- #44995 Fix: add missing context notice styles
- #45307 ui(chat): constrain empty-session SVG placeholder size
- #45308 fix(web-ui): add missing CSS styles when context overlimit
- #45347 fix(ui): add missing CSS for context-notice warning banner
- #45593 fix(ui): add missing context-notice CSS styles for dashboard-v2
- #45896 fix(ui): add explicit size constraints to context warning SVG
- #46025 fix(ui): constrain context notice icon size to prevent viewport overflow
- #48039 fix(ui): add CSS constraints for context-notice__icon to prevent overflow
- #54592 fix(control-ui): chat bubbles should size to content, not full width

Open candidates:

- #46947 fix(ui): limit sidebar markdown image max-width to prevent oversized display
- #47187 fix(ui): reset transient chat overlays and style context notice
- #68422 fix(ui): constrain web chat width to 920px for better readability
