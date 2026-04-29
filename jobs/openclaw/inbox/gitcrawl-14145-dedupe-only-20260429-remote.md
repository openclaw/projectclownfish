---
repo: openclaw/openclaw
cluster_id: gitcrawl-14145-dedupe-only-20260429-remote
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
  - "#51737"
candidates:
  - "#43211"
  - "#48666"
  - "#48671"
  - "#50141"
  - "#50193"
  - "#50767"
  - "#51737"
  - "#59932"
  - "#61046"
  - "#62100"
  - "#64181"
  - "#68927"
cluster_refs:
  - "#41955"
  - "#43109"
  - "#43211"
  - "#45842"
  - "#45864"
  - "#46936"
  - "#46954"
  - "#47249"
  - "#47295"
  - "#47822"
  - "#48261"
  - "#48263"
  - "#48376"
  - "#48448"
  - "#48666"
  - "#48671"
  - "#48714"
  - "#48816"
  - "#48818"
  - "#48821"
  - "#49656"
  - "#49797"
  - "#49856"
  - "#50141"
  - "#50193"
  - "#50216"
  - "#50375"
  - "#50456"
  - "#50767"
  - "#50993"
  - "#51405"
  - "#51737"
  - "#51846"
  - "#54101"
  - "#54105"
  - "#54532"
  - "#59269"
  - "#59681"
  - "#59932"
  - "#61046"
  - "#62025"
  - "#62100"
  - "#63418"
  - "#64181"
  - "#66655"
  - "#68927"
  - "#69029"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51737 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14145 on 2026-04-29."
---

# Gitcrawl Cluster 14145

Generated from local gitcrawl run cluster 14145 for `openclaw/openclaw`.

Display title:

> fix(ui): keep provider-qualified model picker refs intact

Cluster shape from gitcrawl:

- total members: 47
- issues: 1
- pull requests: 46
- open candidates in local store: 12
- representative: #51737, currently open in local store
- latest member update: 2026-04-29T10:20:02.89341791Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41955 fix(control-ui): show all configured agents in webchat session dropdown
- #43109 fix: resolve model alias in llm-slug-generator hook
- #45842 fix(ui): use full provider/model path in model select dropdown
- #45864 fix(ui): show session label instead of id in session selector dropdown
- #46936 fix(models): resolve bare model id across providers in sessions.patch
- #46954 fix(ui): keep provider in chat model picker values
- #47249 [codex] fix(ui): canonicalize model refs in picker and /model
- #47295 fix(webchat): include provider prefix in model dropdown values (closes #47192)
- #47822 fix(ui): show agent name in session dropdown for multi-agent setups (#47744)
- #48261 fix(ui): preserve qualified model ids in chat picker
- #48263 fix(ui): preserve qualified model ids in chat selector
- #48376 Fixing model selection problem
- #48448 fix(ui): show provider name for qualified model ids
- #48714 fix(gateway): check configured models before DEFAULT_PROVIDER in resolveSessionModelRef
- #48816 fix: prevent double provider prefix for already-qualified model IDs
- #48818 fix: show cross-agent global sessions in chat session dropdown
- #48821 fix(model-selection): infer provider from configured models when mode…
- #49656 fix(ui): use selected model's provider prefix in webchat model switcher
- #49797 fix: preserve raw WebUI model aliases
- #49856 fix: web UI chat model dropdown desync and wrong provider prefix
- #50216 fix: keep control ui model refs canonical
- #50375 feat(control-ui): display session label in chat header
- #50456 fix(ui): disambiguate chat model picker model refs
- #50993 fix(ui): preserve model provider switches in chat picker
- #51405 fix(ui): resolve bare model alias to full key in buildModelOptions
- #51846 fix(ui): resolve model alias in qualified refs for Control UI model picker
- #54101 [Feature]: Add cron sessions filter to mobile WebUI settings dropdown
- #54105 feat(ui): add cron sessions filter to mobile WebUI settings dropdown
- #54532 Fix OpenRouter model switching for slash-containing model IDs
- #59269 [control-ui] Fix model dropdown duplicates and provider prefix stripping (#53758)
- #59681 fix(agents): resolve model aliases in sessions_spawn
- #62025 fix: qualify provider-scoped chat model values
- #63418 fix(gateway): align thinking defaults for sessions and history
- #66655 fix(control-ui): show configured thinkingDefault in dropdown
- #69029 fix: resolve model alias P1/P2 review feedback

Open candidates:

- #43211 fix: accept hyphen-stripped provider variants in model allowlist
- #48666 fix: restore full agent list in webchat dropdown after session switch
- #48671 fix(ui): include all known agents in webchat session dropdown
- #50141 fix(ui): preserve provider prefix in model toggle for non-Anthropic models
- #50193 feat(ui): group model selector by provider in tree structure
- #50767 fix: use correct defaultProvider in buildAllowedModelSet for /model command
- #51737 fix(ui): keep provider-qualified model picker refs intact
- #59932 fix: protect active subagent sessions from maintenance pruning
- #61046 fix(models): resolve correct provider for bare model keys in models list
- #62100 fix: resolve OpenRouter native slash model refs
- #64181 fix(hooks): reject error responses from slug generator and strip post-truncation dashes
- #68927 ui(chat): show explicit qualified model refs
