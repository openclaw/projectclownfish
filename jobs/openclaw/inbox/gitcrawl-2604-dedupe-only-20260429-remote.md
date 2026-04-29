---
repo: openclaw/openclaw
cluster_id: gitcrawl-2604-dedupe-only-20260429-remote
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
  - "#10213"
candidates:
  - "#10213"
  - "#54041"
  - "#65287"
cluster_refs:
  - "#10213"
  - "#54041"
  - "#65287"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #10213 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2604 on 2026-04-29."
---

# Gitcrawl Cluster 2604

Generated from local gitcrawl run cluster 2604 for `openclaw/openclaw`.

Display title:

> feat: Add Anthropic server-side compaction API support

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #10213, currently open in local store
- latest member update: 2026-04-28T22:51:07.248855072Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #10213 feat: Add Anthropic server-side compaction API support
- #54041 Feature Request: Anthropic Context Management Beta Passthrough
- #65287 Add Anthropic native compaction and mixed prompt-cache TTL support
