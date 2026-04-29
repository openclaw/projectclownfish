---
repo: openclaw/openclaw
cluster_id: gitcrawl-3164-dedupe-only-20260429-remote
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
  - "#53676"
candidates:
  - "#53676"
cluster_refs:
  - "#53676"
  - "#67221"
  - "#71145"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53676 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3164 on 2026-04-29."
---

# Gitcrawl Cluster 3164

Generated from local gitcrawl run cluster 3164 for `openclaw/openclaw`.

Display title:

> fix(googlechat): harden webhook auth matching and diagnostics

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #53676, currently open in local store
- latest member update: 2026-04-28T07:59:25.690770621Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #67221 googlechat: fix add-on token principal check for email-based appPrincipal
- #71145 fix(googlechat): log webhook auth reject reasons and warn on appPrincipal misconfig

Open candidates:

- #53676 fix(googlechat): harden webhook auth matching and diagnostics
