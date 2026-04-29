---
repo: openclaw/openclaw
cluster_id: gitcrawl-2277-dedupe-only-20260429-remote
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
  - "#56942"
candidates:
  - "#39138"
  - "#42273"
  - "#45573"
  - "#50248"
  - "#50442"
  - "#51620"
  - "#54200"
  - "#54877"
  - "#55231"
  - "#55564"
  - "#55792"
  - "#56609"
  - "#56827"
  - "#57562"
  - "#57567"
  - "#58626"
  - "#61321"
  - "#63101"
  - "#63266"
  - "#63572"
  - "#63897"
  - "#63998"
  - "#64707"
  - "#65177"
  - "#65353"
  - "#65358"
  - "#65564"
  - "#65786"
  - "#66360"
  - "#67417"
  - "#68191"
cluster_refs:
  - "#39138"
  - "#39249"
  - "#41258"
  - "#41830"
  - "#42273"
  - "#43395"
  - "#44722"
  - "#45255"
  - "#45573"
  - "#46250"
  - "#49716"
  - "#50248"
  - "#50442"
  - "#50613"
  - "#51620"
  - "#54200"
  - "#54459"
  - "#54877"
  - "#55064"
  - "#55231"
  - "#55564"
  - "#55792"
  - "#56609"
  - "#56827"
  - "#56942"
  - "#57173"
  - "#57562"
  - "#57567"
  - "#58132"
  - "#58626"
  - "#58953"
  - "#60149"
  - "#60299"
  - "#61321"
  - "#61680"
  - "#62628"
  - "#62630"
  - "#62631"
  - "#62632"
  - "#62642"
  - "#62834"
  - "#63101"
  - "#63266"
  - "#63572"
  - "#63852"
  - "#63897"
  - "#63998"
  - "#64291"
  - "#64707"
  - "#65177"
  - "#65353"
  - "#65358"
  - "#65564"
  - "#65786"
  - "#66057"
  - "#66360"
  - "#66421"
  - "#66858"
  - "#66859"
  - "#66860"
  - "#66861"
  - "#67417"
  - "#67974"
  - "#68191"
  - "#68229"
  - "#69013"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56942 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2277 on 2026-04-29."
---

# Gitcrawl Cluster 2277

Generated from local gitcrawl run cluster 2277 for `openclaw/openclaw`.

Display title:

> [Bug]:

Cluster shape from gitcrawl:

- total members: 66
- issues: 66
- pull requests: 0
- open candidates in local store: 31
- representative: #56942, currently closed in local store
- latest member update: 2026-04-28T22:51:07.570797384Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39249 [Housekeeping] Cleanup 806 orphan transcript files in duplex agent
- #41258 openclaw backup create (state/full) silently exits 0 with empty 10-byte gzip archive
- #41830 Bug: `openclaw backup create` stalls — produces 10-byte .tmp file and never completes
- #43395 Workspace data not migrated when upgrading to per-agent workspace paths (workspace → workspace-{agentId})
- #44722 [Bug] `openclaw doctor --fix` incorrectly enables built-in `feishu` plugin, causing conflict with `openclaw-lark`
- #45255 doctor --fix deletes active :run: session JSONL files as orphans
- #46250 [Bug][CRITICAL] Session transcript lost after session reset - 6 hours of conversation history missing
- #49716 [Bug]: It cannot be started normally after the update
- #50613 Transcript files grow without bound - no pruning for non-heartbeat sessions
- #54459 [Bug] Gateway 重启导致 Session Transcript 数据丢失
- #55064 [Bug]: Feishu plugin path broken after upgrade, doctor --fix doesn't repair
- #56942 [Bug]:
- #57173 [Bug] OpenClaw Core Schema Incompatible with Official Feishu Plugin
- #58132 Upgrading to 3.28: Gateway won't start, no documentation found, posting for help
- #58953 P2P messages stuck with replies=0 after gateway restart
- #60149 [Bug]: Gateway fails to start when creating new agent via wizard with Feishu account binding
- #60299 [Bug]: task maintenance can keep stale cli/cron tasks running forever when childSessionKey is blank or persistent
- #61680 Delivery recovery retries permanent errors (400: message too long) indefinitely on restart
- #62628 Docker to host state migration leaks /home/node absolute paths and breaks agent runtime with EACCES
- #62630 Docker to host state migration leaks /home/node absolute paths and breaks agent runtime with EACCES
- #62631 Docker to host state migration leaks /home/node absolute paths and breaks agent runtime with EACCES
- #62632 Docker to host state migration leaks /home/node absolute paths and breaks agent runtime with EACCES
- #62642 Docker to host state migration leaks /home/node absolute paths and breaks agent runtime with EACCES
- #62834 Bug: Orphaned session transcript .jsonl files accumulate when sessions are cleaned up
- #63852 [Bug]: State migration destroys user data on upgrade (v2026.4.5 → v2026.4.9)
- #64291 [Bug]: Session replay loads only a fraction of transcript even with intact parentId chain and no compaction
- #66057 [v1.x.x] Compaction checkpoint .jsonl files never cleaned up — 8.4GB+ orphan files accumulating on disk
- #66421 AutoClaw update overwrites/loses Agent workspace files (SOUL/MEMORY/IDENTITY)
- #66858 [Bug]: OpenClaw 2026.4.14 operator continuity reliability gaps across restart recovery, delegated recovery, and post-compaction resume
- #66859 [Bug]: OC155 restart remains destructive without native transcript archive or durable restart handoff on 2026.4.14
- #66860 [Bug]: OC156 recoverable missing-session-entry still prunes delegated restart recovery on 2026.4.14
- #66861 [Bug]: OC157 post-compaction resume quality still requires local carry on 2026.4.14
- #67974 [Bug] Config hot-reload loses Feishu account credentials
- #68229 [Bug] Session file replaced on cache-ttl expiry — all conversation history lost
- #69013 [Bug]: Hybrid sessions.json schema (canonical + legacy positional keys) causes silent session degradation on 4.14, resolved by 4.15 migration

Open candidates:

- #39138 Gateway 重启后 delivery recovery 重新发送大量旧消息（包括 15 小时前的）
- #42273 backup create stalls on large installations (4GB+ .openclaw dir)
- #45573 Group chat sessions not persisted — only 1 session from 166+ messages
- #50248 Bug: sessions cleanup --fix-missing can prune fresh cron sessions with valid transcripts
- #50442 [Bug] backup create leaves large .tmp files on timeout causing disk space exhaustion
- #51620 Gateway restart drops queued and in-flight inbound messages
- #54200 moltbot.json in ~/.openclaw/ silently dropped on upgrade to v2026.3.22+ causing blank UI and crash-loop
- #54877 [Bug]: doctor suggests incomplete sessions cleanup preview for missing transcripts
- #55231 delivery-recovery flushes stale pending messages as batch on every restart
- #55564 Gateway replays stale queued messages after restart
- #55792 [Feature]: Catch up on missed inbound messages after gateway restart
- #56609 Session files should never be deleted — rename .deleted.* to .archived.*
- #56827 [Bug]: openclaw doctor fails on large session store with stale sessions.json.*.tmp accumulation
- #57562 [Bug]: bug-report-openclaw-upgrade-config-migration.pdf
- #57567 Bug: Configuration Migration Failure During Upgrade (v3.24 → v3.28)
- #58626 升级版本后配置文件中的插件路径未更新，导致 gateway 启动失败
- #61321 [Bug]: same-agent absolute sessionFile paths survive root moves and still point at old home
- #63101 [Bug] Feishu channel config validation fails after upgrading from v4.5 to v4.8
- #63266 Docker to host migration can leave workspace-local and workspace-local/local paths split, breaking local secrets assumptions
- #63572 [Bug]: Migration guide missing cross-OS path rewrite step, openclaw doctor does not detect stale absolute workspace paths
- #63897 [Bug]: `sessions cleanup --fix-missing` wants to prune valid session entries because `sessionFile` paths are stale/mismatched
- #63998 Session transcript doomloop: crash-restart cycle inflates transcript until gateway OOMs
- #64707 Feishu: default account auto-created on gateway restart with not configured error
- #65177 [Bug]: openclaw doctor --fix does not migrate Feishu botName to name after upgrade to 2026.4.11
- #65353 2026.4.10 update caused agent amnesia symptoms and left stale CLI path breakage
- #65358 Upgrade regression: agent memory/session state broke across 2026.4.10 update, requiring manual session-store surgery
- #65564 [Bug]: heartbeat isolatedSession rotates sessionId but reuses old transcript file
- #65786 [Bug]: openclaw 2026.4.11 also not resolve feishu configure issue. After upgrade, Config invalid File: ~/.openclaw/openclaw.json Problem:   - channels.feishu: invalid config
- #66360 session.maintenance has no size cap for transcript .jsonl files — unbounded growth causes gateway CPU 100%
- #67417 Bug: openclaw backup create fails with ENOENT when session file is cleaned up during backup
- #68191 False-positive `lost` cron task records after gateway restart due to transient `activeJobIds` backing-session check
