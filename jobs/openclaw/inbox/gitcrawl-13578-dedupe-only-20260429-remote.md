---
repo: openclaw/openclaw
cluster_id: gitcrawl-13578-dedupe-only-20260429-remote
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
  - "#40770"
candidates:
  - "#41860"
  - "#43239"
  - "#58272"
  - "#59783"
cluster_refs:
  - "#38406"
  - "#40770"
  - "#40893"
  - "#41860"
  - "#43239"
  - "#43840"
  - "#43983"
  - "#44080"
  - "#44988"
  - "#47032"
  - "#48388"
  - "#48578"
  - "#50332"
  - "#50435"
  - "#51369"
  - "#52397"
  - "#58272"
  - "#59409"
  - "#59431"
  - "#59783"
  - "#66500"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40770 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13578 on 2026-04-29."
---

# Gitcrawl Cluster 13578

Generated from local gitcrawl run cluster 13578 for `openclaw/openclaw`.

Display title:

> 飞书发送中文文件名文件时，文件名被 URL 编码

Cluster shape from gitcrawl:

- total members: 21
- issues: 12
- pull requests: 9
- open candidates in local store: 4
- representative: #40770, currently closed in local store
- latest member update: 2026-04-28T07:59:25.92081416Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38406 fix(signal): preserve original filename for outbound attachments
- #40770 飞书发送中文文件名文件时，文件名被 URL 编码
- #40893 Fix Feishu Chinese filename displayed as URL-encoded in file uploads (Closes #40770)
- #43840 [Bug]: Filename Becomes URL-Encoded String After Sending Files in Lark/Feishu
- #43983 fix(feishu): decode RFC 5987 filename for file downloads
- #44080 fix(signal): preserve original filename for local outbound attachments
- #44988 Chinese filenames display as URL-encoded garbage when sending files via Feishu
- #47032 [Bug]: 使用 `[DINGTALK_FILE]` 标记发送文件时，文件路径中的中文字符后被错误插入空格，导致路径被篡改，文件无法发送。
- #48388 [Bug]: Feishu file names with Chinese characters are garbled (UTF-8 encoding issue)
- #48578 fix(feishu): recover UTF-8 filenames from Latin-1 encoded Content-Disposition
- #50332 [Bug]: Automatic Spaces in Mixed Chinese-English Text Cause Path Errors
- #50435 fix(feishu): recover Chinese filenames from Latin-1 mojibake in Content-Disposition
- #51369 Feishu file upload: sanitizeFileNameForUpload causes garbled Chinese filenames
- #52397 [Bug]:
- #59409 [Bug]: Feishu plugin: Chinese filenames in attachments display as garbled (Latin-1 encoding issue)
- #59431 fix(feishu): correct Chinese filename encoding in attachments
- #66500 [Bug]: 1. Feishu channel: Chinese filenames garbled when saving inbound media (UTF-8 → Latin-1 mojibake)

Open candidates:

- #41860 [Bug]: When openclaw sends a link with an underscore to Feishu, the full hyperlink cannot be displayed
- #43239 fix(feishu): preserve local attachment filenames in message send flow
- #58272 [Bug]: macOS Path Resolution: ENOENT on both mixed-character directories AND mixed-character filenames (CJK + ASCII)
- #59783 fix(discord): preserve original filename in Discord attachment metadata
