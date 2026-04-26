---
repo: openclaw/openclaw
cluster_id: ghcrawl-156855-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#51581"
candidates:
  - "#51581"
  - "#60890"
  - "#69975"
cluster_refs:
  - "#51581"
  - "#60890"
  - "#69975"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51581 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156855 on 2026-04-26."
---

# GHCrawl Cluster 156855

Generated from local ghcrawl run cluster 156855 for `openclaw/openclaw`.

Display title:

> feat(cron): add --thread-id flag to cron create/edit for Telegram forum topics

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #51581, currently open in local store
- latest member update: 2026-04-24T18:56:26.123Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51581 feat(cron): add --thread-id flag to cron create/edit for Telegram forum topics
- #60890 fix(cron): support thread-id in cron add/edit and paged lookup
- #69975 fix(cli): clarify --tz help text for offset-less --at values
