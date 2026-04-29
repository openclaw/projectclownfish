---
repo: openclaw/openclaw
cluster_id: gitcrawl-12558-dedupe-only-20260429-remote
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
  - "#66943"
candidates:
  - "#55788"
  - "#55986"
cluster_refs:
  - "#41489"
  - "#55788"
  - "#55986"
  - "#66943"
  - "#66955"
  - "#69073"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66943 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 12558 on 2026-04-29."
---

# Gitcrawl Cluster 12558

Generated from local gitcrawl run cluster 12558 for `openclaw/openclaw`.

Display title:

> feat: add SenseAudio audio transcription provider

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 2
- representative: #66943, currently closed in local store
- latest member update: 2026-04-27T22:51:38.806257982Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41489 feat(media): add AssemblyAI audio transcription provider
- #66943 feat: add SenseAudio audio transcription provider
- #66955 feat: add SenseAudio music generation provider
- #69073 Add @openclaw/speech-hands-provider: self-reflection ASR media-understanding provider

Open candidates:

- #55788 Fix/OpenAI codex audio media understanding
- #55986 Add OpenRouter audio transcription support
