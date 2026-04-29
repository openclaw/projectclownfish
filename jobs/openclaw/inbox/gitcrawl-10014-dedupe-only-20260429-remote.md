---
repo: openclaw/openclaw
cluster_id: gitcrawl-10014-dedupe-only-20260429-remote
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
  - "#59022"
candidates:
  - "#59022"
cluster_refs:
  - "#59022"
  - "#62609"
  - "#64252"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59022 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 10014 on 2026-04-29."
---

# Gitcrawl Cluster 10014

Generated from local gitcrawl run cluster 10014 for `openclaw/openclaw`.

Display title:

> [Gateway] A2UI host not reachable

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #59022, currently open in local store
- latest member update: 2026-04-28T05:49:57.944573688Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #62609 macOS Canvas default A2UI home fails with Unauthorized / A2UI_HOST_UNAVAILABLE under loopback + Tailscale Serve
- #64252 [Bug]: UNAVAILABLE: A2UI_HOST_UNAVAILABLE

Open candidates:

- #59022 [Gateway] A2UI host not reachable
