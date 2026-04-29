---
repo: openclaw/openclaw
cluster_id: gitcrawl-2243-dedupe-only-20260429-remote
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
  - "#45108"
candidates:
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
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45108 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2243 on 2026-04-29."
---

# Gitcrawl Cluster 2243

Generated from local gitcrawl run cluster 2243 for `openclaw/openclaw`.

Display title:

> [Bug]: Sandbox write/edit fails on openclaw-sandbox:bookworm-slim with "moltbot-sandbox-fs: 2: python3: not found"

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #45108, currently closed in local store
- latest member update: 2026-04-28T04:44:24.332813243Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45108 [Bug]: Sandbox write/edit fails on openclaw-sandbox:bookworm-slim with "moltbot-sandbox-fs: 2: python3: not found"
- #51099 [Bug]:  moltbot-sandbox-fs: python3: not found — file edit/write tools broken in default sandbox image after upgrade to 2026.3.13
- #51609 [Bug]: sandbox file tools fail with moltbot-sandbox-fs: 2: python3: not found

Open candidates:

- #57713 [Bug]: Default sandbox image openclaw-sandbox:bookworm-slim lacked python3, breaking edit/write
