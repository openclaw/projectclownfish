---
repo: openclaw/openclaw
cluster_id: ghcrawl-156622-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#40330"
candidates:
  - "#39213"
  - "#40330"
  - "#41105"
  - "#42479"
  - "#47631"
  - "#61226"
  - "#63695"
cluster_refs:
  - "#39213"
  - "#40330"
  - "#41105"
  - "#42479"
  - "#47631"
  - "#61226"
  - "#63695"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #40330 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156622 on 2026-04-26."
---

# GHCrawl Cluster 156622

Generated from local ghcrawl run cluster 156622 for `openclaw/openclaw`.

Display title:

> fix(telegram): coalesce DM streaming into single message in partial mode

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #40330, currently open in local store
- latest member update: 2026-04-25T07:30:10.337Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39213 fix(telegram): coalesce streaming preview across tool-call rounds in partial mode
- #40330 fix(telegram): coalesce DM streaming into single message in partial mode
- #41105 fix(telegram): align draft streaming with real partials
- #42479 fix(telegram): restore draft-style auto transport for DM answer preview
- #47631 fix(telegram): restore native draft streaming for DM answer lanes
- #61226 fix(telegram): finalize the latest matching partial preview
- #63695 fix(telegram): finalize the best matching partial preview
