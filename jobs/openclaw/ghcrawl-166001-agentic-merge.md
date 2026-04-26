---
repo: openclaw/openclaw
cluster_id: ghcrawl-166001-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#47362"
candidates:
  - "#14432"
  - "#45062"
  - "#47362"
  - "#52727"
  - "#56951"
  - "#57247"
  - "#60017"
  - "#63940"
  - "#65777"
  - "#70605"
cluster_refs:
  - "#14432"
  - "#45062"
  - "#47362"
  - "#52727"
  - "#56951"
  - "#57247"
  - "#60017"
  - "#63940"
  - "#65777"
  - "#70605"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #47362 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166001 on 2026-04-26."
---

# GHCrawl Cluster 166001

Generated from local ghcrawl run cluster 166001 for `openclaw/openclaw`.

Display title:

> fix(slack): check interactiveReplies capability for inline buttons prompt

Cluster shape from ghcrawl:

- total members: 10
- issues: 1
- pull requests: 9
- open candidates in local store: 10
- representative: #47362, currently open in local store
- latest member update: 2026-04-24T18:56:29.322Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #14432 System prompt: add guidance for spawning background sub-agents
- #45062 perf(agents): optimize system prompt KV cache hit rate (10,901 → 30,735 stable chars, 99.4%) [ai-assisted]
- #47362 fix(slack): check interactiveReplies capability for inline buttons prompt
- #52727 feat: add instruction precedence chain for skills
- #56951 Slack inline buttons should be enabled by default
- #57247 feat: dedicated model identity line in system prompt
- #60017 fix: improve reminder scheduling guidance for relative times
- #63940 Prompt: relax skill selection gating
- #65777 fix(prompt): preserve IDENTITY defaults in system prompt
- #70605 BUG: Strip strikethrough text from context files before sending to model
