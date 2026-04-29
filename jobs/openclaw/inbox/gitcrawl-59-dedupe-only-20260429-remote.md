---
repo: openclaw/openclaw
cluster_id: gitcrawl-59-dedupe-only-20260429-remote
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
  - "#66003"
candidates:
  - "#63829"
  - "#67584"
cluster_refs:
  - "#63829"
  - "#66003"
  - "#67584"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66003 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 59 on 2026-04-29."
---

# Gitcrawl Cluster 59

Generated from local gitcrawl run cluster 59 for `openclaw/openclaw`.

Display title:

> memory-wiki: per-agent vault path isolation for multi-tenant deployments

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- representative: #66003, currently closed in local store
- latest member update: 2026-04-28T16:45:59.852434003Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #66003 memory-wiki: per-agent vault path isolation for multi-tenant deployments

Open candidates:

- #63829 [Feature]: Per-agent memory-wiki vault configuration
- #67584 feat(memory-wiki): per-org vaults via ctx-aware vault.path templating
