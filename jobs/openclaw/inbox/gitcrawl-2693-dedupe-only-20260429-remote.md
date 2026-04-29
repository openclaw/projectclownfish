---
repo: openclaw/openclaw
cluster_id: gitcrawl-2693-dedupe-only-20260429-remote
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
  - "#39891"
candidates:
  - "#39891"
  - "#49361"
  - "#68614"
cluster_refs:
  - "#39891"
  - "#49361"
  - "#68614"
  - "#70923"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39891 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2693 on 2026-04-29."
---

# Gitcrawl Cluster 2693

Generated from local gitcrawl run cluster 2693 for `openclaw/openclaw`.

Display title:

> fix(googlechat): clean up typing message on NO_REPLY

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #39891, currently open in local store
- latest member update: 2026-04-28T22:51:06.876333934Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #70923 fix(googlechat): resolve domexception startup crash and prevent silent text loss

Open candidates:

- #39891 fix(googlechat): clean up typing message on NO_REPLY
- #49361 fix(googlechat): use agent identity.name in typing indicator fallback chain
- #68614 fix(googlechat): add timeout and fallback for deferred responses
