---
repo: openclaw/openclaw
cluster_id: gitcrawl-14070-dedupe-only-20260429-remote
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
  - "#43457"
candidates:
  - "#48045"
cluster_refs:
  - "#18598"
  - "#43457"
  - "#48045"
  - "#57234"
  - "#67087"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43457 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14070 on 2026-04-29."
---

# Gitcrawl Cluster 14070

Generated from local gitcrawl run cluster 14070 for `openclaw/openclaw`.

Display title:

> [Bug]: Browser downloads don't work for JavaScript-initiated blob downloads

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #43457, currently closed in local store
- latest member update: 2026-04-28T05:49:58.71408303Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #18598 [Bug]: macOS Sequoia: OpenClaw isolated Chrome profile cannot download CSV (chrome://downloads entry is unclickable + wrong filename)
- #43457 [Bug]: Browser downloads don't work for JavaScript-initiated blob downloads
- #57234 Browser downloads via CDP go to Playwright temp dir instead of user Downloads folder
- #67087 [Bug]: Browser tool downloads to temp directory instead of configured downloads path in CDP mode

Open candidates:

- #48045 [Bug]: Browser tool silently discards downloads and throws "Download is starting" error when using CDP connection
