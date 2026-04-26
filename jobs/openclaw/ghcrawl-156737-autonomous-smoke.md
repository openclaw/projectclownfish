---
repo: openclaw/openclaw
cluster_id: ghcrawl-156737-autonomous-smoke
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
  - "#57682"
candidates:
  - "#57682"
  - "#59394"
  - "#69970"
  - "#70238"
cluster_refs:
  - "#57682"
  - "#59394"
  - "#69970"
  - "#70238"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57682 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156737 on 2026-04-26."
---

# GHCrawl Cluster 156737

Generated from local ghcrawl run cluster 156737 for `openclaw/openclaw`.

Display title:

> [Bug][Windows] openclaw update spawns visible and hanging CMD window during gateway restart

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #57682, currently open in local store
- latest member update: 2026-04-24T18:56:24.586Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57682 [Bug][Windows] openclaw update spawns visible and hanging CMD window during gateway restart
- #59394 [Bug]: Hidden CMD Window Appears After Update (findstr process)
- #69970 [Bug]: Windows auto-update restart script hangs indefinitely on `schtasks /End`, leaves zombie cmd.exe and flashing Terminal window
- #70238 [Bug]: Gateway OpenCLAW spawns flashing command prompt windows in background on Windows
