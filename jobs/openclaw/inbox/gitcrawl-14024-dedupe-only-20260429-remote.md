---
repo: openclaw/openclaw
cluster_id: gitcrawl-14024-dedupe-only-20260429-remote
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
  - "#67927"
candidates:
  - "#51377"
cluster_refs:
  - "#39221"
  - "#42903"
  - "#50337"
  - "#51377"
  - "#54196"
  - "#54199"
  - "#56344"
  - "#58423"
  - "#58985"
  - "#60226"
  - "#63026"
  - "#64916"
  - "#65790"
  - "#66879"
  - "#67927"
  - "#69185"
  - "#69447"
  - "#70438"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67927 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14024 on 2026-04-29."
---

# Gitcrawl Cluster 14024

Generated from local gitcrawl run cluster 14024 for `openclaw/openclaw`.

Display title:

> [Bug]: OpenClaw 2026.4.15 Image Upload Bug Report

Cluster shape from gitcrawl:

- total members: 18
- issues: 18
- pull requests: 0
- open candidates in local store: 1
- representative: #67927, currently closed in local store
- latest member update: 2026-04-28T22:51:07.465318913Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39221 Bug: Image attachments not forwarded from web dashboard
- #42903 [Bug]: WebChat does not send images to non-default agents (e.g., m2)
- #50337 Web UI: File upload only accepts images, not PDF/Word documents
- #54196 🐛 Bug: Image Upload Completely Broken in Control UI (drag-and-drop and file button both fail)
- #54199 [Bug]: OpenClaw 控制界面文件上传功能限制 - 只能上传图片文件
- #56344 [Feature]: Enable generic file upload support in openclaw-control-ui
- #58423 [Bug] webchat channel: file attachments not passed to AI context via chat.send
- #58985 [BUG] v2026.3.31: Web chat image upload/recognition broken, works fine after downgrading to v2026.3.28
- #60226 Non-image file attachments (PDF/Word/etc) not injected into agent context after upload via webchat
- #63026 [Bug]:  File upload via control panel web UI routes to heartbeat channel instead of chat
- #64916 [Bug]: WebUI image sent but Agent receives empty message (v2026.4.9, macOS Tahoe 26.4.1, MacBook Air M1 2020)
- #65790 Web UI (openclaw-control-ui) doesn't attach images to messages
- #66879 [Bug]: Mac App image send reaches agent as text only; pasted/attached images are not accessible
- #67927 [Bug]: OpenClaw 2026.4.15 Image Upload Bug Report
- #69185 Control UI: allow non-image file uploads (documents, zips, archives)
- #69447 Web UI attachments are image-only end-to-end (UI picker + Gateway)
- #70438 [Feature]: Make non-image webchat attachment handling configurable (PDF offload, text inline)

Open candidates:

- #51377 [Feature]: Support Excel (.xlsx/.xls) and generic binary uploads in gateway / input_file
