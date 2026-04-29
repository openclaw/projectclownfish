---
repo: openclaw/openclaw
cluster_id: gitcrawl-2200-dedupe-only-20260429-remote
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
  - "#64760"
candidates:
  - "#64760"
cluster_refs:
  - "#39945"
  - "#51120"
  - "#58743"
  - "#64760"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64760 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2200 on 2026-04-29."
---

# Gitcrawl Cluster 2200

Generated from local gitcrawl run cluster 2200 for `openclaw/openclaw`.

Display title:

> Optimize: Lazy-load skill descriptions in system prompt

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #64760, currently open in local store
- latest member update: 2026-04-28T05:49:56.6802265Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39945 Feature: Progressive Disclosure for Skills (lazy-loading)
- #51120 [Feature]: Skills 按需加载 (lazy load) 模式
- #58743 Feature Request: Lazy Skill Loading + Auto Context Compression

Open candidates:

- #64760 Optimize: Lazy-load skill descriptions in system prompt
