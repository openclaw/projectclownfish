---
repo: openclaw/openclaw
cluster_id: gitcrawl-71-dedupe-only-20260429-remote
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
  - "#69002"
candidates:
  - "#69002"
cluster_refs:
  - "#68941"
  - "#68943"
  - "#69002"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69002 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 71 on 2026-04-29."
---

# Gitcrawl Cluster 71

Generated from local gitcrawl run cluster 71 for `openclaw/openclaw`.

Display title:

> Fix: skip Homebrew prompt on platforms brew doesn't support (Resolves #68893)

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #69002, currently open in local store
- latest member update: 2026-04-28T22:51:07.158443194Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68941 fix: skip Homebrew prompt on FreeBSD and other non-Linux/macOS platforms
- #68943 fix: skip Homebrew prompt on FreeBSD

Open candidates:

- #69002 Fix: skip Homebrew prompt on platforms brew doesn't support (Resolves #68893)
