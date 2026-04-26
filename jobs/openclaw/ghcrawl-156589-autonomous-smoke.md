---
repo: openclaw/openclaw
cluster_id: ghcrawl-156589-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#11483"
candidates:
  - "#11483"
  - "#38673"
  - "#39614"
  - "#44058"
  - "#56613"
  - "#56701"
  - "#61858"
  - "#66252"
  - "#70429"
cluster_refs:
  - "#11483"
  - "#38673"
  - "#39614"
  - "#44058"
  - "#56613"
  - "#56701"
  - "#61858"
  - "#66252"
  - "#70429"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #11483 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156589 on 2026-04-26."
---

# GHCrawl Cluster 156589

Generated from local ghcrawl run cluster 156589 for `openclaw/openclaw`.

Display title:

> Feature: Per-agent TTS voice configuration

Cluster shape from ghcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #11483, currently open in local store
- latest member update: 2026-04-26T00:46:52.005Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #11483 Feature: Per-agent TTS voice configuration
- #38673 [Feature]: Per-Agent TTS Configuration
- #39614 [Feature]: Per-channel TTS voice — different voices for DMs, group chats, and topics
- #44058 Feature Request: Bot/Channel Level TTS Configuration
- #56613 [Feature]: Talk/Voice tab — agent/session switching + per-agent TTS voice
- #56701 Feature request: per-agent TTS voice configuration
- #61858 [Feature]: Per-agent TTS voice/voiceId configuration
- #66252 [Feature]: Per-Agent TTS/STT Configuration Overrides for Multi-Language Support
- #70429 Feature request: per-agent TTS voice configuration
