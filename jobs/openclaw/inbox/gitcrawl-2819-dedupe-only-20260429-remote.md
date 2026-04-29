---
repo: openclaw/openclaw
cluster_id: gitcrawl-2819-dedupe-only-20260429-remote
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
  - "#42808"
candidates:
  - "#42841"
  - "#47342"
cluster_refs:
  - "#42792"
  - "#42808"
  - "#42841"
  - "#44493"
  - "#47342"
  - "#48566"
  - "#53090"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42808 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2819 on 2026-04-29."
---

# Gitcrawl Cluster 2819

Generated from local gitcrawl run cluster 2819 for `openclaw/openclaw`.

Display title:

> Node pairing through SSH tunnel: 401 on WebSocket upgrade

Cluster shape from gitcrawl:

- total members: 7
- issues: 6
- pull requests: 1
- open candidates in local store: 2
- representative: #42808, currently closed in local store
- latest member update: 2026-04-28T19:37:22.002764518Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42792 node run: add --header flag for Cloudflare Zero Trust service tokens
- #42808 Node pairing through SSH tunnel: 401 on WebSocket upgrade
- #44493 [Bug]: Gateway token not auto-configured when Paperclip openclaw_gateway agents connect
- #48566 Docs/UX: openclaw_gateway device pairing requirement is undocumented — new Paperclip users hit silent run failures
- #53090 Paperclip openclaw_gateway agents: WebSocket closed immediately even with auth=none

Open candidates:

- #42841 Node run/install: add --header for WebSocket upgrade (Cloudflare Zero Trust)
- #47342 Node host: no SSH transport support + challenge auth fails behind reverse proxy
