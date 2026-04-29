---
repo: openclaw/openclaw
cluster_id: gitcrawl-2014-dedupe-only-20260429-remote
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
  - "#39818"
candidates:
  - "#67197"
  - "#69399"
cluster_refs:
  - "#25466"
  - "#39818"
  - "#56852"
  - "#66132"
  - "#67197"
  - "#69399"
  - "#69702"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39818 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2014 on 2026-04-29."
---

# Gitcrawl Cluster 2014

Generated from local gitcrawl run cluster 2014 for `openclaw/openclaw`.

Display title:

> Silent model fallback — no user notification when primary model fails

Cluster shape from gitcrawl:

- total members: 7
- issues: 6
- pull requests: 1
- open candidates in local store: 2
- representative: #39818, currently closed in local store
- latest member update: 2026-04-28T05:49:58.469233836Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #25466 **Feature Request: 模型切换通知**
- #39818 Silent model fallback — no user notification when primary model fails
- #56852 Model fallback: optionally surface compact user-visible fallback notice
- #66132 Model fallback to 3.5-plus when requesting 3.6-plus without clear user notification
- #69702 Feature Request: Notify user on model fallback switch

Open candidates:

- #67197 Feature: allow model fallback notices outside verbose mode
- #69399 feat: add opt-in fallback notices outside verbose mode
