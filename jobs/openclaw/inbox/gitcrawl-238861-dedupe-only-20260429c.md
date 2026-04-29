---
repo: openclaw/openclaw
cluster_id: gitcrawl-238861-dedupe-only-20260429c
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
  - "#68667"
candidates:
  - "#24693"
  - "#39046"
  - "#68667"
cluster_refs:
  - "#24693"
  - "#39046"
  - "#68667"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68667 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238861 on 2026-04-29."
---

# Gitcrawl Cluster 238861

Generated from local gitcrawl run cluster 238861 for `openclaw/openclaw`.

Display title:

> security(gateway): route hook completion events to the target agent's session

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #68667, currently open in local store
- latest member update: 2026-04-24T18:56:33.029Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #24693 Security: Hook completion events leak cross-agent email content to default agent session
- #39046 AI-assisted: Gateway hook event routing respects target agent session
- #68667 security(gateway): route hook completion events to the target agent's session
