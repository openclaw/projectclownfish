---
repo: openclaw/openclaw
cluster_id: ghcrawl-156732-autonomous-smoke
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
  - "#55334"
candidates:
  - "#51977"
  - "#55334"
  - "#57974"
  - "#71234"
cluster_refs:
  - "#51977"
  - "#55334"
  - "#57974"
  - "#71234"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55334 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156732 on 2026-04-26."
---

# GHCrawl Cluster 156732

Generated from local ghcrawl run cluster 156732 for `openclaw/openclaw`.

Display title:

> [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #55334, currently open in local store
- latest member update: 2026-04-25T07:30:11.643Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51977 [Bug]: skillsSnapshot.prompt retention/duplication causes gateway heap growth, OOMs, and hangs
- #55334 [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions
- #57974 control-ui sessions.list polling saturates gateway with many conversations
- #71234 Gateway OOM crash: sessions.json (31MB / 1,407 sessions) causes heap exhaustion during every sessions.list/chat.history poll
