---
repo: openclaw/openclaw
cluster_id: gitcrawl-308-dedupe-only-20260429-remote
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
  - "#38657"
candidates:
  - "#38657"
  - "#50268"
cluster_refs:
  - "#38657"
  - "#50268"
  - "#69160"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38657 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 308 on 2026-04-29."
---

# Gitcrawl Cluster 308

Generated from local gitcrawl run cluster 308 for `openclaw/openclaw`.

Display title:

> [Bug] Onboard UI fails to overwrite existing provider configurations

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #38657, currently open in local store
- latest member update: 2026-04-28T05:49:59.087349918Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #69160 [Bug]: Onboarding multiple providers overwrites agents.defaults.models

Open candidates:

- #38657 [Bug] Onboard UI fails to overwrite existing provider configurations
- #50268 Bug: Adding a second provider via onboard/configure unconditionally overwrites agents.defaults.model.primary, breaking existing provider (e.g. Bedrock → xAI)
