---
repo: openclaw/openclaw
cluster_id: gitcrawl-2866-dedupe-only-20260429-remote
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
  - "#44013"
candidates:
  - "#44013"
  - "#59859"
  - "#61576"
cluster_refs:
  - "#44013"
  - "#59075"
  - "#59859"
  - "#61576"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44013 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2866 on 2026-04-29."
---

# Gitcrawl Cluster 2866

Generated from local gitcrawl run cluster 2866 for `openclaw/openclaw`.

Display title:

> feat: add Linux and Windows desktop apps using Tauri

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #44013, currently open in local store
- latest member update: 2026-04-28T22:51:07.300734381Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #59075 feat(desktop): add Tauri desktop companion MVP

Open candidates:

- #44013 feat: add Linux and Windows desktop apps using Tauri
- #59859 feat: cute GTK-native Linux App (#75)
- #61576 feat: Rust/GTK4 Linux companion app (#75, alternative track)
