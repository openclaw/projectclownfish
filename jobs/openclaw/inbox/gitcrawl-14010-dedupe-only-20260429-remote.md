---
repo: openclaw/openclaw
cluster_id: gitcrawl-14010-dedupe-only-20260429-remote
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
  - "#53641"
candidates:
  - "#41256"
  - "#42820"
  - "#43015"
  - "#43570"
  - "#53641"
cluster_refs:
  - "#41256"
  - "#42238"
  - "#42820"
  - "#43015"
  - "#43570"
  - "#44555"
  - "#45189"
  - "#48730"
  - "#48870"
  - "#48928"
  - "#49703"
  - "#51830"
  - "#53070"
  - "#53071"
  - "#53163"
  - "#53269"
  - "#53641"
  - "#53714"
  - "#53749"
  - "#54070"
  - "#54763"
  - "#55478"
  - "#55649"
  - "#55976"
  - "#55994"
  - "#56039"
  - "#56491"
  - "#56496"
  - "#57108"
  - "#57362"
  - "#65849"
  - "#65948"
  - "#67357"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53641 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14010 on 2026-04-29."
---

# Gitcrawl Cluster 14010

Generated from local gitcrawl run cluster 14010 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord message.send silently drops attachments while returning success/message id

Cluster shape from gitcrawl:

- total members: 33
- issues: 33
- pull requests: 0
- open candidates in local store: 5
- representative: #53641, currently open in local store
- latest member update: 2026-04-28T21:55:43.754548965Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42238 Discord image uploads fail with server_error in channel sessions
- #44555 [Bug]: Discord attachments sent via message tool do not arrive (buffer reports success, path inputs fail)
- #45189 Discord voice messages fail with bare 'Error' when using sendVoiceMessageDiscord via message tool
- #48730 message tool send to Feishu is misclassified as poll when poll duration defaults to 0
- #48870 [Bug]: error [tools] message failed: Poll fields require action "poll"; use action "poll" instead of "send".
- #48928 [Bug]: message(action=send) injects empty poll fields, causing normal text sends to fail
- #49703 [Bug] Discord: empty components forces v2 path, silently drops media attachments
- #51830 [Bug]: message send can be misclassified as poll when empty poll fields are auto-included
- #53070 2026.3.22: breaking config schema removals + describeMessageTool TypeError silently break Discord tool calling
- #53071 2026.3.22: breaking config schema removals + describeMessageTool TypeError silently break Discord tool calling
- #53163 [Bug] message tool file attachments silently dropped on Discord after v2026.3.22
- #53269 [Bug]: Discord components v2 — models lack guidance on media sends, media silently dropped
- #53714 Discord image attachments not passing URL to image analysis tool
- #53749 Bug: message tool schema incorrectly marks 'buttons' as required for all actions
- #54070 message tool requires empty buttons array even when not using interactive buttons
- #54763 message tool incorrectly requires components for file attachments
- #55478 Bug: message send with local media on openclaw-weixin is misclassified as poll creation
- #55649 mattermost message tool: "buttons" incorrectly marked as required in tool schema
- #55976 message tool schema: buttons incorrectly marked as required for all actions
- #55994 message action=send 被误判为 poll（openclaw-weixin 通道，文本/图片均失败）
- #56039 message tool: buttons field incorrectly marked as required in tool schema when Telegram inlineButtons capability is enabled
- #56491 [Bug]: message tool action=react fails validation — buttons incorrectly required for all actions
- #56496 [Bug]: message tool schema requires buttons parameter for all actions including react, delete, edit, poll
- #57108 message tool (action=send) requires `buttons` field even for plain text messages
- #57362 Discord plain-text agent messages can be delivered as interactive modal/form payloads
- #65849 message tool: Discord send fails unless components.modal is populated (should be optional)
- #65948 Discord file send via message tool fails: 'empty message' error even with file attached
- #67357 [Bug]: Discord file sending functionality has two bugs

Open candidates:

- #41256 [Bug]: Discord media uploads lose content-type and animated images lose frames
- #42820 message tool: Feishu send action polluted by poll schema/guard prevents file send
- #43015 message.send schema overexposes poll/components/modal causing GPT auto-population breakages
- #43570 [Bug]: Discord thread-reply silently ignores filePath/path parameters — attachment not sent
- #53641 [Bug]: Discord message.send silently drops attachments while returning success/message id
