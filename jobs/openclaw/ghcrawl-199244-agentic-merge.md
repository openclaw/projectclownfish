---
repo: openclaw/openclaw
cluster_id: ghcrawl-199244-agentic-merge
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
  - "#42218"
candidates:
  - "#38776"
  - "#42218"
  - "#45936"
  - "#56795"
  - "#60380"
  - "#60383"
cluster_refs:
  - "#38776"
  - "#42218"
  - "#45936"
  - "#56795"
  - "#60380"
  - "#60383"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #42218 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199244 on 2026-04-26."
---

# GHCrawl Cluster 199244

Generated from local ghcrawl run cluster 199244 for `openclaw/openclaw`.

Display title:

> feat(feishu): enhance interactive card parsing to extract markdown content

Cluster shape from ghcrawl:

- total members: 6
- issues: 1
- pull requests: 5
- open candidates in local store: 6
- representative: #42218, currently open in local store
- latest member update: 2026-04-26T21:32:45.672Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38776 fix(feishu): extract content from interactive card variants when quoting
- #42218 feat(feishu): enhance interactive card parsing to extract markdown content
- #45936 fix(feishu): improve interactive card text extraction for all card formats
- #56795 Feature Request: Add Feishu Interactive Card Parsing support #48281 
- #60380 [Bug] Feishu: parseInteractiveCardContent fails on fallback post-format content
- #60383 fix(feishu): parse interactive card post-format fallback content
