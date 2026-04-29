---
repo: openclaw/openclaw
cluster_id: gitcrawl-2212-dedupe-only-20260429-remote
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
  - "#49285"
candidates:
  - "#64717"
  - "#68304"
cluster_refs:
  - "#40949"
  - "#42094"
  - "#44336"
  - "#48158"
  - "#49285"
  - "#64717"
  - "#68304"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49285 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2212 on 2026-04-29."
---

# Gitcrawl Cluster 2212

Generated from local gitcrawl run cluster 2212 for `openclaw/openclaw`.

Display title:

> fix(telegram): chunk long messages in sendPayload to respect 4096 char limit

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 2
- representative: #49285, currently closed in local store
- latest member update: 2026-04-27T22:51:37.172875103Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40949 Fix: Telegram sendPayload oversized message crash
- #42094 fix: prevent NO_REPLY token from leaking to Telegram
- #44336 fix(telegram): suppress exact NO_REPLY payloads in outbound adapter
- #48158 fix: auto-split long messages at channel limits instead of silent failure
- #49285 fix(telegram): chunk long messages in sendPayload to respect 4096 char limit

Open candidates:

- #64717 fix(telegram): respect configured text chunk limit
- #68304 fix(telegram): suppress NO_REPLY sentinel before sendMessageTelegram API call
