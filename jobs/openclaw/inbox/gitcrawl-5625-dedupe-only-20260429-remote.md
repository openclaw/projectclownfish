---
repo: openclaw/openclaw
cluster_id: gitcrawl-5625-dedupe-only-20260429-remote
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
  - "#44113"
candidates:
  - "#44441"
  - "#53716"
cluster_refs:
  - "#44113"
  - "#44441"
  - "#53716"
  - "#58780"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44113 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 5625 on 2026-04-29."
---

# Gitcrawl Cluster 5625

Generated from local gitcrawl run cluster 5625 for `openclaw/openclaw`.

Display title:

> Onboarding: add opt-in rescue watchdog for self-healing gateway recovery

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #44113, currently closed in local store
- latest member update: 2026-04-28T18:04:42.734705488Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44113 Onboarding: add opt-in rescue watchdog for self-healing gateway recovery
- #58780 Improve gateway:watch errors when dependency package configs are corrupted

Open candidates:

- #44441 docs: add optional macOS gateway watchdog recovery runbook (AI-assisted)
- #53716 feat(gateway): add watchdog + startup error diagnostics (closes #53684)
