---
repo: openclaw/openclaw
cluster_id: gitcrawl-2207-dedupe-only-20260429-remote
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
  - "#44288"
candidates:
  - "#40786"
  - "#44288"
cluster_refs:
  - "#40786"
  - "#40804"
  - "#40810"
  - "#44288"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44288 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2207 on 2026-04-29."
---

# Gitcrawl Cluster 2207

Generated from local gitcrawl run cluster 2207 for `openclaw/openclaw`.

Display title:

> feat(backup): add exclude patterns, --smart-exclude, and protected path guards [ai]

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 2
- representative: #44288, currently open in local store
- latest member update: 2026-04-28T18:04:42.828112682Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40804 Feature/backup exclude patterns
- #40810 Backup: add exclude patterns to create

Open candidates:

- #40786 Feature Request: Add .gitignore-like exclude patterns to backup CLI
- #44288 feat(backup): add exclude patterns, --smart-exclude, and protected path guards [ai]
