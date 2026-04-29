---
repo: openclaw/openclaw
cluster_id: gitcrawl-4950-dedupe-only-20260429-remote
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
  - "#41783"
candidates:
  - "#41783"
cluster_refs:
  - "#41783"
  - "#43141"
  - "#47608"
  - "#52168"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41783 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 4950 on 2026-04-29."
---

# Gitcrawl Cluster 4950

Generated from local gitcrawl run cluster 4950 for `openclaw/openclaw`.

Display title:

> bug(cron): job timeout includes cron-lane queue wait time

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #41783, currently open in local store
- latest member update: 2026-04-28T07:59:25.928944277Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43141 Queued cron-lane runs are not abort-aware and can time out before model invocation
- #47608 cron: script payload timeoutSeconds not enforced
- #52168 docs+fix: script cron jobs have undocumented 10-min default timeout; timeoutSeconds not documented for script payload

Open candidates:

- #41783 bug(cron): job timeout includes cron-lane queue wait time
