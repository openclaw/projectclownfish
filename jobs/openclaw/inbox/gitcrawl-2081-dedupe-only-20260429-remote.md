---
repo: openclaw/openclaw
cluster_id: gitcrawl-2081-dedupe-only-20260429-remote
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
  - "#61812"
candidates:
  - "#65983"
cluster_refs:
  - "#61812"
  - "#61912"
  - "#61931"
  - "#61944"
  - "#62378"
  - "#65983"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61812 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2081 on 2026-04-29."
---

# Gitcrawl Cluster 2081

Generated from local gitcrawl run cluster 2081 for `openclaw/openclaw`.

Display title:

> [2026.4.5 regression] Agent crash when bash tool calls 'openclaw message send' — 'Agent listener invoked outside active run'

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 1
- representative: #61812, currently closed in local store
- latest member update: 2026-04-28T07:04:52.157653295Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #61812 [2026.4.5 regression] Agent crash when bash tool calls 'openclaw message send' — 'Agent listener invoked outside active run'
- #61912 2026.4.5: gateway can crash in exec/PTY flows with 'Agent listener invoked outside active run'
- #61931 [2026.4.5 regression] Gateway crash when acpx calls openclaw message send via exec/PTY — Agent listener invoked outside active run
- #61944 [2026.4.5 regression] Telegram replies lost: Agent listener invoked outside active run (graphiti autoCapture + exec stdout)
- #62378 Gateway crashes when background PTY output arrives after run is no longer active

Open candidates:

- #65983 Background PTY exec runs can survive restart/session loss and become untracked orphan process trees
