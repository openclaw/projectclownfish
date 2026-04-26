---
repo: openclaw/openclaw
cluster_id: ghcrawl-156931-autonomous-smoke
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
  - "#69871"
candidates:
  - "#69871"
  - "#70604"
  - "#70886"
cluster_refs:
  - "#69871"
  - "#70604"
  - "#70886"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69871 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156931 on 2026-04-26."
---

# GHCrawl Cluster 156931

Generated from local ghcrawl run cluster 156931 for `openclaw/openclaw`.

Display title:

> [Bug] Image tool uses openai-completions instead of provider-zai-endpoint, causing 404 on zai VL models

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #69871, currently open in local store
- latest member update: 2026-04-24T18:56:18.468Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #69871 [Bug] Image tool uses openai-completions instead of provider-zai-endpoint, causing 404 on zai VL models
- #70604 [Bug]: Image tool ignores user-configured provider baseUrl for zai/glm-5v-turbo, routes to vercel-ai-gateway instead (404)
- #70886 Image tool returns 404 for ZAI vision models (zai/glm-4.6v)
