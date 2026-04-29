---
repo: openclaw/openclaw
cluster_id: gitcrawl-2893-dedupe-only-20260429-remote
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
  - "#44749"
candidates:
  - "#44749"
  - "#54296"
  - "#56994"
cluster_refs:
  - "#44749"
  - "#54296"
  - "#56994"
  - "#63707"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44749 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2893 on 2026-04-29."
---

# Gitcrawl Cluster 2893

Generated from local gitcrawl run cluster 2893 for `openclaw/openclaw`.

Display title:

> [Bug]: Concurrent allow-always approvals silently lose allowlist entries (last-write-wins race in exec-approvals.json)

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 3
- representative: #44749, currently open in local store
- latest member update: 2026-04-28T17:25:21.510422383Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #63707 [Bug]: Exec allowlist fails silently in long-running sessions (race condition in exec-approvals.json)  Body:

Open candidates:

- #44749 [Bug]: Concurrent allow-always approvals silently lose allowlist entries (last-write-wins race in exec-approvals.json)
- #54296 Bug: Non-atomic write of exec-approvals file + unbounded transcript readFileSync
- #56994 fix: use atomic writes for crash-safety on exec approvals, restart sentinel, shell profile, and saveJsonFile
