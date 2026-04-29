---
repo: openclaw/openclaw
cluster_id: gitcrawl-13669-dedupe-only-20260429-remote
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
  - "#50871"
candidates:
  - "#51051"
cluster_refs:
  - "#50871"
  - "#50970"
  - "#51051"
  - "#51053"
  - "#65772"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50871 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13669 on 2026-04-29."
---

# Gitcrawl Cluster 13669

Generated from local gitcrawl run cluster 13669 for `openclaw/openclaw`.

Display title:

> CLI: include connected nodes in nodes list

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 1
- representative: #50871, currently closed in local store
- latest member update: 2026-04-27T22:51:29.474983387Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50871 CLI: include connected nodes in nodes list
- #50970 fix(cli): keep nodes list consistent with live paired nodes
- #51053 fix(cli): align nodes list with node status
- #65772 fix(cli): keep nodes list aligned with nodes status

Open candidates:

- #51051 fix(cli): align nodes list with nodes status by using node.list as primary source
