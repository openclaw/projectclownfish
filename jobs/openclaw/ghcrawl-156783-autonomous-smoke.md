---
repo: openclaw/openclaw
cluster_id: ghcrawl-156783-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#55842"
candidates:
  - "#41193"
  - "#54665"
  - "#55842"
cluster_refs:
  - "#41193"
  - "#54665"
  - "#55842"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55842 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156783 on 2026-04-26."
---

# GHCrawl Cluster 156783

Generated from local ghcrawl run cluster 156783 for `openclaw/openclaw`.

Display title:

> v2026.3.24: Gateway crash loop — RegExpCompiler OOM on startup (upgrade from v2026.3.13)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #55842, currently open in local store
- latest member update: 2026-04-24T18:56:29.921Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41193 v2026.3.8: Crash loop on startup — plugin errors, SyntaxErrors, V8 JIT crashes
- #54665 [2026.3.24] FATAL ERROR: RegExpCompiler Allocation failed — gateway crashes on startup, OOM in V8 regex compiler
- #55842 v2026.3.24: Gateway crash loop — RegExpCompiler OOM on startup (upgrade from v2026.3.13)
