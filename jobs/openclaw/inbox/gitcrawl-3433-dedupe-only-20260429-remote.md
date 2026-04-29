---
repo: openclaw/openclaw
cluster_id: gitcrawl-3433-dedupe-only-20260429-remote
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
  - "#65504"
candidates:
  - "#65504"
  - "#65505"
cluster_refs:
  - "#65504"
  - "#65505"
  - "#65507"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65504 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3433 on 2026-04-29."
---

# Gitcrawl Cluster 3433

Generated from local gitcrawl run cluster 3433 for `openclaw/openclaw`.

Display title:

> Live gateway false Anthropic timeouts and responsiveness degradation

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #65504, currently open in local store
- latest member update: 2026-04-28T22:51:07.245255206Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #65507 LCM hot-path scheduling and post-turn latency amplify live gateway timeouts

Open candidates:

- #65504 Live gateway false Anthropic timeouts and responsiveness degradation
- #65505 Timeout attribution and auth-profile poisoning in embedded runs
