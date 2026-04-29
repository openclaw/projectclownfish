---
repo: openclaw/openclaw
cluster_id: gitcrawl-14002-dedupe-only-20260429-remote
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
  - "#58356"
candidates:
  - "#14251"
  - "#40207"
  - "#42252"
  - "#47555"
  - "#51860"
  - "#52510"
  - "#55208"
  - "#55880"
  - "#59349"
  - "#59665"
  - "#60398"
  - "#61713"
  - "#65643"
  - "#67631"
  - "#70223"
cluster_refs:
  - "#14251"
  - "#37591"
  - "#40169"
  - "#40207"
  - "#40659"
  - "#41243"
  - "#42252"
  - "#42573"
  - "#43628"
  - "#44402"
  - "#47512"
  - "#47555"
  - "#48457"
  - "#48511"
  - "#49031"
  - "#50154"
  - "#51860"
  - "#52510"
  - "#53679"
  - "#53759"
  - "#54740"
  - "#55208"
  - "#55880"
  - "#56109"
  - "#57586"
  - "#58111"
  - "#58356"
  - "#58885"
  - "#59006"
  - "#59017"
  - "#59349"
  - "#59665"
  - "#60188"
  - "#60398"
  - "#60426"
  - "#61313"
  - "#61615"
  - "#61713"
  - "#62380"
  - "#62984"
  - "#63209"
  - "#63603"
  - "#64032"
  - "#64499"
  - "#64551"
  - "#65195"
  - "#65643"
  - "#65982"
  - "#66839"
  - "#67631"
  - "#67775"
  - "#70223"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58356 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14002 on 2026-04-29."
---

# Gitcrawl Cluster 14002

Generated from local gitcrawl run cluster 14002 for `openclaw/openclaw`.

Display title:

> [Bug]: system.run.prepare broken after update to v2026.3.28 — downgrade to v2026.3.24 does not fix

Cluster shape from gitcrawl:

- total members: 52
- issues: 52
- pull requests: 0
- open candidates in local store: 15
- representative: #58356, currently closed in local store
- latest member update: 2026-04-28T22:51:07.381569979Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37591 [macOS Node] Missing system.run.prepare command prevents system.run execution
- #40169 [Bug]: node work not good
- #40659 launchd LaunchAgent uses bare 'node' instead of absolute path, causing immediate exit
- #41243 Bug: Gateway detects unrelated LaunchAgents as competing gateways, unloads itself
- #42573 macOS app install/onboarding creates separate ai.openclaw.gateway LaunchAgent alongside ai.openclaw.mac
- #43628 [BUG] macOS LaunchAgent + configure wizard creates duplicate gateway process, causing 30+ hour Telegram 409 polling conflict
- #44402 [Bug]: `openclaw gateway install` does not capture Nix (Home Manager) PATH entries in LaunchAgent plist
- #47512 [Bug]: `nodes run` with arguments always denied on Linux node host: `SYSTEM_RUN_DENIED: approval requires a stable executable path`
- #48457 [Bug]: nodes.run (and node exec) fails for interpreter one-liners (python3 -c, bash -c) with SYSTEM_RUN_DENIED: approval cannot safely bind even when approvals are security=full, ask=off
- #48511 Bug: two parallel codex exec runs can destabilize Telegram session/gateway
- #49031 [Bug]: macOS companion app node missing system.run.prepare — exec completely broken on local mode
- #50154 [Bug]: macOS LaunchAgent gateway fails to push to LAN GitLab over SSH, foreground gateway works
- #53679 [Bug]: Gateway fails after Migration Assistant — hardcoded TMPDIR path in LaunchAgent
- #53759 [Bug]: Mac companion app does not respond to system.run probe — skills requiring Mac binaries fail
- #54740 doctor: 3 false positives make health output unusable on any non-trivial install
- #56109 [Bug]: tool-shell PATH can diverge from login shell, causing wrong/missing openclaw binary
- #57586 Node system.run fails: Remote app (2026.3.28) does not advertise system.run.prepare
- #58111 macOS launchd service uses hybrid node/dist paths after switching from NVM to Homebrew
- #58356 [Bug]: system.run.prepare broken after update to v2026.3.28 — downgrade to v2026.3.24 does not fix
- #58885 [Bug]: Sandbox enabled by default on update breaks all exec for existing single-user setups
- #59006 [Bug]: Update 2026.4.1 broke exec completely for existing setups — full day of work lost
- #59017 [Bug]: Update 2026.4.1 silently sandboxes all skills — breaks 35+ skills with no migration path
- #60188 CLI --profile flag does not propagate gateway.port to RPC probe/service discovery
- #60426 exec approval followup dispatch fails with gateway timeout when user does not respond within approval window
- #61313 [Bug]: Remote node exec completely non-functional in 2026.4.2 — all routing paths blocked
- #61615 AGENTS.md: outdated gateway launch mechanism docs
- #62380 [Bug]:
- #62984 Web UI "Update" button corrupts installation — missing core files, gateway unable to start
- #63209 [Bug]: SYSTEM_RUN_DENIED: approval requires an existing canonical cwd (Linux gateway → Windows node)
- #63603 Bug: exec approval followup dispatch failed with gateway timeout (2026.4.9)
- #64032 [Bug]: UI console upgrade can fail, leaving system broken with openclaw command missing
- #64499 macOS companion node missing system.run.prepare breaks exec host=node
- #64551 [Bug]: macOS node connected but missing system.run.prepare, causing exec host=node to fail
- #65195 exec/runtime cannot reach LAN host on macOS while interactive shell can
- #65982 Multi-gateway: `--profile` flag routes restart/status to wrong LaunchAgent
- #66839 [Bug]: macOS node on 2026.4.11 does not advertise system.run.prepare, breaking exec host=node
- #67775 [Bug]: openclaw agent can not reach mcp server at LAN

Open candidates:

- #14251 [Feature]: Improve gateway stop/uninstall to handle system-level LaunchDaemons
- #40207 [Bug]: Gateway LaunchAgent crashes with EX_CONFIG when StandardOutPath targets ~/.openclaw/logs (symlinked/external volume)
- #42252 Improve doctor/gateway diagnostics clarity for mixed LaunchAgent/runtime states
- #47555 [Bug]: --profile flag ignored when executing gateway restart from agent session
- #51860 gateway install/status hardcodes ~/Library/LaunchAgents — prevents boot-without-login on macOS
- #52510 doctor: false positive cleanup hint for active gateway LaunchAgent plist
- #55208 Feature Request: LaunchDaemon mode for macOS (bypass Local Network Privacy)
- #55880 Scheduled auto-upgrade cron can fail without visible notification, and gateway recovery does not restore macOS LaunchAgent gateway
- #59349 [Bug] Exec approval follow-up can leak into a new session after /new because it rebinds by sessionKey instead of original sessionId
- #59665 Gateway launchd PATH not captured from current login shell
- #60398 gateway install fails with error 5 when home directory is on external APFS volume
- #61713 [Bug]: macOS: agent exec / gateway exec cannot reach SSH host, while terminal and direct runExecProcess work
- #65643 `--profile` flag does not clear OPENCLAW_LAUNCHD_LABEL, causing gateway status to resolve wrong plist
- #67631 [Bug]: Mac App and npm CLI both install same LaunchAgent label causing duplicate gateway processes
- #70223 gateway launchd plist missing WorkingDirectory → ENOENT on every agent turn (relative agentDir resolves under cwd=/)
