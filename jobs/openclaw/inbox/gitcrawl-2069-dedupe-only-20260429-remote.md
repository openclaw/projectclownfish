---
repo: openclaw/openclaw
cluster_id: gitcrawl-2069-dedupe-only-20260429-remote
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
  - "#65326"
candidates:
  - "#47264"
  - "#51694"
  - "#65326"
cluster_refs:
  - "#35095"
  - "#45378"
  - "#45445"
  - "#45544"
  - "#45822"
  - "#45888"
  - "#46108"
  - "#46245"
  - "#46246"
  - "#46408"
  - "#47264"
  - "#48079"
  - "#48712"
  - "#49143"
  - "#49803"
  - "#49887"
  - "#51694"
  - "#52729"
  - "#52810"
  - "#53888"
  - "#57386"
  - "#57542"
  - "#58541"
  - "#60377"
  - "#62229"
  - "#63079"
  - "#64937"
  - "#65183"
  - "#65326"
  - "#66661"
  - "#67786"
  - "#67879"
  - "#67891"
  - "#67899"
  - "#67900"
  - "#67955"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65326 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2069 on 2026-04-29."
---

# Gitcrawl Cluster 2069

Generated from local gitcrawl run cluster 2069 for `openclaw/openclaw`.

Display title:

> [Bug] Google Chat: Add-ons framework JWT/event format incompatibility (workaround included)

Cluster shape from gitcrawl:

- total members: 36
- issues: 36
- pull requests: 0
- open candidates in local store: 3
- representative: #65326, currently open in local store
- latest member update: 2026-04-28T22:51:07.438680852Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #35095 [Bug]: Google Chat inbound webhook returns 401 Unauthorized despite matching audience
- #45378 [Bug] Synology Chat webhook route logs as registered but POST /webhook/synology returns 404 after local↔lan switch
- #45445 [Bug]: Webhook routes (Google Chat, LINE, etc.) return 404 — httpRoutes lost on plugin registry swap (v2026.3.12)
- #45544 [Bug]: All Google Chat webhooks return 404 after 2026.3.12 update (jiti/ESM registry split)
- #45822 [Bug] Synology Chat webhook fails in v2026.3.12+ (works in v2026.3.11)
- #45888 [Bug] LINE webhook returns 404 - Plugin HTTP routes not registered
- #46108 [Bug]: Synology Chat Plugin: /webhook/synology liefert immer 404, obwohl Route registriert ist (v2026.3.13) Umgebung
- #46245 Slack HTTP webhook mode always returns 404 (split-bundle slackHttpRoutes Map bug)
- #46246 Slack HTTP webhook mode always returns 404 (split-bundle slackHttpRoutes Map bug)
- #46408 Google Chat webhook route returns 404 despite channel showing as running
- #48079 [Bug]: LINE plugin starts, but /line/webhook returns 404 on Windows (OpenClaw 2026.3.13)
- #48712 [Bug][Critical] LINE/Telegram webhook routes silently unregistered — all inbound messages dropped (404)
- #49143 [Bug]:
- #49803 LINE plugin webhook route not registered in gateway HTTP handler (registry mismatch)
- #49887 Slack HTTP mode — channel events received with 200 OK but silently dropped, never routed to agent
- #52729 [regression?] hooks.internal.enabled causes LINE webhook 404 (v2026.3.13)
- #52810 Bug: Plugin lifecycle hooks (api.on) never fire due to initialization timing
- #53888 Google Chat: silent webhook auth failures + undocumented appPrincipal requirement
- #57386 [Bug]: Google Chat webhook returns 401 Unauthorized - all versions 2026.3.23+
- #57542 [Bug]: Google Chat app-url auth requires appPrincipal = JWT sub, but this is undocumented and auth failures are silent
- #58541 Google Chat (G Suite Add-on) returns 401 Unauthorized — JWT verification failure
- #60377 [Bug]: Google Chat 401 after update — crash-loop + missing appPrincipal (two compounding issues)
- #62229 Google Chat inbound webhook returns 401 after upgrade, outbound still works
- #63079 [Bug]: googlechat not responding in 2026.4.8, ongoing since last few updated, audience validation issue in code
- #64937 [Bug] webhooks plugin register became async in v2026.4.10, triggering doctor warning
- #65183 Bundled webhooks plugin uses async register(), triggering 'async registration is ignored' warning
- #66661 [Bug]: `api.registerHttpRoute()` does not register routes in external plugins - returns 404
- #67786 [Bug]: Google Chat inbound webhook returns 401 Unauthorized despite correct JWT audience and valid token
- #67879 webhooks plugin register() fires 2-3 times per inbound message — unexpected plugin registry reload
- #67891 [Bug] webhooks plugin: async register() causes routes to never be registered
- #67899 plugin: async register() return value is not awaited — routes never registered
- #67900 plugin: async register() return value is not awaited — routes never registered
- #67955 [Bug]: Slack HTTP mode logs /slack/events as active, but the route returns 404 in OpenClaw 2026.4.15

Open candidates:

- #47264 LINE plugin: multi-account mode breaks webhook route registration (404)
- #51694 [Bug]: channels.googlechat.accounts is now non-optional, docs indicate optional
- #65326 [Bug] Google Chat: Add-ons framework JWT/event format incompatibility (workaround included)
