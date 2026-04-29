---
repo: openclaw/openclaw
cluster_id: gitcrawl-1879-dedupe-only-20260429-remote
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
  - "#41779"
candidates:
  - "#41779"
  - "#48979"
  - "#55917"
  - "#56312"
cluster_refs:
  - "#38554"
  - "#41779"
  - "#42257"
  - "#42902"
  - "#44778"
  - "#44792"
  - "#47396"
  - "#48686"
  - "#48857"
  - "#48979"
  - "#52587"
  - "#53879"
  - "#53949"
  - "#55604"
  - "#55903"
  - "#55917"
  - "#56306"
  - "#56312"
  - "#63137"
  - "#64082"
  - "#65297"
  - "#68540"
  - "#69622"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41779 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1879 on 2026-04-29."
---

# Gitcrawl Cluster 1879

Generated from local gitcrawl run cluster 1879 for `openclaw/openclaw`.

Display title:

> [Bug]: message action "send" silently ignores buffer/filename for Telegram attachments and returns ok=true

Cluster shape from gitcrawl:

- total members: 23
- issues: 23
- pull requests: 0
- open candidates in local store: 4
- representative: #41779, currently open in local store
- latest member update: 2026-04-28T21:55:43.636037442Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38554 [Bug]: feishu replying with mp4 msg error
- #42257 [Bug] Feishu image analysis not working
- #42902 Feishu: message tool filePath parameter sends successfully but file not received
- #44778 [Bug] Feishu image causes gateway crash - image path not passed to image tool
- #44792 [Bug] 飞书图片下载后文件名与传递给Agent的路径不匹配
- #47396 [feishu-plugin] Bug: message tool media parameter sends images as file attachments
- #48686 [Bug] Feishu images not always attached to prompt - some images show as 'image data removed'
- #48857 [Feishu] message --action send --filePath fails to send file attachments, returns link instead of actual file
- #52587 [Bug] Feishu channel fails to send images via read tool
- #53879 message tool: filePath media upload fails with 'Channel is unavailable: telegram' in 2026.3.23-2
- #53949 Telegram images silently not downloaded — no file saved to media/inbound, no error logged
- #55604 [Bug] Feishu image media understanding not triggered - tools.media.image enabled but no MiniMax call
- #55903 [Bug] Telegram: message tool fails file attachment with incorrect 'buttons' validation error
- #56306 [Bug]:  Telegram: read tool for images succeeds internally but fails to deliver file to user.
- #63137 [Bug]: Telegram outbound images sent via read tool render locally but never reach recipient's mobile client
- #64082 Bug: Feishu inbound images not visible to AI model (format mismatch in formatMediaAttachedLine)
- #65297 [Bug]: Telegram message.send returns ok for image buffer upload, but no media is delivered
- #68540 [Bug]: Feishu channel: Local image files sent as path text instead of uploaded image
- #69622 [Bug]: Feishu image: Media Understanding not triggered, model receives `[image data removed]` instead of image

Open candidates:

- #41779 [Bug]: message action "send" silently ignores buffer/filename for Telegram attachments and returns ok=true
- #48979 Telegram channel cannot send images via read tool
- #55917 [Bug]: Telegram documents sometimes arrive only as <media:document> instead of a real attachment
- #56312 Telegram video files not being downloaded to media/inbound directory
