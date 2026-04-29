---
repo: openclaw/openclaw
cluster_id: gitcrawl-238811-dedupe-only-20260429b
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
  - "#42218"
candidates:
  - "#42218"
  - "#56795"
  - "#60380"
  - "#60383"
  - "#73203"
cluster_refs:
  - "#42218"
  - "#56795"
  - "#60380"
  - "#60383"
  - "#73203"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42218 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238811 on 2026-04-29."
---

# Gitcrawl Cluster 238811

Generated from local gitcrawl run cluster 238811 for `openclaw/openclaw`.

Display title:

> feat(feishu): enhance interactive card parsing to extract markdown content

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #42218, currently open in local store
- latest member update: 2026-04-29T08:43:40.498Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42218 feat(feishu): enhance interactive card parsing to extract markdown content
- #56795 Feature Request: Add Feishu Interactive Card Parsing support #48281 
- #60380 [Bug] Feishu: parseInteractiveCardContent fails on fallback post-format content
- #60383 fix(feishu): parse interactive card post-format fallback content
- #73203 fix(feishu): support text tag and nested arrays in interactive card parsing
