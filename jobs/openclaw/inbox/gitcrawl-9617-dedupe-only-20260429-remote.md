---
repo: openclaw/openclaw
cluster_id: gitcrawl-9617-dedupe-only-20260429-remote
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
  - "#57627"
candidates:
  - "#63005"
cluster_refs:
  - "#45697"
  - "#49202"
  - "#57627"
  - "#60543"
  - "#63005"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57627 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 9617 on 2026-04-29."
---

# Gitcrawl Cluster 9617

Generated from local gitcrawl run cluster 9617 for `openclaw/openclaw`.

Display title:

> CRITICAL: Web UI chat desynchronization - messages sent to wrong session

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #57627, currently closed in local store
- latest member update: 2026-04-28T07:04:52.247980411Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45697 [Bug]: Session selector easily gets out of sync (v2 UI)
- #49202 [Bug]: Open WebUI-backed UUID chats can split into separate <uuid> and agent:main:<uuid> session records
- #57627 CRITICAL: Web UI chat desynchronization - messages sent to wrong session
- #60543 Webchat sidebar 'main' session freezes after session reset - stale references not cleaned up

Open candidates:

- #63005 [Bug]: external raw session keys can split after sessions_send / nested agent canonicalization
