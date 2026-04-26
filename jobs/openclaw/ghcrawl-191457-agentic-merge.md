---
repo: openclaw/openclaw
cluster_id: ghcrawl-191457-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#64663"
candidates:
  - "#38650"
  - "#38981"
  - "#40230"
  - "#51277"
  - "#52522"
  - "#62938"
  - "#64473"
  - "#64663"
  - "#65736"
  - "#68417"
cluster_refs:
  - "#38650"
  - "#38981"
  - "#40230"
  - "#51277"
  - "#52522"
  - "#62938"
  - "#64473"
  - "#64663"
  - "#65736"
  - "#68417"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #64663 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 191457 on 2026-04-26."
---

# GHCrawl Cluster 191457

Generated from local ghcrawl run cluster 191457 for `openclaw/openclaw`.

Display title:

> fix: allow symlinked OPENCLAW_HOME in exec approvals path check

Cluster shape from ghcrawl:

- total members: 10
- issues: 0
- pull requests: 10
- open candidates in local store: 10
- representative: #64663, currently open in local store
- latest member update: 2026-04-26T21:32:45.682Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38650 fix: allow symlinks in workspace files
- #38981 feat(agents): add workspaceConfig.allowedExternalPaths for trusted symlinked workspace files
- #40230 fix(agents): follow symlinks when loading workspace bootstrap files
- #51277 fix: allow symlinks to openclaw root sibling dirs
- #52522 fix: widen symlink boundary for multi-agent workspace bootstrap files
- #62938 fix(exec-approvals): respect OPENCLAW_STATE_DIR for store paths
- #64473 fix: allow symlinks within ~/.openclaw directory in boundary path checks
- #64663 fix: allow symlinked OPENCLAW_HOME in exec approvals path check
- #65736 fix(exec): respect OPENCLAW_STATE_DIR for exec approvals
- #68417 fix(exec-approvals): allow ~/.openclaw symlink when OPENCLAW_STATE_DIR is set
