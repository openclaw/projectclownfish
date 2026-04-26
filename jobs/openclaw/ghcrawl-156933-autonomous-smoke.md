---
repo: openclaw/openclaw
cluster_id: ghcrawl-156933-autonomous-smoke
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
  - "#7834"
candidates:
  - "#7834"
  - "#69106"
cluster_refs:
  - "#7834"
  - "#69106"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #7834 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156933 on 2026-04-26."
---

# GHCrawl Cluster 156933

Generated from local ghcrawl run cluster 156933 for `openclaw/openclaw`.

Display title:

> Add thorough QA tests for observability ingestor

Cluster shape from ghcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #7834, currently open in local store
- latest member update: 2026-04-26T00:46:51.575Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #7834 Add thorough QA tests for observability ingestor
- #69106 test(observability): add ingestor QA integration suite
