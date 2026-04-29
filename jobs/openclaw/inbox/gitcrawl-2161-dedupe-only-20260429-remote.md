---
repo: openclaw/openclaw
cluster_id: gitcrawl-2161-dedupe-only-20260429-remote
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
  - "#68849"
candidates:
  - "#39715"
  - "#51303"
  - "#68819"
  - "#71063"
cluster_refs:
  - "#39715"
  - "#51303"
  - "#68788"
  - "#68792"
  - "#68819"
  - "#68849"
  - "#69158"
  - "#71063"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68849 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2161 on 2026-04-29."
---

# Gitcrawl Cluster 2161

Generated from local gitcrawl run cluster 2161 for `openclaw/openclaw`.

Display title:

> fix: add "claude" to Windows cmdCommands shim allowlist

Cluster shape from gitcrawl:

- total members: 8
- issues: 2
- pull requests: 6
- open candidates in local store: 4
- representative: #68849, currently closed in local store
- latest member update: 2026-04-28T22:51:06.883667665Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68788 [Bug]: Windows: spawn claude ENOENT "claude" missing from cmdCommands shim allowlist
- #68792 fix(process): shim claude on Windows child spawns
- #68849 fix: add "claude" to Windows cmdCommands shim allowlist
- #69158 [Bug]: spawn ENAMETOOLONG on Windows when using claude-cli provider

Open candidates:

- #39715 fix: drain stdout/stderr before resolving child wait
- #51303 fix: use StringDecoder for UTF-8 boundary-safe chunk decoding in child adapter
- #68819 fix: resolve Windows .cmd shims to underlying .exe before spawn
- #71063 fix(process): guard stdin writable to avoid gateway crash on not-found binaries
