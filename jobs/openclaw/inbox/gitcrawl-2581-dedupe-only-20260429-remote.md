---
repo: openclaw/openclaw
cluster_id: gitcrawl-2581-dedupe-only-20260429-remote
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
  - "#70368"
candidates:
  - "#66272"
  - "#70368"
cluster_refs:
  - "#66272"
  - "#70357"
  - "#70368"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #70368 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2581 on 2026-04-29."
---

# Gitcrawl Cluster 2581

Generated from local gitcrawl run cluster 2581 for `openclaw/openclaw`.

Display title:

> fix(security): downgrade trusted_proxies_missing to info on loopback bind

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 2
- representative: #70368, currently open in local store
- latest member update: 2026-04-27T22:51:35.039229223Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #70357 security audit: downgrade `gateway.trusted_proxies_missing` to `info` when `gateway.bind="loopback"`

Open candidates:

- #66272 fix(security): remove false-positive trustedProxies warning on loopback bind
- #70368 fix(security): downgrade trusted_proxies_missing to info on loopback bind
