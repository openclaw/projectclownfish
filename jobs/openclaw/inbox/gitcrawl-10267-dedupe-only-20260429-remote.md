---
repo: openclaw/openclaw
cluster_id: gitcrawl-10267-dedupe-only-20260429-remote
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
  - "#59857"
candidates:
  - "#44168"
  - "#59857"
cluster_refs:
  - "#38366"
  - "#43985"
  - "#44168"
  - "#44945"
  - "#59857"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59857 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 10267 on 2026-04-29."
---

# Gitcrawl Cluster 10267

Generated from local gitcrawl run cluster 10267 for `openclaw/openclaw`.

Display title:

> fix: cool down flaky upstream ws-stream handshakes

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 2
- representative: #59857, currently open in local store
- latest member update: 2026-04-28T04:44:23.825049177Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38366 fix(openai-ws): guard against malformed content entries in message conversion
- #43985 fix(agents): skip tool calls without valid name on model switch
- #44945 fix(agents): avoid stale websocket continuation parent

Open candidates:

- #44168 fix(agents): guard OpenAI WS first response timeouts
- #59857 fix: cool down flaky upstream ws-stream handshakes
