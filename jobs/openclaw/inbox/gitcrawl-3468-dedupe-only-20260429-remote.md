---
repo: openclaw/openclaw
cluster_id: gitcrawl-3468-dedupe-only-20260429-remote
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
  - "#67723"
candidates:
  - "#48958"
  - "#63497"
  - "#63710"
cluster_refs:
  - "#43106"
  - "#43488"
  - "#48958"
  - "#63497"
  - "#63710"
  - "#67723"
  - "#69577"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67723 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3468 on 2026-04-29."
---

# Gitcrawl Cluster 3468

Generated from local gitcrawl run cluster 3468 for `openclaw/openclaw`.

Display title:

> fix(agents): allow workspaceOnly inbound image loads from managed media dir

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 3
- representative: #67723, currently closed in local store
- latest member update: 2026-04-28T18:04:42.659705009Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43106 fix(webchat): preserve attachment images for non-vision models
- #43488 fix(discord): allow gateway inbound media paths to bypass workspace sandbox check (#26186 Layer 2)
- #67723 fix(agents): allow workspaceOnly inbound image loads from managed media dir
- #69577 fix: allow media-uri refs to bypass workspaceOnly check for image loading

Open candidates:

- #48958 fix: prevent phantom image injection from memory context into agent prompt
- #63497 fix(agents): support media://inbound URIs in image tool #63476
- #63710 fix(image): mixed-source image input for vision-capable models
