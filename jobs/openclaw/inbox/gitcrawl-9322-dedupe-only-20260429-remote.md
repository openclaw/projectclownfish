---
repo: openclaw/openclaw
cluster_id: gitcrawl-9322-dedupe-only-20260429-remote
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
  - "#56650"
candidates:
  - "#56650"
  - "#63050"
cluster_refs:
  - "#52322"
  - "#56650"
  - "#63050"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56650 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 9322 on 2026-04-29."
---

# Gitcrawl Cluster 9322

Generated from local gitcrawl run cluster 9322 for `openclaw/openclaw`.

Display title:

> fix: non-interactive paste-token and PAT auth for github-copilot provider

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 2
- representative: #56650, currently open in local store
- latest member update: 2026-04-28T04:44:24.422770025Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52322 feat: github-copilot provider should support PAT auth (not just OAuth device flow)

Open candidates:

- #56650 fix: non-interactive paste-token and PAT auth for github-copilot provider
- #63050 fix(auth): add --token flag to paste-token and surface validTypes in invalid_type warning
