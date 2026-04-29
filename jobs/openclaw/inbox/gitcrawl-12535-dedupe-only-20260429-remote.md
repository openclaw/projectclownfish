---
repo: openclaw/openclaw
cluster_id: gitcrawl-12535-dedupe-only-20260429-remote
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
  - "#66862"
candidates:
  - "#66862"
  - "#69426"
cluster_refs:
  - "#66862"
  - "#69426"
  - "#70863"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66862 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 12535 on 2026-04-29."
---

# Gitcrawl Cluster 12535

Generated from local gitcrawl run cluster 12535 for `openclaw/openclaw`.

Display title:

> fix: return 1M context for Anthropic Opus/Sonnet 4 without requiring context1m flag

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #66862, currently open in local store
- latest member update: 2026-04-27T22:51:38.944357106Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #70863 fix: enable claude-cli 1m context override

Open candidates:

- #66862 fix: return 1M context for Anthropic Opus/Sonnet 4 without requiring context1m flag
- #69426 agents/context: unlock context1m on proxied Anthropic 1M-capable models (#69353)
