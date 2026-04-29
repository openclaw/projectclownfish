---
repo: openclaw/openclaw
cluster_id: gitcrawl-7680-dedupe-only-20260429-remote
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
  - "#51166"
candidates:
  - "#58277"
cluster_refs:
  - "#51166"
  - "#51185"
  - "#58277"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51166 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 7680 on 2026-04-29."
---

# Gitcrawl Cluster 7680

Generated from local gitcrawl run cluster 7680 for `openclaw/openclaw`.

Display title:

> fix(sandbox): pull pre-built image from GHCR instead of plain debian:bookworm-slim

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- representative: #51166, currently closed in local store
- latest member update: 2026-04-28T09:02:55.726800675Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #51166 fix(sandbox): pull pre-built image from GHCR instead of plain debian:bookworm-slim
- #51185 ensureDockerImage() silently overwrites custom sandbox image with plain debian

Open candidates:

- #58277 fix(sandbox): add { once: true } to Docker abort signal listener
