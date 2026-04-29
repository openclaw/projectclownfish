---
repo: openclaw/openclaw
cluster_id: gitcrawl-2049-dedupe-only-20260429-remote
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
  - "#41866"
candidates:
  - "#41866"
cluster_refs:
  - "#38925"
  - "#41866"
  - "#42260"
  - "#45894"
  - "#46149"
  - "#65508"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41866 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2049 on 2026-04-29."
---

# Gitcrawl Cluster 2049

Generated from local gitcrawl run cluster 2049 for `openclaw/openclaw`.

Display title:

> fix(agents): strip leaked to=... JSON tool-call prefixes in user-faci…

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 1
- representative: #41866, currently open in local store
- latest member update: 2026-04-28T19:37:22.102403404Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38925 fix(agents): strip legacy <tool_call> dump blocks from assistant text
- #42260 fix(agents): strip tool_call/tool_result XML leaking into channel messages
- #45894 fix(sanitize): strip raw tool_call/tool_result XML tags from user-facing text
- #46149 fix: strip raw tool_call/tool_result XML tags from channel messages
- #65508 fix(sanitize): strip tool_call XML tags from user-facing messages

Open candidates:

- #41866 fix(agents): strip leaked to=... JSON tool-call prefixes in user-faci…
