---
repo: openclaw/openclaw
cluster_id: gitcrawl-6752-dedupe-only-20260429-remote
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
  - "#48278"
candidates:
  - "#48278"
  - "#48293"
  - "#48312"
  - "#48335"
  - "#48350"
  - "#48368"
  - "#48406"
cluster_refs:
  - "#48278"
  - "#48293"
  - "#48312"
  - "#48335"
  - "#48350"
  - "#48368"
  - "#48406"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48278 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6752 on 2026-04-29."
---

# Gitcrawl Cluster 6752

Generated from local gitcrawl run cluster 6752 for `openclaw/openclaw`.

Display title:

> Config: scaffold compaction loop guard settings

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #48278, currently open in local store
- latest member update: 2026-04-28T21:55:43.694552945Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48278 Config: scaffold compaction loop guard settings
- #48293 Agents: add transcript tail detector
- #48312 Agents: add compaction guard scorer
- #48335 Agents: hook guard into compaction instructions
- #48350 Agents: add post-compaction validator
- #48368 Agents: add recommend-reset escalation
- #48406 Docs: add saturated session recovery guide
