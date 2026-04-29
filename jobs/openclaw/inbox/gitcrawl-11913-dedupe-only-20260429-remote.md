---
repo: openclaw/openclaw
cluster_id: gitcrawl-11913-dedupe-only-20260429-remote
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
  - "#64905"
candidates:
  - "#48623"
  - "#57281"
  - "#58565"
cluster_refs:
  - "#47720"
  - "#48548"
  - "#48623"
  - "#54073"
  - "#55862"
  - "#57281"
  - "#58565"
  - "#62412"
  - "#64905"
  - "#68241"
  - "#70973"
  - "#71126"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64905 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 11913 on 2026-04-29."
---

# Gitcrawl Cluster 11913

Generated from local gitcrawl run cluster 11913 for `openclaw/openclaw`.

Display title:

> [Bug]: Cached auth-profile failure state (cooldown) persists across gateway restarts — stale backoff causes silent primary bypass

Cluster shape from gitcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 3
- representative: #64905, currently closed in local store
- latest member update: 2026-04-28T21:55:43.66696921Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #47720 [Bug]: HTTP 401/403 misclassified as rate_limit with exponential cooldown — no self-recovery path
- #48548 [Bug]: Auth profile cooldown not propagating across concurrent subagents (77 redundant 401s)
- #54073 anthropic-vertex: built-in provider not registered in models.json — 'Unknown model' at startup, 404 at runtime
- #55862 [BUG] Gateway stuck in retry loop after provider outage — no self-recovery
- #62412 [Bug]: New sessions inherit authProfileOverride from cooldown/rate-limited backup profile instead of using default
- #64905 [Bug]: Cached auth-profile failure state (cooldown) persists across gateway restarts — stale backoff causes silent primary bypass
- #68241 [Bug]: claude-opus-4-7 rejected as "Unknown model" on 2026.4.15 despite being in codebase and accepted by Anthropic API
- #70973 [Bug]: CLI sessions: Gemini CLI not covered by Claude CLI session persistence fixes (#69679 / #70106 / #70132) — gateway restart still mints a fresh conversation
- #71126 [Bug]: Gemini model usage can lock the gateway/session loop until gateway restart

Open candidates:

- #48623 Auth profile failover: lastGood not respected for ordering + shared timeout budget causes cascade failures
- #57281 Auth profile failover blocked by file lock contention on rate_limit errors
- #58565 Auth profile failover should differentiate 401 (dead key) from 429/529 (transient)
