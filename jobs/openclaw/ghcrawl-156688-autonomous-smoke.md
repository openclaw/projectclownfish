---
repo: openclaw/openclaw
cluster_id: ghcrawl-156688-autonomous-smoke
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
  - "#65248"
candidates:
  - "#63656"
  - "#65248"
  - "#66407"
  - "#68407"
  - "#68617"
cluster_refs:
  - "#63656"
  - "#65248"
  - "#66407"
  - "#68407"
  - "#68617"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65248 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156688 on 2026-04-26."
---

# GHCrawl Cluster 156688

Generated from local ghcrawl run cluster 156688 for `openclaw/openclaw`.

Display title:

> fix(acp): bypass bound slash commands to local handlers

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #65248, currently open in local store
- latest member update: 2026-04-24T18:56:21.700Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63656 fix(acp): route /acp lifecycle commands to local handlers
- #65248 fix(acp): bypass bound slash commands to local handlers
- #66407 fix(acp): bypass ACP dispatch for /acp text commands in bound threads
- #68407 fix(acp): bypass agent dispatch for /status, /acp, and /unfocus commands
- #68617 fix(acp): keep /acp commands local in bound sessions
