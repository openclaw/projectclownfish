---
repo: openclaw/openclaw
cluster_id: gitcrawl-238836-dedupe-only-20260429c
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
  - "#40423"
candidates:
  - "#40423"
  - "#68859"
  - "#72980"
  - "#73349"
cluster_refs:
  - "#40423"
  - "#68859"
  - "#72980"
  - "#73349"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40423 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238836 on 2026-04-29."
---

# Gitcrawl Cluster 238836

Generated from local gitcrawl run cluster 238836 for `openclaw/openclaw`.

Display title:

> feat(runtime): expose agent and session env markers

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #40423, currently open in local store
- latest member update: 2026-04-29T08:43:39.542Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40423 feat(runtime): expose agent and session env markers
- #68859 feat(exec): inject OPENCLAW_SESSION_KEY env var for child processes
- #72980 feat(agents): expose agent session key as $OPENCLAW_SESSION_KEY in exec env
- #73349 feat(exec): inject OPENCLAW_SESSION_KEY and OPENCLAW_AGENT_ID env vars for child processes
