---
repo: openclaw/openclaw
cluster_id: gitcrawl-14022-dedupe-only-20260429-remote
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
  - "#46721"
candidates:
  - "#44123"
  - "#45612"
  - "#47635"
  - "#49660"
  - "#50584"
  - "#51327"
  - "#62298"
  - "#64832"
  - "#66174"
  - "#69954"
cluster_refs:
  - "#44123"
  - "#45612"
  - "#46721"
  - "#47400"
  - "#47635"
  - "#49660"
  - "#50584"
  - "#50820"
  - "#51327"
  - "#52133"
  - "#52330"
  - "#54486"
  - "#62298"
  - "#63161"
  - "#64832"
  - "#66174"
  - "#66546"
  - "#67545"
  - "#69954"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46721 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14022 on 2026-04-29."
---

# Gitcrawl Cluster 14022

Generated from local gitcrawl run cluster 14022 for `openclaw/openclaw`.

Display title:

> fix(hooks): use local timezone for session-memory filenames

Cluster shape from gitcrawl:

- total members: 19
- issues: 0
- pull requests: 19
- open candidates in local store: 10
- representative: #46721, currently closed in local store
- latest member update: 2026-04-28T22:51:07.497367802Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46721 fix(hooks): use local timezone for session-memory filenames
- #47400 fix(hooks): append session memory to canonical daily file
- #50820 fix(hooks): recover session-memory transcript on timed-out /new (#50752)
- #52133 fix(agents): prune oversized ordinary session transcripts with a rolling window
- #52330 feat: auto-cleanup stale session lock files on gateway startup
- #54486 fix(gateway): prune orphaned session entries when transcript files are missing
- #63161 feat(sessions): archive transcript before compaction truncation
- #66546 feat(sessions): add transcriptRotateBytes and transcriptMaxLines to cap .jsonl growth
- #67545 Hooks: stabilize session-memory filenames

Open candidates:

- #44123 fix(hooks): use session creation date for memory filename
- #45612 fix: use local timezone in backup archive names
- #47635 fix(gateway): proactive session archive cleanup at startup and on timer
- #49660 fix(session-lock): clean orphan self-lock files during startup cleanup
- #50584 feat(hooks): add LLM synthesis mode and canonical daily file for session-memory
- #51327 fix(usage): preserve deleted-agent history when transcripts remain
- #62298 fix(hooks): align session-memory filename with canonical YYYY-MM-DD.md convention
- #64832 fix(agents): archive orphaned isolated-session transcripts after rotation
- #66174 Fix session transcript path canonicalization on save
- #69954 fix: fall back to canonical session transcripts during cleanup
