---
repo: openclaw/openclaw
cluster_id: ghcrawl-156608-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#13175"
candidates:
  - "#13175"
  - "#41607"
  - "#41609"
  - "#48281"
  - "#58298"
  - "#58983"
  - "#63170"
  - "#69860"
cluster_refs:
  - "#13175"
  - "#41607"
  - "#41609"
  - "#48281"
  - "#58298"
  - "#58983"
  - "#63170"
  - "#69860"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #13175 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156608 on 2026-04-26."
---

# GHCrawl Cluster 156608

Generated from local ghcrawl run cluster 156608 for `openclaw/openclaw`.

Display title:

> Feature: Feishu interactive card buttons (inline buttons support)

Cluster shape from ghcrawl:

- total members: 8
- issues: 8
- pull requests: 0
- open candidates in local store: 8
- representative: #13175, currently open in local store
- latest member update: 2026-04-26T00:46:51.891Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #13175 Feature: Feishu interactive card buttons (inline buttons support)
- #41607 飞书 Interactive Card 消息内容解析缺失
- #41609 [Feishu] Interactive Card message content parsing missing
- #48281 Feature Request: Add Feishu Interactive Card Parsing Support
- #58298 Feature request: message tool support for Feishu interactive cards
- #58983 [Feature]: Feishu Interactive Approval Cards - One-click Approve/Deny Buttons
- #63170 Feature: Feishu interactive card buttons for exec approval
- #69860 Feishu: support native exec approval action cards for exec approvals
