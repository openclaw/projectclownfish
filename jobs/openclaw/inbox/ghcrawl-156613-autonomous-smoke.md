---
repo: openclaw/openclaw
cluster_id: ghcrawl-156613-autonomous-smoke
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
  - "#66072"
candidates:
  - "#42797"
  - "#48535"
  - "#62323"
  - "#62481"
  - "#64953"
  - "#64967"
  - "#66072"
  - "#66305"
cluster_refs:
  - "#42797"
  - "#48535"
  - "#62323"
  - "#62481"
  - "#64953"
  - "#64967"
  - "#66072"
  - "#66305"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #66072 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156613 on 2026-04-26."
---

# GHCrawl Cluster 156613

Generated from local ghcrawl run cluster 156613 for `openclaw/openclaw`.

Display title:

> fix: respect models.mode 'replace' in UI model catalog

Cluster shape from ghcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 8
- representative: #66072, currently open in local store
- latest member update: 2026-04-24T18:56:28.341Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42797 Gateway: narrow model picker to available providers
- #48535 fix(gateway): respect models.mode "replace" in dashboard model dropdown
- #62323 fix: filter phantom provider entries inferred from aggregator model ID prefixes
- #62481 fix: filter phantom provider groups inferred from OpenRouter model IDs [AI-assisted]
- #64953 fix(models): respect models.mode=replace in model picker and gateway catalog
- #64967 fix(model-picker,gateway): respect models.mode=replace
- #66072 fix: respect models.mode 'replace' in UI model catalog
- #66305 fix(model-catalog): cache empty catalog loads briefly
