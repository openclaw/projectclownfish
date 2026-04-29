---
repo: openclaw/openclaw
cluster_id: gitcrawl-8042-dedupe-only-20260429-remote
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
  - "#52362"
candidates:
  - "#51549"
cluster_refs:
  - "#51549"
  - "#52362"
  - "#68582"
  - "#68611"
  - "#69973"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52362 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 8042 on 2026-04-29."
---

# Gitcrawl Cluster 8042

Generated from local gitcrawl run cluster 8042 for `openclaw/openclaw`.

Display title:

> claude-cli backend: assistant responses not persisted to session .jsonl, webchat history lost on reload

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #52362, currently closed in local store
- latest member update: 2026-04-28T22:51:07.453911844Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52362 claude-cli backend: assistant responses not persisted to session .jsonl, webchat history lost on reload
- #68582 [Bug]: WebChat responses invisible when agent uses CLI provider — transcript not persisted before history reload
- #68611 [Bug]: WebChat CLI runner — assistant replies invisible + user messages erased after each turn
- #69973 [Bug]: claude-cli fallback turn loses prior session context even though Claude session file still has full history

Open candidates:

- #51549 [Bug]: WebChat loses message queue, conversation history, and draft on browser refresh
