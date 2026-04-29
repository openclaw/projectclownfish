---
repo: openclaw/openclaw
cluster_id: gitcrawl-14018-dedupe-only-20260429-remote
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
  - "#48535"
candidates:
  - "#42797"
  - "#59693"
  - "#62323"
  - "#62481"
  - "#66305"
  - "#66957"
cluster_refs:
  - "#39785"
  - "#40412"
  - "#42797"
  - "#43489"
  - "#45265"
  - "#48483"
  - "#48535"
  - "#50498"
  - "#51150"
  - "#51177"
  - "#59282"
  - "#59693"
  - "#59811"
  - "#62323"
  - "#62481"
  - "#62991"
  - "#64950"
  - "#64953"
  - "#64967"
  - "#65405"
  - "#65837"
  - "#66072"
  - "#66305"
  - "#66464"
  - "#66957"
  - "#68965"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48535 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14018 on 2026-04-29."
---

# Gitcrawl Cluster 14018

Generated from local gitcrawl run cluster 14018 for `openclaw/openclaw`.

Display title:

> fix(gateway): respect models.mode "replace" in dashboard model dropdown

Cluster shape from gitcrawl:

- total members: 26
- issues: 10
- pull requests: 16
- open candidates in local store: 6
- representative: #48535, currently closed in local store
- latest member update: 2026-04-28T13:08:32.575405752Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39785 fix(config): respect explicit input modalities override in provider model merge
- #40412 [Feature][Frontend]: TUI Model Picker - Add filter/search functionality for configured models only
- #43489 fix: preserve image input capabilities in model catalog resolution
- #45265 fix: support custom image-capable provider models in image tool
- #48483 Dashboard (Control UI) model dropdown ignores models.mode="replace" — shows all 600+ built-in models
- #48535 fix(gateway): respect models.mode "replace" in dashboard model dropdown
- #50498 Feature: Allow hiding/filtering built-in model catalog entries
- #51150 fix(agents): resolve imageModel 'Unknown model' for custom providers (#33185)
- #51177 [Feature] Add model list filtering to hide unconfigured providers
- #59282 fix: preserve explicit input config for vision-capable models
- #59811 [Feature]: Server-side model selector filtering with auth-gated visibility
- #62991 fix(agents): merge user-configured providers into model catalog
- #64950 Model picker ignores models.mode=replace, shows full catalog
- #64953 fix(models): respect models.mode=replace in model picker and gateway catalog
- #64967 fix(model-picker,gateway): respect models.mode=replace
- #65405 [Feature Request] /model page should filter to only show configured models.providers
- #65837 Fix image tool custom provider resolution for models.json
- #66072 fix: respect models.mode 'replace' in UI model catalog
- #66464 Dashboard model dropdown should filter by configured providers
- #68965 Bug: models.mode: replace does not exclude implicit providers from bundled plugins

Open candidates:

- #42797 Gateway: narrow model picker to available providers
- #59693 feat(gateway,control-ui): server-side model selector filtering with auth-gated visibility
- #62323 fix: filter phantom provider entries inferred from aggregator model ID prefixes
- #62481 fix: filter phantom provider groups inferred from OpenRouter model IDs [AI-assisted]
- #66305 fix(model-catalog): cache empty catalog loads briefly
- #66957 [Bug]: models.mode="replace" still triggers implicit provider discovery and causes large startup delays
