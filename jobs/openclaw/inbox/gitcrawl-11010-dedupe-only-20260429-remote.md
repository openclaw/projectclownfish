---
repo: openclaw/openclaw
cluster_id: gitcrawl-11010-dedupe-only-20260429-remote
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
  - "#62267"
candidates:
  - "#62267"
cluster_refs:
  - "#41486"
  - "#45597"
  - "#62267"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62267 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 11010 on 2026-04-29."
---

# Gitcrawl Cluster 11010

Generated from local gitcrawl run cluster 11010 for `openclaw/openclaw`.

Display title:

> Performance: Slow Ollama qwen3:14b prompt ingestion in long-context OpenClaw runs

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #62267, currently open in local store
- latest member update: 2026-04-28T07:04:52.260652102Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41486 Ollama cron jobs: lightContext mode still sends large system prompt, causing timeouts on small local models
- #45597 [Bug]: Recurring Ollama context overflow errors - prompt too long

Open candidates:

- #62267 Performance: Slow Ollama qwen3:14b prompt ingestion in long-context OpenClaw runs
