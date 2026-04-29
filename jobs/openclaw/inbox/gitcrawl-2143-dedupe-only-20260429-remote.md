---
repo: openclaw/openclaw
cluster_id: gitcrawl-2143-dedupe-only-20260429-remote
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
  - "#54237"
candidates:
  - "#54979"
  - "#60748"
  - "#66759"
cluster_refs:
  - "#54237"
  - "#54340"
  - "#54979"
  - "#60748"
  - "#66759"
  - "#71079"
  - "#71485"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54237 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2143 on 2026-04-29."
---

# Gitcrawl Cluster 2143

Generated from local gitcrawl run cluster 2143 for `openclaw/openclaw`.

Display title:

> feat(feishu): add option to disable/customize card header title for better message list readability

Cluster shape from gitcrawl:

- total members: 7
- issues: 6
- pull requests: 1
- open candidates in local store: 3
- representative: #54237, currently closed in local store
- latest member update: 2026-04-28T22:51:07.210117581Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54237 feat(feishu): add option to disable/customize card header title for better message list readability
- #54340 Feishu streaming card: allow custom header title instead of hardcoded session name
- #71079 [Feature]: Make Feishu card header/footer (resolveCardHeader / resolveCardNote) configurable
- #71485 Feishu card renderMode shows unwanted `main` header/title and there is no config to disable it

Open candidates:

- #54979 feat(feishu): add cardHeader config to hide card title header
- #60748 [Feature]: [Feishu] Card header/footer customization: hide agent label, show elapsed time & completion status, support reply-to context
- #66759 [feishu] Support custom footer fields in message card (e.g. context usage)
