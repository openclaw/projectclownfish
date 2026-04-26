---
repo: openclaw/openclaw
cluster_id: ghcrawl-156657-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#39120"
candidates:
  - "#39120"
  - "#39635"
  - "#50876"
  - "#51789"
  - "#66576"
cluster_refs:
  - "#39120"
  - "#39635"
  - "#50876"
  - "#51789"
  - "#66576"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39120 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156657 on 2026-04-26."
---

# GHCrawl Cluster 156657

Generated from local ghcrawl run cluster 156657 for `openclaw/openclaw`.

Display title:

> [Feature]: Support arbitrary workspace files in bootstrap context injection

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #39120, currently open in local store
- latest member update: 2026-04-24T18:56:32.921Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39120 [Feature]: Support arbitrary workspace files in bootstrap context injection
- #39635 [Feature]: Support custom auto-injected bootstrap files via config (extraBootstrapFiles)
- #50876 Feature: bootstrapFiles config key to extend workspace injection set
- #51789 Feature: `workspace.extraFiles` config for injecting additional bootstrap files
- #66576 [Feature]: Configurable workspace file inclusion/exclusion (bootstrapFiles)
