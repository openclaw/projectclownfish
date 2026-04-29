---
repo: openclaw/openclaw
cluster_id: gitcrawl-14182-dedupe-only-20260429-remote
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
  - "#56783"
candidates:
  - "#42636"
  - "#56783"
  - "#65575"
cluster_refs:
  - "#42636"
  - "#48424"
  - "#56783"
  - "#65575"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56783 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14182 on 2026-04-29."
---

# Gitcrawl Cluster 14182

Generated from local gitcrawl run cluster 14182 for `openclaw/openclaw`.

Display title:

> UI: cap Control UI chat history rendering by char budget

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #56783, currently open in local store
- latest member update: 2026-04-28T22:51:07.332438849Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48424 fix(control-ui): prevent chat tab freeze when loading long history

Open candidates:

- #42636 fix(ui): reduce initial Control UI chat hydration window for heavy sessions
- #56783 UI: cap Control UI chat history rendering by char budget
- #65575 fix(ui): pause chat announcements during streaming
