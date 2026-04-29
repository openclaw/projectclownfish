---
repo: openclaw/openclaw
cluster_id: gitcrawl-523-dedupe-only-20260429-remote
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
  - "#39485"
candidates:
  - "#39485"
  - "#45808"
cluster_refs:
  - "#39485"
  - "#41307"
  - "#45808"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39485 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 523 on 2026-04-29."
---

# Gitcrawl Cluster 523

Generated from local gitcrawl run cluster 523 for `openclaw/openclaw`.

Display title:

> fix(routing): map discord account IDs to matching agents

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #39485, currently open in local store
- latest member update: 2026-04-28T22:51:06.903828197Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41307 feat(routing): support peer.id wildcard for kind-level route matching

Open candidates:

- #39485 fix(routing): map discord account IDs to matching agents
- #45808 feat(discord): add explicit agentId binding to Discord accounts
