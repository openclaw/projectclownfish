---
repo: openclaw/openclaw
cluster_id: gitcrawl-14150-dedupe-only-20260429-remote
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
  - "#43984"
candidates:
  - "#43984"
  - "#44561"
  - "#48942"
  - "#54647"
  - "#57583"
  - "#65178"
  - "#66544"
  - "#68047"
cluster_refs:
  - "#41941"
  - "#42495"
  - "#42584"
  - "#43984"
  - "#44561"
  - "#46209"
  - "#48110"
  - "#48942"
  - "#54647"
  - "#54661"
  - "#54673"
  - "#56977"
  - "#57583"
  - "#65178"
  - "#66533"
  - "#66544"
  - "#67766"
  - "#67768"
  - "#68047"
  - "#70302"
  - "#70981"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43984 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14150 on 2026-04-29."
---

# Gitcrawl Cluster 14150

Generated from local gitcrawl run cluster 14150 for `openclaw/openclaw`.

Display title:

> fix(gateway): keep main sessions visible in active session lists

Cluster shape from gitcrawl:

- total members: 21
- issues: 4
- pull requests: 17
- open candidates in local store: 8
- representative: #43984, currently open in local store
- latest member update: 2026-04-28T21:55:43.644987995Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41941 fix(gateway):TUI Model Display Not Updating After session_status Switch
- #42495 Heartbeat polls overwrite session displayName, breaking control UI session selector
- #42584 fix(heartbeat): preserve session displayName during heartbeat polls
- #46209 fix: preserve labeled session titles during heartbeat polls
- #48110 fix(tui): resolve per-agent model override in status bar defaults
- #54661 webchat: main session display name incorrectly overwritten by system event content
- #54673 fix(webchat): prevent system events from overwriting main session display name
- #56977 [Bug] Webchat UI displays heartbeat session name instead of main session after isolated heartbeat runs
- #66533 [Bug]: WebChat session selector shows main session as “heartbeat” after a while, making /new feel like sessions disappear
- #67766 fix(gateway): fall back to explicit provider config for image capability when catalog misses [AI-assisted]
- #67768 fix(webchat): trust Qwen vision models when not found in catalog
- #70302 gateway/session-utils: honor per-agent thinkingDefault in buildGatewaySessionRow
- #70981 fix(gateway): use config-resolved thinking default in session rows

Open candidates:

- #43984 fix(gateway): keep main sessions visible in active session lists
- #44561 fix(gateway): keep main session display name stable
- #48942 test(gateway): consolidate deriveSessionTitle tests into dedicated module
- #54647 Fix ACP session model reporting in sessions list
- #57583 fix: use agent identity name for heartbeat session label (#57521)
- #65178 fix: case-insensitive model lookup for image support resolution
- #66544 fix(gateway): exclude heartbeat sender ID from session display name
- #68047 fix(gateway): extend image-support name fallback to direct anthropic provider
