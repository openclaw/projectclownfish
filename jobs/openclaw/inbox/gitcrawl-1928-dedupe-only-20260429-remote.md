---
repo: openclaw/openclaw
cluster_id: gitcrawl-1928-dedupe-only-20260429-remote
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
  - "#49612"
candidates:
  - "#46455"
  - "#46904"
  - "#51967"
  - "#65301"
cluster_refs:
  - "#40398"
  - "#40431"
  - "#40966"
  - "#46455"
  - "#46904"
  - "#48755"
  - "#49110"
  - "#49516"
  - "#49612"
  - "#51855"
  - "#51856"
  - "#51967"
  - "#51995"
  - "#65295"
  - "#65301"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49612 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1928 on 2026-04-29."
---

# Gitcrawl Cluster 1928

Generated from local gitcrawl run cluster 1928 for `openclaw/openclaw`.

Display title:

> fix: ignore empty/default poll params for message(action=send)

Cluster shape from gitcrawl:

- total members: 15
- issues: 0
- pull requests: 15
- open candidates in local store: 4
- representative: #49612, currently closed in local store
- latest member update: 2026-04-28T11:40:35.799475299Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40398 fix(message): ignore zero-valued poll defaults for send detection
- #40431 fix: ignore zero-valued poll params when detecting poll creation
- #40966 fix(message): ignore zero poll duration defaults in send action detection
- #48755 fix(message): treat zero poll duration as unset to prevent send misclassification
- #49110 fix poll send false-positive when duration sentinel is zero
- #49516 fix: ignore empty/default poll params for message(action=send)
- #49612 fix: ignore empty/default poll params for message(action=send)
- #51855 fix(polls): treat zero numeric duration as absent, not poll creation signal
- #51856 fix(message): ignore poll params for non-poll actions
- #51995 Message: ignore empty poll* fields for non-poll actions (#51830)
- #65295 fix: avoid misclassifying send poll metadata as poll intent（Weixin plugin）

Open candidates:

- #46455 fix(message): strip auto-populated poll and components params on send
- #46904 fix(agents): strip poll params from message send action instead of rejecting
- #51967 Polls: require positive duration for poll param detection (#51830) (#51830)
- #65301 Fix/send poll intent detection clean
