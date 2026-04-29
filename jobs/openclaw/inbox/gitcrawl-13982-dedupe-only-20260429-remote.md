---
repo: openclaw/openclaw
cluster_id: gitcrawl-13982-dedupe-only-20260429-remote
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
  - "#45440"
candidates:
  - "#38721"
  - "#45718"
  - "#51977"
  - "#52092"
  - "#54155"
  - "#55334"
  - "#57349"
  - "#58534"
  - "#59839"
  - "#60542"
  - "#62625"
  - "#64767"
  - "#65668"
  - "#67393"
  - "#69451"
  - "#69599"
  - "#71227"
cluster_refs:
  - "#38721"
  - "#39673"
  - "#41191"
  - "#41193"
  - "#41538"
  - "#41778"
  - "#42025"
  - "#42198"
  - "#43875"
  - "#44028"
  - "#44070"
  - "#44881"
  - "#45160"
  - "#45440"
  - "#45717"
  - "#45718"
  - "#45943"
  - "#45962"
  - "#45981"
  - "#47430"
  - "#47746"
  - "#51066"
  - "#51097"
  - "#51977"
  - "#52092"
  - "#54155"
  - "#54665"
  - "#55150"
  - "#55334"
  - "#55842"
  - "#56079"
  - "#56947"
  - "#57020"
  - "#57303"
  - "#57349"
  - "#57699"
  - "#57974"
  - "#58534"
  - "#59839"
  - "#60250"
  - "#60542"
  - "#60886"
  - "#61182"
  - "#62625"
  - "#62717"
  - "#63526"
  - "#64354"
  - "#64357"
  - "#64767"
  - "#65553"
  - "#65659"
  - "#65668"
  - "#66522"
  - "#66886"
  - "#67113"
  - "#67393"
  - "#68545"
  - "#69451"
  - "#69501"
  - "#69599"
  - "#69632"
  - "#69977"
  - "#70717"
  - "#71227"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45440 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13982 on 2026-04-29."
---

# Gitcrawl Cluster 13982

Generated from local gitcrawl run cluster 13982 for `openclaw/openclaw`.

Display title:

> [Bug]: 2026.3.12 upgrade causes rapid memory growth and OOM on Raspberry Pi 4; UI   stays disconnected after restart

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 17
- representative: #45440, currently closed in local store
- latest member update: 2026-04-29T11:09:44.83631347Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39673 [Bug]:Gateway install failed: Error: systemctl --user unavailable: Failed to connect to bus: 找不到介质
- #41191 Gateway crash-loops on 2026.3.8 when legacy session.threadBindings.ttlHours is present (auto-migrate message, but exits status=1)
- #41193 v2026.3.8: Crash loop on startup — plugin errors, SyntaxErrors, V8 JIT crashes
- #41538 [Bug]: update.run (and gateway restart) should flush open session JSONL transcripts before SIGTERM
- #41778 openclaw-message OOM on 4GB servers since v2026.3.7
- #42025 [Bug]: Gateway service install failed systemctl enable failed
- #42198 Gateway crashes on every version upgrade (npm install -g openclaw@latest)
- #43875 Stale module references after npm install upgrade (requires double Gateway restart)
- #44028 shouldSyncSessions skips session data during full reindex triggered by session-start
- #44070 [Bug]: openclaw gateway install failure
- #44881 Gateway holds port after npm upgrade — new process crash-loops until openclaw gateway stop is run
- #45160 OOM crash on start without NODE_OPTIONS=--max-old-space-size=1536 (v2026.3.12+)
- #45440 [Bug]: 2026.3.12 upgrade causes rapid memory growth and OOM on Raspberry Pi 4; UI   stays disconnected after restart
- #45717 Session bloat: skillsSnapshot and systemPromptReport accumulated on every run
- #45943 Feature Request: Auto-restart Gateway after npm upgrade
- #45962 [Bug]: gateway start crash due to OOM since with 2026.3.12 and 2026.3.13
- #45981 [Bug]: Session memory index silently dropped on every gateway restart (shouldSync Sessions priority bug)
- #47430 [Bug]: Regression: 2026.3.13 causes OOM and hangs on low-memory Linux server; 2026.3.11 works
- #47746 [Bug]: Gateway crash
- #51066 [Bug]: sessions.json sessionId/sessionFile null for heartbeat-origin sessions
- #51097 [Bug] Gateway memory leak: sessions.json loaded entirely into RAM, grows unbounded
- #54665 [2026.3.24] FATAL ERROR: RegExpCompiler Allocation failed — gateway crashes on startup, OOM in V8 regex compiler
- #55150 [Bug] Deleted agent sessions directories are recreated after Gateway restart
- #55842 v2026.3.24: Gateway crash loop — RegExpCompiler OOM on startup (upgrade from v2026.3.13)
- #56079 [Bug]: restart can persist mismatched sessionId/sessionFile for main session, breaking webchat history
- #56947 [Bug]: Session corruption on crash — missing .jsonl files silently drop all messages
- #57020 [Bug]: Daily session reset creates new sessionId but preserves stale sessionFile — transcript never resets
- #57303 [Bug]: Kubernetes gateway regression: `2026.3.28` OOM-crashes on startup while `2026.3.8` passes same canary
- #57699 Memory leak and excessive memory growth in long-running Gateway process
- #57974 control-ui sessions.list polling saturates gateway with many conversations
- #60250 BUG: Completed run can remain persisted as running, blocking new input and stop
- #60886 [Bug] sessions.json sessionId and sessionFile point to different transcript files causing history mismatch
- #61182 openclaw memory search CLI hangs indefinitely
- #62717 v2026.4.2 gateway memory leak: RSS grows to 3-4GB within 1-2 hours, silent OOM crash
- #63526 OpenClaw 2026.4.9 - Gateway memory usage abnormally high
- #64354 [Bug]: 2026.4.9 memory CLI hangs indefinitely on Linux even after stale skill-path cleanup
- #64357 [Bug]: Gateway crash-loop on 2026.4.9 — ReferenceError: activationSourceConfig is not defined (missing destructured variable in loadOpenClawPlugins)
- #65553 [Bug]: `openclaw memory` CLI hangs with QMD backend on Raspberry Pi / arm64
- #65659 bug: sessions.json entries missing sessionId and sessionFile — thread context lost on restart
- #66522 [Bug] Session index (sessions.json) rebuilds on Gateway restart, causing complete loss of session history without warning
- #66886 Memory leak: gateway process persistent memory growth / 메모리 누수: gateway 프로세스의 지속적 메모리 증가
- #67113 [Bug]: QMD on ARM (Pi 5): qmd embed timeout loop
- #68545 Bug: High memory usage (600+ MB) and slow UI response in 2026.4.14
- #69501 memory subcommands (status / index / search / promote) hang indefinitely with no output on Linux containers
- #69632 Subagent sessions accumulate in memory, causing 3GB+ RSS
- #69977 Gateway RSS grows to 900MB+ rapidly on macOS MacBook Air after fresh restart
- #70717 Gateway RSS regression on 2026.4.15 — fresh cold-start baseline 700MB+ on macOS ARM64, steady climb regardless of workload

Open candidates:

- #38721 [Bug] gateway shutdown timed out: node report shows active child process handle; leaves dirty shutdown + lane wait
- #45718 Session bloat: skillsSnapshot and systemPromptReport accumulated on every run
- #51977 [Bug]: skillsSnapshot.prompt retention/duplication causes gateway heap growth, OOMs, and hangs
- #52092 Gateway OOM: Node.js exceeds default V8 heap limit with cron jobs
- #54155 Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation
- #55334 [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions
- #57349 [Bug]: Heap exhaustion after extended uptime — OOM during filesystem scan
- #58534 Session management performance degrades severely with subagent usage (100%+ CPU at ~400 sessions)
- #59839 [Bug]: Control UI/WebChat previous chat becomes inaccessible after New session
- #60542 BUG: Persisted main session row can become stale and diverge from transcript, wedging new input
- #62625 Memory/sessions: missing startup catch-up scan causes session indexing to silently fall behind across gateway restarts
- #64767 [Bug] Bloated session jsonl (444 MB) hangs gateway via String.prototype.replace — diagnose with sample+lsof
- #65668 [Bug]: SIGUSR1/config.patch restart orphans gateway under custom supervisors → EADDRINUSE crash loop (workaround: OPENCLAW_NO_RESPAWN=1)
- #67393 [Bug]: Massive virtual memory bloat (22GB+ VIRT) immediately after Gateway startup, identical to previously reported issue #6413. This issue was closed as "not planned" but the problem persists on the latest stable release.
- #69451 Memory: Session files loaded entirely into memory via readFileSync
- #69599 [Bug]: Control UI /new, /reset, and New Session do not create the same true fresh session as direct session creation
- #71227 sessions.json parse+write blows past 60s run budget → agents silently return 'No reply from agent'
