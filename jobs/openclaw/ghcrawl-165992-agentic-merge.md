---
repo: openclaw/openclaw
cluster_id: ghcrawl-165992-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#41985"
candidates:
  - "#30389"
  - "#30759"
  - "#41985"
  - "#41992"
  - "#43242"
  - "#47933"
  - "#48700"
  - "#56298"
  - "#63094"
  - "#67622"
  - "#69185"
  - "#69447"
cluster_refs:
  - "#30389"
  - "#30759"
  - "#41985"
  - "#41992"
  - "#43242"
  - "#47933"
  - "#48700"
  - "#56298"
  - "#63094"
  - "#67622"
  - "#69185"
  - "#69447"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #41985 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165992 on 2026-04-26."
---

# GHCrawl Cluster 165992

Generated from local ghcrawl run cluster 165992 for `openclaw/openclaw`.

Display title:

> [Feature]: WebChat file upload support

Cluster shape from ghcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 12
- representative: #41985, currently open in local store
- latest member update: 2026-04-25T07:30:09.439Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #30389 [Feature Request] Add file upload button and model/skill selection menu to WebChat UI
- #30759 [Feature]: WebChat: Add file upload support for documents (PDF, Word, TXT)
- #41985 [Feature]: WebChat file upload support
- #41992 [Feature Request] WebChat file upload support
- #43242 [Feature Request] Add file upload support to Control UI (Web)
- #47933 [Feature]: The web chat page supports file uploading and downloading.
- #48700 [Feature]:
- #56298 [Feature Request] Webchat supports image/attachment upload in UI
- #63094 [Feature Request] WebChat/Control UI support file upload
- #67622 [Feature Request] Support file/image upload in browser Control UI (webchat)
- #69185 Control UI: allow non-image file uploads (documents, zips, archives)
- #69447 Web UI attachments are image-only end-to-end (UI picker + Gateway)
