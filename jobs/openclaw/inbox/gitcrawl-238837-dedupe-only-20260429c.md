---
repo: openclaw/openclaw
cluster_id: gitcrawl-238837-dedupe-only-20260429c
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
  - "#41764"
candidates:
  - "#41764"
  - "#50170"
  - "#65464"
  - "#73556"
cluster_refs:
  - "#41764"
  - "#50170"
  - "#65464"
  - "#73556"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41764 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238837 on 2026-04-29."
---

# Gitcrawl Cluster 238837

Generated from local gitcrawl run cluster 238837 for `openclaw/openclaw`.

Display title:

> [Bug] Cron job reports lastError even when message was delivered

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #41764, currently open in local store
- latest member update: 2026-04-28T17:52:27.828Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41764 [Bug] Cron job reports lastError even when message was delivered
- #50170 [Bug]: Cron jobs report status: "error" with "Message failed" despite successful Discord delivery
- #65464 Cron lastError persists when later retry delivers successfully
- #73556 Cron job incorrectly reports 'Message failed' despite successful delivery
