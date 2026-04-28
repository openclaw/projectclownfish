---
repo: openclaw/openclaw
cluster_id: ghcrawl-156860-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#53667"
candidates:
  - "#53667"
cluster_refs:
  - "#53667"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "Fresh preflight found #53667 as the only live candidate; worker must verify it is still merge/fix-ready before any planned action."
notes: "Generated from ghcrawl run cluster 156860 on 2026-04-26. Requeued after the previous run failed stale preflight: #53626 no longer resolves and #52178 is closed."
---

# GHCrawl Cluster 156860

Generated from local ghcrawl run cluster 156860 for `openclaw/openclaw`.

Display title:

> warn on startup when legacy CLAWDBOT_* env vars are present

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in live store: 1
- representative: #53667, currently open in live GitHub
- latest member update: 2026-04-24T18:56:29.383Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed or stale context refs:

- #52178 fix(gateway): recognize control-ui and webchat clients as valid exec …
- #53626 warn on startup when legacy CLAWDBOT_* env vars are present (no longer resolves in live GitHub)

Open candidates:

- #53667 fix: warn when legacy CLAWDBOT_*/MOLTBOT_* env vars are detected
