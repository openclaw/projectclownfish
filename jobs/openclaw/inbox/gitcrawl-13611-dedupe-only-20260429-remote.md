---
repo: openclaw/openclaw
cluster_id: gitcrawl-13611-dedupe-only-20260429-remote
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
  - "#17761"
candidates:
  - "#43300"
  - "#50630"
  - "#50631"
  - "#57241"
cluster_refs:
  - "#17761"
  - "#43300"
  - "#47062"
  - "#50630"
  - "#50631"
  - "#51339"
  - "#57241"
  - "#59167"
  - "#64519"
  - "#67524"
  - "#71103"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #17761 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13611 on 2026-04-29."
---

# Gitcrawl Cluster 13611

Generated from local gitcrawl run cluster 13611 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway auth dispatcher blocks all internal services when mode=trusted-proxy (no shared-secret fallback)

Cluster shape from gitcrawl:

- total members: 11
- issues: 9
- pull requests: 2
- open candidates in local store: 4
- representative: #17761, currently closed in local store
- latest member update: 2026-04-28T18:51:15.068243444Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #17761 [Bug]: Gateway auth dispatcher blocks all internal services when mode=trusted-proxy (no shared-secret fallback)
- #47062 [Bug]: Gateway fails to start with tls.enabled: false when tailscale.mode: serve is active
- #51339 fix(gateway): block mode=none auth with tailscale serve remote exposure
- #59167 [Bug]: Localhost trusted-proxy authentication broken
- #64519 [Bug]: Gateway in-process self-call WS handshake fails with token_missing on token-mode loopback
- #67524 [Bug]: trusted-proxy validator rejects `auth.token` even though #54536 requires it for local-direct fallback
- #71103 fix(gateway): isLocalDirectRequest ignores `trustedProxies`, breaks WS pairing for Tailscale Serve / reverse-proxy loopback setups

Open candidates:

- #43300 [Bug]:
- #50630 [Bug]: Tailscale serve + auth.mode=none exposes gateway to full Tailnet without authentication
- #50631 fix: Tailscale serve + auth.mode=none exposes gateway to full...
- #57241 [Bug]: tailscale.mode "serve" overwrites Funnel to tailnet-only on every gateway restart; tailscale.mode "funnel" fails with token auth
