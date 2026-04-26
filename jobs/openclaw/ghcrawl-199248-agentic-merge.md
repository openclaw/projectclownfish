---
repo: openclaw/openclaw
cluster_id: ghcrawl-199248-agentic-merge
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
  - "#56538"
candidates:
  - "#43611"
  - "#50586"
  - "#50885"
  - "#56538"
  - "#64661"
  - "#64709"
cluster_refs:
  - "#43611"
  - "#50586"
  - "#50885"
  - "#56538"
  - "#64661"
  - "#64709"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #56538 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199248 on 2026-04-26."
---

# GHCrawl Cluster 199248

Generated from local ghcrawl run cluster 199248 for `openclaw/openclaw`.

Display title:

> fix: use TextDecoder for proper GBK encoding support on Windows

Cluster shape from ghcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 6
- representative: #56538, currently open in local store
- latest member update: 2026-04-26T21:32:46.404Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43611 decode Windows console output (GBK/CP936)
- #50586 fix(exec): use gbk encoding for Windows cmd.exe wrapper [AI-assisted]
- #50885 process: fix Windows runExec garbled CJK output [AI-assisted]
- #56538 fix: use TextDecoder for proper GBK encoding support on Windows
- #64661 fix(exec): apply Windows codepage-aware output decoding in runExec and spawn-based callers [AI-assisted]
- #64709 fix(process): handle Windows CJK encoding in child process output [AI-assisted]
