---
repo: openclaw/openclaw
cluster_id: gitcrawl-1921-dedupe-only-20260429-remote
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
  - "#64663"
candidates:
  - "#29736"
  - "#38650"
  - "#40230"
  - "#51277"
  - "#52522"
  - "#62917"
  - "#62938"
  - "#64472"
  - "#64473"
  - "#65736"
cluster_refs:
  - "#29736"
  - "#38650"
  - "#40230"
  - "#44512"
  - "#51277"
  - "#52522"
  - "#62917"
  - "#62938"
  - "#64472"
  - "#64473"
  - "#64663"
  - "#65736"
  - "#66404"
  - "#68417"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64663 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1921 on 2026-04-29."
---

# Gitcrawl Cluster 1921

Generated from local gitcrawl run cluster 1921 for `openclaw/openclaw`.

Display title:

> fix: allow symlinked OPENCLAW_HOME in exec approvals path check

Cluster shape from gitcrawl:

- total members: 14
- issues: 3
- pull requests: 11
- open candidates in local store: 10
- representative: #64663, currently closed in local store
- latest member update: 2026-04-28T22:51:07.237816608Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44512 Fix workspace symlink escapes in agents.files.get
- #64663 fix: allow symlinked OPENCLAW_HOME in exec approvals path check
- #66404 fix(exec-approvals): honor OPENCLAW_STATE_DIR for default host paths
- #68417 fix(exec-approvals): allow ~/.openclaw symlink when OPENCLAW_STATE_DIR is set

Open candidates:

- #29736 Exec approvals path ignores active state root and writes to ~/.openclaw
- #38650 fix: allow symlinks in workspace files
- #40230 fix(agents): follow symlinks when loading workspace bootstrap files
- #51277 fix: allow symlinks to openclaw root sibling dirs
- #52522 fix: widen symlink boundary for multi-agent workspace bootstrap files
- #62917 fix: exec-approvals does not respect OPENCLAW_STATE_DIR, causing duplicate state-dir doctor warning
- #62938 fix(exec-approvals): respect OPENCLAW_STATE_DIR for store paths
- #64472 Workspace symlinks to ~/.openclaw subdirectories are rejected by boundary path check
- #64473 fix: allow symlinks within ~/.openclaw directory in boundary path checks
- #65736 fix(exec): respect OPENCLAW_STATE_DIR for exec approvals
