---
repo: openclaw/openclaw
cluster_id: gitcrawl-13969-dedupe-only-20260429-remote
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
  - "#67158"
candidates:
  - "#8673"
  - "#42291"
  - "#44571"
  - "#45359"
  - "#47684"
  - "#53969"
  - "#59629"
  - "#60673"
  - "#67158"
  - "#68033"
cluster_refs:
  - "#8673"
  - "#39035"
  - "#39792"
  - "#39917"
  - "#39925"
  - "#39928"
  - "#40363"
  - "#40364"
  - "#42291"
  - "#42721"
  - "#43632"
  - "#44571"
  - "#44616"
  - "#44919"
  - "#44931"
  - "#45359"
  - "#45975"
  - "#46385"
  - "#47372"
  - "#47684"
  - "#47808"
  - "#48153"
  - "#48420"
  - "#49138"
  - "#49736"
  - "#51175"
  - "#51896"
  - "#52037"
  - "#53137"
  - "#53317"
  - "#53723"
  - "#53969"
  - "#54050"
  - "#54284"
  - "#54659"
  - "#55562"
  - "#55648"
  - "#56658"
  - "#56934"
  - "#56960"
  - "#57107"
  - "#57286"
  - "#57399"
  - "#59272"
  - "#59629"
  - "#59704"
  - "#60182"
  - "#60673"
  - "#62236"
  - "#62688"
  - "#63385"
  - "#63752"
  - "#63856"
  - "#64133"
  - "#64465"
  - "#65041"
  - "#65347"
  - "#66806"
  - "#66872"
  - "#66952"
  - "#67158"
  - "#68033"
  - "#70902"
  - "#71026"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67158 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13969 on 2026-04-29."
---

# Gitcrawl Cluster 13969

Generated from local gitcrawl run cluster 13969 for `openclaw/openclaw`.

Display title:

> [Bug]: openai-codex gpt-5.1/5.2/5.3 rejected on ChatGPT/Codex OAuth, only gpt-5.4 works

Cluster shape from gitcrawl:

- total members: 64
- issues: 60
- pull requests: 4
- open candidates in local store: 10
- representative: #67158, currently open in local store
- latest member update: 2026-04-28T21:55:43.565174103Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39035 [Bug]: openai-codex OAuth succeeds on macOS, but all Codex requests fall back to Gemini
- #39792 [Bug]: openai-codex OAuth returns 400 'Authorization header is badly formatted' after upgrade to 2026.3.7
- #39917 [Bug]: 2026.3.7 macOS MAIN gateway: OpenAI Codex OAuth succeeds but runtime fails (api: undefined / Not Found), MiniMax works
- #39925 [Bug]: No API key found for provider "openai-codex" after adding agent and logging in
- #39928 [Bug] Gateway model provider auth state not persisted correctly after OAuth flow
- #40363 [Bug]:  API key rotation only updates `openclaw.json`, leaving `auth-profiles.json` with stale credentials → silent auth failure cascade
- #40364 [Bug]: openai-codex OAuth profile present but openai-codex provider not injected into models.json
- #42721 [Bug]: openclaw models status shows expired OAuth profiles as ok when a refresh token exists
- #43632 fix(auth): sync Claude CLI credentials during OAuth refresh
- #44616 Bug: Anthropic OAuth refresh intermittently fails across chats/topics
- #44919 [Bug]: Anthropic OAuth credentials desync between ~/.claude/.credentials.json and auth-profiles.json — silent subagent failures
- #44931 [Bug]: Gateway silently dead for hours when OAuth expires — no user notification, no auto-recovery
- #45975 fix(auth): add retry logic to OAuth token refresh (closes #8673)
- #46385 OAuth refresh token invalidated after gateway restart — should auto-recover
- #47372 OpenAI Codex OAuth missing model.request scope — causes 401 errors
- #47808 auth-profiles.json not re-synced when API keys change in openclaw.json
- #48153 Bug: Gateway periodically overwrites agent auth-profiles.json with stale OAuth token, causing persistent auth failures
- #48420 [Bug]: OAuth authentication broken for Anthropic and OpenAI providers in v2026.2.17+
- #49138 OAuth flow missing api.responses.write scope — blocks GPT-5.4 in subagents
- #49736 [Bug]: Agent failed before reply: No API key found for provider "custom-192-168-0-222-11434".
- #51175 [Bug]: openai-codex OAuth fails with 403 unsupported_country_region_territory while codex-cli works
- #51896 [Bug]: Model choice -> openAI codex configuration oauth link broken
- #52037 OpenAI Codex OAuth token refresh not persisting to disk
- #53137 [Bug]:
- #53317 Bug: Gateway overwrites fresh OAuth token with stale cached state on startup (v2026.3.22, openai-codex)
- #53723 Bug: openai-codex OAuth token shows 'expires in 0m' despite valid JWT (display issue)
- #54050 [Bug]: OpenAI Codex OAuth sync appears to import stale credentials; Telegram lane fails with `refresh_token_reused` on Windows
- #54284 [Bug]: Regression in 2026.3.23(-2): openai-codex OAuth succeeds but model becomes unusable with refresh_token_reused
- #54659 [Bug]: openai-codex provider fails with HTTP 401 "Missing scopes: model.request"
- #55562 [Bug] Gateway in-memory auth cache overwrites per-agent API keys on disk
- #55648 Auth credentials not synced across agents after configure/auth add
- #56658 OpenAI Codex OAuth login requests missing scope `model.request`, causing 401 on all model calls
- #56934 Claude Max OAuth token sent as Bearer instead of x-api-key on v2026.3.24 — breaks Opus/Sonnet 4.6
- #56960 openai-codex provider: refresh_token_reused loop causes severe gateway event-loop degradation
- #57107 Repeated OpenAI Codex refresh_token_reused errors after re-onboard / gateway restart
- #57286 Codex OAuth login creates fresh named profile but runtime keeps preferring stale openai-codex:default
- #57399 [Bug]: OAuth token refresh silently fails for openai-codex provider, requiring manual re-authentication every ~10–30 days
- #59272 Per-agent auth profiles cause credential drift and stale duplicate OAuth profiles across agents
- #59704 Codex relogin can leave stale openai-codex:default profile that causes refresh_token_reused conflicts
- #60182 OpenAI OAuth re-onboard only updates main agent auth-profiles.json, leaving non-main agents with stale auth
- #62236 [Bug] OpenAI Codex OAuth token refresh fails with 'token has already been used' — Issue #52037 still not fixed in 2026.4.5
- #62688 openai-codex OAuth flow missing model.request scope — all API calls fail with 401
- #63385 OpenAI Codex external-CLI auth can drift in long-running gateway and hit refresh_token_reused
- #63752 [Bug]: "No API key found for provider anthropic" despite valid auth-profiles.json
- #63856 [Bug]: openai-codex OAuth login does not set per-agent order; runtime falls back with 'No API key found'
- #64133 OpenAI Codex OAuth: 401 api.responses.write scope missing after 2026.4.9 upgrade
- #64465 [Bug]:
- #65041 Bug: Billing failure causes silent fallback to previously-disabled API key via stale lastGood cache in auth-profiles.json
- #65347 [Bug]: OpenAI Codex OAuth Authentication Failed: invalid_scope and missing authorization code
- #66806 [Bug]: 'No API key found for provider openai' with pure Anthropic-only config (no OpenAI configured)
- #66872 [Bug]: models status --json reports missingProvidersInUse: ["codex"] for Codex harness models even when native Codex auth exists
- #66952 [Bug]: openai-codex OAuth refresh race can invalidate shared refresh token; models status misreports expired Codex profiles as OK
- #70902 fix(auth): add Claude CLI to EXTERNAL_CLI_SYNC_PROVIDERS for automatic OAuth token sync
- #71026 Auth token sync: claude-cli OAuth token not refreshed in auth-profiles.json

Open candidates:

- #8673 Add retry logic to OAuth token refresh
- #42291 [Bug]: `openclaw models auth login` on node host writes OAuth token locally instead of syncing to gateway
- #44571 [Bug]: onboard writes auth-profiles only to agents/main/, not to all configured agents
- #45359 Intermittent server_error on GPT-5.4 after OAuth refresh; workaround switch to 5.3 then back
- #47684 Add auth sync command or auto-sync for API key rotation across agents
- #53969 [Feature]: Harden OpenAI Codex OAuth auth store (atomic writes, duplicate enrollment, Codex CLI sync)
- #59629 [Bug]: Auth-profiles.json parsing broken in v2026.3.31 (regression from 2026.3.8)
- #60673 fix(auth): proactively refresh OAuth token before expiry to prevent concurrent-agent race condition
- #67158 [Bug]: openai-codex gpt-5.1/5.2/5.3 rejected on ChatGPT/Codex OAuth, only gpt-5.4 works
- #68033 openai-codex provider broken since 2026.4.5 — Cloudflare challenge + missing OAuth scope
