---
repo: openclaw/openclaw
cluster_id: gitcrawl-2513-dedupe-only-20260429-remote
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
  - "#54447"
candidates:
  - "#70936"
cluster_refs:
  - "#54447"
  - "#62175"
  - "#70936"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54447 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2513 on 2026-04-29."
---

# Gitcrawl Cluster 2513

Generated from local gitcrawl run cluster 2513 for `openclaw/openclaw`.

Display title:

> fix(pdf): configure pdfjs standard font assets

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #54447, currently closed in local store
- latest member update: 2026-04-28T22:51:07.127877678Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54447 fix(pdf): configure pdfjs standard font assets
- #62175 Media: fix PDF text extraction by setting standardFontDataUrl

Open candidates:

- #70936 fix(pdf): resolve standard fonts from pdfjs package root
