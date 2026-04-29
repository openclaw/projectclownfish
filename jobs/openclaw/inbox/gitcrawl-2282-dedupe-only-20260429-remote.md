---
repo: openclaw/openclaw
cluster_id: gitcrawl-2282-dedupe-only-20260429-remote
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
  - "#59386"
candidates:
  - "#62191"
  - "#63581"
  - "#66169"
cluster_refs:
  - "#59386"
  - "#62191"
  - "#63581"
  - "#66169"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59386 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2282 on 2026-04-29."
---

# Gitcrawl Cluster 2282

Generated from local gitcrawl run cluster 2282 for `openclaw/openclaw`.

Display title:

> iMessage: harden echo detection against control-char prefixes

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #59386, currently closed in local store
- latest member update: 2026-04-28T22:51:07.289563041Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #59386 iMessage: harden echo detection against control-char prefixes

Open candidates:

- #62191 fix(imessage): strip U+FFFD garbage chars from echo text key normalization
- #63581 imessage: strip NUL bytes from echo-cache text normalization
- #66169 [codex] fix(imessage): normalize attributed echo prefixes
