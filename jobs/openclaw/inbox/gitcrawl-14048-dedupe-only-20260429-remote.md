---
repo: openclaw/openclaw
cluster_id: gitcrawl-14048-dedupe-only-20260429-remote
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
  - "#66523"
candidates:
  - "#44599"
  - "#45765"
  - "#51429"
  - "#54014"
cluster_refs:
  - "#40563"
  - "#44599"
  - "#45765"
  - "#51429"
  - "#54014"
  - "#54907"
  - "#61181"
  - "#66523"
  - "#67264"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66523 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14048 on 2026-04-29."
---

# Gitcrawl Cluster 14048

Generated from local gitcrawl run cluster 14048 for `openclaw/openclaw`.

Display title:

> [Bug]:  OPENCLAW_STATE_DIR Environment Variable Ignored on Windows

Cluster shape from gitcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 4
- representative: #66523, currently closed in local store
- latest member update: 2026-04-28T22:51:07.460283163Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40563 [Bug]: Bug]: [Windows] Agent/auth lookup uses wrong state directory path (missing backslash between username and .openclaw)  Agent/auth 查找使用错误的状态目录路径（用户名与 .openclaw 之间缺少反斜杠）
- #54907 [Bug]: openclaw browser storage local get  ；default use openclaw config，use  --browser-profile    invalid
- #61181 [Bug]: openclaw browser start --profile openclaw uses ~/.openclaw-openclaw instead of ~/.openclaw and fails gateway auth
- #66523 [Bug]:  OPENCLAW_STATE_DIR Environment Variable Ignored on Windows
- #67264 [Bug]:Gateway tilde-expands browser executablePath under $HOME, causing ENOENT

Open candidates:

- #44599 [Bug]: OPENCLAW_CONFIG_DIR cannot contain whitespace
- #45765 [Bug] OPENCLAW_HOME 设置为 ~/.openclaw 时产生嵌套目录 ~/.openclaw/.openclaw
- #51429 [Bug]: 看起来有人把工作路径hardcode进代码里而且居然被合并发布了
- #54014 [Bug]: OPENCLAW_HOME not respected
