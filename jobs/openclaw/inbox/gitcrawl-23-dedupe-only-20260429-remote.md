---
repo: openclaw/openclaw
cluster_id: gitcrawl-23-dedupe-only-20260429-remote
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
  - "#39206"
candidates:
  - "#18860"
  - "#58360"
  - "#68734"
cluster_refs:
  - "#18860"
  - "#39206"
  - "#39207"
  - "#58360"
  - "#68734"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39206 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 23 on 2026-04-29."
---

# Gitcrawl Cluster 23

Generated from local gitcrawl run cluster 23 for `openclaw/openclaw`.

Display title:

> feat(hooks): add before_llm_call + after_llm_call plugin hooks [claude, human developer oversight]

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 3
- representative: #39206, currently closed in local store
- latest member update: 2026-04-28T22:51:06.985748888Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39206 feat(hooks): add before_llm_call + after_llm_call plugin hooks [claude, human developer oversight]
- #39207 feat(hooks): add before_response_emit hook for output policies [claude, human developer oversight]

Open candidates:

- #18860 feat(agents): expose tools and their schemas via new after_tools_resolved hook [AI-assisted]
- #58360 Plugins: add before_model_call and after_model_call hooks
- #68734 feat(hooks): allow prompt hooks to dynamically narrow tool + skill surface
