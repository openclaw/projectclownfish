---
repo: openclaw/openclaw
cluster_id: ghcrawl-156636-autonomous-smoke
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
  - "#39046"
candidates:
  - "#24693"
  - "#39046"
  - "#49234"
  - "#55704"
  - "#55761"
  - "#68667"
cluster_refs:
  - "#24693"
  - "#39046"
  - "#49234"
  - "#55704"
  - "#55761"
  - "#68667"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39046 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156636 on 2026-04-26."
---

# GHCrawl Cluster 156636

Generated from local ghcrawl run cluster 156636 for `openclaw/openclaw`.

Display title:

> AI-assisted: Gateway hook event routing respects target agent session

Cluster shape from ghcrawl:

- total members: 6
- issues: 2
- pull requests: 4
- open candidates in local store: 6
- representative: #39046, currently open in local store
- latest member update: 2026-04-24T18:56:33.029Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #24693 Security: Hook completion events leak cross-agent email content to default agent session
- #39046 AI-assisted: Gateway hook event routing respects target agent session
- #49234 fix(hooks): suppress system event injection when deliver is false
- #55704 [Bug]: Shared hook fallback can surface silent hook output into the main session
- #55761 fix(hooks): suppress silent shared-hook fallback while preserving error surfacing
- #68667 security(gateway): route hook completion events to the target agent's session
