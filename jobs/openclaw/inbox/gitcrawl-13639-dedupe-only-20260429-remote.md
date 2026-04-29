---
repo: openclaw/openclaw
cluster_id: gitcrawl-13639-dedupe-only-20260429-remote
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
  - "#52063"
candidates:
  - "#49085"
  - "#56176"
  - "#68800"
cluster_refs:
  - "#49072"
  - "#49085"
  - "#51086"
  - "#51641"
  - "#52060"
  - "#52063"
  - "#56176"
  - "#68800"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52063 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13639 on 2026-04-29."
---

# Gitcrawl Cluster 13639

Generated from local gitcrawl run cluster 13639 for `openclaw/openclaw`.

Display title:

> fix: route logs to stderr in --json output mode

Cluster shape from gitcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 3
- representative: #52063, currently closed in local store
- latest member update: 2026-04-28T18:04:42.655413063Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49072 fix(acp): route logs to stderr to keep stdout JSON-RPC clean
- #51086 fix(cli): prevent plugin loading logs from polluting 'openclaw agent --json' stdout
- #51641 fix(cli): route diagnostic logs to stderr when stdout is piped
- #52060 CLI: route JSON preaction logs to stderr
- #52063 fix: route logs to stderr in --json output mode

Open candidates:

- #49085 fix(acp): keep stdout JSON clean
- #56176 fix: accept MCP protocolVersion 2025-11-25 in ACP server (#56102)
- #68800 fix: route logs to stderr in `openclaw mcp serve` (fixes #68587)
