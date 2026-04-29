---
repo: openclaw/openclaw
cluster_id: gitcrawl-13547-dedupe-only-20260429-remote
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
  - "#68634"
candidates:
  - "#42156"
  - "#48239"
  - "#53408"
  - "#55224"
  - "#56597"
  - "#56966"
  - "#59125"
  - "#59273"
  - "#59405"
  - "#64664"
  - "#69698"
cluster_refs:
  - "#40034"
  - "#40547"
  - "#40702"
  - "#40976"
  - "#42156"
  - "#42619"
  - "#43904"
  - "#43989"
  - "#45464"
  - "#46567"
  - "#46862"
  - "#48239"
  - "#48499"
  - "#52440"
  - "#53240"
  - "#53408"
  - "#53409"
  - "#53659"
  - "#54978"
  - "#55224"
  - "#55230"
  - "#55258"
  - "#56597"
  - "#56966"
  - "#57896"
  - "#58691"
  - "#58783"
  - "#58788"
  - "#58864"
  - "#59125"
  - "#59162"
  - "#59215"
  - "#59224"
  - "#59273"
  - "#59405"
  - "#59533"
  - "#59584"
  - "#59614"
  - "#59855"
  - "#59882"
  - "#59969"
  - "#60000"
  - "#60260"
  - "#60268"
  - "#60503"
  - "#61453"
  - "#62576"
  - "#62718"
  - "#62767"
  - "#63099"
  - "#63194"
  - "#63211"
  - "#63381"
  - "#63442"
  - "#64168"
  - "#64517"
  - "#64664"
  - "#65690"
  - "#66772"
  - "#66994"
  - "#67161"
  - "#67285"
  - "#67402"
  - "#67747"
  - "#68254"
  - "#68340"
  - "#68634"
  - "#68739"
  - "#69012"
  - "#69214"
  - "#69482"
  - "#69698"
  - "#69916"
  - "#70687"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68634 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13547 on 2026-04-29."
---

# Gitcrawl Cluster 13547

Generated from local gitcrawl run cluster 13547 for `openclaw/openclaw`.

Display title:

> [Bug]: CLI commands repeatedly trigger scope-upgrade requests + Telegram Native Approvals fails with pairing required, generating persistent pending approvals

Cluster shape from gitcrawl:

- total members: 74
- issues: 74
- pull requests: 0
- open candidates in local store: 11
- representative: #68634, currently closed in local store
- latest member update: 2026-04-28T21:55:43.779370911Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40034 [Bug]: Subagent elevated exec fails in runtime=direct despite enabled config and working main Telegram session
- #40547 [Bug]: Exec Approval is in a mess. Indepedent multi-agent has conflicting exec permission at times
- #40702 [Bug]: Telegram direct exec approval callback cannot resolve gateway approval IDs (approval-timeout)
- #40976 Background exec completion may not auto-reply reliably in Telegram forum topics
- #42619 Gateway restart after config change can silently reset exec approvals to restrictive defaults
- #43904 [Bug]: exec-approvals allowlist does not enforce on local gateway — all commands auto-approved
- #43989 [Bug]: Exec approval socket not created on gateway startup, causing approval flow to hang
- #45464 [Bug]: Telegram DM exec parity broken on agent:main:main — exec denied: allowlist miss despite trusted sender + elevated + full/off approvals
- #46567 [Bug]:Telegram pairing approval does not persist in Docker/container OpenClaw
- #46862 Bug: Telegram Pairing Fails in a Loop
- #48499 Bug: Telegram elevated exec becomes unavailable after prior approved request
- #52440 ACP sessions killed by gateway restart (SIGUSR1)
- #53240 [Bug]: Telegram multi-account exec approval resolution fails with 'unknown or expired approval id' on non-default accounts
- #53409 [Feature Request] Exec approval should only show on the triggering agent's Telegram channel
- #53659 Exec approval completion events lose forum topic context in Telegram forum supergroups
- #54978 [Bug]: Tool Parameter Serialization Failure
- #55230 [Bug] Gateway SIGUSR1 restart does not fully reset tool parameter validation state in active session
- #55258 Node-targeted exec can approve on Mac app but execute on gateway host instead
- #57896 [Bug]: Gateway restart leaves stale exec config — onRestart passes activate:false to activateRuntimeSecrets
- #58691 2026.3.31: tools.exec.ask='off' and tools.exec.security='full' ignored — all exec commands require approval
- #58783 v2026.3.31 regression: exec approval timeout/failure messages leak into wrong Telegram topics
- #58788 v2026.3.31 regression: raw internal gateway log lines sent as Telegram DM messages
- #58864 Telegram forum topic exec approval follow-up is delivered to general topic instead of the originating topic
- #59162 [Bug]: Telegram/mobile approvals can resolve as "unknown or expired approval id" after pending approval creation
- #59215 [Bug]: exec tool cannot authenticate to gateway in loopback mode
- #59224 [Bug]: exec-approvals.json not honored after gateway restart — isolated cron sessions still prompt
- #59533 exec host=node routes to local gateway instead of connected remote node
- #59584 exec tool broken in 2026.3.31 and 2026.4.1 — ensureExplicitGatewayAuth rejects all connections
- #59614 Telegram exec approval inline buttons fail when channels.telegram.botToken uses env SecretRef
- #59855 2026.4.1 exec approval mechanism completely broke existing single-operator setups
- #59882 [Bug]: tools.exec.ask: "always" fails with "pairing required" on local loopback gateway
- #59969 [Bug]: [Exec] Exec approval registration fails with "pairing required" error despite having paired devices
- #60000 [Bug]: control-ui writes exec approval entries with unsupported `source` field, causing repeated INVALID_REQUEST errors
- #60260 [Bug]: Exec command approval not triggered in Telegram DM mode despite valid configuration
- #60268 [Bug]: Subagent (sessions_spawn) ignores exec-approvals.json security configuration, requires manual approval for each exec command
- #60503 Telegram exec approval inline buttons fail due to callback_query sequentialization timeout
- #61453 [Bug]: exec-approvals socket not created on gateway restart when Telegram delivery fails (message too long)
- #62576 [Bug]: Telegram approval/system messages may be broadcast to multiple authorized users instead of the originating chat
- #62718 OpenClaw 4.5 regression: Telegram approval prompts can surface in the wrong DM
- #62767 [Bug]: Gateway 1008 "pairing required" — exec bloqueado, persiste después de restart y redeploy
- #63099 [Bug][P0] /reset leaves corrupted session state - session-recovery dead loop causes all subsequent messages to get no reply
- #63194 Built-in exec from Control UI always fails with "pairing required" on local Windows gateway, even with auth disabled and full local exec approvals
- #63211 Isolated cron sessions ignore per-agent tools.exec policy (ask=off still prompts)
- #63381 [Bug]: Telegram native approvals auto-enables on 2026.4.8 and spams "too many failed authentication attempts" in a retry loop
- #63442 cron: --session-key silently ignored for isolated agentTurn jobs
- #64168 [Bug]: Self-improvement note leaked to user on /new session after upgrading to 2026.4.9
- #64517 [Bug]: approvals.exec.targets does not work under multiple agents
- #65690 native-approvals subsystem fails with 'pairing required' loop after 2026.4.8 upgrade (Telegram channel)
- #66772 [Bug]: Edit tool truncates JSON for large multi-line parameters (>2KB) — main session
- #66994 Exec approval prompts persist despite tools.exec.ask: off
- #67161 ACP agent sessions terminated with ACP_TURN_FAILED during config-triggered gateway restart
- #67285 [Bug] Exec approval errors injected as raw messages into active Telegram channels
- #67402 Internal control/update messages leak into normal chat sessions after gateway restarts
- #67747 Gateway restart strips askFallback from exec-approvals.json, silently breaking cron exec
- #68254 [Bug]: Internal "Telegram Native Approvals" handler cannot be paired in Docker loopback-only deployment (2026.4.14)
- #68340 Gateway config.patch restart kills in-flight agent turn, causing corrupted session history and response loop
- #68634 [Bug]: CLI commands repeatedly trigger scope-upgrade requests + Telegram Native Approvals fails with pairing required, generating persistent pending approvals
- #68739 Telegram native approvals still start with execApprovals.enabled=false, then loop on pairing required (scope-upgrade)
- #69012 [Bug]: telegram native-approvals handler fails to start on every fresh gateway boot (WS handshake timeout)
- #69214 [Bug]: Gateway client gets stuck in scope-upgrade repair loop for Telegram Native Approvals
- #69482 [Bug]: Telegram /approve allow-always writes 'source' field that openclaw approvals set --gateway rejects — allowlist updates silently fail to persist to gateway
- #69916 [Bug]: Telegram exec approvals ignore targets.accountId and fan out across all bot accounts
- #70687 Bug: Scope upgrade pending approval error after upgrade to 2026.4.21

Open candidates:

- #42156 Telegram callback queries time out when agent turn is queued behind sequentialize
- #48239 Telegram exec approvals can surface in the wrong agent/chat despite agentFilter=main
- #53408 [Bug]: Write/exec tool parameters silently dropped after long conversations (content/command missing)
- #55224 [Bug] Tool parameters randomly dropped in long sessions (exec/write/sessions_spawn)
- #56597 [Bug]: Discord sessions persist per-session exec directives, causing allowlist mode to behave unexpectedly after config changes
- #56966 [Bug]: /activation command rejects paired Telegram users in groups — credentials vs config allowFrom mismatch
- #59125 [Bug]: approvals.exec.mode accepts invalid value, approvals/subagents unreliable on main and channels
- #59273 Discord sessions carry stale exec config through gateway restarts
- #59405 [Bug]: Telegram channel runtime drops exec/grep tool output for openai/gpt-5.1-codex
- #64664 Approvals lost on gateway restart — stale callback buttons show confusing error
- #69698 Control UI: exec.approvals.set fails with unexpected property 'source'
