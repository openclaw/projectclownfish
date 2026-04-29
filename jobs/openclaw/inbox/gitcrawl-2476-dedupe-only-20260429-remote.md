---
repo: openclaw/openclaw
cluster_id: gitcrawl-2476-dedupe-only-20260429-remote
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
  - "#49888"
candidates:
  - "#14785"
  - "#52861"
  - "#53540"
cluster_refs:
  - "#14785"
  - "#43113"
  - "#46089"
  - "#49888"
  - "#49899"
  - "#50333"
  - "#52696"
  - "#52697"
  - "#52702"
  - "#52861"
  - "#53540"
  - "#53803"
  - "#58978"
  - "#59946"
  - "#61026"
  - "#64151"
  - "#64761"
  - "#68679"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49888 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2476 on 2026-04-29."
---

# Gitcrawl Cluster 2476

Generated from local gitcrawl run cluster 2476 for `openclaw/openclaw`.

Display title:

> [Bug]: Persisted oversized toolResult entries can poison shared main sessions (lag/token blowup/OOM risk)

Cluster shape from gitcrawl:

- total members: 18
- issues: 18
- pull requests: 0
- open candidates in local store: 3
- representative: #49888, currently closed in local store
- latest member update: 2026-04-28T07:04:52.400335027Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43113 [Bug]: Sub-agent dies with 'Network connection lost' during large tool call write — all work lost
- #46089 [Bug]: embedded run timeout &  embedded run failover decision
- #49888 [Bug]: Persisted oversized toolResult entries can poison shared main sessions (lag/token blowup/OOM risk)
- #49899 [Feature]: openclaw doctor should detect oversized persisted toolResult buildup in active/shared sessions
- #50333 [Bug]: Embedded runs can fail with server_error in long sessions even when UI context appears below limit
- #52696 OpenClaw: ToolResultCompactor — Design Review and Integration Path
- #52697 ToolResultCompactor v2 — Urgent Context Overflow Prevention (OpenClaw #41962)
- #52702 ToolResultCompactor for Agent Context Management
- #53803 [Bug]: Tool results duplicated in session context — 3x token overhead with OmniRoute gateway
- #58978 Feature: tiered context compaction (tool-output-first compression)
- #59946 [Bug]: Subagent killed by LLM provider streaming idle timeout (~60s) — no retry or graceful handling
- #61026 [Bug]: Manual session stop triggers false timeout error and cascading model failover
- #64151 Feature: write-time tool result externalization to prevent session JSONL bloat
- #64761 Optimize: Reduce tool schema token cost per turn
- #68679 [Bug]: Persisted `toolResult.details.aggregated` bypasses tool-result truncation and token estimation, causing durable transcript bloat and repeated compaction in OpenAI-Codex sessions

Open candidates:

- #14785 Reduce tool schema token overhead (~3,500 tok/session)
- #52861 perf: reduce per-turn token overhead via conditional tool/skill injection
- #53540 [Bug]: Embedded runner "Network connection lost" when LLM generates a tool call with large parameters (param generation latency > underlying request timeout)
