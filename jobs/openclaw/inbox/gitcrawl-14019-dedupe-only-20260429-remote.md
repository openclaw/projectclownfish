---
repo: openclaw/openclaw
cluster_id: gitcrawl-14019-dedupe-only-20260429-remote
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
  - "#52254"
candidates:
  - "#36617"
  - "#44551"
  - "#52254"
  - "#55239"
  - "#62681"
cluster_refs:
  - "#34848"
  - "#36617"
  - "#40922"
  - "#41703"
  - "#42033"
  - "#44551"
  - "#44889"
  - "#45708"
  - "#45927"
  - "#45989"
  - "#52028"
  - "#52254"
  - "#53402"
  - "#53829"
  - "#55233"
  - "#55239"
  - "#55843"
  - "#55855"
  - "#60294"
  - "#60935"
  - "#61285"
  - "#62681"
  - "#66357"
  - "#67845"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52254 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14019 on 2026-04-29."
---

# Gitcrawl Cluster 14019

Generated from local gitcrawl run cluster 14019 for `openclaw/openclaw`.

Display title:

> [Control UI] 部分模块中文翻译缺失

Cluster shape from gitcrawl:

- total members: 24
- issues: 24
- pull requests: 0
- open candidates in local store: 5
- representative: #52254, currently open in local store
- latest member update: 2026-04-28T22:51:07.521783704Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #34848 [Feature Request] Add Chinese (Simplified) localization support for macOS native app
- #40922 Feature request: Chinese localization for control UI
- #41703 [Feature Request] 中文语言支持 - Chinese Language Support for Dashboard
- #42033 [i18n] Missing Chinese (zh-CN) translations in Control UI - Agents page
- #44889 [Bug]: 客户端没有内置中文语言
- #45708 [Feature Request] Control UI 多语言支持（中文）
- #45927 [Feature Request] Control UI 添加语言设置选项
- #45989 [Feature Request] Add i18n Support for Control UI
- #52028 Request: Chinese (Simplified) language support for Mac app
- #53402 [Feature Request] Add Chinese (Simplified) localization for macOS menu bar app
- #53829 [Feature]: Add i18n support for Control UI - Chinese (zh-CN) localization
- #55233 [Feature]: Request: Add Chinese (zh-CN) localization for OpenClaw UI
- #55843 Feature Request: Chinese (zh-CN) localization for Web UI
- #55855 [Feature Request] Add i18n support for OpenClaw Control UI (Chinese localization)
- #60294 feat: Android app 中文本地化支持 (Chinese localization for Android app)
- #60935 Feature Request: Complete Chinese (zh-CN) i18n translation for Control UI
- #61285 [Feature]: macOS App Chinese (Simplified) Localization Support
- #66357 Rename ollama_web_* tools + Complete zh-CN i18n translation
- #67845 Feature request: support Chinese localization for Telegram menu commands

Open candidates:

- #36617 [Feature]: Japanese localization (ja-JP) for OpenClaw core UX
- #44551 [Feature]: [Feature Request] Gateway UI 支持中文显示
- #52254 [Control UI] 部分模块中文翻译缺失
- #55239 请求支持 Telegram Bot 命令菜单中文化
- #62681 [Feature Request] Support for internationalization (i18n) of Telegram bot commands
