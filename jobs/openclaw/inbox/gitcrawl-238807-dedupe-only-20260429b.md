---
repo: openclaw/openclaw
cluster_id: gitcrawl-238807-dedupe-only-20260429b
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
  - "#46733"
candidates:
  - "#11057"
  - "#46733"
  - "#65360"
  - "#66766"
  - "#67530"
cluster_refs:
  - "#11057"
  - "#46733"
  - "#65360"
  - "#66766"
  - "#67530"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46733 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238807 on 2026-04-29."
---

# Gitcrawl Cluster 238807

Generated from local gitcrawl run cluster 238807 for `openclaw/openclaw`.

Display title:

> [Bug]: opus 4.6 1M context now allowed with oauth, broken in openclaw

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #46733, currently open in local store
- latest member update: 2026-04-29T08:43:40.389Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #11057 Support for 1M context window with Claude Max subscription
- #46733 [Bug]: opus 4.6 1M context now allowed with oauth, broken in openclaw
- #65360 [Bug]: Control UI and session_status display incorrect context window for claude-sonnet-4-6
- #66766 [Bug]: Session context limit shows 200k instead of 1M for Anthropic Opus/Sonnet 4 models
- #67530 UI: Context window percentage meter always shows 0% for Anthropic/Claude models
