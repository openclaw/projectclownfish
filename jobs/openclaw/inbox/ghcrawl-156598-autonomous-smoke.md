---
repo: openclaw/openclaw
cluster_id: ghcrawl-156598-autonomous-smoke
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
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#68397"
candidates:
  - "#40102"
  - "#56326"
  - "#56342"
  - "#58686"
  - "#61724"
  - "#63120"
  - "#63121"
  - "#64787"
  - "#65282"
  - "#66720"
  - "#68397"
  - "#69170"
  - "#72614"
cluster_refs:
  - "#40102"
  - "#56326"
  - "#56342"
  - "#58686"
  - "#61724"
  - "#63120"
  - "#63121"
  - "#64787"
  - "#65282"
  - "#66720"
  - "#68397"
  - "#69170"
  - "#72614"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #68397 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156598 on 2026-04-26."
maintainer_calibration:
  - "2026-04-27 vincentkoc approved finalization for https://github.com/openclaw/openclaw/pull/72614."
  - "Hydrate follow-up closeout refs #56326, #61724, and #63120; previous closeout blocked only because they were not job candidates."
  - "ACP-only sessions_spawn fields are an ordinary provider/tool-schema bug unless live evidence shows a real auth/session security boundary change."
  - "Rebase, review, fix, run pnpm check:changed, merge if clean, then close high-confidence fixed-by-candidate duplicates."
---

# GHCrawl Cluster 156598

Generated from local ghcrawl run cluster 156598 for `openclaw/openclaw`.

Display title:

> fix(sessions_spawn): silently strip ACP-only fields for runtime=subagent

Cluster shape from ghcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 9
- representative: #68397, currently open in local store
- latest member update: 2026-04-25T07:30:10.488Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40102 fix: ignore ACP-only streamTo for subagent spawns
- #56326 Bug: sessions_spawn exposes ACP-only fields and breaks runtime=subagent with schema-following models
- #56342 Fix sessions_spawn for subagent runtime with ACP-only fields
- #58686 fix(agents): drop streamTo silently for non-ACP spawn requests
- #61724 sessions_spawn(runtime="subagent") fails with "streamTo is only supported for runtime=acp"
- #63120 sessions_spawn: LLMs pass streamTo for subagent runtime causing 100% spawn failures
- #63121 fix(tools): add acp-only guidance to sessions_spawn streamTo parameter
- #64787 fix: ignore auto-filled streamTo for subagent spawns
- #65282 fix(agents): ignore ACP-only streamTo on subagent sessions_spawn
- #66720 fix: strip runtime-specific properties from sessions_spawn tool schema for provider compatibility
- #68397 fix(sessions_spawn): silently strip ACP-only fields for runtime=subagent
- #69170 fix(agent): document that sessions_spawn streamTo is ACP-only
- #72614 fix(sessions_spawn): tolerate ACP-only fields for subagent runtime
