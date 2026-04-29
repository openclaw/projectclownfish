---
repo: openclaw/openclaw
cluster_id: gitcrawl-13971-dedupe-only-20260429-remote
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
  - "#60076"
candidates:
  - "#12441"
  - "#32473"
  - "#41740"
  - "#55600"
  - "#63427"
  - "#65408"
  - "#66279"
  - "#66946"
cluster_refs:
  - "#12441"
  - "#32473"
  - "#39621"
  - "#39932"
  - "#39935"
  - "#40551"
  - "#40695"
  - "#41205"
  - "#41740"
  - "#41741"
  - "#43156"
  - "#45012"
  - "#45481"
  - "#45713"
  - "#45820"
  - "#46014"
  - "#46132"
  - "#46557"
  - "#48122"
  - "#48414"
  - "#49066"
  - "#49256"
  - "#49730"
  - "#50599"
  - "#51273"
  - "#51779"
  - "#52071"
  - "#52280"
  - "#52494"
  - "#52647"
  - "#52820"
  - "#52860"
  - "#52880"
  - "#52945"
  - "#53026"
  - "#53096"
  - "#53135"
  - "#53172"
  - "#53255"
  - "#53672"
  - "#53863"
  - "#55600"
  - "#56390"
  - "#56627"
  - "#57453"
  - "#59802"
  - "#60076"
  - "#62422"
  - "#63344"
  - "#63427"
  - "#63534"
  - "#64202"
  - "#64341"
  - "#64379"
  - "#64400"
  - "#64619"
  - "#65408"
  - "#65455"
  - "#65594"
  - "#65621"
  - "#65728"
  - "#66279"
  - "#66946"
  - "#68777"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60076 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13971 on 2026-04-29."
---

# Gitcrawl Cluster 13971

Generated from local gitcrawl run cluster 13971 for `openclaw/openclaw`.

Display title:

> CLI 'devices approve' fails with 'missing scope: operator.talk.secrets' when Android app requests talk.secrets

Cluster shape from gitcrawl:

- total members: 64
- issues: 63
- pull requests: 1
- open candidates in local store: 8
- representative: #60076, currently closed in local store
- latest member update: 2026-04-29T11:09:44.878181001Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39621 v2026.3.7 dashboard returns plain-text Not Found after upgrade
- #39932 Control UI returns 404 despite gateway.controlUi.enabled: true
- #39935 [Bug]: Control UI returns 404 on localhost even with gateway.controlUi.enabled=true
- #40551 [Bug]: [Windows + pnpm] Gateway dashboard returns 404 after upgrading from 2026.3.2 to 2026.3.7
- #40695 [Bug]: Dashboard return "Not Found"
- #41205 [Bug]: Broken favicon URL in Control UI (old Railway template URL)
- #41741 fix(discord): pass local gateway tls fingerprint to exec approvals
- #43156 [Bug]: gateway auth
- #45012 [Feature]:  UI does not access
- #45481 [Bug]: Control UI over LAN HTTP still requires device identity and does not send auth token
- #45713 [Bug] Control UI returns 401 Unauthorized despite valid token and successful CLI connection (macOS 14 OCLP)
- #45820 [Bug]: Control UI regressions in 2026.3.12: remote HTTP shows "device identity required", main/heartbeat branch renders giant icon, and approval modal can overflow viewport
- #46014 gateway probe drops loopback device identity and can falsely report missing operator.read
- #46132 [Bug]: Dashboard permanently shows token mismatch / authentication lockout — cannot connect at all
- #46557 CLI local gateway detail probes drop device auth on localhost and localLoopback probe budget is too low
- #48122 [Bug]: device identity required
- #48414 status / gateway probe report gateway unreachable while gateway status --json shows RPC ok
- #49066 gateway probe falsely reports missing operator.read while gateway call succeeds
- #49256 bug: dangerouslyDisableDeviceAuth=true doesn't allow plain HTTP LAN connections (WebCrypto unavailable)
- #49730 Stable v2026.3.13-1 still reports false `missing scope: operator.read` for local loopback probes
- #50599 Gateway probe is inconsistent on Windows 11: scheduled gateway times out, foreground gateway can handshake but returns missing scope: operator.read; Tailscale Serve path also times out
- #51273 Loopback gateway RPC fails with 'missing scope: operator.read' — shouldAttachDeviceIdentityForGatewayCall drops device identity on loopback
- #51779 openclaw devices list/approve does not use cached paired operator device token, causing missing operator.read
- #52071 CLI status/audit probe can fail with missing scope: operator.read while main Control UI auth works
- #52280 gateway probe times out on loopback; deep audit reports missing scope operator.read (device-identity GatewayClient works)
- #52494 [Bug]: ui:build fails on fresh clone due to --prod removing vite
- #52647 CLI `devices list` fails with 'missing scope: operator.read' on loopback with token auth
- #52820 [Bug]: 2026/3/23最新版的更新之后UI界面不见了，报错了
- #52860 [Bug]: 这个项目是骗钱的吗?每次更新都会出幺蛾子
- #52880 [Bug]: Control UI assets not found. Build them with `pnpm ui:build` (auto-installs UI deps), or run `pnpm ui:dev` during development.
- #52945 [Bug]:
- #53026 ui:build installs production-only deps and breaks Control UI asset generation
- #53096 [Bug]: Control UI assets not found. Build them with `pnpm ui:build` (auto-installs UI deps), or run `pnpm ui:dev` during development.
- #53135 [Bug]: Control UI assets not found. Build them with `pnpm ui:build` (auto-installs UI deps), or run `pnpm ui:dev` during development.
- #53172 Control UI: Logo image broken on dashboard/connect page
- #53255 [UX] Control UI should auto-load gateway token from config/env
- #53672 [Bug]: Control UI Not Working - Port 18789
- #53863 Dashboard/Control UI broken: npm package lacks dist/control-ui assets
- #56390 CLI cannot approve device pairing: missing operator.talk.secrets scope
- #56627 CLI probe fails with device-identity required error
- #57453 TUI cannot connect: device identity required but TUI has no localStorage
- #59802 [Bug]: unauthorized: gateway token missing (open the dashboard URL and paste the token in Control UI settings)
- #60076 CLI 'devices approve' fails with 'missing scope: operator.talk.secrets' when Android app requests talk.secrets
- #62422 macOS app: schema unavailable; cannot authenticate to local Docker gateway (token mismatch)
- #63344 Local backend services have no client class that auths via gateway token without device pairing AND retains operator scopes
- #63534 [Bug]: 2026.4.9梦境功能的界面排版异常
- #64202 [Bug]: Dreams Scene CSS layout causes content clipping/overlap in Control UI
- #64341 [Bug]:
- #64379 Bug: 梦境 (Dreaming) 页面布局重叠 — diary 栏出现在 scene 栏中
- #64400 Fix: CLI `doctor` and `status` trigger false restarts due to hardcoded 3000ms loopback timeouts
- #64619 [Bug] Control UI Dreams page: Chinese text truncated and elements overlapping (v2026.4.9)
- #65455 [Bug]: control ui 梦境界面显示问题
- #65594 packaging: runtime dist build does not emit control-ui/ when only pnpm build is run
- #65621 Local gateway RPC can fail with opaque 1006 errors and GatewayClient does not honor explicit deviceIdentity=null
- #65728 [Bug]: always get unauthorized when I start openclaw  gateway run
- #68777 Control UI assets missing from npm installs — Dashboard blank

Open candidates:

- #12441 [Feature] Control UI should accept gateway token from Authorization header
- #32473 [Bug]: control ui requires device identity (use HTTPS or localhost secure context)
- #41740 fix: discord exec approvals fails against local self-signed TLS gateway
- #55600 [Bug]: Control UI header logo/icon not displaying after 2026.3.24 update
- #63427 CLI WebSocket probe has no backoff on device-required rejection
- #65408 [Bug]: Control UI session can survive gateway token rotation via persisted device-token retry fallback
- #66279 TUI fails against local TLS gateway unless Node TLS verification is disabled
- #66946 [Bug]: **Control UI路径重复导致404错误，聊天功能无法使用**
