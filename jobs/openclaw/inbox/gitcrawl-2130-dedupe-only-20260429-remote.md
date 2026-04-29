---
repo: openclaw/openclaw
cluster_id: gitcrawl-2130-dedupe-only-20260429-remote
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
  - "#47998"
candidates:
  - "#67680"
cluster_refs:
  - "#47998"
  - "#48176"
  - "#53033"
  - "#62311"
  - "#62909"
  - "#67680"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47998 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2130 on 2026-04-29."
---

# Gitcrawl Cluster 2130

Generated from local gitcrawl run cluster 2130 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI crashes with fs.constants.W_OK undefined when built from main (v2026.3.14)

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 1
- representative: #47998, currently closed in local store
- latest member update: 2026-04-28T05:49:57.645618713Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #47998 [Bug]: Control UI crashes with fs.constants.W_OK undefined when built from main (v2026.3.14)
- #48176 Control UI shows black screen — Node.js modules bundled as empty stubs in browser bundle (v2026.3.14)
- #53033 Bug: Control UI 2026.3.22 - Vite build produces invalid JS syntax + CSP too strict
- #62311 [Bug]: Control UI completely blank on main branch: "process is not defined" & "path.resolve is not a function" due to Node.js modules in frontend
- #62909 [Bug]: Control UI breaks due to Uncaught ReferenceError: process is not defined

Open candidates:

- #67680 Control UI blank screen: unresolved bare module import for markdown-it-task-lists
