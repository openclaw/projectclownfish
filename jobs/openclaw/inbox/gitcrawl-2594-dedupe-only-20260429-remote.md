---
repo: openclaw/openclaw
cluster_id: gitcrawl-2594-dedupe-only-20260429-remote
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
  - "#7227"
candidates:
  - "#7227"
  - "#69799"
cluster_refs:
  - "#7227"
  - "#69561"
  - "#69799"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #7227 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2594 on 2026-04-29."
---

# Gitcrawl Cluster 2594

Generated from local gitcrawl run cluster 2594 for `openclaw/openclaw`.

Display title:

> [Security] Accessibility permissions requested for 'node' exposes all npm packages to GUI automation

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #7227, currently open in local store
- latest member update: 2026-04-28T05:49:59.144078368Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #69561 [Docs]: warn that granting macOS Accessibility to node grants GUI automation to all npm packages

Open candidates:

- #7227 [Security] Accessibility permissions requested for 'node' exposes all npm packages to GUI automation
- #69799 [Security] Ship a dedicated/bundled Node binary so macOS TCC permissions (FDA, Accessibility) are scoped to OpenClaw only
