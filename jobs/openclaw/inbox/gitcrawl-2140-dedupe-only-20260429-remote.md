---
repo: openclaw/openclaw
cluster_id: gitcrawl-2140-dedupe-only-20260429-remote
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
  - "#51070"
candidates:
  - "#54718"
  - "#69638"
cluster_refs:
  - "#51070"
  - "#54426"
  - "#54718"
  - "#59190"
  - "#60839"
  - "#63379"
  - "#64122"
  - "#69638"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51070 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2140 on 2026-04-29."
---

# Gitcrawl Cluster 2140

Generated from local gitcrawl run cluster 2140 for `openclaw/openclaw`.

Display title:

> auth: allow local loopback connections to bypass trusted-proxy auth

Cluster shape from gitcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 2
- representative: #51070, currently closed in local store
- latest member update: 2026-04-28T17:25:21.197891175Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #51070 auth: allow local loopback connections to bypass trusted-proxy auth
- #54426 fix(gateway): allow local connections in trusted-proxy auth mode
- #59190 fix(auth): enhance trusted-proxy handling for non-loopback forwarded IPs
- #60839 [Fix] Don't deny local reverse proxy
- #63379 Feature/trusted proxy loopback
- #64122 fix(gateway): allow password fallback for trusted-proxy auth mode

Open candidates:

- #54718 Pr 33819 fallback fixes
- #69638 fix(gateway): accept Rabbit token payloads in password mode
