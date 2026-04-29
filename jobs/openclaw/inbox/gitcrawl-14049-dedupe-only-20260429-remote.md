---
repo: openclaw/openclaw
cluster_id: gitcrawl-14049-dedupe-only-20260429-remote
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
  - "#45862"
candidates:
  - "#43565"
  - "#52951"
  - "#55726"
  - "#56923"
cluster_refs:
  - "#41350"
  - "#43565"
  - "#45862"
  - "#50041"
  - "#50042"
  - "#52951"
  - "#55726"
  - "#56255"
  - "#56923"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45862 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14049 on 2026-04-29."
---

# Gitcrawl Cluster 14049

Generated from local gitcrawl run cluster 14049 for `openclaw/openclaw`.

Display title:

> fix(audit): include Gemini/Grok/Kimi in web search key detection

Cluster shape from gitcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 4
- representative: #45862, currently closed in local store
- latest member update: 2026-04-28T22:51:07.351939734Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41350 fix(security): detect Gemini/Grok/Kimi env-var web search keys in audit
- #45862 fix(audit): include Gemini/Grok/Kimi in web search key detection
- #50041 security: clarify fail-open denyCommands audit warning
- #50042 security: clarify mention gates are not a trust boundary
- #56255 fix(security): extend audit to flag dmPolicy=open and session.dmScope=main

Open candidates:

- #43565 feat(tools): add allowedRoots config for fs tools
- #52951 feat: add tools.fs.roots — per-agent filesystem roots with access modes
- #55726 fix(security): include dmPolicy in exposure matrix audit
- #56923 fix(security): include dangerous commands in known commands list
