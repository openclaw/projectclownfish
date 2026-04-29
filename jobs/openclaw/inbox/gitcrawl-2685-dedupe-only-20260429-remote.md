---
repo: openclaw/openclaw
cluster_id: gitcrawl-2685-dedupe-only-20260429-remote
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
  - "#39046"
candidates:
  - "#39046"
cluster_refs:
  - "#24693"
  - "#39046"
  - "#49234"
  - "#55607"
  - "#55704"
  - "#55747"
  - "#55761"
  - "#68667"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39046 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2685 on 2026-04-29."
---

# Gitcrawl Cluster 2685

Generated from local gitcrawl run cluster 2685 for `openclaw/openclaw`.

Display title:

> AI-assisted: Gateway hook event routing respects target agent session

Cluster shape from gitcrawl:

- total members: 8
- issues: 2
- pull requests: 6
- open candidates in local store: 1
- representative: #39046, currently open in local store
- latest member update: 2026-04-28T21:55:43.816555726Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #24693 Security: Hook completion events leak cross-agent email content to default agent session
- #49234 fix(hooks): suppress system event injection when deliver is false
- #55607 fix(hooks): enforce allowedAgentIds for implicit routing
- #55704 [Bug]: Shared hook fallback can surface silent hook output into the main session
- #55747 fix(hooks): rebind routed session keys to target agent
- #55761 fix(hooks): suppress silent shared-hook fallback while preserving error surfacing
- #68667 security(gateway): route hook completion events to the target agent's session

Open candidates:

- #39046 AI-assisted: Gateway hook event routing respects target agent session
