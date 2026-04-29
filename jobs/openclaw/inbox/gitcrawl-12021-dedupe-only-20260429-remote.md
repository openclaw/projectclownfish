---
repo: openclaw/openclaw
cluster_id: gitcrawl-12021-dedupe-only-20260429-remote
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
  - "#65238"
candidates:
  - "#53242"
cluster_refs:
  - "#53242"
  - "#65238"
  - "#65660"
  - "#67773"
  - "#68218"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65238 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 12021 on 2026-04-29."
---

# Gitcrawl Cluster 12021

Generated from local gitcrawl run cluster 12021 for `openclaw/openclaw`.

Display title:

> [Bug]: [chat.history omitted: message too large] placeholder appears frequently in webchat since 2026.4.11

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #65238, currently closed in local store
- latest member update: 2026-04-28T07:04:52.38851308Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #65238 [Bug]: [chat.history omitted: message too large] placeholder appears frequently in webchat since 2026.4.11
- #65660 [Bug]: Persisted TTS audio base64 blobs inflate context token estimate, causing compaction death spiral and session restart
- #67773 WebChat: TTS audio blobs stored inline cause chat.history placeholder noise
- #68218 TTS audio base64 stored inline in session history causes immediate context overflow

Open candidates:

- #53242 Bug: chat.history truncates long assistant messages at 12k chars even when they fit the history budget
