---
repo: openclaw/openclaw
cluster_id: gitcrawl-2572-dedupe-only-20260429-remote
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
  - "#68006"
candidates:
  - "#63930"
cluster_refs:
  - "#63930"
  - "#64363"
  - "#68006"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68006 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2572 on 2026-04-29."
---

# Gitcrawl Cluster 2572

Generated from local gitcrawl run cluster 2572 for `openclaw/openclaw`.

Display title:

> Support Anthropic advisor tool type (advisor_20260301)

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #68006, currently closed in local store
- latest member update: 2026-04-27T22:51:37.76874871Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #64363 [Feature]: feat: native Anthropic Advisor Tool support via model params config
- #68006 Support Anthropic advisor tool type (advisor_20260301)

Open candidates:

- #63930 [Feature] Support Anthropic advisor tool (beta server-side tool)
