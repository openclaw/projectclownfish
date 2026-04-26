---
repo: openclaw/openclaw
cluster_id: ghcrawl-156644-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#51070"
candidates:
  - "#51070"
  - "#54426"
  - "#59190"
  - "#60839"
  - "#63379"
  - "#69638"
cluster_refs:
  - "#51070"
  - "#54426"
  - "#59190"
  - "#60839"
  - "#63379"
  - "#69638"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51070 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156644 on 2026-04-26."
---

# GHCrawl Cluster 156644

Generated from local ghcrawl run cluster 156644 for `openclaw/openclaw`.

Display title:

> auth: allow local loopback connections to bypass trusted-proxy auth

Cluster shape from ghcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 6
- representative: #51070, currently open in local store
- latest member update: 2026-04-24T18:56:29.194Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51070 auth: allow local loopback connections to bypass trusted-proxy auth
- #54426 fix(gateway): allow local connections in trusted-proxy auth mode
- #59190 fix(auth): enhance trusted-proxy handling for non-loopback forwarded IPs
- #60839 [Fix] Don't deny local reverse proxy
- #63379 Feature/trusted proxy loopback
- #69638 fix(gateway): accept Rabbit token payloads in password mode
