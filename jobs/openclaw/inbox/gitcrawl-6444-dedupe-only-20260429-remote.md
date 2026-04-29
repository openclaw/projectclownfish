---
repo: openclaw/openclaw
cluster_id: gitcrawl-6444-dedupe-only-20260429-remote
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
  - "#47029"
candidates:
  - "#47029"
  - "#49751"
cluster_refs:
  - "#47029"
  - "#48950"
  - "#49751"
  - "#51172"
  - "#52142"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47029 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6444 on 2026-04-29."
---

# Gitcrawl Cluster 6444

Generated from local gitcrawl run cluster 6444 for `openclaw/openclaw`.

Display title:

> fix(status): support command secret refs and loopback identity

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 2
- representative: #47029, currently open in local store
- latest member update: 2026-04-28T22:51:07.504702986Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48950 fix(gateway): resolve {} empty auth trap causing scope rejection in loopback probes
- #51172 fix(gateway): enable device identity for loopback probes when token SecretRef is unresolved (#51016)
- #52142 fix(gateway): extend websocket handshake timeout for loopback clients

Open candidates:

- #47029 fix(status): support command secret refs and loopback identity
- #49751 fix: clear WS handshake timer early, increase timeouts
