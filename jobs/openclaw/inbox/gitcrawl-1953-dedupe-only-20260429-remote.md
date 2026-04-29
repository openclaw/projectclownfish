---
repo: openclaw/openclaw
cluster_id: gitcrawl-1953-dedupe-only-20260429-remote
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
  - "#43551"
candidates:
  - "#8719"
  - "#9993"
  - "#12506"
  - "#13362"
  - "#14526"
  - "#16351"
  - "#36314"
  - "#38249"
  - "#40652"
  - "#50561"
  - "#55347"
  - "#62455"
cluster_refs:
  - "#8719"
  - "#9993"
  - "#12506"
  - "#13362"
  - "#14389"
  - "#14526"
  - "#16351"
  - "#19992"
  - "#29745"
  - "#36314"
  - "#38249"
  - "#39468"
  - "#39500"
  - "#40015"
  - "#40264"
  - "#40265"
  - "#40268"
  - "#40317"
  - "#40651"
  - "#40652"
  - "#40929"
  - "#40931"
  - "#41394"
  - "#41924"
  - "#43551"
  - "#44132"
  - "#44876"
  - "#48295"
  - "#49495"
  - "#50012"
  - "#50323"
  - "#50549"
  - "#50550"
  - "#50561"
  - "#50634"
  - "#51266"
  - "#52701"
  - "#53311"
  - "#54201"
  - "#55347"
  - "#55863"
  - "#57162"
  - "#57391"
  - "#57533"
  - "#60143"
  - "#60963"
  - "#61283"
  - "#61613"
  - "#61683"
  - "#62455"
  - "#62976"
  - "#63009"
  - "#63250"
  - "#63470"
  - "#63879"
  - "#64306"
  - "#64565"
  - "#64806"
  - "#64841"
  - "#65721"
  - "#66131"
  - "#66318"
  - "#69074"
  - "#69409"
  - "#70528"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43551 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1953 on 2026-04-29."
---

# Gitcrawl Cluster 1953

Generated from local gitcrawl run cluster 1953 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw-mem0 plugin crashes gateway — schema rejects all config keys except "enabled"

Cluster shape from gitcrawl:

- total members: 65
- issues: 65
- pull requests: 0
- open candidates in local store: 12
- representative: #43551, currently closed in local store
- latest member update: 2026-04-28T22:51:07.575643812Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #14389 Feature Request: Auto-rollback on config change failure
- #19992 [Feature]: Auto-run `doctor` before gateway restart + user notification
- #29745 [Bug]: Config validation error causes infinite retry loop with no backoff — 1GB error log from single invalid key
- #39468 [Bug]: Gateway crashes when receiving group messages — auto-writes invalid 'agents.subagents' config field (v2026.3.2)
- #39500 [Bug]: Invalid Discord Configuration in Openclaw.JSON Causes Gateway to Not Start
- #40015 [Feature]: Safe OpenClaw Configuration Changes
- #40264 [Bug]: Invalid config key in config.patch crashes gateway on every restart (no validation)
- #40265 [Bug]: config.patch with invalid/unrecognized key crashes gateway on every restart
- #40268 Gateway crashes on unknown config keys — .strict() should be .strip() on read path
- #40317 feat(config): add config validation mode (strict vs tolerant) for different operations
- #40651 [Bug]: Doctor best-effort wording should clarify startup remains blocked
- #40929 Gateway becomes unresponsive after plugin installation, requires 'openclaw doctor --fix' repeatedly
- #40931 Gateway becomes unresponsive after plugin installation, requires 'openclaw doctor --fix' repeatedly
- #41394 [Feature]: add config validation mode (strict vs tolerant) for different operations
- #41924 Discussion: Agent Health Monitoring and Self-Healing Patterns
- #43551 [Bug]: openclaw-mem0 plugin crashes gateway — schema rejects all config keys except "enabled"
- #44132 Feature Request: Automatic Config Rollback on Failed Startup
- #44876 Feature Request: Built-in safe upgrade/config-change command with backup, verification, and auto-rollback
- #48295 [Bug] config.apply writes partial/truncated config after validation failure
- #49495 [Bug] memory-lancedb-pro and memory-openviking plugin config rejected by gateway validator
- #50012 [Bug]: config set accepts invalid key paths without error (e.g., agents.defaults.tools.fs.workspaceOnly)
- #50323 Bug: "failed to persist plugin auto-enable changes" warning on Gateway startup with wecom plugin
- #50549 Feature Request: Gateway Auto-Recovery Tool Suite
- #50550 [Feature] Gateway Auto-Recovery Toolkit - Prevent service crashes from config errors
- #50634 Feature Request: Safe Config Patching with Pre-Validation
- #51266 Gateway crashes on startup with bad hook entries — graceful error handling needed
- #52701 Agent Health Monitoring & Automated Recovery (#41924)
- #53311 Gateway crash-loops when channel plugin is configured but not installed
- #54201 Gateway crash-loop error message misleading when config is empty/incomplete after migration
- #55863 [Bug] plugins.entries rejects plugin configSchema fields — qdrantUrl Unrecognized key[Bug]:
- #57162 Feature Proposal: External Health Monitor & Auto-Recovery Framework for Multi-Agent Deployments
- #57391 Bug: unrecognized key in openclaw.json causes infinite gateway crash loop with no recovery
- #57533 Proposal: Native Multi-Agent Safety & Orchestration Framework
- #60143 Plugin config error causes hard gateway crash instead of graceful disable
- #60963 [Bug]: plugins.entries.<id>.<config-key> rejected as unrecognized key — plugin config must nest under .config but this is undocumented
- #61283 [Bug] openclaw plugins doctor hangs indefinitely due to persistent plugin services
- #61613 🐛 Gateway overwrites plugins.allow with invalid plugin IDs (qqbot/minimax) on restart
- #61683 Enhancement: Plugin-scoped config errors (plugins.entries.*.config) should degrade gracefully, not abort gateway startup
- #62976 Doctor cannot recover from invalid third-party plugin config; gateway hard-fails to start
- #63009 [Feature]: automatic rollback for self-modification failures
- #63250 [Bug]: memory-lancedb config validation fails even when plugin is disabled (v2026.4.8)
- #63470 [Bug]: memori plugin enable cause an error!
- #63879 [Bug] Discord agent 配置写入导致 Gateway 崩溃
- #64306 [Bug]: CLI commands hang (status/health/doctor) - timeout in ensureCliPluginRegistryLoaded
- #64565 [Bug] memory-tdai embedding config rejected by gateway schema validation (OpenClaw 2026.4.8)
- #64806 Config change auto-restart should be optional/configurable
- #64841 [Bug]: Disabled memory-lancedb entry still fails config validation after upgrading to 2026.4.9
- #65721 [Bug]: Beta blocker: core - OpenClaw Agents Can Self-Destruct Through Configuration Modification
- #66131 [Bug]: Gateway startup auto-enable writes provider plugin IDs into plugins.entries and plugins.allow, then config validation fails with plugin not found
- #66318 [Feature]: Layered Protection Architecture for OpenClaw Configuration Safety
- #69074 [Bug] Config schema keys in wrong location cause gateway failure
- #69409 Feature request: Approval gate for restart-required config changes
- #70528 [Feature]: Automatic rollback when agent-generated config changes break the system

Open candidates:

- #8719 [Feature] OpenClaw Security Profile v1.1 (Data-centric, secure-by-default)
- #9993 Feature Request: config:pre-apply hook for validating config changes
- #12506 [Feature Request] Unified Security Profile System with Preset Scenario Templates
- #13362 [Feature]: Add openclaw doctor --dry-run for safer config validation
- #14526 Proposal: safer self-update with pre-update backup + health check + auto-rollback/restore
- #16351 [Feature]: Improve `openclaw config` to avoid secrets and invalid files
- #36314 [Feature]: 内置健壮性机制：Watchdog、全局错误处理、自动恢复
- #38249 Feature: `openclaw doctor --config-diff` for upgrade-safe config migration
- #40652 [Bug]: Gateway invalid-config startup error should suggest --fix and .bak recovery
- #50561 Auto-apply safe doctor fixes on gateway start
- #55347 Feature: Native gateway self-healing with configurable recovery workflow
- #62455 [Bug]: Discord channel config rejects channel-level agentId and can abort gateway reload
