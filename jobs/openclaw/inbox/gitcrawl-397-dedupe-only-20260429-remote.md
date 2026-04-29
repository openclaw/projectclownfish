---
repo: openclaw/openclaw
cluster_id: gitcrawl-397-dedupe-only-20260429-remote
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
  - "#38945"
candidates:
  - "#38945"
cluster_refs:
  - "#38945"
  - "#41810"
  - "#45747"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38945 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 397 on 2026-04-29."
---

# Gitcrawl Cluster 397

Generated from local gitcrawl run cluster 397 for `openclaw/openclaw`.

Display title:

> fix(memory): Unicode support for MMR and FTS tokenizers

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #38945, currently open in local store
- latest member update: 2026-04-27T22:51:34.39026983Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41810 feat: add configurable FTS5 tokenizer for CJK text support
- #45747 fix(mmr): support CJK characters in tokenize for Jaccard similarity

Open candidates:

- #38945 fix(memory): Unicode support for MMR and FTS tokenizers
