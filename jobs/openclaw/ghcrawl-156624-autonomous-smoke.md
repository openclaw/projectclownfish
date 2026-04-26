---
repo: openclaw/openclaw
cluster_id: ghcrawl-156624-autonomous-smoke
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
  - "#48072"
candidates:
  - "#41624"
  - "#47660"
  - "#48072"
  - "#52176"
  - "#55933"
  - "#60052"
  - "#63959"
cluster_refs:
  - "#41624"
  - "#47660"
  - "#48072"
  - "#52176"
  - "#55933"
  - "#60052"
  - "#63959"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48072 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156624 on 2026-04-26."
---

# GHCrawl Cluster 156624

Generated from local ghcrawl run cluster 156624 for `openclaw/openclaw`.

Display title:

> fix(docker): resolve volume permission denied (EACCES) for non-root deployments

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #48072, currently open in local store
- latest member update: 2026-04-24T18:56:28.839Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41624 fix(docker): Change ownership of cache directory
- #47660 Dockerfile: simplify multi-stage build
- #48072 fix(docker): resolve volume permission denied (EACCES) for non-root deployments
- #52176 feat(docker): add optional uv installation for skills and extensions
- #55933 fix(docker): add pnpm store cache mount to prune step
- #60052 fix(docker): npm lack of perms to run install in docker
- #63959 fix(docker): pre-create .openclaw dir with node ownership for named volumes
