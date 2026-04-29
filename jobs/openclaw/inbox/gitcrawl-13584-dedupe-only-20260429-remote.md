---
repo: openclaw/openclaw
cluster_id: gitcrawl-13584-dedupe-only-20260429-remote
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
  - "#49765"
candidates:
  - "#39688"
  - "#50126"
  - "#61432"
  - "#61550"
  - "#70928"
cluster_refs:
  - "#26422"
  - "#32621"
  - "#39362"
  - "#39688"
  - "#39955"
  - "#47472"
  - "#48622"
  - "#49765"
  - "#50126"
  - "#52023"
  - "#52144"
  - "#52390"
  - "#56341"
  - "#56369"
  - "#61432"
  - "#61550"
  - "#63601"
  - "#64525"
  - "#69606"
  - "#69807"
  - "#70928"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49765 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13584 on 2026-04-29."
---

# Gitcrawl Cluster 13584

Generated from local gitcrawl run cluster 13584 for `openclaw/openclaw`.

Display title:

> [Bug]: message:sent hooks not work

Cluster shape from gitcrawl:

- total members: 21
- issues: 21
- pull requests: 0
- open candidates in local store: 5
- representative: #49765, currently closed in local store
- latest member update: 2026-04-28T15:00:43.398388463Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #26422 message_sending plugin hook never fires — dead code in all outbound paths
- #32621 Feature request: hook point inside message tool (message_sending only catches implicit replies)
- #39362 Internal hook message:sent fires inconsistently for group/topic conversations
- #39955 message:sent internal hook not emitted for Telegram channel
- #47472 Plugin hook 'message_sent' never fires for extension plugins
- #48622 Hook message:sent event not firing for Feishu channel
- #49765 [Bug]: message:sent hooks not work
- #52023 message:sent hook events don't fire for tool-dispatched messages
- #52144 [Bug]: why hook handler can not capture message:sent event
- #52390 [Bug]: message:sent internal hook not firing for Telegram group deliveries (missing sessionKey)
- #56341 [Bug]: message_sent typed hook not firing for Telegram channel delivery (v2026.3.24)
- #56369 [Bug]: gateway:startup hook fires before channel adapters are ready — message tool fails silently
- #63601 [Bug]: event.messages.push
- #64525 [Bug]: message_received plugin hook does not fire for queued/in-flight inbound messages
- #69606 Feature: Fire message_sending hook in reply dispatch path (not just proactive sends)
- #69807 [Meta] `message_sending` plugin hook does not fire on Telegram agent-reply path in 2026.4.15

Open candidates:

- #39688 [Bug]: Internal hooks (message:received, message:sent) 返回内容没有发送给用户
- #50126 Inconsistent message:sent / message_sent hook coverage across multiple outbound dispatch paths
- #61432 Bug: event.messages.push() on message:received has no effect
- #61550 message_sending hooks bypassed when streaming is enabled
- #70928 [Bug]: `message_sent` / `before_message_write` hooks never fire for webchat and openclaw-tui outbound paths
