---
repo: openclaw/openclaw
cluster_id: gitcrawl-3228-dedupe-only-20260429-remote
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
  - "#55789"
candidates:
  - "#45344"
  - "#55767"
  - "#55789"
  - "#55928"
cluster_refs:
  - "#45344"
  - "#55767"
  - "#55789"
  - "#55928"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55789 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3228 on 2026-04-29."
---

# Gitcrawl Cluster 3228

Generated from local gitcrawl run cluster 3228 for `openclaw/openclaw`.

Display title:

> fix(gateway): block internal HTTP session overrides

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #55789, currently open in local store
- latest member update: 2026-04-28T18:51:14.919572192Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45344 fix(gateway): reject unknown agent IDs on OpenAI + OpenResponses HTTP paths
- #55767 fix(hooks): reject internal session namespaces
- #55789 fix(gateway): block internal HTTP session overrides
- #55928 fix(gateway): block internal session history over HTTP
