---
repo: openclaw/openclaw
cluster_id: ghcrawl-156632-autonomous-smoke
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
  - "#66403"
candidates:
  - "#59195"
  - "#59377"
  - "#59984"
  - "#60125"
  - "#60496"
  - "#63631"
  - "#66403"
cluster_refs:
  - "#59195"
  - "#59377"
  - "#59984"
  - "#60125"
  - "#60496"
  - "#63631"
  - "#66403"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #66403 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156632 on 2026-04-26."
---

# GHCrawl Cluster 156632

Generated from local ghcrawl run cluster 156632 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI: exec approval popup can push action buttons below viewport on long commands

Cluster shape from ghcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- representative: #66403, currently open in local store
- latest member update: 2026-04-24T18:56:24.629Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59195 [Bug]: Long Pop-up Windows Blocking UI
- #59377 [Bug] 审批弹窗内容过长时超出视口，无法点击批准按钮
- #59984 UI Bug: exec approval popup should be scrollable when content is long
- #60125 Control UI: long exec approval cards can be slow/unscrollable, hiding allow buttons
- #60496 Control UI: Long command outputs push approval buttons off screen
- #63631 [Bug]: too much information pop out, I can't approve it without button to press
- #66403 [Bug]: Control UI: exec approval popup can push action buttons below viewport on long commands
