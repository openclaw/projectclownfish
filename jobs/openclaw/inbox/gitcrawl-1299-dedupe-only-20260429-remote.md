---
repo: openclaw/openclaw
cluster_id: gitcrawl-1299-dedupe-only-20260429-remote
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
  - "#70643"
candidates:
  - "#70643"
cluster_refs:
  - "#40471"
  - "#64385"
  - "#70643"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #70643 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1299 on 2026-04-29."
---

# Gitcrawl Cluster 1299

Generated from local gitcrawl run cluster 1299 for `openclaw/openclaw`.

Display title:

> Concurrent writes to openclaw.json produce invalid (concatenated) JSON; gateway refuses config until auto-restore

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #70643, currently open in local store
- latest member update: 2026-04-28T05:49:57.989734944Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40471 auth-profiles.json write collision causes JSON corruption and agent failure
- #64385 [Bug]: openclaw.json config randomly truncated to 379 bytes (API keys lost)

Open candidates:

- #70643 Concurrent writes to openclaw.json produce invalid (concatenated) JSON; gateway refuses config until auto-restore
