---
repo: openclaw/openclaw
cluster_id: ghcrawl-199262-agentic-merge
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
  - "#41105"
candidates:
  - "#39213"
  - "#41105"
  - "#63695"
  - "#71554"
  - "#72038"
cluster_refs:
  - "#39213"
  - "#41105"
  - "#63695"
  - "#71554"
  - "#72038"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #41105 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199262 on 2026-04-26."
---

# GHCrawl Cluster 199262

Generated from local ghcrawl run cluster 199262 for `openclaw/openclaw`.

Display title:

> fix(telegram): align draft streaming with real partials

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #41105, currently open in local store
- latest member update: 2026-04-26T21:32:46.297Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39213 fix(telegram): coalesce streaming preview across tool-call rounds in partial mode
- #41105 fix(telegram): align draft streaming with real partials
- #63695 fix(telegram): finalize the best matching partial preview
- #71554 Fix: telegram preview finalization recovery, issue #71525
- #72038 fix(telegram): send fresh finals for stale previews
