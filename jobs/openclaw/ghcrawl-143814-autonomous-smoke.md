---
repo: openclaw/openclaw
cluster_id: ghcrawl-143814-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#64132"
candidates:
  - "#59174"
  - "#60315"
  - "#61970"
  - "#63169"
  - "#63816"
  - "#64750"
  - "#65451"
  - "#66090"
cluster_refs:
  - "#44078"
  - "#54131"
  - "#55364"
  - "#59174"
  - "#60315"
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
  - "#65451"
  - "#66090"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #64132 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143814 on 2026-04-25."
---

# GHCrawl Cluster 143814

Generated from local ghcrawl run cluster 143814 for `openclaw/openclaw`.

Display title:

> WhatsApp --media not sending audio/image files since 2026.4.9

Cluster shape from ghcrawl:

- total members: 22
- issues: 22
- pull requests: 0
- open candidates in local store: 8
- representative: #64132, currently closed in local store
- latest member update: 2026-04-25T17:12:54.229Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44078 [Bug]: Telegram local image sends fail when CLI media path is outside OpenClaw-managed directories
- #54131 Bug: WhatsApp outbound media (MEDIA: token) fails silently — workaround: openclaw message send --media
- #55364 [Bug]: WhatsApp message send sends MP3 audio as PTT voice note, breaking Android playback
- #62669 WhatsApp outbound media sends with hasMedia: false — images never attached
- #62770 [Bug]:  the audio file is being dropped silently before it reaches WhatsApp
- #63314 [Bug]: WhatsApp media send fails silently in v2026.4.8 — `hasMedia: false` despite `--media` flag (related to #23140, #54131)
- #63461 [Bug]: openclaw message send --media not working from CLI (WhatsApp)
- #63493 message tool silently drops local file paths and external URLs in the media field
- #63720 WhatsApp media silently dropped: hasMedia=False on all outbound messages (2026.4.9)
- #64132 WhatsApp --media not sending audio/image files since 2026.4.9
- #64226 WhatsApp media send silently fails in 2026.4.5+
- #64665 [Bug]: WhatsApp outbound media silently dropped — hasMedia: false — CLI and model-initiated sends affected (v2026.4.8–4.9)
- #65002 [Bug]: WhatsApp: mediaUrl silently dropped in outbound delivery pipeline (hasMedia: false)
- #65117 WhatsApp: message tool (web-outbound) drops media silently — hasMedia:false on all outbound image sends

Open candidates:

- #59174 [Bug]: Openclaw cant view referenced whatsapp image
- #60315 Agent replies in WhatsApp do not deliver image attachments, while 'message send --media' works
- #61970 Bug: WhatsApp outbound video sends succeed but media never appears in chat
- #63169 WhatsApp media send reports success but attachment is never delivered (2026.4.8)
- #63816 [Bug]: WhatsApp outbound media reports success but no file is delivered
- #64750 WhatsApp message.send returns success but drops attachments and delivers text only
- #65451 Bug: WhatsApp outbound media (images) not attaching — hasMedia false on sendMessageWhatsApp
- #66090 sending media on whatsapp
