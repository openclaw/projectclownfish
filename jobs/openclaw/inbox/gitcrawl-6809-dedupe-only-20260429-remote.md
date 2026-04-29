---
repo: openclaw/openclaw
cluster_id: gitcrawl-6809-dedupe-only-20260429-remote
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
  - "#48404"
candidates:
  - "#48404"
  - "#60670"
  - "#63740"
cluster_refs:
  - "#48404"
  - "#60670"
  - "#63740"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48404 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6809 on 2026-04-29."
---

# Gitcrawl Cluster 6809

Generated from local gitcrawl run cluster 6809 for `openclaw/openclaw`.

Display title:

> [Bug]: OpenClaw v2026.3.13 fails to start on the target system due to a **segmentation fault**

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #48404, currently open in local store
- latest member update: 2026-04-28T21:55:43.690610576Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48404 [Bug]: OpenClaw v2026.3.13 fails to start on the target system due to a **segmentation fault**
- #60670 [Bug]: getting seg fault on macos
- #63740 [Bug]: Source code corruption in dist/run-main-*.js (SyntaxError: Unexpected number)
