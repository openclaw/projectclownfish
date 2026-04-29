---
repo: openclaw/openclaw
cluster_id: gitcrawl-238805-dedupe-only-20260429b
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
  - "#60400"
candidates:
  - "#59833"
  - "#60400"
  - "#60646"
  - "#62985"
  - "#72906"
  - "#73602"
cluster_refs:
  - "#59833"
  - "#60400"
  - "#60646"
  - "#62985"
  - "#72906"
  - "#73602"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60400 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238805 on 2026-04-29."
---

# Gitcrawl Cluster 238805

Generated from local gitcrawl run cluster 238805 for `openclaw/openclaw`.

Display title:

> [Bug]: All channels silently fail to initialize on 2026.4.2 (Telegram confirmed)

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #60400, currently open in local store
- latest member update: 2026-04-28T17:52:27.037Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59833 [Bug]: Telegram polling stalls on startup in 2026.4.1 (WSL2)
- #60400 [Bug]: All channels silently fail to initialize on 2026.4.2 (Telegram confirmed)
- #60646 [Bug]: Channels (Telegram/WhatsApp) not loading in v2026.4.2 - empty table in status
- #62985 [Bug]: Telegram multi-account config error
- #72906 [Bug]: status channel summary is empty while Telegram health probe is OK on v2026.4.25
- #73602 [Bug]: WhatsApp flaps and Telegram polling stalls on WSL2 in 2026.4.26
