---
repo: openclaw/openclaw
cluster_id: gitcrawl-2084-dedupe-only-20260429-remote
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
  - "#13609"
candidates:
  - "#38069"
  - "#49740"
cluster_refs:
  - "#13609"
  - "#38069"
  - "#38839"
  - "#43004"
  - "#49740"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #13609 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2084 on 2026-04-29."
---

# Gitcrawl Cluster 2084

Generated from local gitcrawl run cluster 2084 for `openclaw/openclaw`.

Display title:

> Add retry logic for failed cron jobs

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 2
- representative: #13609, currently closed in local store
- latest member update: 2026-04-28T21:55:43.576694645Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #13609 Add retry logic for failed cron jobs
- #38839 Feature Request: Cron Job Reschedule & Retry Mechanism
- #43004 Feature: Cron job retry with exponential backoff

Open candidates:

- #38069 [Feature]: cron job execution retry with configurable delay after transient failure
- #49740 Feature request: cron job auto-retry on failure (--retry-count, --retry-delay)
