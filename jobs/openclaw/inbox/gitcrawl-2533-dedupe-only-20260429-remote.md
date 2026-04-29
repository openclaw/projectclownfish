---
repo: openclaw/openclaw
cluster_id: gitcrawl-2533-dedupe-only-20260429-remote
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
  - "#59034"
candidates:
  - "#57169"
cluster_refs:
  - "#57169"
  - "#58158"
  - "#59004"
  - "#59012"
  - "#59034"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59034 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2533 on 2026-04-29."
---

# Gitcrawl Cluster 2533

Generated from local gitcrawl run cluster 2533 for `openclaw/openclaw`.

Display title:

> [macOS] screen.record command not available on node

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #59034, currently closed in local store
- latest member update: 2026-04-28T22:51:07.327671188Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #58158 macOS 2026.3.28 - camera.snap not in node command allowlist
- #59004 [macOS] camera.snap command not available on paired node
- #59012 [macOS] microphone recording commands not available on node
- #59034 [macOS] screen.record command not available on node

Open candidates:

- #57169 [Bug]: macOS node advertises screen capability but runtime blocks screen.record via platform allowlist
