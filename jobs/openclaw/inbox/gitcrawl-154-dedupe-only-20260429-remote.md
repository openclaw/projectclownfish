---
repo: openclaw/openclaw
cluster_id: gitcrawl-154-dedupe-only-20260429-remote
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
  - "#65990"
candidates:
  - "#48867"
  - "#56118"
  - "#65204"
  - "#70529"
cluster_refs:
  - "#39007"
  - "#40793"
  - "#45092"
  - "#45123"
  - "#45182"
  - "#45812"
  - "#45889"
  - "#46090"
  - "#46098"
  - "#46483"
  - "#46495"
  - "#47855"
  - "#47879"
  - "#47965"
  - "#48037"
  - "#48043"
  - "#48114"
  - "#48182"
  - "#48867"
  - "#49241"
  - "#49295"
  - "#49701"
  - "#49705"
  - "#51364"
  - "#51732"
  - "#54617"
  - "#54636"
  - "#54966"
  - "#55987"
  - "#56118"
  - "#56948"
  - "#57084"
  - "#57209"
  - "#57950"
  - "#57994"
  - "#58190"
  - "#58222"
  - "#58256"
  - "#58342"
  - "#59333"
  - "#59424"
  - "#59624"
  - "#60804"
  - "#60903"
  - "#62706"
  - "#63538"
  - "#65125"
  - "#65133"
  - "#65204"
  - "#65434"
  - "#65560"
  - "#65571"
  - "#65740"
  - "#65990"
  - "#66050"
  - "#66097"
  - "#66281"
  - "#66335"
  - "#66353"
  - "#66611"
  - "#66763"
  - "#66981"
  - "#68117"
  - "#70399"
  - "#70529"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65990 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 154 on 2026-04-29."
---

# Gitcrawl Cluster 154

Generated from local gitcrawl run cluster 154 for `openclaw/openclaw`.

Display title:

> browser: managed Chrome fails with 'CDP websocket for profile openclaw is not reachable after start' while manual CDP works

Cluster shape from gitcrawl:

- total members: 65
- issues: 59
- pull requests: 6
- open candidates in local store: 4
- representative: #65990, currently closed in local store
- latest member update: 2026-04-28T21:55:43.650909562Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39007 [Bug]: Browser tool times out reaching browser control service though service is listening
- #40793 [Bug]: browser tool: attachOnly profile timeout causes LLM to restart gateway in a destructive loop
- #45092 docs(browser): use wss for Browserless cdpUrl examples
- #45123 Bug: openclaw browser 命令无法启动浏览器 (2026.3.12)
- #45182 [Bug]: openclaw browser start succeeds and launches Chrome normally, but openclaw browser status fails with a gateway timeout.
- #45812 [Bug]: Browser existing-session profile is inconsistent: sometimes falls back to isolated OpenClaw browser and ignores "do not open new tabs/windows"
- #45889 browser profile="user" times out on macOS even though existing-session Chrome MCP is detected and running
- #46090 [Bug]: built-in browser profile "user" (existing-session / Chrome MCP) fails to attach on macOS even after enabling remote debugging
- #46098 [Feature]: Support Chromium in existing-session browser driver
- #46483 [Bug/Docs]: profile="user" (existing-session) setup unclear — Chrome rejects --remote-debugging-port on default data dir
- #46495 [Bug]: built-in browser profile "user" (existing-session / chrome-mcp) times out on Linux even though Chrome is detected and listening
- #47855 existing-session driver still checks DevToolsActivePort instead of using chrome-devtools-mcp autoConnect (Chrome 146)
- #47879 existing-session driver: support configurable Chrome MCP command/args and auto-pass browserUrl from profile cdpUrl
- #47965 [Bug]: existing-session browser profile causes gateway crash (zlib segfault during MCP handshake)
- #48037 [Feature]: Allow custom args for Chrome DevTools MCP server in existing-session profile
- #48043 [Bug]: Chrome User Profile Attach Broken on Windows
- #48114 [Bug] Remote CDP profile fails with browserContext.newPage: Target page, context or browser has been closed after remote browser restart
- #48182 existing-session browser: tool name mismatch with chrome-devtools-mcp + timeout
- #49241 [Feature]: existing-session (Chrome MCP) should support targeting a specific Chrome profile
- #49295 existing-session browser attach hangs while Chrome remote debugging and gateway remain healthy
- #49701 docs: use wss for Browserless CDP
- #49705 Chrome 146+ user profile (existing-session) fails with 'Could not find DevToolsActivePort' error
- #51364 docs(browser): use wss:// for Browserless CDP URL
- #51732 feat(browser): support cdpPort for existing-session profile targeting
- #54617 docs: simplify macOS Chrome MCP existing-session setup
- #54636 [Bug]: [Bug]: Managed browser fails to attach to Chrome CDP on Ubuntu Desktop even though DevTools is listening on port 18800
- #54966 [Bug]: existing-session Chrome DevTools MCP user profile times out after remote debugging is allowed on Windows
- #55987 [Bug]: Browser CLI and agent tool browser.request return UNAVAILABLE while browser control HTTP API and CDP work fine
- #56948 [Bug]: openclaw browser start command not found in v2026.3.28
- #57084 [Bug]: Browser CLI fails with `unknown method: browser.request` even though browser service logs as ready
- #57209 openclaw browser CLI commands fail with 'unknown method: browser.request' after upgrade to 2026.3.28
- #57950 [Bug]: browser.request missing at runtime even though browser plugin is loaded
- #57994 [Bug]: browser.request unknown method — browser plugin loads but method never registers
- #58190 CLI `openclaw browser start` fails: `unknown method: browser.request`
- #58222 [Bug]: Browser plugin appears loaded, but gateway rejects all browser commands with unknown method: browser.request
- #58256 [Bug]: browser.server not starting after upgrade to v2026.3.28 - "openclaw browser start" command not found
- #58342 browser.request gateway method not registered in 2026.3.28 (regression from 2026.3.24)
- #59333 [Bug]: Browser tool failures trigger gateway SIGTERM restart instead of graceful error handling
- #59424 [Bug]: attach-only external CDP profile returns targetId from browser.open, but browser.tabs stays empty and snapshot fails with tab not found
- #59624 [Bug]: GatewayClientRequestError: Error: Chrome CDP websocket for profile "openclaw" is not reachable after start.
- #60804 Browser cannot attach/use healthy local Brave CDP on hardened Debian 13 VPS
- #60903 [Bug]: mcp fail to connect to chrome
- #62706 [Bug]: Chrome MCP attach fails when OpenClaw passes both --browserUrl and --userDataDir (mutually exclusive), plus intermittent browser status flakiness
- #63538 docs(browser): prefer role refs for interactive actions
- #65125 [Bug]:Managed browser and `user` browser attach both fail on macOS, despite Chrome CDP working manually
- #65133 [Browser][Docker][macOS arm64] Managed profile starts Chrome but fails CDP ready check; manual launch succeeds
- #65434 browser: attachOnly loopback CDP profile falsely reported as not running despite healthy /json/version + working websocket
- #65560 [Feature]: Surface Chrome MCP existing-session failures explicitly instead of generic browser timeout
- #65571 [Bug]: Browser CDP fails on Linux (Elementary OS) - "Failed to start Chrome CDP on port 18800" across versions 2026.4.8, 2026.4.9, 2026.4.10, 2026.4.11
- #65740 [Bug]:  Chrome CDP websocket unreachable after start - macOS ARM64
- #65990 browser: managed Chrome fails with 'CDP websocket for profile openclaw is not reachable after start' while manual CDP works
- #66050 [Bug]: Managed browser fails with "CDP websocket not reachable" even though Chrome is listening
- #66097 [Bug]: attachOnly custom CDP browser profile is reported "not running" even when /json/version is reachable
- #66281 [Bug]: Browser tool cannot attach to Chrome on macOS after update (DevToolsActivePort / CDP attach failures)
- #66335 Browser start fails: Chrome CDP websocket not reachable after launch even though manual CDP works
- #66353 Browser CDP detection fails despite healthy Chrome endpoint
- #66611 # [Bug]: Browser attachOnly profile fails to connect despite Chrome running with CDP
- #66763 existing-session / attachOnly cannot attach to Chrome on macOS even with valid webSocketDebuggerUrl
- #66981 [Bug]: browser failed: timed out. Restart the OpenClaw gateway (OpenClaw.app menubar, or `openclaw gateway`).
- #68117 Browser startup fails: Chrome CDP websocket for profile openclaw is not reachable after start on VPS/Docker
- #70399 Windows node-host browser path ignores explicit CDP profile and still forces DevToolsActivePort / Chrome MCP attach

Open candidates:

- #48867 Bug: profile=user (existing-session) fails on Android Termux - chrome-devtools-mcp stdin parent death
- #56118 Node browser proxy: Chrome MCP existing-session (user profile) fails with Connection closed — consent dialog never appears
- #65204 [Bug]: Cannot start Chrome
- #70529 [Bug]: Desktop cannot use existing Chrome sessions: EasyClaw Google sign-in fails, and user profile attach fails with spawn npx ENOENT
