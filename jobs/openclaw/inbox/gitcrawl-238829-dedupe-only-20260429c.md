---
repo: openclaw/openclaw
cluster_id: gitcrawl-238829-dedupe-only-20260429c
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
  - "#66324"
candidates:
  - "#66317"
  - "#66319"
  - "#66323"
  - "#66324"
  - "#66325"
cluster_refs:
  - "#66317"
  - "#66319"
  - "#66323"
  - "#66324"
  - "#66325"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66324 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238829 on 2026-04-29."
---

# Gitcrawl Cluster 238829

Generated from local gitcrawl run cluster 238829 for `openclaw/openclaw`.

Display title:

> 🔥🔥🔥一键部署龙虾，小白群体快来白嫖

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #66324, currently open in local store
- latest member update: 2026-04-24T18:56:21.239Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #66317 🔥🔥🔥一键部署龙虾OpenClaw🦞最近方案
- #66319 🔥🔥🔥一键部署龙虾，适合小白群体
- #66323 🔥免费白嫖龙虾算力
- #66324 🔥🔥🔥一键部署龙虾，小白群体快来白嫖
- #66325 🔥🔥🔥最适合小白的一键部署方案
