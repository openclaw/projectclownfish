---
repo: openclaw/openclaw
cluster_id: gitcrawl-13718-dedupe-only-20260429-remote
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
  - "#66206"
candidates:
  - "#67915"
cluster_refs:
  - "#60046"
  - "#66206"
  - "#67915"
  - "#71052"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66206 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13718 on 2026-04-29."
---

# Gitcrawl Cluster 13718

Generated from local gitcrawl run cluster 13718 for `openclaw/openclaw`.

Display title:

> Control UI attachments can reach chat but fail later due to ~/.openclaw/attachments not being an allowed media root

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #66206, currently closed in local store
- latest member update: 2026-04-28T05:49:58.50441579Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #60046 iMessage attachments blocked by local media path allowlist
- #66206 Control UI attachments can reach chat but fail later due to ~/.openclaw/attachments not being an allowed media root
- #71052 Control UI shows 'Attachment unavailable' for valid image_generate MEDIA paths in ~/.openclaw/media/

Open candidates:

- #67915 [Bug]: Local assistant attachments shown as "Unavailable — Outside allowed folders" despite correct server config
