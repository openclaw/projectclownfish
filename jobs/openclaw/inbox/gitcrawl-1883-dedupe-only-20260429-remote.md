---
repo: openclaw/openclaw
cluster_id: gitcrawl-1883-dedupe-only-20260429-remote
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
  - "#41609"
candidates:
  - "#13175"
  - "#41609"
  - "#54972"
  - "#56795"
  - "#60380"
  - "#60383"
  - "#66327"
cluster_refs:
  - "#13175"
  - "#38776"
  - "#41607"
  - "#41609"
  - "#42218"
  - "#43954"
  - "#45936"
  - "#47890"
  - "#47891"
  - "#48281"
  - "#48313"
  - "#54972"
  - "#56795"
  - "#57402"
  - "#58298"
  - "#58983"
  - "#60380"
  - "#60383"
  - "#63170"
  - "#64690"
  - "#66327"
  - "#69860"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41609 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1883 on 2026-04-29."
---

# Gitcrawl Cluster 1883

Generated from local gitcrawl run cluster 1883 for `openclaw/openclaw`.

Display title:

> [Feishu] Interactive Card message content parsing missing

Cluster shape from gitcrawl:

- total members: 22
- issues: 13
- pull requests: 9
- open candidates in local store: 7
- representative: #41609, currently open in local store
- latest member update: 2026-04-28T21:55:43.819866315Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38776 fix(feishu): extract content from interactive card variants when quoting
- #41607 飞书 Interactive Card 消息内容解析缺失
- #42218 feat(feishu): enhance interactive card parsing to extract markdown content
- #43954 feat(feishu): add feishu_card tool for sending and updating interactive cards
- #45936 fix(feishu): improve interactive card text extraction for all card formats
- #47890 feat(feishu): support interactive card (msg_type: "interactive") in outbound adapter
- #47891 feat(feishu): implement sendPayload for interactive card support
- #48281 Feature Request: Add Feishu Interactive Card Parsing Support
- #48313 feat(feishu): enhance interactive card content parsing
- #57402 Feature Request: Feishu plugin support for card.action.trigger event
- #58298 Feature request: message tool support for Feishu interactive cards
- #58983 [Feature]: Feishu Interactive Approval Cards - One-click Approve/Deny Buttons
- #63170 Feature: Feishu interactive card buttons for exec approval
- #64690 Teams channel: implement sendPayload for interactive approval cards
- #69860 Feishu: support native exec approval action cards for exec approvals

Open candidates:

- #13175 Feature: Feishu interactive card buttons (inline buttons support)
- #41609 [Feishu] Interactive Card message content parsing missing
- #54972 Feishu: CardKit streaming cards show [Interactive Card] instead of actual content when read by other agents
- #56795 Feature Request: Add Feishu Interactive Card Parsing support #48281 
- #60380 [Bug] Feishu: parseInteractiveCardContent fails on fallback post-format content
- #60383 fix(feishu): parse interactive card post-format fallback content
- #66327 feat(msteams): implement sendPayload for interactive approval cards
