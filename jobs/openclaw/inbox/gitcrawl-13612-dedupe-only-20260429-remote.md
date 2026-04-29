---
repo: openclaw/openclaw
cluster_id: gitcrawl-13612-dedupe-only-20260429-remote
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
  - "#41175"
candidates:
  - "#38260"
cluster_refs:
  - "#38260"
  - "#41175"
  - "#44006"
  - "#45442"
  - "#47649"
  - "#51669"
  - "#54112"
  - "#57864"
  - "#60487"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41175 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13612 on 2026-04-29."
---

# Gitcrawl Cluster 13612

Generated from local gitcrawl run cluster 13612 for `openclaw/openclaw`.

Display title:

> Discord: large image attachments cause inbound worker timeout or silent drop

Cluster shape from gitcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 1
- representative: #41175, currently closed in local store
- latest member update: 2026-04-28T05:49:57.120862839Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41175 Discord: large image attachments cause inbound worker timeout or silent drop
- #44006 [Bug]: Sending PDF via Telegram crashes OpenClaw Gateway with "invalid opcode" in skia.linux-x64-musl.node on ImmortalWrt/musl environment
- #45442 [Bug]: Large warning triangle in main:main session makes chat unusable
- #47649 Discord PDF attachment over Nitro size limit crashes message listener
- #51669 [Bug]: Web chat crashes OpenClaw after sending an image, corrupting session file
- #54112 Crash when receiving large Discord image attachments (>8MB)
- #57864 Discord thread inbound worker blocks for 1800s on attachment (mp4) message
- #60487 Large attachments silently dropped when agent session is cold/expired

Open candidates:

- #38260 [Bug]: openclaw-gateway crashes with SIGILL (invalid opcode) in libvips-cpp during webchat image-flow repro
