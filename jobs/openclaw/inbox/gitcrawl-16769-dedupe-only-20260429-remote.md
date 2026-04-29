---
repo: openclaw/openclaw
cluster_id: gitcrawl-16769-dedupe-only-20260429-remote
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
  - "#60258"
candidates:
  - "#49603"
cluster_refs:
  - "#49603"
  - "#58331"
  - "#59983"
  - "#60258"
  - "#63784"
  - "#64959"
  - "#65060"
  - "#70004"
  - "#70026"
  - "#70094"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60258 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 16769 on 2026-04-29."
---

# Gitcrawl Cluster 16769

Generated from local gitcrawl run cluster 16769 for `openclaw/openclaw`.

Display title:

> BUG: Stale session file lock not reclaimed when holder PID dies — blocks all agent workflow dispatch

Cluster shape from gitcrawl:

- total members: 10
- issues: 9
- pull requests: 1
- open candidates in local store: 1
- representative: #60258, currently closed in local store
- latest member update: 2026-04-28T21:55:43.582064973Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #58331 Session lock files not cleaned up after unexpected shutdown
- #59983 Bug: Stale session lock after timeout leaves channel permanently dead
- #60258 BUG: Stale session file lock not reclaimed when holder PID dies — blocks all agent workflow dispatch
- #63784 Session lock file not released after LLM idle timeout (no gateway restart)
- #64959 [Bug]: agent:<id>:main persistent main session can become zombie/relock and contaminate agent runs after restart
- #65060 Bug: Stale session file lock causes silent transcript capture failure — cron reports ok but writes nothing
- #70004 BUG: Agent session lock not released after crash/SIGKILL — blocks all subsequent runs
- #70026 BUG: Supervisor sends SIGKILL instead of SIGTERM for long-running agents — causes session lock cascade
- #70094 fix(agents): send SIGTERM instead of SIGKILL to allow lock cleanup (#70026)

Open candidates:

- #49603 Orphaned lock files not cleared on gateway restart when PID matches current process
