---
repo: openclaw/openclaw
cluster_id: gitcrawl-13988-dedupe-only-20260429-remote
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
  - "#69181"
candidates:
  - "#40540"
  - "#43712"
  - "#52558"
  - "#63719"
  - "#64892"
  - "#65130"
cluster_refs:
  - "#39447"
  - "#39878"
  - "#40156"
  - "#40540"
  - "#41229"
  - "#41769"
  - "#42367"
  - "#42753"
  - "#43712"
  - "#43905"
  - "#43990"
  - "#44365"
  - "#45287"
  - "#45645"
  - "#46073"
  - "#46169"
  - "#46467"
  - "#46521"
  - "#47563"
  - "#48157"
  - "#49206"
  - "#49584"
  - "#50477"
  - "#51401"
  - "#51494"
  - "#52558"
  - "#53236"
  - "#53241"
  - "#53542"
  - "#54497"
  - "#54751"
  - "#55805"
  - "#56033"
  - "#56446"
  - "#57188"
  - "#58041"
  - "#58544"
  - "#59171"
  - "#59226"
  - "#59508"
  - "#59521"
  - "#60138"
  - "#61042"
  - "#61066"
  - "#61175"
  - "#61706"
  - "#61857"
  - "#62347"
  - "#62447"
  - "#63010"
  - "#63719"
  - "#64245"
  - "#64282"
  - "#64892"
  - "#65130"
  - "#66038"
  - "#66908"
  - "#67485"
  - "#68287"
  - "#68385"
  - "#69006"
  - "#69181"
  - "#69332"
  - "#69498"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69181 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13988 on 2026-04-29."
---

# Gitcrawl Cluster 13988

Generated from local gitcrawl run cluster 13988 for `openclaw/openclaw`.

Display title:

> plugins install incorrectly treats npm packages as hook packs

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 6
- representative: #69181, currently closed in local store
- latest member update: 2026-04-28T22:51:07.264608848Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39447 [Bug]: npm install failed for openclaw@latest
- #39878 plugins uninstall fails when channel config references the plugin being removed
- #40156 [Bug]: v2026.3.7's docker-setup doesn't work
- #41229 plugins install fails for local plugins when plugins.allow already exists
- #41769 sharp module fails to load on macOS ARM64 (v0.2.14)
- #42367 gateway install --force writes broken systemd ExecStart path on npm-global installs
- #42753 Image tool broken on AutoClaw: sharp native module code signature mismatch (Team ID)
- #43905 Gateway update prompt closes gateway but doesn't actually update
- #43990 [Bug]: Rocky Linux cannot install OpenClaw.
- #44365 BUG: install.sh prefix override causes silent update failures with sudo npm i -g
- #45287 [Bug]: 2026.3.12 update rolls back during gateway CLI verification: plugins.slots.memory: plugin not found: memory-core
- #45645 [Bug]: doctor/update can leave CLI and gateway on different installs on Linux
- #46073 [Bug]: failed to build v2026.3.13
- #46169 [Bug]: 2026.3.13 with docker-setup.sh build error
- #46467 [Bug]: v2026.3.13 tag fails to build from source; main branch tip builds but Telegram/Discord plugins crash at runtime
- #46521 [Bug]: openclaw update silently fails when a system-level install shadows the user-global install
- #47563 openclaw update fails with sharp@0.34.5 build error on macOS arm64
- #48157 [Bug]: Update error: npm error code EBUSY & npm error syscall rename
- #49206 [Bug]: "openclaw "npm install failed for openclaw@latest"
- #49584 [Bug]: pnpm build fail
- #50477 [Bug]: INEFFECTIVE_DYNAMIC_IMPORT
- #51401 [Bug]: update status mis-detects npm global installs as pnpm
- #51494 [Bug]: api.runtime.version returns 'unknown' for plugins in npm-installed OpenClaw
- #53236 [Bug]: 'openclaw plugins install acpx' resolves to a skill instead of the ACP backend plugin in 2026.3.22
- #53241 [Bug]: 'openclaw plugins install acpx' resolves to ClawHub skill before checking bundled ACP plugin
- #53542 Plugin API version hardcoded to 1.2.0 in npm package + Control UI missing
- #54497 [Feature]: Updates are really awkward could we get a prompt and have a smooth restart process
- #54751 Feature: Windows-compatible Update button (stop gateway before npm update)
- #55805 [Bug]: Openclaw plugins install fails to install npm packages before falling back from ClawHub
- #56033 plugins uninstall does not remove channels.<pluginId> config for external channel plugins
- #56446 [Bug]: `openclaw plugins install` rejects plugin with `peerDependencies: { "openclaw": "*" }` — wildcard API version not matched
- #57188 [Bug]: 2026.3.28 update breaks gateway on Linux VPS/systemd — recovery fails, required snapshot restore
- #58041 Auto-update is not atomic: config/plugin version mismatch causes repeated crash loops
- #58544 [Bug]: openclaw update fails with preflight-no-good-commit; exec auto-allow/approval flow inconsistent on git install
- #59171 fix: thread dangerouslyForceUnsafeInstall through installPluginFromArchive and npm archiveInstallParams
- #59226 [Bug]: Gateway entrypoint mismatch warning (entry.js → index.js) reappears after every openclaw update on Linux/systemd
- #59508 [Bug]: --dangerously-force-unsafe-install flag is completely non-functional in 2026.3.31
- #59521 [Bug]: --dangerously-force-unsafe-install not propagating to NPM install
- #60138 [Bug]: plugins update blocked for plugins using child_process — affects all blockchain/CLI plugins
- #61042 Plugin code-safety scanner falsely blocks openclaw-quiubo update on bundled child_process / HOME path patterns
- #61066 [Bug]: 2026.4.4 - Build fails at pnpm build:docker — parse error in extensions/anthropic/register.runtime.ts:388
- #61175 Plugin install can incorrectly report 'not a valid hook pack' for normal plugin packages
- #61706 [Bug]: plugins install ignores --dangerously-force-unsafe-install (2026.4.2 d74a122)
- #61857 openclaw update uses system npm instead of active Linuxbrew npm, targets /usr/lib/node_modules
- #62347 [Bug]:  memory-core plugin fails to load during onboard: "Unable to load plugin public-surface runtime" (regression in 2026.4.6)
- #62447 [Bug]: pnpm build:plugin-sdk:dts fails on main because extensions/discord/src/proxy-request-client.ts includes unsupported runtimeProfile option
- #63010 [Bug]: openclaw plugins update never upgrades ClawHub-sourced plugins — spec field always pins resolved version
- #64245 Bug: `update.run` lacks retry mechanism during NPM updates, causing fatal service crash
- #64282 [Bug]: Can't update
- #66038 [Bug] Upgrade: entry.js hardcode + non-atomic service restart + TOKEN plist pollution
- #66908 npm link gets broken after openclaw update via Control UI
- #67485 openclaw update loses bin symlink in nvm environment
- #68287 [Bug]: openclaw node install fails with 'Unit file openclaw-gateway.service does not exist' on node-only VMs
- #68385 [Bug]: Plugin install/update can materialize peer openclaw into plugin node_modules, causing mixed-runtime crashes
- #69006 pnpm check fails on upstream/main — pre-existing type errors in Discord + qa-lab
- #69181 plugins install incorrectly treats npm packages as hook packs
- #69332 [Bug]: AWS EC2 Linux instance fails to install on one line install.
- #69498 [Bug]: openclaw plugins install nests a full copy of openclaw via peer-dep auto-install — 800+ MB bloat and ~15s startup tax per command

Open candidates:

- #40540 [Bug]: `openclaw update` command fails with EBUSY error on Windows
- #43712 [Bug]: v2026.3.11 update fails on live git install at /usr/lib/node_modules/openclaw, but succeeds in clean checkout
- #52558 pnpm check fails on main with tsgo errors in irc/mattermost/msteams/nextcloud-talk
- #63719 openclaw update can leave the global openclaw bin missing after npm global update
- #64892 [Bug]: Agent self-update bypasses update.run and uses raw npm global upgrade without restarting gateway
- #65130 [Bug]: Openclaw package manger in container cannot replace the old version openclaw on updating
