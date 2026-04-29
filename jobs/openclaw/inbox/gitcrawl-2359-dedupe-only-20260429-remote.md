---
repo: openclaw/openclaw
cluster_id: gitcrawl-2359-dedupe-only-20260429-remote
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
  - "#54344"
candidates:
  - "#50221"
  - "#54343"
cluster_refs:
  - "#40321"
  - "#50221"
  - "#54343"
  - "#54344"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54344 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2359 on 2026-04-29."
---

# Gitcrawl Cluster 2359

Generated from local gitcrawl run cluster 2359 for `openclaw/openclaw`.

Display title:

> fix(auto-reply): enforce operator.admin scope for /config mutating commands

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #54344, currently closed in local store
- latest member update: 2026-04-28T20:12:58.607016136Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40321 fix(gateway): require operator.admin for /allowlist add|remove via gateway
- #54344 fix(auto-reply): enforce operator.admin scope for /config mutating commands

Open candidates:

- #50221 fix(admscp): cleanup adm scope handling for internal channels
- #54343 fix(auto-reply): require operator.admin for /stop command
