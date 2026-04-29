---
repo: openclaw/openclaw
cluster_id: gitcrawl-41-dedupe-only-20260429-remote
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
  - "#36630"
candidates:
  - "#36630"
  - "#49145"
  - "#56791"
cluster_refs:
  - "#36630"
  - "#49145"
  - "#56791"
  - "#57413"
  - "#57806"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #36630 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 41 on 2026-04-29."
---

# Gitcrawl Cluster 41

Generated from local gitcrawl run cluster 41 for `openclaw/openclaw`.

Display title:

> fix(signal): complete bidirectional quote-reply support

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 3
- representative: #36630, currently open in local store
- latest member update: 2026-04-28T22:51:07.331545274Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #57413 feat(whatsapp): add reply quoting via replyToMode
- #57806 Signal quote reply

Open candidates:

- #36630 fix(signal): complete bidirectional quote-reply support
- #49145 feat(signal): reliable reply context, reaction wake, and quoted replies (v2)
- #56791 fix(signal): forward quote metadata to agent context
