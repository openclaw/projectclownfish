---
repo: openclaw/openclaw
cluster_id: gitcrawl-2272-dedupe-only-20260429-remote
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
  - "#54408"
candidates:
  - "#45488"
  - "#53008"
  - "#55694"
  - "#60858"
  - "#63335"
  - "#63892"
  - "#66126"
  - "#66263"
  - "#68401"
  - "#68470"
cluster_refs:
  - "#38792"
  - "#40336"
  - "#41291"
  - "#41352"
  - "#41432"
  - "#41562"
  - "#41825"
  - "#44032"
  - "#44138"
  - "#44787"
  - "#45488"
  - "#46723"
  - "#48148"
  - "#48547"
  - "#49043"
  - "#50272"
  - "#51031"
  - "#53008"
  - "#53331"
  - "#54327"
  - "#54408"
  - "#55694"
  - "#56970"
  - "#57410"
  - "#58107"
  - "#58657"
  - "#58956"
  - "#60858"
  - "#61287"
  - "#61981"
  - "#63335"
  - "#63533"
  - "#63865"
  - "#63892"
  - "#65514"
  - "#66126"
  - "#66263"
  - "#66397"
  - "#66520"
  - "#68032"
  - "#68329"
  - "#68401"
  - "#68470"
  - "#68923"
  - "#68946"
  - "#69016"
  - "#69298"
  - "#69756"
  - "#69838"
  - "#70304"
  - "#70679"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54408 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2272 on 2026-04-29."
---

# Gitcrawl Cluster 2272

Generated from local gitcrawl run cluster 2272 for `openclaw/openclaw`.

Display title:

> [Bug]: Pre-compaction memory flush leaks into main session as user messages and causes compaction loop

Cluster shape from gitcrawl:

- total members: 51
- issues: 51
- pull requests: 0
- open candidates in local store: 10
- representative: #54408, currently closed in local store
- latest member update: 2026-04-28T12:17:32.030774783Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38792 Agent loop silently stalls: no user response after API error + long tool-call chains
- #40336 [Bug]: GLM-5 compaction not triggered automatically, causes network_error timeout on large sessions
- #41291 [Bug]: Agent enters infinite retry loop when tool calls fail
- #41352 Discord session stops receiving messages after Compaction
- #41432 Manual /compact can fail with "no real conversation messages to summarize" when real messages are only in turnPrefixMessages
- #41562 Discord: thread session delivery leaks to main session target (#logs) when fallback triggers
- #41825 Session reply channel contaminated after compaction — response delivered to wrong Discord channel
- #44032 Memory flush blocks user messages (isCompacting lock)
- #44138 Manual /compact command fails with 'no real conversation messages' on Discord thread sessions
- #44787 [Bug]: Pre-compaction memory flush. Store durable memories now (use memory/2026-03-13.md; creatememory/ if needed). IMPORTANT: If the file already exists, APPEND new content only and do notoverwrite existing entries
- #46723 Feishu: text content lost when sending image+text mixed message in group chat
- #48148 Cache % display shows >100% in openclaw status
- #48547 Compaction summaries absorb system prompt content, causing unbounded growth and stale context
- #49043 [Bug]: Agent to agent, Cross Session Identity Issue
- #50272 sessions_send to Feishu session: messages processed internally but not delivered to user's chat window
- #51031 [Bug]: Tool calls silently hang after compaction in extended sessions (compaction.mode=safeguard)
- #53331 Feature: Auto-ack during compaction to prevent perceived unresponsiveness
- #54327 [Bug]: sessions_send loses deliveryContext, causing replies to go to wrong channel
- #54408 [Bug]: Pre-compaction memory flush leaks into main session as user messages and causes compaction loop
- #56970 [Bug]: When sending URLs and images via Feishu, the messages will be filtered, resulting in failure to receive them.
- #57410 Compaction results in full context reset instead of compression
- #58107 [Bug]:  Multiple Feishu group agents - only main reply delivered, other agents' replies silently dropped
- #58657 [Bug]: Codex ACP session archive self-ingestion can bloat ACP history, OOM codex-acp, and crash the host
- #58956 [Bug]: Pre-compaction memory flush leaks into chat UI and blocks the user’s active turn in 2026.3.31
- #61287 [Bug]: openclaw sessions shows inflated context (>100%) for claude-cli backend — cumulative cacheRead summed across turns
- #61981 [Bug] Context compaction preserves invalid file read offsets
- #63533 [Feature]: Agent 无明确边界的重复工具调用导致无限循环
- #63865 Critical: Pre-compaction flush prompts replace user messages in web UI
- #65514 [Bug]: MiniMax tokenBudget not forwarded → LCM compaction silently skipped
- #66397 Bug: Discord channel sessions can silently lose final answers after continuation/compaction with Active Memory off
- #66520 [Bug] Auto-compaction never fires when Anthropic prompt cache hit rate is ~100%
- #68032 Bug: SELF_IMPROVEMENT_REMINDER.md duplicated 30+ times on compaction loop, causing context overflow and session reset
- #68329 cli-backend never triggers compaction (native or plugin) — context grows unbounded
- #68923 Bug: Agent loops on identical tool calls without stopping
- #68946 Bug: Agent loops on identical tool calls without stopping
- #69016 [Bug] Context engine lifecycle hooks (assemble/afterTurn) don't fire for CLI backend sessions — plugin compaction engines non-functional
- #69298 [Bug]: Codex harness usage inflates session context accounting by double-counting cached input
- #69756 [Bug]: Chat history entries replaced with "chat.history omitted: message too large" after compaction
- #69838 [Bug]: Auto-compaction not triggering during tool-use loops — regression on 2026.4.11
- #70304 `/compact` skips with "no real conversation messages yet" when the session runs under a CLI provider (claude-cli)
- #70679 Bug: claude-cli usage accumulator double-counts cache_read_input_tokens across tool-loop iterations

Open candidates:

- #45488 [Bug]: #18049 introduces session bloat
- #53008 Memory compaction blocks main processing lane, causing unresponsive bot for 10+ minutes
- #55694 Agent陷入工具调用失败死循环，导致重复发送消息刷屏
- #60858 Bug: Three `hasRealConversationContent` guards silently block compaction — `session.messages` arrives empty
- #63335 [Bug]: Single turn can enter pathological retry churn with same runId, near-identical prompt size, and stuck processing state
- #63892 Proactive compaction scheduler never re-fires after first checkpoint (compactionCount latched at 1)
- #66126 [Bug]: Compaction-retry re-injects cron/system prompts as new user input, causing infinite tool-call loops
- #66263 [Bug]: Codex native compaction can leave post-compaction context usage stale or unknown
- #68401 Feature: Allow message processing during session compaction
- #68470 [Bug]: MiniMax prompt token double-counting causes premature compaction at ~20% context
