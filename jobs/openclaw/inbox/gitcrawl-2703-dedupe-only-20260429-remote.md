---
repo: openclaw/openclaw
cluster_id: gitcrawl-2703-dedupe-only-20260429-remote
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
  - "#40199"
candidates:
  - "#14432"
  - "#40296"
  - "#45062"
  - "#46647"
  - "#51683"
  - "#52727"
  - "#61422"
  - "#63940"
  - "#65777"
  - "#70605"
cluster_refs:
  - "#14432"
  - "#40199"
  - "#40296"
  - "#42669"
  - "#43304"
  - "#45062"
  - "#46172"
  - "#46438"
  - "#46647"
  - "#46666"
  - "#47362"
  - "#51683"
  - "#52727"
  - "#53549"
  - "#55697"
  - "#56951"
  - "#56955"
  - "#57247"
  - "#60017"
  - "#61422"
  - "#63940"
  - "#65777"
  - "#70605"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40199 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2703 on 2026-04-29."
---

# Gitcrawl Cluster 2703

Generated from local gitcrawl run cluster 2703 for `openclaw/openclaw`.

Display title:

> System prompt: include weekday in Current Date & Time section

Cluster shape from gitcrawl:

- total members: 23
- issues: 2
- pull requests: 21
- open candidates in local store: 10
- representative: #40199, currently closed in local store
- latest member update: 2026-04-28T21:55:43.742585085Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40199 System prompt: include weekday in Current Date & Time section
- #42669 feat(skills): add skills.priority config for prompt ordering
- #43304 feat(agents): include current date and day-of-week in system prompt
- #46172 fix: include current time in system prompt to fix wrong greeting
- #46438 fix(model-compat): supportsUsageInStreaming + fix(system-prompt): prefix caching (#46434, #46433)
- #46666 fix: check interactiveReplies instead of inlineButtons in Slack system prompt
- #47362 fix(slack): check interactiveReplies capability for inline buttons prompt
- #53549 fix(tools): filter MCP/LSP tools through subagent policy
- #55697 fix(agents): correct ClawHub URL in system prompt (clawhub.com → clawhub.ai)
- #56951 Slack inline buttons should be enabled by default
- #56955 feat(slack): enable inline buttons by default
- #57247 feat: dedicated model identity line in system prompt
- #60017 fix: improve reminder scheduling guidance for relative times

Open candidates:

- #14432 System prompt: add guidance for spawning background sub-agents
- #40296 perf(system-prompt): move dynamic sections after static content for prefix cache stability
- #45062 perf(agents): optimize system prompt KV cache hit rate (10,901 → 30,735 stable chars, 99.4%) [ai-assisted]
- #46647 Slack system prompt incorrectly checks inlineButtons instead of interactiveReplies
- #51683 Agents: add machine-readable session status time
- #52727 feat: add instruction precedence chain for skills
- #61422 fix: move context files after cache boundary to prevent invalidation
- #63940 Prompt: relax skill selection gating
- #65777 fix(prompt): preserve IDENTITY defaults in system prompt
- #70605 BUG: Strip strikethrough text from context files before sending to model
