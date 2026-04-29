---
repo: openclaw/openclaw
cluster_id: gitcrawl-238824-dedupe-only-20260429b
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
  - "#64787"
candidates:
  - "#58686"
  - "#63121"
  - "#64787"
  - "#72101"
  - "#72331"
cluster_refs:
  - "#58686"
  - "#63121"
  - "#64787"
  - "#72101"
  - "#72331"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64787 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238824 on 2026-04-29."
---

# Gitcrawl Cluster 238824

Generated from local gitcrawl run cluster 238824 for `openclaw/openclaw`.

Display title:

> fix: ignore auto-filled streamTo for subagent spawns

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #64787, currently open in local store
- latest member update: 2026-04-29T08:43:38.469Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58686 fix(agents): drop streamTo silently for non-ACP spawn requests
- #63121 fix(tools): add acp-only guidance to sessions_spawn streamTo parameter
- #64787 fix: ignore auto-filled streamTo for subagent spawns
- #72101 fix(agents): ignore ACP-only streamTo and treat default model as unset
- #72331 fix(sessions_spawn): tolerate ACP-only fields for subagent runtime
