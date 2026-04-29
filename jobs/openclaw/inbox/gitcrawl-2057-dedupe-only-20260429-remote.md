---
repo: openclaw/openclaw
cluster_id: gitcrawl-2057-dedupe-only-20260429-remote
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
  - "#56919"
candidates:
  - "#41651"
  - "#46690"
  - "#62495"
cluster_refs:
  - "#41651"
  - "#43745"
  - "#44522"
  - "#46690"
  - "#56919"
  - "#61585"
  - "#62495"
  - "#63969"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56919 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2057 on 2026-04-29."
---

# Gitcrawl Cluster 2057

Generated from local gitcrawl run cluster 2057 for `openclaw/openclaw`.

Display title:

> Skills: repeated 'Skipping skill path that resolves outside its configured root' warnings on 2026.3.28

Cluster shape from gitcrawl:

- total members: 8
- issues: 8
- pull requests: 0
- open candidates in local store: 3
- representative: #56919, currently closed in local store
- latest member update: 2026-04-28T21:55:43.814565069Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43745 [Skills] 37 "Skipping skill path that resolves outside its configured root" warnings from built-in extensions
- #44522 [Skills]: Excessive warnings when scanning flattened skills directory structure
- #56919 Skills: repeated 'Skipping skill path that resolves outside its configured root' warnings on 2026.3.28
- #61585 Skills in dist-runtime/ skipped due to symlink realPath check
- #63969 [Skills] Warning: skill path resolves outside its configured root (dist-runtime symlinks)

Open candidates:

- #41651 Skill path containment check produces false-positive warnings for symlinks to bundled skills
- #46690 No guard against skill repos created outside canonical paths
- #62495 Avoid noisy skill-path escape warnings for sibling skill references
