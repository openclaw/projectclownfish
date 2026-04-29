---
repo: openclaw/openclaw
cluster_id: gitcrawl-238814-dedupe-only-20260429c
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
  - "#57256"
candidates:
  - "#44426"
  - "#56968"
  - "#57256"
  - "#59894"
  - "#62599"
cluster_refs:
  - "#44426"
  - "#56968"
  - "#57256"
  - "#59894"
  - "#62599"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57256 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238814 on 2026-04-29."
---

# Gitcrawl Cluster 238814

Generated from local gitcrawl run cluster 238814 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw status falsely reports openclaw-mem0 memory as unavailable when the live gateway plugin is working

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #57256, currently open in local store
- latest member update: 2026-04-28T17:52:27.030Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44426 [Bug]: doctor shows memory probe timeout while memory status is ready (false warning)
- #56968 Bug: status shows 'Memory enabled · unavailable' for third-party memory plugins (memory-lancedb-pro)
- #57256 [Bug]: openclaw status falsely reports openclaw-mem0 memory as unavailable when the live gateway plugin is working
- #59894 [Bug]: doctor falsely reports no active memory plugin while mem0 is loaded and working
- #62599 [Bug]: openclaw status loads memory plugins locally and can report false vector state
