---
repo: openclaw/openclaw
cluster_id: gitcrawl-14067-dedupe-only-20260429-remote
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
  - "#63025"
candidates:
  - "#44027"
  - "#63025"
  - "#70288"
cluster_refs:
  - "#42745"
  - "#44027"
  - "#46165"
  - "#63025"
  - "#70152"
  - "#70288"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63025 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14067 on 2026-04-29."
---

# Gitcrawl Cluster 14067

Generated from local gitcrawl run cluster 14067 for `openclaw/openclaw`.

Display title:

> fix(auto-reply): avoid silent completion when dispatch produces no sendable reply

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 3
- representative: #63025, currently open in local store
- latest member update: 2026-04-28T07:04:52.449408874Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42745 fix(discord): stream live ACP thread replies via draft preview [AI-assisted]
- #46165 fix(dispatch): send fallback reply when agent produces zero responses (closes #32903)
- #70152 fix(auto-reply): suppress tool summaries in Slack channels when verboseDefault=off (#69067)

Open candidates:

- #44027 fix: respect /verbose mode when suppressing tool summaries in group chats
- #63025 fix(auto-reply): avoid silent completion when dispatch produces no sendable reply
- #70288 fix(dispatch): return queuedFinal: true when plugin-bound handler claims message
