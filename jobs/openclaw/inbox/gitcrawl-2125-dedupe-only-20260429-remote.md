---
repo: openclaw/openclaw
cluster_id: gitcrawl-2125-dedupe-only-20260429-remote
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
  - "#65488"
candidates:
  - "#44993"
  - "#59710"
  - "#62294"
  - "#64016"
  - "#64293"
cluster_refs:
  - "#39173"
  - "#43767"
  - "#44993"
  - "#47282"
  - "#49878"
  - "#51639"
  - "#52819"
  - "#53596"
  - "#59710"
  - "#59977"
  - "#60916"
  - "#62294"
  - "#63232"
  - "#64016"
  - "#64293"
  - "#65488"
  - "#65847"
  - "#67308"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65488 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2125 on 2026-04-29."
---

# Gitcrawl Cluster 2125

Generated from local gitcrawl run cluster 2125 for `openclaw/openclaw`.

Display title:

> [Bug]: Issue with context with Heartbeat turns

Cluster shape from gitcrawl:

- total members: 18
- issues: 18
- pull requests: 0
- open candidates in local store: 5
- representative: #65488, currently closed in local store
- latest member update: 2026-04-28T22:26:13.653359727Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39173 Heartbeat runner never re-fires when a run exceeds the 'every' interval
- #43767 [Bug]: Heartbeat ignores lightContext: true, loads full agent context + unbounded session history
- #47282 [Bug] Heartbeat only fires once, then stops
- #49878 Bug: Heartbeat session caches old HEARTBEAT.md content and doesn't re-read after update
- #51639 Native heartbeat initializes but never fires (callback never triggers)
- #52819 [Bug]: Gateway heartbeat scheduler starts but never fires cycles after gateway restart (v2026.3.13)
- #53596 Heartbeat fires at irregular intervals (30m config but fires every 6-7 hours)
- #59977 Heartbeat scheduler resets on gateway restart instead of maintaining wall-clock cadence
- #60916 Heartbeat rarely fires after upgrading to 2026.4.2 with MiniMax model
- #63232 Heartbeat scheduler chain permanently broken when requests-in-flight returned
- #65488 [Bug]: Issue with context with Heartbeat turns
- #65847 Bug: agents.defaults.heartbeat.to corrupts deliveryContext, causing private messages to leak to group with different content
- #67308 [Bug]: Read HEARTBEAT.md if it exists I didn't do anything and burned 300 million tokens every day

Open candidates:

- #44993 [Bug]: Heartbeat/Cron "Current time" timestamp is stale - not refreshing between runs
- #59710 Heartbeat silently stops after ~20h despite #52270 fix in 2026.3.28
- #62294 Heartbeat: non-interval wake reasons bypass interval enforcement, causing bursts and silent gaps
- #64016 BUG: heartbeat fires duplicate runs when external wake events (openclaw agent CLI) arrive during scheduled heartbeat
- #64293 [Bug]: Heartbeat runs despite heartbeat: {} config (2M+ tokens/day with zero user activity)
