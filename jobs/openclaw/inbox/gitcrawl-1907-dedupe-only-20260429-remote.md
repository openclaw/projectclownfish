---
repo: openclaw/openclaw
cluster_id: gitcrawl-1907-dedupe-only-20260429-remote
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
  - "#43589"
candidates:
  - "#40088"
  - "#41621"
  - "#41858"
  - "#46168"
  - "#48324"
  - "#51733"
  - "#53663"
  - "#60928"
  - "#69663"
cluster_refs:
  - "#40088"
  - "#41326"
  - "#41606"
  - "#41621"
  - "#41655"
  - "#41858"
  - "#41972"
  - "#42047"
  - "#42050"
  - "#42163"
  - "#42293"
  - "#43056"
  - "#43589"
  - "#44898"
  - "#45818"
  - "#46168"
  - "#47073"
  - "#47375"
  - "#47832"
  - "#48089"
  - "#48324"
  - "#48429"
  - "#48500"
  - "#49059"
  - "#49125"
  - "#50349"
  - "#50468"
  - "#51165"
  - "#51733"
  - "#53663"
  - "#54228"
  - "#54927"
  - "#55489"
  - "#55495"
  - "#56075"
  - "#56825"
  - "#60928"
  - "#64549"
  - "#66617"
  - "#67225"
  - "#67459"
  - "#69663"
  - "#69715"
  - "#69716"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43589 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1907 on 2026-04-29."
---

# Gitcrawl Cluster 1907

Generated from local gitcrawl run cluster 1907 for `openclaw/openclaw`.

Display title:

> fix: file watchers miss directories created after startup (chokidar glob)

Cluster shape from gitcrawl:

- total members: 44
- issues: 15
- pull requests: 29
- open candidates in local store: 9
- representative: #43589, currently closed in local store
- latest member update: 2026-04-29T10:20:02.894152955Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41326 Slack DM sessions do not refresh available_skills after workspace custom skill discovery updates
- #41606 [Bug]: Memory/skills chokidar watcher can exhaust FDs (FSEventWrap) when watched dirs have many files
- #41655 fix(gateway): limit chokidar watch depth to avoid fd exhaustion
- #41972 Per-agent skills filter not applied in live gateway sessions
- #42047 fix(memory): add depth limit to chokidar watchers to prevent FD exhaustion
- #42050 fix: apply agent skillFilter in gateway path
- #42163 fix(skills): bound watcher recursion to reduce FD exhaustion risk
- #42293 fix(ui): stop skills filter from being autofilled on click
- #43056 fix(memory,skills): add depth limit to chokidar watchers to prevent FD exhaustion
- #43589 fix: file watchers miss directories created after startup (chokidar glob)
- #44898 [Bug]: Skills added after session creation are not reflected in existing agent sessions (stale skillsSnapshot, no CLI refresh)
- #45818 [Bug]: Memory Sqlite don't watch for change file.
- #47073 Refresh persisted skills snapshots when agent skill filters change
- #47375 fix(agents): apply skillFilter when building prompt from entries
- #47832 skillsSnapshot not refreshed on /new or gateway restart for existing sessions
- #48089 fix: skills snapshot not invalidated after gateway restart - AI assisted
- #48429 Refresh persisted skills snapshots when agent skill filters change
- #48500 Infra: fix stale skills snapshot after gateway restart
- #49059 Bug: Skills snapshot not refreshed for existing sessions after gateway restart
- #49125 Skills: refresh stale session snapshots after restart
- #50349 fix: refresh skillsSnapshot when snapshotVersion changes
- #50468 [Bug]: Skills file watcher broken due to chokidar v5 glob incompatibility — installed skills not detected in existing sessions
- #51165 feat(skills): agent-scoped policy parity + reactive snapshot refresh
- #54228 fix: ensure skills snapshot refreshes on first turn when version is 0
- #54927 Skills: stop using chokidar globs for refresh
- #55489 Bug: skillsSnapshot never refreshes after gateway restart (version counter resets to 0)
- #55495 fix: initialize globalVersion to 1 so skills snapshot refreshes after gateway restart
- #56075 Shared skills should propagate reliably to existing chats, not just new sessions
- #56825 chokidar v5 glob pattern memory/**/*.md fails to detect file changes (incremental index never triggers)
- #64549 [Bug]: memorySearch watch does not auto-index new markdown files in workspace/memory or extraPaths
- #66617 Skills: fix watcher so deleting a skill folder refreshes on macOS
- #67225 fix: honor agent-specific thinking defaults on ingress runs
- #67459 Skills snapshot cache not invalidated when new skills are added
- #69715 Bug: stale skillsSnapshot can hide newly added skills after restart
- #69716 fix(skills): refresh stale session skill snapshots after restart

Open candidates:

- #40088 memory_search: chokidar file watcher silently stops delivering events, index goes stale
- #41621 fix: separate filter state for Agents Skills panel and Skills tab
- #41858 fix: add depth limits to chokidar watchers to prevent FD exhaustion
- #46168 Skills: fix discovery scan truncation
- #48324 fix(skills): refresh snapshots when eligibility changes
- #51733 fix: watch nested repo-style skill roots
- #53663 fix(ui): prevent skills search autofill
- #60928 CLI: refresh skills snapshot for agent runs
- #69663 fix(skills): recurse into subdirectories when scanning skill root (#56915)
