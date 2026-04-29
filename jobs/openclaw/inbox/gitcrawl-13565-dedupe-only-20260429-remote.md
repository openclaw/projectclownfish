---
repo: openclaw/openclaw
cluster_id: gitcrawl-13565-dedupe-only-20260429-remote
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
  - "#53376"
candidates:
  - "#53376"
  - "#53798"
  - "#61840"
  - "#62468"
cluster_refs:
  - "#14341"
  - "#16848"
  - "#19723"
  - "#37868"
  - "#39194"
  - "#40229"
  - "#40778"
  - "#40908"
  - "#40943"
  - "#41363"
  - "#41458"
  - "#41996"
  - "#42448"
  - "#43116"
  - "#43964"
  - "#44246"
  - "#44904"
  - "#46274"
  - "#48025"
  - "#49647"
  - "#51578"
  - "#53010"
  - "#53376"
  - "#53623"
  - "#53722"
  - "#53798"
  - "#56038"
  - "#56225"
  - "#56231"
  - "#56301"
  - "#58430"
  - "#59417"
  - "#59588"
  - "#61031"
  - "#61158"
  - "#61191"
  - "#61249"
  - "#61684"
  - "#61840"
  - "#61876"
  - "#62468"
  - "#62831"
  - "#63540"
  - "#64134"
  - "#66032"
  - "#67120"
  - "#68504"
  - "#69184"
  - "#70060"
  - "#70092"
  - "#70445"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53376 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13565 on 2026-04-29."
---

# Gitcrawl Cluster 13565

Generated from local gitcrawl run cluster 13565 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu plugin send message fails with 400 error - receive_id_type is required

Cluster shape from gitcrawl:

- total members: 51
- issues: 51
- pull requests: 0
- open candidates in local store: 4
- representative: #53376, currently open in local store
- latest member update: 2026-04-28T07:04:52.379152945Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #14341 [Feature]: Currently, the Lark plugin does not support sending images or voice messages
- #16848 [Feature]: BlueBubbles - auto-TTS replies arrive as MP3 attachments instead of native voice messages
- #19723 [Feature]: Add File Upload Support to feishu_drive Tool
- #37868 Add Feishu Audio Message Type Support
- #39194 [Bug]: TTS Feature in Chinese language duplicate replies.
- #40229 [Feature]: Native Voice Input with Press-to-Talk (WeChat-style)
- #40778 Feature Request: WeCom (Enterprise WeChat) Plugin Support
- #40908 [Bug]: feat: Support large file upload to Feishu Drive via multipart upload API
- #40943 [Feature Request] Feishu channel support file/image upload
- #41363 Native Voice Input for Control UI (ChatGPT-style)
- #41458 [Bug]: TTS voice message fails on Feishu channel - audio file not sent correctly
- #41996 [Bug]: An error occurred while sending a voice message using Feishu/Lark.
- #42448 [Bug]: Feishu channel returns 404 due to missing receive_id_type when sending message
- #43116 [Community Channel] WeChat (微信) Channel for OpenClaw
- #43964 Bug: Feishu group chat voice message fails with error 234001
- #44246 [Feature]: 飞书渠道支持原生语音消息发送
- #44904 [Feature]: 支持企业微信微信客服 API
- #46274 [Feature]: Support WeChat Official Account (微信公众号) Integration
- #48025 [Feature] Add file upload capability to feishu_drive tool
- #49647 Add WeCom (Enterprise WeChat) channel support
- #51578 [Feature]: [Feishu] Support voice message bubbles with asVoice
- #53010 [Feature]: Wechat image sending
- #53623 [Feature]: openclaw-weixin support sending voice messages
- #53722 [Bug] TTS 语音通过非 WEB 渠道发送时变成文件路径字符串
- #56038 [Feature Request]: 微信渠道支持发送TTS语音消息为原生语音条
- #56225 [WeChat] TTS should send voice messages instead of audio file attachments
- #56231 [Feature]: 1: Feishu voice bubble — MP3/WAV sent as file instead of voice bubble、2: Per-agent TTS voice override for Microsoft Edge TTS
- #56301 DingTalk plugin: asVoice support not implemented (send voice messages)
- #58430 Feishu TTS: 语音消息应发送为 audio 类型而非 file 类型
- #59417 [Feature]: WeChat channel voice message sending support (asVoice parameter not working)
- #59588 [Bug]: TTS audio sent as file attachment instead of voice message in Feishu
- #61031 微信渠道 TTS 语音消息应发送为原生语音格式（silk）而非文件
- #61158 Feature Request: Support sending voice messages in openclaw-weixin
- #61191 TTS voice messages not delivered to openclaw-weixin channel
- #61249 Feishu: Support native voice message bubbles (OGG/Opus) for TTS
- #61684 [Feature]: Feishu: Support sending images as inline image type instead of file attachment
- #61876 Feature: Feishu channel missing STT/ASR transcription for voice messages
- #62831 [QQ Bot] TTS not triggered: mediaType=undefined, ttsText=undefined despite audioAsVoice flag
- #63540 MiniMax TTS provider: voiceCompatible should be true for Telegram voice messages
- #64134 [Bug]: MiniMax TTS tool generates audio but does not deliver voice message to Feishu channel
- #66032 Feature Request: WhatsApp TTS Voice Message Support
- #67120 [Feature]: [Feishu] Voice messages not transcribed — raw file_key delivered instead of text
- #68504 WhatsApp: add audio input + optional voice replies (ElevenLabs)
- #69184 [Feature Request] feishu_drive tool: add download action for cloud storage files
- #70060 Feature: 微信通道支持语音气泡消息 (asVoice 参数)
- #70092 [Bug] TTS sends duplicate text + audio, and format not configurable per channel
- #70445 [Feishu] TTS voice bubble: MiniMax provider does not support voice-compatible output

Open candidates:

- #53376 [Bug]: Feishu plugin send message fails with 400 error - receive_id_type is required
- #53798 [Bug]: Feishu voice message sent via message tool does not display audio duration
- #61840 [Bug]:
- #62468 [Bug] Feishu message delivery fails with 'Unknown target jaydenli'
