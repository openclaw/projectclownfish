---
repo: openclaw/openclaw
cluster_id: gitcrawl-73-dedupe-only-20260429-remote
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
  - "#69257"
candidates:
  - "#70010"
cluster_refs:
  - "#69094"
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
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69257 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 73 on 2026-04-29."
---

# Gitcrawl Cluster 73

Generated from local gitcrawl run cluster 73 for `openclaw/openclaw`.

Display title:

> docs: add gog tasks commands to SKILL.md

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 1
- representative: #69257, currently closed in local store
- latest member update: 2026-04-28T22:51:07.132460054Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #69094 [Feature]: gog SKILL.md
- #69257 docs: add gog tasks commands to SKILL.md
- #69259 feat(github-copilot): add Claude Opus 4.7 and other models to default list
- #69318 github-copilot: expand default model list with Opus 4.7, 4.5, Haiku 4.5, Gemini 2.5 Pro

Open candidates:

- #70010 docs(gog): include Google Tasks clear command
