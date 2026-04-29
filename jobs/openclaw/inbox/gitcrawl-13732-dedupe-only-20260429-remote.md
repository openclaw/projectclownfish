---
repo: openclaw/openclaw
cluster_id: gitcrawl-13732-dedupe-only-20260429-remote
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
  - "#51312"
candidates:
  - "#39610"
  - "#51312"
cluster_refs:
  - "#39579"
  - "#39610"
  - "#51312"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51312 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13732 on 2026-04-29."
---

# Gitcrawl Cluster 13732

Generated from local gitcrawl run cluster 13732 for `openclaw/openclaw`.

Display title:

> Support per-agent userTimezone override

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- representative: #51312, currently open in local store
- latest member update: 2026-04-28T22:51:07.471009413Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39579 [Feature]: Support setting userTimezone per agent

Open candidates:

- #39610 config: Support setting userTimezone per agent
- #51312 Support per-agent userTimezone override
