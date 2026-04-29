---
repo: openclaw/openclaw
cluster_id: gitcrawl-973-dedupe-only-20260429-remote
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
  - "#69635"
candidates:
  - "#41025"
  - "#69634"
cluster_refs:
  - "#41025"
  - "#47937"
  - "#48993"
  - "#49137"
  - "#69634"
  - "#69635"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69635 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 973 on 2026-04-29."
---

# Gitcrawl Cluster 973

Generated from local gitcrawl run cluster 973 for `openclaw/openclaw`.

Display title:

> fix(ui): preserve raw code text in code-block copy button

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 2
- representative: #69635, currently closed in local store
- latest member update: 2026-04-28T21:55:43.872210066Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #47937 fix(ui): polish code block copy button styling
- #48993 feat(ui): render remote http/https images in markdown messages
- #49137 fix(ui): bypass marked on escaped fence storms
- #69635 fix(ui): preserve raw code text in code-block copy button

Open candidates:

- #41025 fix: render remote https/http images inline in Control UI chat
- #69634 fix(ui): code block copy button overlaps message-level copy action (#69605)
