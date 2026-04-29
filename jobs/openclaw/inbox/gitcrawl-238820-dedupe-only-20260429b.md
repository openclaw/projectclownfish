---
repo: openclaw/openclaw
cluster_id: gitcrawl-238820-dedupe-only-20260429b
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
  - "#64661"
candidates:
  - "#56538"
  - "#64661"
  - "#64709"
  - "#72393"
  - "#73751"
cluster_refs:
  - "#56538"
  - "#64661"
  - "#64709"
  - "#72393"
  - "#73751"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64661 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238820 on 2026-04-29."
---

# Gitcrawl Cluster 238820

Generated from local gitcrawl run cluster 238820 for `openclaw/openclaw`.

Display title:

> fix(exec): apply Windows codepage-aware output decoding in runExec and spawn-based callers [AI-assisted]

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #64661, currently open in local store
- latest member update: 2026-04-29T08:43:39.211Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56538 fix: use TextDecoder for proper GBK encoding support on Windows
- #64661 fix(exec): apply Windows codepage-aware output decoding in runExec and spawn-based callers [AI-assisted]
- #64709 fix(process): handle Windows CJK encoding in child process output [AI-assisted]
- #72393 fix(process): decode Windows command output with console codepage awareness
- #73751 fix(exec): decode Windows command output with codepage-aware streaming
