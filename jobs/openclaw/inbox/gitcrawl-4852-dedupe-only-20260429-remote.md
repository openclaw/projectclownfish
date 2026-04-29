---
repo: openclaw/openclaw
cluster_id: gitcrawl-4852-dedupe-only-20260429-remote
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
  - "#41461"
candidates:
  - "#41461"
  - "#43791"
  - "#44319"
  - "#45395"
  - "#45550"
  - "#45592"
  - "#45613"
  - "#46607"
  - "#57187"
cluster_refs:
  - "#41461"
  - "#43791"
  - "#44319"
  - "#45395"
  - "#45550"
  - "#45592"
  - "#45613"
  - "#46607"
  - "#46735"
  - "#46765"
  - "#53819"
  - "#57187"
  - "#67843"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41461 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 4852 on 2026-04-29."
---

# Gitcrawl Cluster 4852

Generated from local gitcrawl run cluster 4852 for `openclaw/openclaw`.

Display title:

> fix: always apply Anthropic beta headers wrapper for OAuth token support

Cluster shape from gitcrawl:

- total members: 13
- issues: 1
- pull requests: 12
- open candidates in local store: 9
- representative: #41461, currently open in local store
- latest member update: 2026-04-28T22:51:07.520942386Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46735 Agents: fix reasoning_effort normalization for NVIDIA NIM (#46622)
- #46765 fix: map reasoning_effort minimal to low for NIM/vLLM
- #53819 Agents: enable Codex parallel tool calls
- #67843 fix: pass directories to provider stream wrappers

Open candidates:

- #41461 fix: always apply Anthropic beta headers wrapper for OAuth token support
- #43791 [AI-assisted] fix(agents): preserve embedded tool-result payloads
- #44319 fix: canonicalize model key in resolveExtraParams for provider-prefixed model IDs
- #45395 fix(agents): restore Grok tool calls by stripping xAI strict field
- #45550 feat(anthropic): migrate 1M context from beta to GA
- #45592 feat(anthropic): migrate 1M context from beta to GA
- #45613 feat(anthropic): migrate 1M context from beta to GA
- #46607 Support inline Google audio @file refs in headless payloads
- #57187 fix: strip context-1m beta when apiKey is unresolved (OAuth compat)
