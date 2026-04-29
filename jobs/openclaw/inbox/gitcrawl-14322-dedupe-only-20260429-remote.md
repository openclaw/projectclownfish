---
repo: openclaw/openclaw
cluster_id: gitcrawl-14322-dedupe-only-20260429-remote
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
  - "#47549"
candidates:
  - "#58397"
cluster_refs:
  - "#42764"
  - "#47549"
  - "#47977"
  - "#58397"
  - "#63519"
  - "#63576"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47549 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14322 on 2026-04-29."
---

# Gitcrawl Cluster 14322

Generated from local gitcrawl run cluster 14322 for `openclaw/openclaw`.

Display title:

> fix(sessions): preserve announce threadId for sessions_send

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 1
- representative: #47549, currently closed in local store
- latest member update: 2026-04-25T17:12:54.202Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42764 fix: fallback announce target to spawnedBy parent
- #47549 fix(sessions): preserve announce threadId for sessions_send
- #47977 fix: resolveAnnounceTarget drops threadId for thread-based sessions
- #63519 fix: preserve threadId in announce target sessions.list fallback
- #63576 fix(sessions): preserve threadId on announce target fallback

Open candidates:

- #58397 Fail closed sessions_send announce planning for zero-timeout sends
