---
repo: openclaw/openclaw
cluster_id: gitcrawl-14003-dedupe-only-20260429-remote
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
  - "#61807"
candidates:
  - "#38661"
  - "#42294"
  - "#44281"
  - "#44391"
  - "#47562"
  - "#49967"
  - "#50164"
  - "#50399"
  - "#52192"
  - "#53784"
  - "#57298"
  - "#59752"
  - "#59801"
  - "#61545"
  - "#61807"
  - "#62157"
  - "#63015"
  - "#65541"
  - "#66117"
  - "#67652"
  - "#68316"
  - "#68446"
  - "#71141"
cluster_refs:
  - "#38559"
  - "#38661"
  - "#39997"
  - "#42075"
  - "#42294"
  - "#42512"
  - "#43388"
  - "#44281"
  - "#44391"
  - "#46535"
  - "#47562"
  - "#49967"
  - "#50102"
  - "#50164"
  - "#50399"
  - "#52192"
  - "#52887"
  - "#53123"
  - "#53784"
  - "#54038"
  - "#57298"
  - "#59602"
  - "#59752"
  - "#59787"
  - "#59795"
  - "#59801"
  - "#60968"
  - "#61372"
  - "#61545"
  - "#61807"
  - "#62157"
  - "#62687"
  - "#62788"
  - "#62862"
  - "#63015"
  - "#63160"
  - "#63505"
  - "#63932"
  - "#64120"
  - "#64314"
  - "#64328"
  - "#65541"
  - "#66117"
  - "#66912"
  - "#67652"
  - "#68316"
  - "#68446"
  - "#68465"
  - "#68744"
  - "#69528"
  - "#70441"
  - "#71141"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61807 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14003 on 2026-04-29."
---

# Gitcrawl Cluster 14003

Generated from local gitcrawl run cluster 14003 for `openclaw/openclaw`.

Display title:

> fix(feishu): extract video thumbnail via ffmpeg for native video bubbles

Cluster shape from gitcrawl:

- total members: 52
- issues: 0
- pull requests: 52
- open candidates in local store: 23
- representative: #61807, currently open in local store
- latest member update: 2026-04-29T11:09:44.787136539Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38559 fix(feishu): support mp4 video messages with thumbnail (#38554)
- #39997 fix(feishu): avoid voice-bubble auto routing and local-path fallback leaks
- #42075 outbound: propagate audioAsVoice through delivery pipeline
- #42512 fix(whatsapp): repair web auto-TTS delivery
- #43388 fix(feishu): harden voice reply delivery
- #46535 fix(tts): propagate audioAsVoice from tool results to delivery payload
- #50102 fix: prevent ghost media attachments from debounce buffer flatMap
- #52887 fix(whatsapp): deliver non-final media replies
- #53123 fix(whatsapp): add outbound guard for group allowlist policy
- #54038 fix(whatsapp): pre-transcribe inbound voice notes before bootstrap
- #59602 fix: send TTS audio as voice message in Feishu
- #59787 fix: only suppress text reply when messaging tool sent text (not media-only)
- #59795 fix(messaging): skip reply suppression for media-only messaging tool sends
- #60968 fix(whatsapp): deliver tool replies that include media
- #61372 fix(discord): restore DM voice-note preflight transcription
- #62687 [codex] fix(telegram): restore voice-note TTS delivery
- #62788 fix(whatsapp): add audio preflight transcription for inbound voice notes
- #62862 fix(qqbot): honor audioAsVoice for plain reply TTS
- #63160 fix(whatsapp): bypass legacy dep shim in sendMedia to restore attachment delivery
- #63505 fix(outbound): accept message tool media alias for sends #63493
- #63932 fix: allow TTS tool media delivery to channels
- #64120 WhatsApp: add preflight audio transcription for DM voice notes
- #64314 fix(telegram): keep tool media after text preview
- #64328 fix(qqbot): set MediaType 'audio' for voice attachments to enable TTS…
- #66912 fix(telegram): restore self-authored reply-media guard
- #68465 fix(whatsapp): support silentErrorReplies parity
- #68744 fix(whatsapp): respect audioAsVoice flag in outbound delivery
- #69528 fix(microsoft-tts): emit ogg/opus for voice-note targets so WhatsApp auto-replies play as native voice notes
- #70441 fix(reply): dedupe MEDIA URLs between block and final payloads (#65468)

Open candidates:

- #38661 fix: resolve multiple issues (#38517, #38501, #38554, #38494)
- #42294 fix(telegram): preserve audioAsVoice in outbound media sends
- #44281 fix(telegram): normalize MEDIA directives in reply delivery
- #44391 fix: guard followup-runner dedup behind cross-target check
- #47562 feat(telegram): bi-directional custom emoji reactions
- #49967 fix(feishu): fallback to media endpoint for video file downloads
- #50164 fix(feishu): fallback to type=media when file download returns 502
- #50399 fix(feishu): add duration parameter for audio/video files
- #52192 fix(feishu): prevent duplicate text send when sendMedia has no media URL
- #53784 fix(feishu): recognize common audio formats (mp3/wav/m4a/flac/aac) as playable audio messages
- #57298 fix(telegram): skip bot-authored media in reply resolution
- #59752 fix: use text-level dedup instead of blanket suppression for same-target messaging tool replies
- #59801 feat: Add errorPolicy support to WhatsApp channel
- #61545 fix(reply): preserve text for direct media blocks
- #61807 fix(feishu): extract video thumbnail via ffmpeg for native video bubbles
- #62157 fix: only drop streamed payloads, not all final payloads
- #63015 fix: honor filePath/path/media fallbacks in outbound reply normalization
- #65541 fix: deliver text blocks progressively when block streaming is disabled
- #66117 fix(cli): restore media attachment support for WhatsApp messages
- #67652 fix(reply-payload): preserve media alias attachments
- #68316 Preserve unsent media payloads after block streaming
- #68446 fix(whatsapp): stop DM allowFrom fallback into group policy sender bypass
- #71141 fix(telegram): honor outbound reaction directives
