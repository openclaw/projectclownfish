---
repo: openclaw/openclaw
cluster_id: gitcrawl-238851-dedupe-only-20260429c
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
  - "#59006"
candidates:
  - "#58691"
  - "#58885"
  - "#59006"
  - "#59855"
cluster_refs:
  - "#58691"
  - "#58885"
  - "#59006"
  - "#59855"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59006 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238851 on 2026-04-29."
---

# Gitcrawl Cluster 238851

Generated from local gitcrawl run cluster 238851 for `openclaw/openclaw`.

Display title:

> [Bug]: Update 2026.4.1 broke exec completely for existing setups — full day of work lost

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #59006, currently open in local store
- latest member update: 2026-04-24T18:56:24.814Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58691 2026.3.31: tools.exec.ask='off' and tools.exec.security='full' ignored — all exec commands require approval
- #58885 [Bug]: Sandbox enabled by default on update breaks all exec for existing single-user setups
- #59006 [Bug]: Update 2026.4.1 broke exec completely for existing setups — full day of work lost
- #59855 2026.4.1 exec approval mechanism completely broke existing single-operator setups
