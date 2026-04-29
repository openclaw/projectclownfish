---
repo: openclaw/openclaw
cluster_id: gitcrawl-14031-dedupe-only-20260429-remote
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
  - "#46561"
candidates:
  - "#51553"
  - "#60595"
  - "#68036"
  - "#68554"
cluster_refs:
  - "#44320"
  - "#46561"
  - "#49628"
  - "#50318"
  - "#51553"
  - "#51567"
  - "#51991"
  - "#52021"
  - "#60444"
  - "#60595"
  - "#68036"
  - "#68554"
  - "#69772"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46561 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14031 on 2026-04-29."
---

# Gitcrawl Cluster 14031

Generated from local gitcrawl run cluster 14031 for `openclaw/openclaw`.

Display title:

> fix(session): check daily reset staleness before route metadata updates

Cluster shape from gitcrawl:

- total members: 13
- issues: 2
- pull requests: 11
- open candidates in local store: 4
- representative: #46561, currently closed in local store
- latest member update: 2026-04-29T11:09:44.837823029Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44320 fix(session): updateLastRoute must preserve activity timestamp for idle reset
- #46561 fix(session): check daily reset staleness before route metadata updates
- #49628 fix(sessions): updateLastRoute must not bump updatedAt
- #50318 Discord channel/group sessions never trigger daily reset (updatedAt race)
- #51567 Fix/issue 51097 session store memory tests
- #51991 fix(sessions): updateLastRoute bumps updatedAt, preventing idle session reset
- #52021 fix(sessions): preserve updatedAt in updateLastRoute for idle reset
- #60444 fix: replace structuredClone with JSON cloning in session store cache
- #69772 fix: honor resolved session maintenance config on load

Open candidates:

- #51553 fix(sessions): prevent stale cache read in updateLastRoute
- #60595 Avoid redundant cloning on fresh session store loads
- #68036 perf(sessions): add readonly option to skip structuredClone on cache hits
- #68554 fix(sessions): remove redundant skipCache disk re-read inside session store lock
