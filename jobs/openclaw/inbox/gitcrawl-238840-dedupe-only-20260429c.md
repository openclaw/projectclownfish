---
repo: openclaw/openclaw
cluster_id: gitcrawl-238840-dedupe-only-20260429c
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
  - "#46275"
candidates:
  - "#43013"
  - "#46275"
  - "#54724"
  - "#72328"
cluster_refs:
  - "#43013"
  - "#46275"
  - "#54724"
  - "#72328"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46275 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238840 on 2026-04-29."
---

# Gitcrawl Cluster 238840

Generated from local gitcrawl run cluster 238840 for `openclaw/openclaw`.

Display title:

> fix(ui): stabilize agent primary model selection on switch

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #46275, currently open in local store
- latest member update: 2026-04-28T10:53:10.936Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43013 fix(ui): Fix model selector default value display on initial load
- #46275 fix(ui): stabilize agent primary model selection on switch
- #54724 fix/agents-primary-model-selection-and-catalog-loading-41344
- #72328 fix(ui): stabilize agent model selection on switch
