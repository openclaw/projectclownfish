---
repo: openclaw/openclaw
cluster_id: ghcrawl-156906-autonomous-smoke
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
  - "#61295"
candidates:
  - "#61295"
  - "#61886"
  - "#67168"
cluster_refs:
  - "#61295"
  - "#61886"
  - "#67168"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #61295 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156906 on 2026-04-26."
---

# GHCrawl Cluster 156906

Generated from local ghcrawl run cluster 156906 for `openclaw/openclaw`.

Display title:

> [Feature]:  [Bug] --log-file and logging.file config ignored, logs always default to /tmp/openclaw/

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #61295, currently open in local store
- latest member update: 2026-04-24T18:56:23.507Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #61295 [Feature]:  [Bug] --log-file and logging.file config ignored, logs always default to /tmp/openclaw/
- #61886 [Bug]: logging.file config setting is ignored — logger always writes to /tmp/openclaw
- #67168 [Bug]: logging.file config is read but not applied — logs always write to default /tmp/openclaw/
