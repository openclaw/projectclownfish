---
repo: openclaw/openclaw
cluster_id: gitcrawl-13974-dedupe-only-20260429-remote
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
  - "#63706"
candidates:
  - "#44833"
  - "#46015"
  - "#47587"
  - "#52186"
  - "#57296"
  - "#61590"
  - "#63753"
cluster_refs:
  - "#17101"
  - "#41491"
  - "#41574"
  - "#42060"
  - "#42372"
  - "#43072"
  - "#44459"
  - "#44833"
  - "#44908"
  - "#45329"
  - "#46015"
  - "#46326"
  - "#47460"
  - "#47587"
  - "#47702"
  - "#48203"
  - "#48614"
  - "#48664"
  - "#49159"
  - "#51081"
  - "#51466"
  - "#51645"
  - "#52186"
  - "#52213"
  - "#53141"
  - "#54030"
  - "#54695"
  - "#54696"
  - "#55052"
  - "#55145"
  - "#56010"
  - "#56124"
  - "#56601"
  - "#57296"
  - "#57506"
  - "#59192"
  - "#59502"
  - "#59864"
  - "#59919"
  - "#61217"
  - "#61314"
  - "#61590"
  - "#62122"
  - "#62209"
  - "#62496"
  - "#62680"
  - "#63190"
  - "#63403"
  - "#63677"
  - "#63706"
  - "#63753"
  - "#64153"
  - "#64452"
  - "#64724"
  - "#64803"
  - "#65443"
  - "#65661"
  - "#65662"
  - "#65951"
  - "#65978"
  - "#66092"
  - "#66553"
  - "#67230"
  - "#69653"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63706 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13974 on 2026-04-29."
---

# Gitcrawl Cluster 13974

Generated from local gitcrawl run cluster 13974 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord voice-note handling inconsistent after update to 2026.4.9

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 7
- representative: #63706, currently closed in local store
- latest member update: 2026-04-28T22:51:07.405699887Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #17101 [Bug]: Telegram Voice Messages Not Transcribed
- #41491 [Bug]: WhatsApp audio pipeline does not invoke STT transcription (whisper-large-v3-turbo / groq provider)
- #41574 [Bug]: TTS audio not playing in WebChat/control-ui
- #42060 [Bug]: tts tool tag [[audio_as_voice]] not processed by Telegram sender — audio delivered as file attachment instead of voice note
- #42372 TTS [[audio_as_voice]] auto-delivery silently fails for WhatsApp group sessions
- #43072 feat(tts): send Telegram voice messages as OGG/Opus (sendVoice) instead of audio files
- #44459 TTS tool on Telegram renders as audio file instead of native voice memo (sendAudio vs sendVoice)
- #44908 [Bug]: WhatsApp audio-only messages in groups do not trigger preflight transcription or mention check
- #45329 [Bug]: Edge TTS generates audio but sendVoice fails for model-reply TTS tags in Telegram (auto / tagged mode)
- #46326 Audio transcription stopped working after update to 2026.3.12/3.13
- #47460 [Bug]: Telegram voice note can be saved to media/inbound during provider startup, but never injected into session (silent drop)
- #47702 Audio transcription only runs for group mention preflight, not for DMs or general messages
- #48203 macOS Talk mode ignores configured ElevenLabs voice ID and seems to fall back to default/system voice
- #48614 [Bug]: Signal voice notes — MediaPath not populated, audio transcription pipeline never triggers
- #48664 Audio transcription silently stops working after gateway restart (Telegram voice messages)
- #49159 [Bug]: TTS tool returns success with a 0-byte audio file, causing QQBot voice delivery to fail
- #51081 WhatsApp: TTS audio messages intermittently fail to deliver (TTS pipeline issue, not channel-specific)
- #51466 [Bug] Telegram /tts audio reaches TTS path but Edge provider times out; no voice note delivered on v2026.3.13
- #51645 Voice transcription not working in group/topic chats
- #52213 WhatsApp: Voice messages in groups silently dropped — mention check runs before audio transcription
- #53141 [Bug]: Telegram ElevenLabs TTS voices short/medium replies but skips long replies (text-only)
- #54030 WhatsApp voice notes regress after upgrade: inbound stays audio/ogg instead of pre-transcribed text
- #54695 [Bug] STT transcription not working on Telegram (Groq) — broken since 2026.3.12, still broken on 2026.3.24
- #54696 [Bug] TTS voice replies arrive as MP3 file attachment instead of native Telegram voice message (2026.3.24)
- #55052 [Bug] Telegram voice messages: media understanding audio transcription pipeline never triggered
- #55145 WhatsApp: TTS tool returns success but audio not delivered when auto=inbound
- #56010 [Bug]: Telegram voice notes are not transcribed; inbound message arrives only as <media:audio> without media context
- #56124 Bug: Audio preflight transcription not triggering in mention-gated Telegram groups
- #56601 [Bug]: In Chat in Web Interface the Microsoft Edge voice does not use the voice in the openclaw.json config
- #57506 tts tool ignores messages.tts.openai.baseUrl — hardcoded to Edge TTS regardless of config
- #59192 Feature Request: Native local Whisper integration for audio transcription
- #59502 tools.media.audio Groq transcription not triggering in Telegram DMs (v2026.3.31)
- #59864 [Bug]: Telegram voice note transcription fails with Deepgram — audio arrives as raw <media:audio> without transcript
- #59919 Bug: TTS tool reports success but no audio file is generated or delivered on WhatsApp
- #61217 [Feature]: Feature Request: Native Telegram Voice Message Auto-Transcription
- #61314 [Bug]: Discord DM voice messages transcribe but text is not updated in message body
- #62122 TTS tool audio dropped when model replies with NO_REPLY + per-channel-peer routing fails for WhatsApp
- #62209 [Bug]: Telegram voice messages not transcribed via Groq Whisper after multi-agent config (Docker)
- #62496 [Bug] Telegram DM voice-note transcription silently fails in 4.5: allMedia[n].path is undefined, normalizeAttachments filters out all audio attachments
- #62680 [Bug]: Telegram DM voice notes not auto-transcribed when wrapper text makes hasUserText=true
- #63190 [Bug]: Telegram voice note saved to inbound but not sent to ASR pipeline
- #63403 [Bug]: TTS tool reports "Generated audio reply" but does not generate or deliver audio when ElevenLabs is configured (Telegram)
- #63677 [Bug]: WhatsApp DM voice notes bypass STT pipeline entirely — audio arrives as raw <media:audio> with no transcription attempt
- #63706 [Bug]: Discord voice-note handling inconsistent after update to 2026.4.9
- #64153 [Bug]: TTS tool ignores edge.voice config
- #64452 Telegram voice note (audio) does not trigger agent turn until follow-up text message
- #64724 Audio media understanding not firing for Telegram voice messages (Groq/Whisper)
- #64803 Discord voice messages not recognized as audio (content_type missing or incorrect)
- #65443 [Bug]: Telegram direct-chat TTS tool reports success, but requested voice replies are not delivered to the current chat on 2026.4.11
- #65661 macOS Talk Mode ignores configured ElevenLabs voice and still uses local robotic playback
- #65662 [Bug]: ElevenLabs TTS fails with "audio playback failed" and falls back to system voice
- #65951 [Bug]: Telegram DM voice-note replies skip auto TTS on 2026.4.11 when transcript replaces <media:audio> and inboundAudio becomes false
- #65978 Audio transcription skipped on direct delivery to idle agent (WhatsApp)
- #66092 TTS auto-delivery fails: audioAsVoice flag lost in outbound pipeline (Telegram voice notes never delivered)
- #66553 [Bug]: Race condition between inbound voice message delivery and async STT transcription — agent turn fires before transcript is available
- #67230 Bug: Intermittent 'No such file or directory' for Telegram audio messages
- #69653 [Bug]: Telegram auto TTS not triggered when ASR transcript replaces <media:audio> — inboundAudio detection fails (2026.4.15)

Open candidates:

- #44833 [Bug]: Telegram group photo-only messages do not trigger image understanding
- #46015 [Bug]: messages.tts ElevenLabs provider silently falls back to Edge TTS in Discord; no per-agent voice support
- #47587 Bug: Telegram multi-image messages - first image transcribed but excluded from media header, others in media header but not transcribed
- #52186 [Bug]: TTS elevenlabs provider generates audio but OpenClaw plays OpenAI voice instead
- #57296 WebChat TTS reports success but produces no audible playback or downloadable audio (Telegram works)
- #61590 Telegram voice works in explicit tests but is inconsistent in normal reply flow
- #63753 Mac app Talk mode doesn't use Gateway talk.speak API for TTS
