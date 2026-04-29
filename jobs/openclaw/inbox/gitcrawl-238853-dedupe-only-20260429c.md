---
repo: openclaw/openclaw
cluster_id: gitcrawl-238853-dedupe-only-20260429c
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
  - "#61667"
candidates:
  - "#59708"
  - "#61233"
  - "#61451"
  - "#61667"
cluster_refs:
  - "#59708"
  - "#61233"
  - "#61451"
  - "#61667"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61667 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238853 on 2026-04-29."
---

# Gitcrawl Cluster 238853

Generated from local gitcrawl run cluster 238853 for `openclaw/openclaw`.

Display title:

> [Bug]: Exact command hashing in `exec` approvals renders `allow-always` ineffective for dynamic commands

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #61667, currently open in local store
- latest member update: 2026-04-24T18:56:24.438Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59708 [Bug]: exec-approvals: `ask: off` and `security: full` in exec-approvals.json not respected on Windows
- #61233 Bug: allow-always does not persist — each command triggers new approval
- #61451 exec allowlist pattern matching broken — commands with args fail with allowlist miss
- #61667 [Bug]: Exact command hashing in `exec` approvals renders `allow-always` ineffective for dynamic commands
