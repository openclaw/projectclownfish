---
repo: openclaw/openclaw
cluster_id: gitcrawl-5005-dedupe-only-20260429-remote
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
  - "#41987"
candidates:
  - "#41987"
cluster_refs:
  - "#40350"
  - "#41987"
  - "#45811"
  - "#55539"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41987 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 5005 on 2026-04-29."
---

# Gitcrawl Cluster 5005

Generated from local gitcrawl run cluster 5005 for `openclaw/openclaw`.

Display title:

> fix(agents): pass imageMaxDimensionPx config to browser:screenshot

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #41987, currently open in local store
- latest member update: 2026-04-28T07:59:25.914274365Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40350 fix(browser): respect configured defaultProfile in tool description
- #45811 fix(browser): keep screenshots viewport-bounded unless fullPage is explicit
- #55539 fix(browser): captureBeyondViewport should respect fullPage option

Open candidates:

- #41987 fix(agents): pass imageMaxDimensionPx config to browser:screenshot
