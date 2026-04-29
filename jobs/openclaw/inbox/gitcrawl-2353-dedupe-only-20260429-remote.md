---
repo: openclaw/openclaw
cluster_id: gitcrawl-2353-dedupe-only-20260429-remote
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
  - "#54109"
candidates:
  - "#47487"
cluster_refs:
  - "#40069"
  - "#47487"
  - "#54109"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54109 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2353 on 2026-04-29."
---

# Gitcrawl Cluster 2353

Generated from local gitcrawl run cluster 2353 for `openclaw/openclaw`.

Display title:

> [Bug]: Bug Report: Agent Incorrectly Reports Missing exec Tool Despite Correct Configuration

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #54109, currently closed in local store
- latest member update: 2026-04-28T05:49:55.609919777Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40069 [Bug]: Tool execution fails silently - claims to execute but no actual calls made
- #54109 [Bug]: Bug Report: Agent Incorrectly Reports Missing exec Tool Despite Correct Configuration

Open candidates:

- #47487 [Bug]: Agent tool profile restrictions not enforced - exec available despite not in alsoAllow list
