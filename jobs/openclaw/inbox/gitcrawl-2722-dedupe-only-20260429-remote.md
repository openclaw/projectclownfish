---
repo: openclaw/openclaw
cluster_id: gitcrawl-2722-dedupe-only-20260429-remote
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
  - "#40478"
candidates:
  - "#46056"
cluster_refs:
  - "#40478"
  - "#43988"
  - "#46056"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40478 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2722 on 2026-04-29."
---

# Gitcrawl Cluster 2722

Generated from local gitcrawl run cluster 2722 for `openclaw/openclaw`.

Display title:

> allow-always silently fails for shell builtins (cd, etc.)

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #40478, currently closed in local store
- latest member update: 2026-04-27T22:51:31.355223856Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40478 allow-always silently fails for shell builtins (cd, etc.)
- #43988 [Bug]: "Always Allow" fails silently and does not persist allowlist for unresolved short commands (basenames)

Open candidates:

- #46056 Shell builtins (e.g. cd) always trigger approval gate even when allowlist is configured
