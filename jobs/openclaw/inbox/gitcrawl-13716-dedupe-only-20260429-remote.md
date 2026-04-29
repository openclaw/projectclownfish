---
repo: openclaw/openclaw
cluster_id: gitcrawl-13716-dedupe-only-20260429-remote
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
  - "#67926"
candidates:
  - "#59330"
  - "#59336"
  - "#66988"
cluster_refs:
  - "#59330"
  - "#59336"
  - "#66988"
  - "#67926"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67926 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13716 on 2026-04-29."
---

# Gitcrawl Cluster 13716

Generated from local gitcrawl run cluster 13716 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI Raw mode disabled (snapshot cannot safely round-trip raw text).

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 3
- representative: #67926, currently closed in local store
- latest member update: 2026-04-28T07:04:52.272603433Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #67926 [Bug]: Control UI Raw mode disabled (snapshot cannot safely round-trip raw text).

Open candidates:

- #59330 [Bug]: Control UI Raw mode permanently disabled since 2026.3.31 — materializeRuntimeConfig injects undefined keys that break round-trip check
- #59336 fix: Config Raw mode permanently disabled due to round-trip check regression
- #66988 [Config UI] Raw mode silently disabled — snapshot returns raw: null causing forced form switch
