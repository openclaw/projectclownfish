---
repo: openclaw/openclaw
cluster_id: gitcrawl-1896-dedupe-only-20260429-remote
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
  - "#60620"
candidates:
  - "#42099"
  - "#60620"
cluster_refs:
  - "#38437"
  - "#42099"
  - "#44848"
  - "#45154"
  - "#45603"
  - "#45776"
  - "#45805"
  - "#45881"
  - "#45951"
  - "#47429"
  - "#48605"
  - "#49412"
  - "#50382"
  - "#51781"
  - "#52031"
  - "#52572"
  - "#53297"
  - "#53938"
  - "#53954"
  - "#54181"
  - "#54189"
  - "#54468"
  - "#54806"
  - "#54949"
  - "#55147"
  - "#55429"
  - "#55530"
  - "#56095"
  - "#56494"
  - "#56522"
  - "#56695"
  - "#60620"
  - "#61920"
  - "#61957"
  - "#62049"
  - "#62480"
  - "#62521"
  - "#62855"
  - "#63182"
  - "#63693"
  - "#64686"
  - "#64933"
  - "#64982"
  - "#65515"
  - "#65678"
  - "#66121"
  - "#66856"
  - "#68088"
  - "#69250"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60620 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1896 on 2026-04-29."
---

# Gitcrawl Cluster 1896

Generated from local gitcrawl run cluster 1896 for `openclaw/openclaw`.

Display title:

> Plugins initialized twice per gateway restart (duplicate register/load cycle)

Cluster shape from gitcrawl:

- total members: 49
- issues: 49
- pull requests: 0
- open candidates in local store: 2
- representative: #60620, currently open in local store
- latest member update: 2026-04-28T21:55:43.7818395Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38437 [Bug]: Duplicate plugin ID warning
- #44848 [Bug] Feishu Plugin Registered Multiple Times in CLI Output (2026.3.12)
- #45154 Feishu Plugin Duplicate Warning (v2026.3.12)
- #45603 [Bug]: fro feishu plugin, always print the "duplicate" message, and no method to fix this issue by talk with OpenClaw itself
- #45776 [Bug]: Feishu plugin registers multiple times on every CLI command execution
- #45805 🐛 False Positive: "duplicate plugin id detected" warning for Feishu channel plugin
- #45881 [Bug] Plugin ID mismatch warning: "feishu1" vs "feishu"
- #45951 Bug: feishu plugin duplicate plugin id detected from same file
- #47429 Bug: CLI plugins loaded twice (all plugins registered 2x)
- #48605 [Bug]: Duplicate plugin id warning for npm-installed feishu plugin on every startup
- #49412 [Bug]: Feishu plugin - duplicate plugin id warning on startup
- #50382 [Bug]: Duplicate Plugin Loading Warning for Installed Extensions
- #51781 [Bug]: loadOpenClawPlugins calls plugin register() on activate:false snapshot loads
- #52031 [Bug]: Plugin register() called redundantly during non-activating (snapshot) loads
- #52572 [Bug]: **Feishu plugin registers all tools twice**
- #53297 [Bug] Feishu plugins re-registered on every incoming message (v2026.3.23)
- #53938 [Bug]: Plugin duplication (Feishu) + gateway restart instability — root cause analysis & proposed fix
- #53954 Plugin id mismatch warning persists for npm-installed plugin despite aligned manifest/config/runtime ids
- #54181 [Bug]: Plugins re-register on every message after v2026.3.23-2 upgrade
- #54189 Feishu plugin repeatedly re-registers every 5 seconds (continuous loop)
- #54468 Plugin warning: kimi-coding directory name doesn't match manifest ID "kimi"
- #54806 Bug: memory-lancedb plugin registered 8 times on every CLI command
- #54949 Duplicate Feishu plugin registration logs in 2026.3.24
- #55147 Gateway loads channel plugins multiple times during startup (whatsapp-cloud-api)
- #55429 [Bug] Feishu plugin registers tools multiple times on gateway startup
- #55530 [Bug]: Repeated Feishu tool registration logs and slower Feishu responses during a single startup
- #56095 [Bug] feishu plugin registered 4 times on every Gateway startup
- #56494 [Bug]: Feishu plugin registers repeatedly because multiple plugin registry cache keys trigger repeated full loads during gateway startup/runtime
- #56522 Plugin register() called multiple times per gateway startup (v2026.3.24)
- #56695 Feishu plugin tools re-register on every agent dispatch, producing excessive log noise
- #61920 [Bug] Plugin register function called multiple times during startup (50+ times)
- #61957 openclaw status: false lossless-claw provenance warnings, missing cfg in memory-search path
- #62049 [Bug]: False-positive "plugins.allow is empty" warning in openclaw status (2026.4.5)
- #62480 [Bug] memory-tdai plugin repeatedly re-registering causing log spam (OpenClaw 2026.4.5)
- #62521 [Bug] plugins.allow config ignored — false 'plugins.allow is empty' warning fires 13+ times on gateway restart (v2026.4.2)
- #62855 False invalid config in openclaw status --deep when resolving memory embedding providers
- #63182 False plugin provenance / allowlist warnings for npm-installed global plugin under ~/.openclaw/extensions
- #63693 status: false positive `plugins.allow` warning from core memory search resolution
- #64686 Bug: false ouraclaw provenance warnings in openclaw status on 2026.4.10
- #64933 [Bug] 2026.4.10: False 'plugins.allow is empty' warning for extensions/ auto-discovered plugins
- #64982 [Bug]: (doctor): plugins.allow advisory doesn't warn it's an exclusive allowlist
- #65515 [bug] false provenance warning for ouraclaw in openclaw status on 2026.4.10
- #65678 status: false-positive plugin allowlist/provenance warnings for installed extension plugin
- #66121 openclaw doctor false positive — claims plugins.allow is empty even when explicitly configured
- #66856 openclaw status emits spurious 'plugins.allow is empty' warning when allow list is populated
- #68088 openclaw doctor --non-interactive emits two false positives when memory is intentionally disabled: plugins.allow is empty warning and memory-core disabled in config error
- #69250 Gateway calls plugin register() ~30x per boot for non-bundled plugins (CostClaw thrash)

Open candidates:

- #42099 fix(plugins): false-positive duplicate plugin ID warning on gateway start (msteams)
- #60620 Plugins initialized twice per gateway restart (duplicate register/load cycle)
