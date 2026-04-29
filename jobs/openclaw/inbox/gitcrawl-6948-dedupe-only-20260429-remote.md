---
repo: openclaw/openclaw
cluster_id: gitcrawl-6948-dedupe-only-20260429-remote
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
  - "#48780"
candidates:
  - "#48780"
cluster_refs:
  - "#35807"
  - "#40613"
  - "#48780"
  - "#50385"
  - "#50519"
  - "#51797"
  - "#56462"
  - "#62603"
  - "#71055"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48780 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6948 on 2026-04-29."
---

# Gitcrawl Cluster 6948

Generated from local gitcrawl run cluster 6948 for `openclaw/openclaw`.

Display title:

> [Bug]: [Windows] exec() and read() commands corrupted with </arg_value>> suffix

Cluster shape from gitcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 1
- representative: #48780, currently open in local store
- latest member update: 2026-04-28T04:44:23.361868854Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #35807 [Bug] Exec tool corrupts PowerShell pipeline variables on Windows - \ stripped, -f operator broken
- #40613 [Bug]: Windows 11 exec/system-message Chinese output becomes mojibake
- #50385 [Bug]: Command arguments lose space between them when executing terminal commands
- #50519 [Bug]: Windows exec tool produces garbled Chinese characters due to hardcoded UTF-8 encoding
- #51797 Bug: Exec命令在Windows下参数空格丢失导致命令失败
- #56462 [Bug]: Windows exec tool garbled Chinese characters (confirmed in 2026.3.24)
- #62603 [Bug] Exec tool silently corrupts PowerShell pipeline variables on Windows (2026.4.5)
- #71055 [Windows] exec tool: Multiple shell escaping issues with PowerShell -Command wrapper

Open candidates:

- #48780 [Bug]: [Windows] exec() and read() commands corrupted with </arg_value>> suffix
