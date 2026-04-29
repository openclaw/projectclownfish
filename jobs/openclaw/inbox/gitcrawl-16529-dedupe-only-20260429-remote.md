---
repo: openclaw/openclaw
cluster_id: gitcrawl-16529-dedupe-only-20260429-remote
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
  - "#61970"
candidates:
  - "#59174"
  - "#61970"
cluster_refs:
  - "#44078"
  - "#54131"
  - "#55364"
  - "#59174"
  - "#60315"
  - "#60993"
  - "#61970"
  - "#62669"
  - "#62770"
  - "#63169"
  - "#63314"
  - "#63461"
  - "#63493"
  - "#63720"
  - "#63816"
  - "#64132"
  - "#64226"
  - "#64665"
  - "#64750"
  - "#65002"
  - "#65117"
  - "#65426"
  - "#65451"
  - "#66090"
  - "#69435"
  - "#71138"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61970 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 16529 on 2026-04-29."
---

# Gitcrawl Cluster 16529

Generated from local gitcrawl run cluster 16529 for `openclaw/openclaw`.

Display title:

> Bug: WhatsApp outbound video sends succeed but media never appears in chat

Cluster shape from gitcrawl:

- total members: 26
- issues: 26
- pull requests: 0
- open candidates in local store: 2
- representative: #61970, currently open in local store
- latest member update: 2026-04-28T05:49:58.457355466Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44078 [Bug]: Telegram local image sends fail when CLI media path is outside OpenClaw-managed directories
- #54131 Bug: WhatsApp outbound media (MEDIA: token) fails silently — workaround: openclaw message send --media
- #55364 [Bug]: WhatsApp message send sends MP3 audio as PTT voice note, breaking Android playback
- #60315 Agent replies in WhatsApp do not deliver image attachments, while 'message send --media' works
- #60993 WhatsApp TTS OpenAI delivers MP3 instead of OGG Opus — voice messages unreadable
- #62669 WhatsApp outbound media sends with hasMedia: false — images never attached
- #62770 [Bug]:  the audio file is being dropped silently before it reaches WhatsApp
- #63169 WhatsApp media send reports success but attachment is never delivered (2026.4.8)
- #63314 [Bug]: WhatsApp media send fails silently in v2026.4.8 — `hasMedia: false` despite `--media` flag (related to #23140, #54131)
- #63461 [Bug]: openclaw message send --media not working from CLI (WhatsApp)
- #63493 message tool silently drops local file paths and external URLs in the media field
- #63720 WhatsApp media silently dropped: hasMedia=False on all outbound messages (2026.4.9)
- #63816 [Bug]: WhatsApp outbound media reports success but no file is delivered
- #64132 WhatsApp --media not sending audio/image files since 2026.4.9
- #64226 WhatsApp media send silently fails in 2026.4.5+
- #64665 [Bug]: WhatsApp outbound media silently dropped — hasMedia: false — CLI and model-initiated sends affected (v2026.4.8–4.9)
- #64750 WhatsApp message.send returns success but drops attachments and delivers text only
- #65002 [Bug]: WhatsApp: mediaUrl silently dropped in outbound delivery pipeline (hasMedia: false)
- #65117 WhatsApp: message tool (web-outbound) drops media silently — hasMedia:false on all outbound image sends
- #65426 [Bug]: Telegram outbound MEDIA:./artifacts/... fails on stock gateway (workspace-relative path rejected)
- #65451 Bug: WhatsApp outbound media (images) not attaching — hasMedia false on sendMessageWhatsApp
- #66090 sending media on whatsapp
- #69435 TTS auto-reply generates MP3 only — WhatsApp cannot play as voice note (needs OGG/Opus)
- #71138 [Bug]: Telegram media attachments silently dropped — "Path escapes sandbox root" blocks ~/.openclaw/media/outbound/

Open candidates:

- #59174 [Bug]: Openclaw cant view referenced whatsapp image
- #61970 Bug: WhatsApp outbound video sends succeed but media never appears in chat
