---
repo: openclaw/openclaw
cluster_id: gitcrawl-293-dedupe-only-20260429-remote
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
  - "#38604"
candidates:
  - "#38604"
  - "#38633"
  - "#44098"
cluster_refs:
  - "#38604"
  - "#38633"
  - "#44098"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38604 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 293 on 2026-04-29."
---

# Gitcrawl Cluster 293

Generated from local gitcrawl run cluster 293 for `openclaw/openclaw`.

Display title:

> [Security] Sandbox containers have no default pidsLimit - vulnerable to fork bomb attacks

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #38604, currently open in local store
- latest member update: 2026-04-28T22:51:07.573906446Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38604 [Security] Sandbox containers have no default pidsLimit - vulnerable to fork bomb attacks
- #38633 [Docs] 文档中 pidsLimit 示例值为 256，但代码无默认值，容易误导用户
- #44098 fix(security): add default pidsLimit for sandbox containers
