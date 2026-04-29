---
repo: openclaw/openclaw
cluster_id: gitcrawl-14122-dedupe-only-20260429-remote
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
  - "#64299"
candidates:
  - "#64299"
cluster_refs:
  - "#50264"
  - "#61336"
  - "#64299"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64299 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14122 on 2026-04-29."
---

# Gitcrawl Cluster 14122

Generated from local gitcrawl run cluster 14122 for `openclaw/openclaw`.

Display title:

> Bug: feishu_doc write and append actions return 400 on valid markdown content

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #64299, currently open in local store
- latest member update: 2026-04-28T05:49:57.286275759Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50264 feishu_doc write action: Markdown tables not supported, returns 400 error
- #61336 [Bug] feishu_doc write action fails with 'Cannot read properties of undefined (reading 'split')'

Open candidates:

- #64299 Bug: feishu_doc write and append actions return 400 on valid markdown content
