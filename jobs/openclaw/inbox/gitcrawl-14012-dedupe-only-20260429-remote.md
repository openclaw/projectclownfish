---
repo: openclaw/openclaw
cluster_id: gitcrawl-14012-dedupe-only-20260429-remote
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
  - "#68985"
candidates:
  - "#11973"
  - "#45389"
  - "#52313"
  - "#52384"
  - "#58890"
  - "#59161"
  - "#62557"
  - "#62615"
cluster_refs:
  - "#11973"
  - "#37705"
  - "#39633"
  - "#41194"
  - "#41914"
  - "#42864"
  - "#43933"
  - "#45389"
  - "#46621"
  - "#52313"
  - "#52384"
  - "#53560"
  - "#58890"
  - "#59161"
  - "#60142"
  - "#62557"
  - "#62615"
  - "#62652"
  - "#63153"
  - "#63248"
  - "#64085"
  - "#64484"
  - "#64928"
  - "#66248"
  - "#67578"
  - "#68985"
  - "#69011"
  - "#69693"
  - "#70232"
  - "#70354"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68985 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14012 on 2026-04-29."
---

# Gitcrawl Cluster 14012

Generated from local gitcrawl run cluster 14012 for `openclaw/openclaw`.

Display title:

> openclaw update restarts gateway but does not refresh installed systemd unit metadata

Cluster shape from gitcrawl:

- total members: 30
- issues: 30
- pull requests: 0
- open candidates in local store: 8
- representative: #68985, currently closed in local store
- latest member update: 2026-04-28T22:51:07.396001581Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37705 [Bug]: Gateway Launch Failure:  Label cannot be longer than 63 bytes
- #39633 [Feature] Backend: Add circuit breaker for gateway model providers
- #41194 update: gateway service unexpectedly started on non-gateway nodes after update
- #41914 openclaw update removes systemd service file and does not recreate it
- #42864 Feature: Session-level circuit breaker (pause after N consecutive model errors)
- #43933 Feature request: Circuit breaker for channel retry storms
- #46621 [Bug]:
- #53560 Gateway hangs after SIGUSR1 signal, systemd cannot auto-restart
- #60142 Gateway crash loop: no backoff or circuit-breaker on auto-restart
- #62652 2026.4.5: Bonjour/mDNS watchdog causes repeated SIGKILL on production VPS under load
- #63153 [Bug]: Bonjour advertiser stalling triggers Gateway self-healing loop with log flooding
- #63248 [Bug] v2026.4.8 — Bonjour/mDNS service-advertise sidecar pegs 99% CPU in headless Docker, eventually triggers container exit
- #64085 feat: Provider circuit breaker — detect quota exhaustion and auto-trip fallback
- #64484 Bonjour/mDNS Advertiser Stuck in Flapping Loop
- #64928 [Bug] Bonjour mDNS advertisement wedges gateway WebSocket path on loopback-only bind
- #66248 openclaw update silently drops user-added EnvironmentFile/Environment directives when regenerating systemd unit
- #67578 @homebridge/ciao assertion failure causes complete gateway crash on malformed mDNS packet from macOS peer
- #68985 openclaw update restarts gateway but does not refresh installed systemd unit metadata
- #69011 [Bug]: bonjour advertiser stuck in "announcing" ~15s on every restart; watchdog triggers restart loop
- #69693 Bonjour mDNS watchdog crashes gateway on WSL2 (SIGKILL after ~7-9s)
- #70232 Bonjour mDNS crashes Gateway on VPS/cloud with unhandled promise rejection (CIAO PROBING CANCELLED)
- #70354 Gateway left dead after update.run / SIGUSR1 supervisor restart — systemd sees clean exit, does not relaunch

Open candidates:

- #11973 [Feature]: Detect and recover from gateway hangs via systemd WatchdogSec
- #45389 Feature request: Circuit breaker for consecutive LLM timeouts
- #52313 gateway restart/update can fail to come back when respawn reuses unstable package-manager paths
- #52384 feat: circuit breaker on auto-resume injection during consecutive model errors
- #58890 [Bug] Auto-update subprocess crashes before restart handoff: piped stdout/stderr breaks when bootout kills parent gateway
- #59161 Circuit breaker: auto-reset sessions after N consecutive aborts
- #62557 `openclaw update` does not restart system-wide systemd services
- #62615 [Feature]: Add gateway-side circuit breaker for unhealthy sessions after consecutive failures
