---
repo: openclaw/openclaw
cluster_id: gitcrawl-14037-dedupe-only-20260429-remote
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
  - "#49015"
candidates:
  - "#37902"
  - "#43374"
cluster_refs:
  - "#34644"
  - "#37902"
  - "#43374"
  - "#46006"
  - "#46400"
  - "#49015"
  - "#60123"
  - "#61131"
  - "#63156"
  - "#63663"
  - "#68265"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49015 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14037 on 2026-04-29."
---

# Gitcrawl Cluster 14037

Generated from local gitcrawl run cluster 14037 for `openclaw/openclaw`.

Display title:

> [Bug]: Embedded Agent timeout is hardcoded at 15 seconds and cannot be configured

Cluster shape from gitcrawl:

- total members: 11
- issues: 11
- pull requests: 0
- open candidates in local store: 2
- representative: #49015, currently closed in local store
- latest member update: 2026-04-28T22:51:06.933345621Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #34644 feat: make embedded agent LLM-request timeout configurable (currently hardcoded 15s)
- #46006 sessions_spawn sub-agents should respect agents.defaults.timeoutSeconds for LLM calls
- #46400 Sub-agent LLM requests always timeout with GLM-5 while Claude Code terminal works fine
- #49015 [Bug]: Embedded Agent timeout is hardcoded at 15 seconds and cannot be configured
- #60123 feat: make embedded Pi LLM-request timeout configurable
- #61131 [Feature Request]: Make slug-gen timeout configurable (currently hardcoded 15s)
- #63156 [Bug]: HTTP client timeout hardcoded to 15s, cannot be configured or increased
- #63663 [Bug]: OpenAI SDK default 10-minute HTTP timeout kills long-running local inference requests
- #68265 [NemoClaw][All Platform][Agent] sessions_spawn sub-agents time out at exactly 1m0s with no output and no user-visible recovery

Open candidates:

- #37902 sessions_spawn: model overrides runTimeoutSeconds with decreasing values across retries; no config minimum enforced
- #43374 All LLM API calls time out simultaneously despite APIs being reachable (multi-agent concurrency issue)
