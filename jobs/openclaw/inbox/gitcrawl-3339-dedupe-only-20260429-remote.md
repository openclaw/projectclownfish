---
repo: openclaw/openclaw
cluster_id: gitcrawl-3339-dedupe-only-20260429-remote
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
  - "#60750"
candidates:
  - "#47892"
  - "#51849"
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
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60750 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3339 on 2026-04-29."
---

# Gitcrawl Cluster 3339

Generated from local gitcrawl run cluster 3339 for `openclaw/openclaw`.

Display title:

> docs: add Everything Openclaw (EO) to showcase [fix checkpoint + plugins]

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #60750, currently closed in local store
- latest member update: 2026-04-28T18:51:14.974448646Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #60750 docs: add Everything Openclaw (EO) to showcase [fix checkpoint + plugins]
- #66644 docs: add EO plugin showcase (141 experts for OpenClaw)

Open candidates:

- #47892 docs(showcase): add CrewClaw deployment platform
- #51849 Docs: add freeCodeCamp OpenClaw full tutorial to showcase
