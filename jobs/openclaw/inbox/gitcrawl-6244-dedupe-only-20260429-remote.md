---
repo: openclaw/openclaw
cluster_id: gitcrawl-6244-dedupe-only-20260429-remote
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
  - "#46268"
candidates:
  - "#46268"
  - "#50359"
cluster_refs:
  - "#41151"
  - "#46268"
  - "#50359"
  - "#54892"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46268 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6244 on 2026-04-29."
---

# Gitcrawl Cluster 6244

Generated from local gitcrawl run cluster 6244 for `openclaw/openclaw`.

Display title:

> fix(feishu): preserve read tool image paths for auto-reply media

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #46268, currently open in local store
- latest member update: 2026-04-28T18:04:42.620967764Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41151 fix(agents): populate messagingToolSentMediaUrls for tool-result media deduplication
- #54892 Fix embedded replies dropping structured tool-result media

Open candidates:

- #46268 fix(feishu): preserve read tool image paths for auto-reply media
- #50359 Fix embedded read-image media fallback
