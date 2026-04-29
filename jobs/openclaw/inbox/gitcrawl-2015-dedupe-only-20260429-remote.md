---
repo: openclaw/openclaw
cluster_id: gitcrawl-2015-dedupe-only-20260429-remote
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
  - "#53547"
candidates:
  - "#29387"
  - "#38622"
  - "#40210"
cluster_refs:
  - "#29387"
  - "#38622"
  - "#40210"
  - "#43528"
  - "#53547"
  - "#64173"
  - "#69994"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53547 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2015 on 2026-04-29."
---

# Gitcrawl Cluster 2015

Generated from local gitcrawl run cluster 2015 for `openclaw/openclaw`.

Display title:

> [Bug]: [Bug] Bootstrap files (SOUL.md, AGENTS.md, etc.) not loaded from workspace in 2026.3.23-2

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 3
- representative: #53547, currently closed in local store
- latest member update: 2026-04-28T22:51:06.962211682Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43528 New session startup duplicates workspace context via Project Context injection + Session Startup reads
- #53547 [Bug]: [Bug] Bootstrap files (SOUL.md, AGENTS.md, etc.) not loaded from workspace in 2026.3.23-2
- #64173 [Bug]: Workspace bootstrap files not loaded on /new session start
- #69994 [Bug]: Bootstrap order after upgrade to 2026.04.21

Open candidates:

- #29387 [Bug]: Bootstrap files in agentDir are silently ignored — only workspace directory files are injected into system prompt
- #38622 Workspace file injector does not follow symlinks
- #40210 [Bug]: Workspace bootstrap files reported as [MISSING] when they are symlinks pointing outside workspace
