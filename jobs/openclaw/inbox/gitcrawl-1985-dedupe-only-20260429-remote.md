---
repo: openclaw/openclaw
cluster_id: gitcrawl-1985-dedupe-only-20260429-remote
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
  - "#43919"
candidates:
  - "#59813"
cluster_refs:
  - "#41997"
  - "#41998"
  - "#43257"
  - "#43919"
  - "#46210"
  - "#46952"
  - "#59813"
  - "#63490"
  - "#64747"
  - "#71833"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43919 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1985 on 2026-04-29."
---

# Gitcrawl Cluster 1985

Generated from local gitcrawl run cluster 1985 for `openclaw/openclaw`.

Display title:

> Fix/global proxy dispatcher

Cluster shape from gitcrawl:

- total members: 10
- issues: 0
- pull requests: 10
- open candidates in local store: 1
- representative: #43919, currently closed in local store
- latest member update: 2026-04-27T22:51:39.483998921Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41997 gateway: patch globalThis.fetch with proxy agent when http_proxy is set
- #41998 fix: respect HTTP proxy environment variables for all outbound requests
- #43257 fix(network): wire env proxy dispatcher bootstrap at CLI startup
- #43919 Fix/global proxy dispatcher
- #46210 fix(network): respect global environment proxy and prevent undici dispatcher overwrite
- #46952 fix(gateway): enable global undici proxy dispatcher at startup
- #63490 fix(gateway): ensure undici env proxy dispatcher after startup
- #64747 fix(gateway): install env HTTP proxy dispatcher at startup
- #71833 fix(gateway): bootstrap env proxy dispatcher at startup

Open candidates:

- #59813 fix: add proxy bootstrap to runMessageAction for CLI fetch paths
