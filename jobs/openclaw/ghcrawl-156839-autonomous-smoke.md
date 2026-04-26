---
repo: openclaw/openclaw
cluster_id: ghcrawl-156839-autonomous-smoke
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
  - "#49317"
candidates:
  - "#49317"
  - "#57109"
  - "#62837"
cluster_refs:
  - "#49317"
  - "#57109"
  - "#62837"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #49317 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156839 on 2026-04-26."
---

# GHCrawl Cluster 156839

Generated from local ghcrawl run cluster 156839 for `openclaw/openclaw`.

Display title:

> [Bug]: WhatsApp group @mentions not detected when LID mentions are present (wasMentioned=false even though normalizedMentionedJids matches selfE164)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #49317, currently open in local store
- latest member update: 2026-04-24T18:56:26.347Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49317 [Bug]: WhatsApp group @mentions not detected when LID mentions are present (wasMentioned=false even though normalizedMentionedJids matches selfE164)
- #57109 WhatsApp: wasMentioned returns false when sender uses native @mention (LID not matched to selfLid)
- #62837 [WhatsApp] Group @-Mentions not detected - mentionedJids returns null despite mention being present
