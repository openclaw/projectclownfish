---
repo: openclaw/openclaw
cluster_id: gitcrawl-157-dedupe-only-20260429-remote
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
  - "#66583"
candidates:
  - "#66583"
cluster_refs:
  - "#66583"
  - "#69209"
  - "#70475"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66583 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 157 on 2026-04-29."
---

# Gitcrawl Cluster 157

Generated from local gitcrawl run cluster 157 for `openclaw/openclaw`.

Display title:

> feat(memory-core): add dreaming.model config field for per-sweep model override

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- representative: #66583, currently open in local store
- latest member update: 2026-04-28T05:49:57.854988306Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #69209 feat(memory-core): add dreaming.model override
- #70475 Feature: Configure dedicated LLM model for Dreaming subsystem

Open candidates:

- #66583 feat(memory-core): add dreaming.model config field for per-sweep model override
