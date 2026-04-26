---
repo: openclaw/openclaw
cluster_id: ghcrawl-156878-autonomous-smoke
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
  - "#56419"
candidates:
  - "#56419"
  - "#62944"
  - "#67889"
cluster_refs:
  - "#56419"
  - "#62944"
  - "#67889"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #56419 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156878 on 2026-04-26."
---

# GHCrawl Cluster 156878

Generated from local ghcrawl run cluster 156878 for `openclaw/openclaw`.

Display title:

> [Bug]: image tool uses a fixed 30s provider timeout and aborts slow image-analysis requests

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #56419, currently open in local store
- latest member update: 2026-04-24T18:56:22.976Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56419 [Bug]: image tool uses a fixed 30s provider timeout and aborts slow image-analysis requests
- #62944 [Bug]: image tool uses hardcoded 30s timeout, ignores tools.media.models.timeoutSeconds config
- #67889 Image understanding tool has hardcoded 60s timeout, ignoring configured timeoutSeconds
