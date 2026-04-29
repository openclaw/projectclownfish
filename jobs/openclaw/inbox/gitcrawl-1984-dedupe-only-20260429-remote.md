---
repo: openclaw/openclaw
cluster_id: gitcrawl-1984-dedupe-only-20260429-remote
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
  - "#44448"
candidates:
  - "#41355"
  - "#41483"
  - "#44448"
  - "#44584"
  - "#48641"
  - "#56370"
  - "#59817"
  - "#62024"
  - "#68126"
cluster_refs:
  - "#41355"
  - "#41483"
  - "#42692"
  - "#44026"
  - "#44209"
  - "#44447"
  - "#44448"
  - "#44449"
  - "#44450"
  - "#44451"
  - "#44452"
  - "#44453"
  - "#44584"
  - "#44586"
  - "#47500"
  - "#48641"
  - "#55048"
  - "#56136"
  - "#56370"
  - "#58750"
  - "#59817"
  - "#60614"
  - "#62024"
  - "#68126"
  - "#69112"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44448 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1984 on 2026-04-29."
---

# Gitcrawl Cluster 1984

Generated from local gitcrawl run cluster 1984 for `openclaw/openclaw`.

Display title:

> [Bug] v2026.3.11: CLI 'openclaw agent --channel discord --to' routes to agent:*:main instead of live channel session

Cluster shape from gitcrawl:

- total members: 25
- issues: 25
- pull requests: 0
- open candidates in local store: 9
- representative: #44448, currently open in local store
- latest member update: 2026-04-28T21:55:43.852615799Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42692 Bug: openclaw agent --local can pass bare sessionId to session_status, causing Unknown sessionId
- #44026 [Bug]: Concurrent sessions for the same agent ID are serialized, causing excessive blocking
- #44209 Discord DM messages can be misrouted to guild channel session when Guild ID equals default channel ID
- #44447 [Bug] v2026.3.11: Discord thread context re-injected every turn (context pollution + cache bust)
- #44449 [Bug] v2026.3.11: Discord thread metadata re-injected every turn (context pollution)
- #44450 [Bug] v2026.3.11: CLI agent --channel discord --to routes to agent:*:main instead of live session
- #44451 [Bug] v2026.3.11: Session resolver in compact lacks delivery-context lookup
- #44452 [Bug] v2026.3.11: register.agent command path doesn't propagate channel + accountId to resolver
- #44453 [Bug] v2026.3.11: Regression in compact - resolveAgentMainSessionKey ReferenceError
- #44586 [Bug]: Discord threads root fix - runtime patches for context growth + session routing
- #47500 [Bug]: Discord DM messages routed to channel instead of user session
- #55048 Bug: Discord message delete works in guild channels but fails in DMs
- #56136 Inter-agent sessions_send replies route to webchat instead of Discord
- #58750 Discord Channel Binding Routes to Wrong Agent
- #60614 BUG: openclaw agent --session-id silently ignored when --agent is specified
- #69112 [Bug]: [agent CLI] --session-id can silently drop concurrent callers when a turn is in progress

Open candidates:

- #41355 Discord: ThreadStarterBody re-injected on every turn (echo contamination)
- #41483 [Bug]: --to flag ignored when using --agent with custom channel, all sessions map to main
- #44448 [Bug] v2026.3.11: CLI 'openclaw agent --channel discord --to' routes to agent:*:main instead of live channel session
- #44584 [Bug]: Discord threads - volatile metadata re-injection + CLI routing to wrong session
- #48641 Discord DMs: inbound messages silently dropped (outbound works)
- #56370 CLI: default --to routes to main while explicit --agent routes to steward (still reproducible on v2026.3.24)
- #59817 Discord DMs can fork into duplicate channel sessions during channel-info/network failures
- #62024 [Bug]: Discord cron delivery fix — 2026-04-02
- #68126 Discord DM inbound sets ctx.To to channel:<id> instead of user:<id>
