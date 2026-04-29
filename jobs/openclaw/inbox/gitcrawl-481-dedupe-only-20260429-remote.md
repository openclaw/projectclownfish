---
repo: openclaw/openclaw
cluster_id: gitcrawl-481-dedupe-only-20260429-remote
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
  - "#39306"
candidates:
  - "#38923"
  - "#40052"
  - "#40723"
  - "#42223"
  - "#43013"
  - "#52948"
  - "#54724"
  - "#57100"
  - "#62727"
  - "#65936"
cluster_refs:
  - "#38923"
  - "#39306"
  - "#39320"
  - "#39401"
  - "#39495"
  - "#40052"
  - "#40723"
  - "#41180"
  - "#42223"
  - "#43013"
  - "#46275"
  - "#47385"
  - "#48031"
  - "#48094"
  - "#48142"
  - "#49531"
  - "#49669"
  - "#49675"
  - "#52948"
  - "#53704"
  - "#54724"
  - "#57100"
  - "#62366"
  - "#62727"
  - "#65936"
  - "#70633"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39306 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 481 on 2026-04-29."
---

# Gitcrawl Cluster 481

Generated from local gitcrawl run cluster 481 for `openclaw/openclaw`.

Display title:

> fix(ui): enable Save when editing agents without existing config entries

Cluster shape from gitcrawl:

- total members: 26
- issues: 0
- pull requests: 26
- open candidates in local store: 10
- representative: #39306, currently closed in local store
- latest member update: 2026-04-29T11:09:44.839395024Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39306 fix(ui): enable Save when editing agents without existing config entries
- #39320 UI: fix agent settings save button for auto-discovered agents
- #39401 fix(ui): reset overview model controls when switching agents
- #39495 fix(ui): reset agent overview model form on agent switch
- #41180 fix(ui): add ?selected to locale option so first render matches active locale
- #46275 fix(ui): stabilize agent primary model selection on switch
- #47385 fix(ui): refresh avatar when switching sessions via switchChatSession
- #48031 fix: language dropdown shows wrong value on page refresh
- #48094 fix: locale dropdown resets to English after page refresh
- #48142 fix(ui): refresh avatar when switching agents (#48121)
- #49531 feat(ui): support workspace-relative avatar paths
- #49669 fix(ui): add .catch() to createLazy() to prevent silent blank views
- #49675 fix(ui): add .catch() handler to createLazy — prevents permanent blank Control UI views
- #53704 fix: remove unrecognized key defaultId in agents config
- #62366 fix(ui): refresh avatar when switching chat sessions
- #70633 fix(ui): keep primary model selection stable in agent overview

Open candidates:

- #38923 Fix/38439 webchat avatar identity md
- #40052 fix(ui): save default agent model changes to defaults config
- #40723 Feat/UI active primary model
- #42223 Fix sidebar tree collapse not hiding child items
- #43013 fix(ui): Fix model selector default value display on initial load
- #52948 fix(ui): select dropdowns show stale value on page load
- #54724 fix/agents-primary-model-selection-and-catalog-loading-41344
- #57100 fix(agents): prevent provider defaultModel from overriding agents.defaults.model (fixes #24170)
- #62727 fix: parse descriptive identity avatar lines
- #65936 feat: add Asia/Shanghai to cron timezone suggestions
