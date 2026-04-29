---
repo: openclaw/openclaw
cluster_id: gitcrawl-2028-dedupe-only-20260429-remote
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
  - "#54120"
candidates:
  - "#38846"
  - "#43975"
  - "#45870"
  - "#48320"
  - "#51486"
  - "#60678"
  - "#66062"
cluster_refs:
  - "#38846"
  - "#40201"
  - "#43611"
  - "#43975"
  - "#45870"
  - "#46992"
  - "#47734"
  - "#47751"
  - "#47755"
  - "#48320"
  - "#50586"
  - "#50885"
  - "#51486"
  - "#51547"
  - "#51559"
  - "#54120"
  - "#56538"
  - "#60678"
  - "#64661"
  - "#64709"
  - "#66062"
  - "#70308"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54120 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2028 on 2026-04-29."
---

# Gitcrawl Cluster 2028

Generated from local gitcrawl run cluster 2028 for `openclaw/openclaw`.

Display title:

> fix(windows): hide console window during gateway restart

Cluster shape from gitcrawl:

- total members: 22
- issues: 0
- pull requests: 22
- open candidates in local store: 7
- representative: #54120, currently closed in local store
- latest member update: 2026-04-28T18:04:42.700103071Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40201 fix: explicitly hide the console window to avoid it appearing in edge cases
- #43611 decode Windows console output (GBK/CP936)
- #46992 Fix: Windows terminal encoding set to UTF-8
- #47734 fix: handle Windows schtasks "Last Result" key variant
- #47751 fix: wrap bunx with cmd shim on Windows
- #47755 fix(windows): handle 'Last Result' key variant in schtasks output
- #50586 fix(exec): use gbk encoding for Windows cmd.exe wrapper [AI-assisted]
- #50885 process: fix Windows runExec garbled CJK output [AI-assisted]
- #51547 fix(exec): default to GBK encoding on Windows (#50519)
- #51559 fix(process): add windowsHide to spawn in runCommandWithTimeout
- #54120 fix(windows): hide console window during gateway restart
- #56538 fix: use TextDecoder for proper GBK encoding support on Windows
- #64661 fix(exec): apply Windows codepage-aware output decoding in runExec and spawn-based callers [AI-assisted]
- #64709 fix(process): handle Windows CJK encoding in child process output [AI-assisted]
- #70308 fix(gateway): hide child process windows to prevent startup flicker on Windows #70238

Open candidates:

- #38846 security(windows): enhance command argument validation
- #43975 fix(windows): bootstrap UTF-8 before running gateway task script
- #45870 fix: align windows path tests with runtime behavior
- #48320 fix(windows): add windowsHide to all Windows spawn resolution paths
- #51486 fix(daemon): query Windows task runtime directly
- #60678 fix(acpx): add windowsHide to MCP proxy spawn on Windows
- #66062 fix(daemon): ignore setlocal in Windows task parsing
