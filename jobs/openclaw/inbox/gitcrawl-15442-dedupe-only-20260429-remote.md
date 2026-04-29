---
repo: openclaw/openclaw
cluster_id: gitcrawl-15442-dedupe-only-20260429-remote
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
  - "#53235"
candidates:
  - "#67779"
cluster_refs:
  - "#53235"
  - "#62386"
  - "#67779"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53235 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 15442 on 2026-04-29."
---

# Gitcrawl Cluster 15442

Generated from local gitcrawl run cluster 15442 for `openclaw/openclaw`.

Display title:

> [webchat] Agent responses not rendering — messages disappear from UI

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #53235, currently closed in local store
- latest member update: 2026-04-28T05:49:57.509821289Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #53235 [webchat] Agent responses not rendering — messages disappear from UI
- #62386 Control UI: Agent replies not displayed in chat window

Open candidates:

- #67779 [Bug]: WebChat rendering disfunction  with multiple agents
