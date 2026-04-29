---
repo: openclaw/openclaw
cluster_id: gitcrawl-238819-dedupe-only-20260429b
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
  - "#67544"
candidates:
  - "#56284"
  - "#63491"
  - "#67416"
  - "#67544"
  - "#68493"
cluster_refs:
  - "#56284"
  - "#63491"
  - "#67416"
  - "#67544"
  - "#68493"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67544 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238819 on 2026-04-29."
---

# Gitcrawl Cluster 238819

Generated from local gitcrawl run cluster 238819 for `openclaw/openclaw`.

Display title:

> Gateway restart can fail on Windows with EADDRINUSE after crash or overlapping startup paths

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #67544, currently open in local store
- latest member update: 2026-04-29T08:43:39.309Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56284 Windows: gateway restart does not wait for active tasks and loses session state
- #63491 [Bug]: Windows Scheduled Task gateway restart/health becomes inconsistent after ready
- #67416 Gateway restart crashes instead of restarting on Windows
- #67544 Gateway restart can fail on Windows with EADDRINUSE after crash or overlapping startup paths
- #68493 [Bug]: Editing openclaw.json while gateway is running triggers hot-reload crash loop on Windows (stale lock file + EADDRINUSE)
