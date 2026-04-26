---
repo: openclaw/openclaw
cluster_id: ghcrawl-156718-autonomous-smoke
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
  - "#51099"
candidates:
  - "#45108"
  - "#51099"
  - "#51609"
  - "#57713"
cluster_refs:
  - "#45108"
  - "#51099"
  - "#51609"
  - "#57713"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51099 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156718 on 2026-04-26."
---

# GHCrawl Cluster 156718

Generated from local ghcrawl run cluster 156718 for `openclaw/openclaw`.

Display title:

> [Bug]:  moltbot-sandbox-fs: python3: not found — file edit/write tools broken in default sandbox image after upgrade to 2026.3.13

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #51099, currently open in local store
- latest member update: 2026-04-24T18:56:26.090Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45108 [Bug]: Sandbox write/edit fails on openclaw-sandbox:bookworm-slim with "moltbot-sandbox-fs: 2: python3: not found"
- #51099 [Bug]:  moltbot-sandbox-fs: python3: not found — file edit/write tools broken in default sandbox image after upgrade to 2026.3.13
- #51609 [Bug]: sandbox file tools fail with moltbot-sandbox-fs: 2: python3: not found
- #57713 [Bug]: Default sandbox image openclaw-sandbox:bookworm-slim lacked python3, breaking edit/write
