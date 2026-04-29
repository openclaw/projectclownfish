---
repo: openclaw/openclaw
cluster_id: gitcrawl-745-dedupe-only-20260429-remote
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
  - "#63412"
candidates:
  - "#63412"
  - "#63460"
  - "#71384"
cluster_refs:
  - "#63412"
  - "#63460"
  - "#71384"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63412 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 745 on 2026-04-29."
---

# Gitcrawl Cluster 745

Generated from local gitcrawl run cluster 745 for `openclaw/openclaw`.

Display title:

> fix(discord): propagate blockquote context across chunk boundaries

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #63412, currently open in local store
- latest member update: 2026-04-28T15:57:31.095939132Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63412 fix(discord): propagate blockquote context across chunk boundaries
- #63460 fix: preserve markdown formatting across Discord chunk boundaries
- #71384 fix(discord): use CJK-aware break-point fallback in splitLongLine
