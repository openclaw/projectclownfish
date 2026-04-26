---
repo: openclaw/openclaw
cluster_id: ghcrawl-156592-autonomous-smoke
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
  - "#62938"
candidates:
  - "#38650"
  - "#51277"
  - "#62938"
  - "#64472"
  - "#64473"
  - "#64663"
  - "#65736"
  - "#66404"
  - "#68417"
cluster_refs:
  - "#38650"
  - "#51277"
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
canonical_hint: "ghcrawl representative #62938 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156592 on 2026-04-26."
---

# GHCrawl Cluster 156592

Generated from local ghcrawl run cluster 156592 for `openclaw/openclaw`.

Display title:

> fix(exec-approvals): respect OPENCLAW_STATE_DIR for store paths

Cluster shape from ghcrawl:

- total members: 9
- issues: 1
- pull requests: 8
- open candidates in local store: 9
- representative: #62938, currently open in local store
- latest member update: 2026-04-24T18:56:22.186Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38650 fix: allow symlinks in workspace files
- #51277 fix: allow symlinks to openclaw root sibling dirs
- #62938 fix(exec-approvals): respect OPENCLAW_STATE_DIR for store paths
- #64472 Workspace symlinks to ~/.openclaw subdirectories are rejected by boundary path check
- #64473 fix: allow symlinks within ~/.openclaw directory in boundary path checks
- #64663 fix: allow symlinked OPENCLAW_HOME in exec approvals path check
- #65736 fix(exec): respect OPENCLAW_STATE_DIR for exec approvals
- #66404 fix(exec-approvals): honor OPENCLAW_STATE_DIR for default host paths
- #68417 fix(exec-approvals): allow ~/.openclaw symlink when OPENCLAW_STATE_DIR is set
