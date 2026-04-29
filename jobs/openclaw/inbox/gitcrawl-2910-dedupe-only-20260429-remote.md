---
repo: openclaw/openclaw
cluster_id: gitcrawl-2910-dedupe-only-20260429-remote
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
  - "#45224"
candidates:
  - "#45224"
cluster_refs:
  - "#45224"
  - "#45791"
  - "#52051"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45224 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2910 on 2026-04-29."
---

# Gitcrawl Cluster 2910

Generated from local gitcrawl run cluster 2910 for `openclaw/openclaw`.

Display title:

> Unhandled Playwright assertion error in CRSession._onMessage crashes Gateway

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #45224, currently open in local store
- latest member update: 2026-04-28T04:44:24.394020319Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45791 Playwright browser tool: unhandled promise rejections can destabilize main gateway process
- #52051 [Bug] Playwright shared_worker target causes assertion error in CRBrowser._onAttachedToTarget, crashes Gateway

Open candidates:

- #45224 Unhandled Playwright assertion error in CRSession._onMessage crashes Gateway
