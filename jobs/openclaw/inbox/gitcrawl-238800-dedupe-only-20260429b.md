---
repo: openclaw/openclaw
cluster_id: gitcrawl-238800-dedupe-only-20260429b
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
  - "#55334"
candidates:
  - "#45438"
  - "#51977"
  - "#54155"
  - "#55334"
  - "#71227"
  - "#73114"
cluster_refs:
  - "#45438"
  - "#51977"
  - "#54155"
  - "#55334"
  - "#71227"
  - "#73114"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55334 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238800 on 2026-04-29."
---

# Gitcrawl Cluster 238800

Generated from local gitcrawl run cluster 238800 for `openclaw/openclaw`.

Display title:

> [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #55334, currently open in local store
- latest member update: 2026-04-29T08:43:39.422Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45438 perf: structuredClone in session store cache causes native memory leak (~1GB/min)
- #51977 [Bug]: skillsSnapshot.prompt retention/duplication causes gateway heap growth, OOMs, and hangs
- #54155 Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation
- #55334 [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions
- #71227 sessions.json parse+write blows past 60s run budget → agents silently return 'No reply from agent'
- #73114 Memory bloat from unbounded session/task record accumulation
