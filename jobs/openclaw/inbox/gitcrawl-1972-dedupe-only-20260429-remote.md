---
repo: openclaw/openclaw
cluster_id: gitcrawl-1972-dedupe-only-20260429-remote
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
  - "#45892"
candidates:
  - "#40958"
  - "#41296"
  - "#41332"
  - "#42544"
  - "#43443"
  - "#47776"
  - "#48476"
  - "#49987"
  - "#50136"
  - "#54375"
  - "#54756"
  - "#56258"
  - "#57276"
  - "#57524"
  - "#57971"
  - "#58352"
  - "#60170"
  - "#63593"
  - "#63981"
  - "#66502"
  - "#66735"
  - "#67702"
  - "#68909"
  - "#70056"
  - "#70466"
cluster_refs:
  - "#12582"
  - "#39122"
  - "#39242"
  - "#39580"
  - "#40958"
  - "#41223"
  - "#41228"
  - "#41296"
  - "#41332"
  - "#41434"
  - "#41584"
  - "#41952"
  - "#42051"
  - "#42544"
  - "#42925"
  - "#43039"
  - "#43443"
  - "#43619"
  - "#43624"
  - "#43853"
  - "#43995"
  - "#44518"
  - "#44816"
  - "#45892"
  - "#46771"
  - "#47025"
  - "#47222"
  - "#47776"
  - "#48103"
  - "#48476"
  - "#49987"
  - "#50136"
  - "#52245"
  - "#54375"
  - "#54756"
  - "#56080"
  - "#56258"
  - "#57276"
  - "#57524"
  - "#57582"
  - "#57919"
  - "#57971"
  - "#58352"
  - "#60170"
  - "#61948"
  - "#63084"
  - "#63593"
  - "#63981"
  - "#64857"
  - "#66435"
  - "#66502"
  - "#66627"
  - "#66735"
  - "#67702"
  - "#68293"
  - "#68909"
  - "#69089"
  - "#69140"
  - "#69421"
  - "#69645"
  - "#70001"
  - "#70056"
  - "#70466"
  - "#70978"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45892 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1972 on 2026-04-29."
---

# Gitcrawl Cluster 1972

Generated from local gitcrawl run cluster 1972 for `openclaw/openclaw`.

Display title:

> fix: harden macOS launchd restart handoff after config-triggered gateway restarts

Cluster shape from gitcrawl:

- total members: 64
- issues: 0
- pull requests: 64
- open candidates in local store: 25
- representative: #45892, currently closed in local store
- latest member update: 2026-04-28T22:51:07.225124365Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #12582 feat(hooks): emit gateway shutdown lifecycle events
- #39122 fix(daemon): Windows gateway restart - avoid double restart and EADDRINUSE
- #39242 fix(gateway): honor service marker and explicit port for stale pid cleanup
- #39580 fix: node service install/uninstall uses wrong systemd unit name
- #41223 fix: spawn detached recovery process before launchctl bootout
- #41228 fix: skip gateway restart after update when service is not installed
- #41434 Bootstrap unloaded launchd gateway on restart
- #41584 fix: re-resolve package root after update for gateway service refresh
- #41952 fix(infra): tolerate already-loaded bootstrap and drop -k from post-bootstrap kickstart
- #42051 Daemon: fix sudo systemd unit home resolution
- #42925 fix(gateway): bootstrap macOS LaunchAgent when gateway start sees not-loaded service
- #43039 fix(gateway): rewrite launchd plist during restart
- #43619 fix(gateway): auto-repair unloaded LaunchAgent on start/restart
- #43624 fix(gateway): fall back to PowerShell when wmic is unavailable on Win…
- #43853 fix(gateway): refresh service file with new version after update
- #43995 fix(daemon): wait for process exit during LaunchAgent reinstall
- #44518 fix(daemon): trigger SIGUSR1 in-process restart when scheduling launchd handoff
- #44816 fix(daemon): try direct systemctl --user before --machine fallback
- #45892 fix: harden macOS launchd restart handoff after config-triggered gateway restarts
- #46771 fix(daemon): prefer index.js over entry.js to fix stale systemd entrypoint
- #47025 fix: notify chat after cli gateway restarts
- #47222 fix(gateway): prevent spurious SIGTERM shutdown on CLI disconnect under systemd
- #48103 feat(commands): write restart sentinel on /restart slash command
- #52245 fix(launchd): re-bootstrap LaunchAgent when kickstart failure leaves service unloaded
- #56080 Fix/systemd activate resolved unit
- #57582 fix: release gateway lock on shutdown timeout (#57052)
- #57919 fix: register exit handler for gateway lock cleanup on early crash (closes #57032)
- #61948 fix: stale pid cleaner race condition (SIGTERM cascade)
- #63084 feat(hooks): emit gateway shutdown lifecycle events
- #64857 daemon: recover launch agent restart + prefer restart wake path
- #66435 fix(gateway): await client cleanup to prevent CLI exit hang
- #66627 Gateway: avoid spurious Windows restart on unknown listener stale (#52044)
- #68293 fix(systemd): use resolveSystemdServiceName in activate/uninstall
- #69089 fix(update): move refreshGatewayServiceEnv assignment outside isLoaded() check
- #69140 fix: stop gateway service before npm install to prevent file lock conflicts (fixes #66401)
- #69421 update: skip package install when already on target version (#69412)
- #69645 fix: skip update when already on target version
- #70001 fix(update): refresh gateway version env on restart
- #70978 fix(gateway): refresh install when loaded service embeds gateway token

Open candidates:

- #40958 fix(update): harden detached restart health recovery
- #41296 fix(gateway): improve shutdown error visibility and add close timeout
- #41332 fix: GGML crash on shutdown, cooldown probe bypass, startup stagger
- #42544 fix: only kill stale gateway if not responding
- #43443 fix(launchd): resolve restart race condition via escalating kill and bootstrap retry
- #47776 fix: kill orphan child processes when gateway is force-killed
- #48476 fix(daemon): resilient launchctl bootstrap with retry and load fallback
- #49987 feat: write restart sentinel on CLI restart to notify user after gate…
- #50136 fix(windows): stabilize gateway restart and avoid false stale cleanup [AI-assisted]
- #54375 fix: treat DBus bus unavailable as non-fatal in isSystemdServiceEnabled
- #54756 fix: prefer index.js for gateway update refresh
- #56258 fix(gateway): add per-subsystem timeouts to shutdown close handler
- #57276 fix(daemon): support system-scoped systemd gateway units on linux
- #57524 daemon(systemd): fix sudo install unit path and ownership
- #57971 fix(macOS): write gateway LaunchAgent plist with 0600
- #58352 fix(update-cli): respawn plugin refresh after self-update
- #60170 fix: add crash loop circuit breaker to prevent infinite restart loops
- #63593 fix(cli): avoid false downgrade prompt for latest tag
- #63981 fix(gateway): add startup timeout to prevent indefinite hang on macOS sleep/wake
- #66502 fix: keep gateway service path stable across pnpm upgrades
- #66735 fix(daemon): hand off systemd self-restarts
- #67702 fix(update): block git-mode update when gateway is running
- #68909 fix(daemon): probe system bus and cgroup-aware dedup for gateway status
- #70056 fix(gateway): clean up store and set running=false on stop timeout
- #70466 fix(gateway): exit non-zero on supervised restart so systemd Restart=on-failure recovers
