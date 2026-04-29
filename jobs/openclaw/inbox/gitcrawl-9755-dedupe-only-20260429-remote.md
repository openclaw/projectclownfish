---
repo: openclaw/openclaw
cluster_id: gitcrawl-9755-dedupe-only-20260429-remote
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
  - "#58112"
candidates:
  - "#50454"
  - "#56133"
  - "#57415"
  - "#58112"
cluster_refs:
  - "#50454"
  - "#56133"
  - "#57415"
  - "#58112"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58112 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 9755 on 2026-04-29."
---

# Gitcrawl Cluster 9755

Generated from local gitcrawl run cluster 9755 for `openclaw/openclaw`.

Display title:

> fix: pass cwd parameter to spawnSubagentDirect for workspace inheritance

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #58112, currently open in local store
- latest member update: 2026-04-28T20:12:58.597848757Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50454 fix: use explicit agent workspace when writing transcript headers
- #56133 fix(gateway): use agent workspace dir in session transcript cwd
- #57415 feat(agent): support openclaw agent --cwd
- #58112 fix: pass cwd parameter to spawnSubagentDirect for workspace inheritance
