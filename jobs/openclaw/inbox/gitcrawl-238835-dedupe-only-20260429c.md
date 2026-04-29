---
repo: openclaw/openclaw
cluster_id: gitcrawl-238835-dedupe-only-20260429c
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
  - "#65669"
candidates:
  - "#40218"
  - "#65636"
  - "#65669"
  - "#66023"
cluster_refs:
  - "#40218"
  - "#65636"
  - "#65669"
  - "#66023"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65669 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238835 on 2026-04-29."
---

# Gitcrawl Cluster 238835

Generated from local gitcrawl run cluster 238835 for `openclaw/openclaw`.

Display title:

> feat: support custom job IDs in cron add command

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- representative: #65669, currently open in local store
- latest member update: 2026-04-29T08:43:37.007Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40218 cron: optional custom job id and duplicate-id validation
- #65636 [Feature]: cron add: support custom job IDs via --id
- #65669 feat: support custom job IDs in cron add command
- #66023 feat(cron): support custom job ids on add
