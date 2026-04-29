---
repo: openclaw/openclaw
cluster_id: gitcrawl-2733-dedupe-only-20260429-remote
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
  - "#40760"
candidates:
  - "#40760"
  - "#41956"
  - "#41957"
  - "#43204"
cluster_refs:
  - "#40760"
  - "#41011"
  - "#41153"
  - "#41286"
  - "#41956"
  - "#41957"
  - "#42105"
  - "#42851"
  - "#43204"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40760 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2733 on 2026-04-29."
---

# Gitcrawl Cluster 2733

Generated from local gitcrawl run cluster 2733 for `openclaw/openclaw`.

Display title:

> fix(auto-reply): extend typing TTL and clarify timeouts [AI]

Cluster shape from gitcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 4
- representative: #40760, currently open in local store
- latest member update: 2026-04-28T21:29:55.497718488Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41011 fix(telegram): harden poll stall watchdog threshold
- #41153 fix(telegram): harden poll stall watchdog threshold
- #41286 fix(telegram): prevent stale-socket restarts during quiet polling
- #42105 feat(typing): make typing indicator TTL configurable via typingTtlSeconds
- #42851 feat(typing): add configurable typing indicator TTL (typingTtlMs)

Open candidates:

- #40760 fix(auto-reply): extend typing TTL and clarify timeouts [AI]
- #41956 fix(telegram): split watchdog stability fixes from #41883
- #41957 fix(auto-reply): split typing-timeout stability fix from #41883
- #43204 fix(agent): send user feedback when typing TTL expires during long-running agent runs
