---
repo: openclaw/openclaw
cluster_id: ghcrawl-207050-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#57374"
candidates:
  - "#48472"
  - "#50662"
  - "#57374"
  - "#59439"
cluster_refs:
  - "#48472"
  - "#50662"
  - "#57374"
  - "#59439"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #57374 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 207050 on 2026-04-26."
---

# GHCrawl Cluster 207050

Generated from local ghcrawl run cluster 207050 for `openclaw/openclaw`.

Display title:

> fix(gateway): use configured probe auth during restart health checks

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #57374, currently open in local store
- latest member update: 2026-04-24T18:56:29.119Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48472 (fix) gateway restart health timeout
- #50662 [codex] Fix restart probe auth and rate-limit fallback rotation
- #57374 fix(gateway): use configured probe auth during restart health checks
- #59439 Use daemon auth for unmanaged restart probes
