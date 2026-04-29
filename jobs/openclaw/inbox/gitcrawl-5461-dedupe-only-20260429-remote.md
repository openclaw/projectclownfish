---
repo: openclaw/openclaw
cluster_id: gitcrawl-5461-dedupe-only-20260429-remote
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
  - "#43533"
candidates:
  - "#42677"
  - "#50933"
  - "#56362"
  - "#61675"
  - "#71792"
cluster_refs:
  - "#42677"
  - "#43533"
  - "#50933"
  - "#56362"
  - "#61675"
  - "#62094"
  - "#71792"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43533 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 5461 on 2026-04-29."
---

# Gitcrawl Cluster 5461

Generated from local gitcrawl run cluster 5461 for `openclaw/openclaw`.

Display title:

> fix(session): trigger session-memory hook flush on daily/scheduled reset

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 5
- representative: #43533, currently closed in local store
- latest member update: 2026-04-28T22:51:07.29134467Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43533 fix(session): trigger session-memory hook flush on daily/scheduled reset
- #62094 Fix fresh session transcript rotation on reset

Open candidates:

- #42677 Keep bundled session-memory behavior consistent across automatic session rollover
- #50933 Fix session-memory hooks for automatic session resets
- #56362 fix(discord): ensure resetTriggers rotate sessionId and clear history
- #61675 feat: fire session reset hooks for daily and idle resets
- #71792 fix(session): persist memory on auto daily/idle rollover
