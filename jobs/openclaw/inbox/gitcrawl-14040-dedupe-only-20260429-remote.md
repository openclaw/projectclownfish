---
repo: openclaw/openclaw
cluster_id: gitcrawl-14040-dedupe-only-20260429-remote
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
  - "#45673"
candidates:
  - "#41306"
  - "#45673"
  - "#57541"
  - "#59420"
  - "#68443"
  - "#68455"
cluster_refs:
  - "#40701"
  - "#41306"
  - "#45246"
  - "#45673"
  - "#47425"
  - "#48077"
  - "#52755"
  - "#57541"
  - "#59420"
  - "#68443"
  - "#68455"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45673 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14040 on 2026-04-29."
---

# Gitcrawl Cluster 14040

Generated from local gitcrawl run cluster 14040 for `openclaw/openclaw`.

Display title:

> fix(feishu): prefer session account over defaultAccount for tools

Cluster shape from gitcrawl:

- total members: 11
- issues: 0
- pull requests: 11
- open candidates in local store: 6
- representative: #45673, currently open in local store
- latest member update: 2026-04-28T21:55:43.854567163Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40701 feishu: prioritize session accountId over config defaultAccount in tools
- #45246 fix(feishu): resolve tool account by session accountId before config defaultAccount
- #47425 Feishu: Enable agent binding for multi-account scenarios
- #48077 fix(feishu): use routed account context for multi-account tool execution
- #52755 Fix Feishu chat account routing

Open candidates:

- #41306 feat(feishu): add list action and per-agent routing for feishu_chat
- #45673 fix(feishu): prefer session account over defaultAccount for tools
- #57541 fix(feishu): update feishu account key from 'main' to 'default' in doc
- #59420 fix(feishu): prioritize message source account over defaultAccount
- #68443 feat(feishu): add list action to read chat history by container_id
- #68455 feat(feishu): allow custom accountId during Feishu channel onboarding
