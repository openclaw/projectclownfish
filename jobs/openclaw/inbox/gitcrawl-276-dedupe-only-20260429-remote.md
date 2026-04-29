---
repo: openclaw/openclaw
cluster_id: gitcrawl-276-dedupe-only-20260429-remote
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
  - "#37633"
candidates:
  - "#66936"
  - "#67595"
cluster_refs:
  - "#37633"
  - "#40691"
  - "#45659"
  - "#47436"
  - "#48693"
  - "#49469"
  - "#52626"
  - "#59399"
  - "#65377"
  - "#66936"
  - "#67595"
  - "#68632"
  - "#71017"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #37633 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 276 on 2026-04-29."
---

# Gitcrawl Cluster 276

Generated from local gitcrawl run cluster 276 for `openclaw/openclaw`.

Display title:

> [Bug]: lark/feishu error plugin status with unresolved appsecret(using env)

Cluster shape from gitcrawl:

- total members: 13
- issues: 13
- pull requests: 0
- open candidates in local store: 2
- representative: #37633, currently closed in local store
- latest member update: 2026-04-28T07:04:52.089665417Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37633 [Bug]: lark/feishu error plugin status with unresolved appsecret(using env)
- #40691 [Bug]: Feishu plugin tools (doc/wiki/drive/bitable) always use accounts[0] credentials instead of current session's accountId in multi-account mode
- #45659 Discussion: should Feishu tools use current session account before defaultAccount in multi-account setups?
- #47436 [Bug] Feishu multi-account (accounts.*) appSecret SecretRef fails to resolve, crashes feishu plugin after ~3 minutes
- #48693 [Bug]: channels.feishu.appSecret: unresolved SecretRef
- #49469 飞书官方插件加载失败 - feishu-openclaw-plugin error 状态
- #52626 [Bug]: Multi-account Feishu tools always use accounts[0] credentials
- #59399 [Feature]: 飞书多账号场景下的工具账号优先级问题
- #65377 Mattermost: outbound messages posted under wrong bot account in multi-account config
- #68632 [Bug] openclaw agents list fails with unresolved SecretRef on non-default install
- #71017 [Bug]: [Feishu] Multi-account: all sub-accounts resolve to default account's bot open_id

Open candidates:

- #66936 CLI: `openclaw agents list` fails with unresolved SecretRef; CLI process hangs after completion
- #67595 openclaw gateway install --force still embeds OPENCLAW_GATEWAY_TOKEN in LaunchAgent plist; openclaw channels list throws TypeError: fetch failed with no channels configured
