---
repo: openclaw/openclaw
cluster_id: ghcrawl-156833-autonomous-smoke
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
  - "#48388"
candidates:
  - "#48388"
  - "#59409"
  - "#66500"
cluster_refs:
  - "#48388"
  - "#59409"
  - "#66500"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48388 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156833 on 2026-04-26."
---

# GHCrawl Cluster 156833

Generated from local ghcrawl run cluster 156833 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu file names with Chinese characters are garbled (UTF-8 encoding issue)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #48388, currently open in local store
- latest member update: 2026-04-24T18:56:24.578Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48388 [Bug]: Feishu file names with Chinese characters are garbled (UTF-8 encoding issue)
- #59409 [Bug]: Feishu plugin: Chinese filenames in attachments display as garbled (Latin-1 encoding issue)
- #66500 [Bug]: 1. Feishu channel: Chinese filenames garbled when saving inbound media (UTF-8 → Latin-1 mojibake)
