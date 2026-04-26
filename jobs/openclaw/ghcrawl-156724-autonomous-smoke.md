---
repo: openclaw/openclaw
cluster_id: ghcrawl-156724-autonomous-smoke
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
  - "#60750"
candidates:
  - "#47892"
  - "#51849"
  - "#60750"
  - "#66644"
cluster_refs:
  - "#47892"
  - "#51849"
  - "#60750"
  - "#66644"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #60750 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156724 on 2026-04-26."
---

# GHCrawl Cluster 156724

Generated from local ghcrawl run cluster 156724 for `openclaw/openclaw`.

Display title:

> docs: add Everything Openclaw (EO) to showcase [fix checkpoint + plugins]

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #60750, currently open in local store
- latest member update: 2026-04-24T18:56:29.258Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47892 docs(showcase): add CrewClaw deployment platform
- #51849 Docs: add freeCodeCamp OpenClaw full tutorial to showcase
- #60750 docs: add Everything Openclaw (EO) to showcase [fix checkpoint + plugins]
- #66644 docs: add EO plugin showcase (141 experts for OpenClaw)
