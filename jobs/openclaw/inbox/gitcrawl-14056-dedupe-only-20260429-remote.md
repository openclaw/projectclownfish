---
repo: openclaw/openclaw
cluster_id: gitcrawl-14056-dedupe-only-20260429-remote
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
  - "#59362"
candidates:
  - "#59362"
  - "#70197"
cluster_refs:
  - "#40340"
  - "#51837"
  - "#55159"
  - "#59362"
  - "#70167"
  - "#70197"
  - "#71188"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59362 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14056 on 2026-04-29."
---

# Gitcrawl Cluster 14056

Generated from local gitcrawl run cluster 14056 for `openclaw/openclaw`.

Display title:

> [Bug]: Windows: exec tool causes console window flash when spawning commands

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 2
- representative: #59362, currently open in local store
- latest member update: 2026-04-28T05:49:55.835044939Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40340 bug(acpx): Windows console windows flash on every ACP spawn — missing windowsHide: true
- #51837 Windows: exec spawns steal focus from active window
- #55159 Bug: Windows exec 命令在子进程退出后卡住不返回
- #70167 bug(gateway): Port-liveness probe flashes cmd.exe window and triggers DEP0190 on Windows
- #71188 Windows: Gateway spawns visible cmd.exe every ~16s for LAN/ARP discovery (flashing console window)

Open candidates:

- #59362 [Bug]: Windows: exec tool causes console window flash when spawning commands
- #70197 bug(gateway): @homebridge/ciao's arp -a probe flashes cmd.exe window every ~15s on Windows (missing windowsHide)
