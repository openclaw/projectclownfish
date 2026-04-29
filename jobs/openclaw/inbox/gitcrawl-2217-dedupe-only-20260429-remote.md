---
repo: openclaw/openclaw
cluster_id: gitcrawl-2217-dedupe-only-20260429-remote
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
  - "#41344"
candidates:
  - "#40352"
cluster_refs:
  - "#39392"
  - "#40352"
  - "#40441"
  - "#40443"
  - "#41344"
  - "#44605"
  - "#44835"
  - "#46201"
  - "#49568"
  - "#53536"
  - "#54252"
  - "#57068"
  - "#59070"
  - "#62072"
  - "#65565"
  - "#71192"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41344 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2217 on 2026-04-29."
---

# Gitcrawl Cluster 2217

Generated from local gitcrawl run cluster 2217 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI Agent form shows wrong Primary model and Save fails with GatewayRequestError: invalid config

Cluster shape from gitcrawl:

- total members: 16
- issues: 14
- pull requests: 2
- open candidates in local store: 1
- representative: #41344, currently closed in local store
- latest member update: 2026-04-29T11:09:44.84347411Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39392 [Bug]: Agent switch causes stale/wrong model selection UI in Control UI
- #40441 fix(ui): reset config dirty on reload
- #40443 fix(ui): discard stale config state on explicit reload
- #41344 [Bug]: Control UI Agent form shows wrong Primary model and Save fails with GatewayRequestError: invalid config
- #44605 [Bug]: After modifying the model selection to the main model in the Agents interface and clicking save, switching the interface does not take effect.
- #44835 [Bug]: [v2026.3.12] Configuration loop: Web UI validation error 'models.0.id undefined' despite fields being filled
- #46201 [Bug]: agents 页面，有大于一个模型时，更换模型后无法保存
- #49568 [Bug] Adding new model to openclaw.json requires full gateway restart — hot reload only updates provider config, not models.json
- #53536 Bug: 模型切换未通过 Gateway API 流程
- #54252 [Bug]: Agents page mis-renders object-shaped agents.defaults.model in Control UI
- #57068 Agent overview: primary model selection does not save (reverts to 'Not set' after Refresh)
- #59070 [Bug]: GatewayRequestError: invalid config: agents: Unrecognized key: "defaultId" + permanent "unsaved config changes" when changing model on new agent
- #62072 [Bug] 模型配置不同步 - m2.7 在 GUI 可见但 Agent 不可用
- #65565 [Bug]: Dashboard "Set Default" for agent fails with invalid config: agents: Unrecognized key: "defaultId" and default agent falls back to first agent in agents.list
- #71192 Non-default agent models.json caches can stay stale after config model updates

Open candidates:

- #40352 [Bug]: Control UI Model Selection dropdown shows stale model after config reload
