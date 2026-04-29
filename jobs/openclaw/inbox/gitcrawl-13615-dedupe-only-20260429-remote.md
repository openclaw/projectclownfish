---
repo: openclaw/openclaw
cluster_id: gitcrawl-13615-dedupe-only-20260429-remote
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
  - "#58479"
candidates:
  - "#58479"
cluster_refs:
  - "#40063"
  - "#41102"
  - "#42038"
  - "#42449"
  - "#51796"
  - "#51932"
  - "#52439"
  - "#53120"
  - "#54855"
  - "#55251"
  - "#55852"
  - "#58479"
  - "#60082"
  - "#61303"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58479 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13615 on 2026-04-29."
---

# Gitcrawl Cluster 13615

Generated from local gitcrawl run cluster 13615 for `openclaw/openclaw`.

Display title:

> [Bug]: Title: Approval dialog succeeds in Control UI, but exec never consumes the approval and a new approval id is generated

Cluster shape from gitcrawl:

- total members: 14
- issues: 14
- pull requests: 0
- open candidates in local store: 1
- representative: #58479, currently open in local store
- latest member update: 2026-04-28T18:04:42.58781039Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40063 [Bug]: Regression: async exec approval completion is persisted but not shown live in TUI or Control UI
- #41102 [Bug]: 审批请求不能正确返回
- #42038 [Bug]: WebChat 不支持 Exec Approval 弹窗
- #42449 [Bug]: using a skill makes chat enter an endless loop - tools error - webchat channel problem
- #51796 Inkonsistentes Verhalten bei exec Genehmigungs-Popups in OpenClaw Control UI
- #51932 [Bug]: exec approval fails in control-ui over plain HTTP due to missing approval client recognition
- #52439 exec.approval.resolve fails with unknown or expired approval id in Control UI / gateway flow
- #53120 Approval flow regression: '/approve <id> allow-always' frequently returns 'unknown or expired approval id' for node system.run denies
- #54855 [Bug]: Control UI exec approvals fail in multi-channel setups because exec.approval.resolve is sent without channel/sourceChannel
- #55251 [Bug]: Control UI approval modal closes on "Allow once" but does not actually submit approval
- #55852 Webchat control UI Approve button does not consume pending exec approval; repeated exec gets a new approval id
- #60082 [Bug]: 异步工具执行结果无法显示在回复中
- #61303 [Bug]:[Bug] webchat channel 工具调用结果无法返回

Open candidates:

- #58479 [Bug]: Title: Approval dialog succeeds in Control UI, but exec never consumes the approval and a new approval id is generated
