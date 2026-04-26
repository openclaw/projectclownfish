---
repo: openclaw/openclaw
cluster_id: ghcrawl-156751-autonomous-smoke
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
  - "#69257"
candidates:
  - "#69257"
  - "#69259"
  - "#69318"
  - "#70010"
cluster_refs:
  - "#69257"
  - "#69259"
  - "#69318"
  - "#70010"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69257 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156751 on 2026-04-26."
---

# GHCrawl Cluster 156751

Generated from local ghcrawl run cluster 156751 for `openclaw/openclaw`.

Display title:

> docs: add gog tasks commands to SKILL.md

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #69257, currently open in local store
- latest member update: 2026-04-25T07:30:09.442Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #69257 docs: add gog tasks commands to SKILL.md
- #69259 feat(github-copilot): add Claude Opus 4.7 and other models to default list
- #69318 github-copilot: expand default model list with Opus 4.7, 4.5, Haiku 4.5, Gemini 2.5 Pro
- #70010 docs(gog): include Google Tasks clear command
