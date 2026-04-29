---
repo: openclaw/openclaw
cluster_id: gitcrawl-15209-dedupe-only-20260429-remote
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
  - "#67687"
candidates:
  - "#40768"
  - "#40782"
cluster_refs:
  - "#40768"
  - "#40782"
  - "#42410"
  - "#49095"
  - "#56338"
  - "#67687"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67687 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 15209 on 2026-04-29."
---

# Gitcrawl Cluster 15209

Generated from local gitcrawl run cluster 15209 for `openclaw/openclaw`.

Display title:

> [Bug]: Group messages not reaching session - requireMention: false not working (Feishu)

Cluster shape from gitcrawl:

- total members: 6
- issues: 5
- pull requests: 1
- open candidates in local store: 2
- representative: #67687, currently closed in local store
- latest member update: 2026-04-28T07:04:51.903179959Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42410 [Feature]: Feishu: multi-bot @mention matching fails due to app-scoped open_id — need fallback identity resolution
- #49095 [Bug]: Feishu group @mention not included in received message content
- #56338 [Bug]: Feishu's requireMention=false is invalid.
- #67687 [Bug]: Group messages not reaching session - requireMention: false not working (Feishu)

Open candidates:

- #40768 Feishu: @mention not recognized in group when multiple bots share the same group (open_id app-scoped mismatch)
- #40782 fix(feishu): use union_id as fallback for @mention detection in multi-bot groups
