---
repo: openclaw/openclaw
cluster_id: gitcrawl-2076-dedupe-only-20260429-remote
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
  - "#55802"
candidates:
  - "#60709"
cluster_refs:
  - "#50295"
  - "#55802"
  - "#55821"
  - "#55824"
  - "#56436"
  - "#60709"
  - "#60817"
  - "#61188"
  - "#70766"
  - "#71080"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55802 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2076 on 2026-04-29."
---

# Gitcrawl Cluster 2076

Generated from local gitcrawl run cluster 2076 for `openclaw/openclaw`.

Display title:

> feat: make exec obfuscation command length threshold configurable (tools.exec.maxCommandChars)

Cluster shape from gitcrawl:

- total members: 10
- issues: 6
- pull requests: 4
- open candidates in local store: 1
- representative: #55802, currently closed in local store
- latest member update: 2026-04-28T05:49:57.262507399Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50295 Feature Request: Add tools.exec.obfuscationCheck config option to disable obfuscation detection
- #55802 feat: make exec obfuscation command length threshold configurable (tools.exec.maxCommandChars)
- #55821 feat(exec): make obfuscation command length threshold configurable
- #55824 feat: configurable exec obfuscation command-length threshold
- #56436 fix(exec): skip length-only obfuscation flag when security=full; make threshold configurable
- #60817 Feature: Make HARD_MAX_TOOL_RESULT_CHARS configurable
- #61188 Feature request: tools.exec.obfuscationDetection config key to disable/raise command length threshold
- #70766 Make CLAUDE_LIVE_MAX_STDOUT_BUFFER_CHARS configurable (256KB hardcoded limit aborts long claude-cli turns)
- #71080 Make CLAUDE_LIVE_MAX_STDOUT_BUFFER_CHARS configurable — 256KB cap causes deterministic session aborts on large MCP/tool configs

Open candidates:

- #60709 feat: add tools.exec.obfuscationCheck config to disable obfuscation detection
