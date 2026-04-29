---
repo: openclaw/openclaw
cluster_id: gitcrawl-14075-dedupe-only-20260429-remote
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
  - "#55074"
candidates:
  - "#40880"
cluster_refs:
  - "#40880"
  - "#44757"
  - "#55068"
  - "#55074"
  - "#61880"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55074 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14075 on 2026-04-29."
---

# Gitcrawl Cluster 14075

Generated from local gitcrawl run cluster 14075 for `openclaw/openclaw`.

Display title:

> Make MEDIA_MAX_BYTES configurable instead of hardcoded 5MB

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #55074, currently closed in local store
- latest member update: 2026-04-28T07:04:51.887262791Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44757 Make webui attachment maxBytes configurable
- #55068 Sandbox media staging: hardcoded 5MB MEDIA_MAX_BYTES limit prevents large file transfers
- #55074 Make MEDIA_MAX_BYTES configurable instead of hardcoded 5MB
- #61880 [Bug]: video-generate tool hits 5MB limit of media files, which is too small for generated videos

Open candidates:

- #40880 [Bug]: tools/sandbox: MEDIA_MAX_BYTES (5 MB) is hardcoded and not user-configurable
