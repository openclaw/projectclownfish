---
repo: openclaw/openclaw
cluster_id: ghcrawl-165997-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#46275"
candidates:
  - "#39392"
  - "#39401"
  - "#39495"
  - "#40352"
  - "#40441"
  - "#40443"
  - "#43013"
  - "#46275"
  - "#52948"
  - "#54724"
  - "#70633"
cluster_refs:
  - "#39392"
  - "#39401"
  - "#39495"
  - "#40352"
  - "#40441"
  - "#40443"
  - "#43013"
  - "#46275"
  - "#52948"
  - "#54724"
  - "#70633"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #46275 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165997 on 2026-04-26."
---

# GHCrawl Cluster 165997

Generated from local ghcrawl run cluster 165997 for `openclaw/openclaw`.

Display title:

> fix(ui): stabilize agent primary model selection on switch

Cluster shape from ghcrawl:

- total members: 11
- issues: 2
- pull requests: 9
- open candidates in local store: 11
- representative: #46275, currently open in local store
- latest member update: 2026-04-25T07:30:10.334Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39392 [Bug]: Agent switch causes stale/wrong model selection UI in Control UI
- #39401 fix(ui): reset overview model controls when switching agents
- #39495 fix(ui): reset agent overview model form on agent switch
- #40352 [Bug]: Control UI Model Selection dropdown shows stale model after config reload
- #40441 fix(ui): reset config dirty on reload
- #40443 fix(ui): discard stale config state on explicit reload
- #43013 fix(ui): Fix model selector default value display on initial load
- #46275 fix(ui): stabilize agent primary model selection on switch
- #52948 fix(ui): select dropdowns show stale value on page load
- #54724 fix/agents-primary-model-selection-and-catalog-loading-41344
- #70633 fix(ui): keep primary model selection stable in agent overview
