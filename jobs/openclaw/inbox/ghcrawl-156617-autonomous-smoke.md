---
repo: openclaw/openclaw
cluster_id: ghcrawl-156617-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#63987"
candidates:
  - "#63654"
  - "#63987"
  - "#64672"
  - "#66367"
  - "#69027"
  - "#69274"
  - "#70927"
  - "#70957"
cluster_refs:
  - "#63654"
  - "#63987"
  - "#64672"
  - "#66367"
  - "#69027"
  - "#69274"
  - "#70927"
  - "#70957"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #63987 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156617 on 2026-04-26."
---

# GHCrawl Cluster 156617

Generated from local ghcrawl run cluster 156617 for `openclaw/openclaw`.

Display title:

> fix(qwen): allow qwen3.6-plus opt-in on Coding Plan #63654

Cluster shape from ghcrawl:

- total members: 8
- issues: 5
- pull requests: 3
- open candidates in local store: 8
- representative: #63987, currently open in local store
- latest member update: 2026-04-24T18:56:22.395Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63654 Qwen: qwen3.6-plus image understanding blocked on Coding Plan endpoint despite model supporting vision
- #63987 fix(qwen): allow qwen3.6-plus opt-in on Coding Plan #63654
- #64672 qwen3.6-plus unavailable on Qwen Coding Plan Pro subscription
- #66367 fix: expose qwen3.6-plus on Coding Plan endpoints
- #69027 Qwen: qwen3.6-plus incorrectly filtered from Coding Plan endpoint catalog
- #69274 Qwen: qwen3.6-plus is blocked on Coding Plan Pro endpoint despite being officially supported
- #70927 qwen3.6-plus model incorrectly filtered out on DashScope Coding Plan (coding.dashscope.aliyuncs.com)
- #70957 fix(qwen): stop filtering qwen3.6-plus from Coding Plan endpoints
