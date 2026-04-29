---
repo: openclaw/openclaw
cluster_id: gitcrawl-19-dedupe-only-20260429-remote
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
  - "#65309"
candidates:
  - "#65309"
  - "#66804"
  - "#69182"
cluster_refs:
  - "#65309"
  - "#66157"
  - "#66804"
  - "#67084"
  - "#67878"
  - "#69182"
  - "#70021"
  - "#70481"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65309 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 19 on 2026-04-29."
---

# Gitcrawl Cluster 19

Generated from local gitcrawl run cluster 19 for `openclaw/openclaw`.

Display title:

> [Bug]: Active Memory blocks direct-chat turns for ~30s and times out across multiple model configurations

Cluster shape from gitcrawl:

- total members: 8
- issues: 8
- pull requests: 0
- open candidates in local store: 3
- representative: #65309, currently open in local store
- latest member update: 2026-04-28T07:04:52.16934683Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #66157 [Bug]: Active Memory still times out in Discord channel sessions on v2026.4.12 even with message/strict tuning
- #67084 [Bug]: Session Timeout Spam with Codex and Active Memory ON
- #67878 active-memory timeout fires but elapsedMs is 15-20s — abort not terminating embedded run promptly
- #70021 Active Memory plugin: all embedded sub-agent runs timeout with 0 summaryChars across 5 different providers
- #70481 [Bug]: active-memory timeoutMs not enforced — runs 30-40s despite 5s config

Open candidates:

- #65309 [Bug]: Active Memory blocks direct-chat turns for ~30s and times out across multiple model configurations
- #66804 Active Memory timeout with MiniMax-M2.7: model fails to respond within 15s timeout
- #69182 [Performance] active-memory plugin can block chat replies up to ~5s
