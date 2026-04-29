---
repo: openclaw/openclaw
cluster_id: gitcrawl-4373-dedupe-only-20260429-remote
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
  - "#39261"
candidates:
  - "#46894"
  - "#68113"
cluster_refs:
  - "#39261"
  - "#46894"
  - "#51126"
  - "#53354"
  - "#68113"
  - "#70145"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39261 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4373 on 2026-04-29."
---

# Gitcrawl Cluster 4373

Generated from local gitcrawl run cluster 4373 for `openclaw/openclaw`.

Display title:

> Bug: Mattermost intercepts slash commands — /model, /new, /status, etc. never reach OpenClaw

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 2
- representative: #39261, currently closed in local store
- latest member update: 2026-04-27T22:51:36.756099955Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39261 Bug: Mattermost intercepts slash commands — /model, /new, /status, etc. never reach OpenClaw
- #51126 [Bug]: /model list and /model status are parsed as model IDs (openai-codex/list, openai-codex/status)
- #53354 [Bug]: Slash commands (e.g. /model) sent via WebSocket are not intercepted and get forwarded to the LLM
- #70145 [Bug]: Mattermost slash commands return 503 "not yet initialized"

Open candidates:

- #46894 [Bug]: Slash command error——WebUI treats `/model status` as a model name instead of a slash-command subcommand
- #68113 [Bug]: Mattermost slash commands return 503 "not yet initialized" in v2026.4.15
