---
repo: openclaw/openclaw
cluster_id: ghcrawl-166003-agentic-merge
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
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#56342"
candidates:
  - "#40102"
  - "#56342"
  - "#58686"
  - "#59251"
  - "#63121"
  - "#64787"
  - "#65282"
  - "#66720"
  - "#68397"
  - "#69170"
cluster_refs:
  - "#40102"
  - "#56342"
  - "#58686"
  - "#59251"
  - "#63121"
  - "#64787"
  - "#65282"
  - "#66720"
  - "#68397"
  - "#69170"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #56342 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166003 on 2026-04-26."
---

# GHCrawl Cluster 166003

Generated from local ghcrawl run cluster 166003 for `openclaw/openclaw`.

Display title:

> Fix sessions_spawn for subagent runtime with ACP-only fields

Cluster shape from ghcrawl:

- total members: 10
- issues: 0
- pull requests: 10
- open candidates in local store: 10
- representative: #56342, currently open in local store
- latest member update: 2026-04-25T07:30:10.488Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40102 fix: ignore ACP-only streamTo for subagent spawns
- #56342 Fix sessions_spawn for subagent runtime with ACP-only fields
- #58686 fix(agents): drop streamTo silently for non-ACP spawn requests
- #59251 fix(sessions): normalize GPT-style redundant args in sessions_spawn and sessions_send
- #63121 fix(tools): add acp-only guidance to sessions_spawn streamTo parameter
- #64787 fix: ignore auto-filled streamTo for subagent spawns
- #65282 fix(agents): ignore ACP-only streamTo on subagent sessions_spawn
- #66720 fix: strip runtime-specific properties from sessions_spawn tool schema for provider compatibility
- #68397 fix(sessions_spawn): silently strip ACP-only fields for runtime=subagent
- #69170 fix(agent): document that sessions_spawn streamTo is ACP-only
