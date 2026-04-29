---
repo: openclaw/openclaw
cluster_id: gitcrawl-7007-dedupe-only-20260429-remote
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
  - "#48947"
candidates:
  - "#48947"
  - "#55942"
  - "#60861"
  - "#67434"
  - "#68285"
cluster_refs:
  - "#41707"
  - "#43278"
  - "#44549"
  - "#48947"
  - "#51022"
  - "#55942"
  - "#59060"
  - "#60861"
  - "#61139"
  - "#62356"
  - "#63249"
  - "#67237"
  - "#67434"
  - "#68285"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48947 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 7007 on 2026-04-29."
---

# Gitcrawl Cluster 7007

Generated from local gitcrawl run cluster 7007 for `openclaw/openclaw`.

Display title:

> [Bug]: Openclaw is stupid again: 200000 tool calls, no feedback, interruptions

Cluster shape from gitcrawl:

- total members: 14
- issues: 14
- pull requests: 0
- open candidates in local store: 5
- representative: #48947, currently open in local store
- latest member update: 2026-04-28T21:55:43.643272162Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41707 [Bug]: 升级之后只要是用到工具的地方，就无限重复
- #43278 [Bug]: 执行任务卡死，不再反应
- #44549 [Bug]: Bug Report: OpenClaw 2026.3.11 breaks all Tool Execution for `moonshotai/kimi-k2.5` via `openai-completions`
- #51022 [Bug]: Tool calls silently hang after extended session with heavy tool usage
- #59060 [Bug]: **Tool execution failures with Kimi K2.5 model - "missing tool result in session history" errors**
- #61139 [Bug]: Tools (read/edit/exec) hang indefinitely on 2026.4.2 with k2p5 — downgrading to 2026.4.1 fixes it
- #62356 [Bug]: CLI enters CPU 100% infinite loop on unknown/unregistered subcommands (v2026.4.5)
- #63249 [Bug] v2026.4.8 — openclaw cron list, openclaw message …, openclaw channels list enter 99% CPU busy-wait and never return
- #67237 [Bug]: Does anyone else cant get this thing to do anything correctly?

Open candidates:

- #48947 [Bug]: Openclaw is stupid again: 200000 tool calls, no feedback, interruptions
- #55942 [Bug]: NVIDIA NIM Kimi 2.5 tool execution completely broken in OpenClaw > 2026.2.25
- #60861 [Bug]: WorkClaw-exec工具执行卡死Bug反馈
- #67434 [Bug]: latest OpenClaw still emits massive pre-tool update_plan bursts on long GPT-5/Codex tasks
- #68285 [Bug]: 100% CPU usage, broken tools, and no long-term memory on Node v25.9 / Matrix
