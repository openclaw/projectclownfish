---
repo: openclaw/openclaw
cluster_id: gitcrawl-2098-dedupe-only-20260429-remote
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
  - "#40697"
candidates:
  - "#40602"
  - "#40697"
  - "#41324"
  - "#41368"
  - "#55654"
  - "#62187"
cluster_refs:
  - "#40602"
  - "#40697"
  - "#41324"
  - "#41368"
  - "#43729"
  - "#54986"
  - "#55654"
  - "#61330"
  - "#62187"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40697 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2098 on 2026-04-29."
---

# Gitcrawl Cluster 2098

Generated from local gitcrawl run cluster 2098 for `openclaw/openclaw`.

Display title:

> feat(feishu): add delete_record tool for bitable

Cluster shape from gitcrawl:

- total members: 9
- issues: 3
- pull requests: 6
- open candidates in local store: 6
- representative: #40697, currently open in local store
- latest member update: 2026-04-28T07:59:25.957339441Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43729 [Feature Request] feishu_bitable: native attachment upload and record deletion support
- #54986 style(auto): 清理 XXX 注释 — extensions/feishu/src/bitable.ts
- #61330 Feishu Bitable: Add delete_record tool support

Open candidates:

- #40602 fix(feishu): improve bitable placeholder row cleanup to handle non-empty default values
- #40697 feat(feishu): add delete_record tool for bitable
- #41324 feat(feishu): auto-grant requester permission when creating Bitable
- #41368 feat(feishu): add delete tools for Bitable fields and records
- #55654 [Feature]: Feishu Bitable: add delete_record tool method
- #62187 feat(feishu): add filter, sort, field_names to bitable list_records
