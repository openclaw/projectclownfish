---
repo: openclaw/openclaw
cluster_id: gitcrawl-2082-dedupe-only-20260429-remote
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
  - "#66430"
candidates:
  - "#65374"
  - "#70014"
cluster_refs:
  - "#65367"
  - "#65374"
  - "#66430"
  - "#68367"
  - "#68674"
  - "#70014"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66430 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2082 on 2026-04-29."
---

# Gitcrawl Cluster 2082

Generated from local gitcrawl run cluster 2082 for `openclaw/openclaw`.

Display title:

> [Bug] Dreaming REM phase causes cross-agent context pollution when agents share workspace

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 2
- representative: #66430, currently closed in local store
- latest member update: 2026-04-28T16:45:59.850264077Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #65367 [Bug]: Dreaming iterates all agent workspaces serially with no config to scope — causes session reset timeouts
- #66430 [Bug] Dreaming REM phase causes cross-agent context pollution when agents share workspace
- #68367 Light Sleep dreaming phase contaminates unrelated sessions with cross-context memory candidates
- #68674 [Bug]: Dreaming only creates sessions for main agent in multi-agent setup on 2026.4.15

Open candidates:

- #65374 Bug: Built-in dreaming system contaminates agent identity in multi-agent setups
- #70014 [Bug] Dreaming does not process the primary agent workspace
