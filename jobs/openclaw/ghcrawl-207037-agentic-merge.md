---
repo: openclaw/openclaw
cluster_id: ghcrawl-207037-agentic-merge
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
  - "#40953"
candidates:
  - "#40953"
  - "#54646"
  - "#56796"
  - "#60661"
cluster_refs:
  - "#40953"
  - "#54646"
  - "#56796"
  - "#60661"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #40953 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 207037 on 2026-04-26."
---

# GHCrawl Cluster 207037

Generated from local ghcrawl run cluster 207037 for `openclaw/openclaw`.

Display title:

> fix(CLI): validate gateway-facing timeout input

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #40953, currently open in local store
- latest member update: 2026-04-26T06:40:56.976Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40953 fix(CLI): validate gateway-facing timeout input
- #54646 fix(cli): validate gateway-rpc --timeout
- #56796 Fail closed on ambiguous gateway agent errors
- #60661 Keep gateway CLI timeout client-side after accepted runs
