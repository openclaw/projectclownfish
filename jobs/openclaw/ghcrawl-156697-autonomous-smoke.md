---
repo: openclaw/openclaw
cluster_id: ghcrawl-156697-autonomous-smoke
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
  - "#56915"
candidates:
  - "#38231"
  - "#39890"
  - "#49408"
  - "#56915"
cluster_refs:
  - "#38231"
  - "#39890"
  - "#49408"
  - "#56915"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #56915 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156697 on 2026-04-26."
---

# GHCrawl Cluster 156697

Generated from local ghcrawl run cluster 156697 for `openclaw/openclaw`.

Display title:

> [Bug]: [Bug] Skills scanner ignores subdirectories under ~/.openclaw/skills/

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #56915, currently open in local store
- latest member update: 2026-04-24T18:56:32.830Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38231 Feature Request: Restore recursive skill scanning for better skill organization
- #39890 [Feature]: Restore recursive skill scanning for better skill organization
- #49408 [Bug]: Symbolic links for skill directories under ~/.openclaw/skills/ are not consistently resolved
- #56915 [Bug]: [Bug] Skills scanner ignores subdirectories under ~/.openclaw/skills/
