---
repo: openclaw/openclaw
cluster_id: gitcrawl-27-dedupe-only-20260429-remote
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
  - "#68813"
candidates:
  - "#39766"
cluster_refs:
  - "#39766"
  - "#68813"
  - "#69342"
  - "#69464"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68813 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 27 on 2026-04-29."
---

# Gitcrawl Cluster 27

Generated from local gitcrawl run cluster 27 for `openclaw/openclaw`.

Display title:

> fix(config): validate plugin-owned model providers

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #68813, currently closed in local store
- latest member update: 2026-04-28T22:51:06.880222968Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68813 fix(config): validate plugin-owned model providers
- #69342 fix: support per-model provider extraParams
- #69464 fix(ollama): honor params.num_ctx on configured models (#44550)

Open candidates:

- #39766 fix(config): make models.providers.<id>.models optional to allow credential-only entries
