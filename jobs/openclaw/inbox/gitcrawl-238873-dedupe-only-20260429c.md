---
repo: openclaw/openclaw
cluster_id: gitcrawl-238873-dedupe-only-20260429c
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
  - "#55917"
candidates:
  - "#40991"
  - "#55917"
  - "#56312"
cluster_refs:
  - "#40991"
  - "#55917"
  - "#56312"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55917 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238873 on 2026-04-29."
---

# Gitcrawl Cluster 238873

Generated from local gitcrawl run cluster 238873 for `openclaw/openclaw`.

Display title:

> [Bug]: Telegram documents sometimes arrive only as <media:document> instead of a real attachment

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #55917, currently open in local store
- latest member update: 2026-04-29T08:43:38.094Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40991 Telegram inbound video can degrade to <media:video> placeholder with no attachment and no error when getFile() fails
- #55917 [Bug]: Telegram documents sometimes arrive only as <media:document> instead of a real attachment
- #56312 Telegram video files not being downloaded to media/inbound directory
