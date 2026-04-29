---
repo: openclaw/openclaw
cluster_id: gitcrawl-2088-dedupe-only-20260429-remote
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
  - "#31583"
candidates:
  - "#31583"
  - "#61095"
cluster_refs:
  - "#31583"
  - "#40179"
  - "#43078"
  - "#61095"
  - "#62370"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #31583 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2088 on 2026-04-29."
---

# Gitcrawl Cluster 2088

Generated from local gitcrawl run cluster 2088 for `openclaw/openclaw`.

Display title:

> [Bug]: `exec` tool does not inherit `skills.entries.*.env` environment variables

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 2
- representative: #31583, currently open in local store
- latest member update: 2026-04-28T18:04:42.455897611Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40179 [Bug]: exec tool does not inherit gateway's environment variables (launchd)
- #43078 Skill env vars (skills.entries.<skill>.env) not injected into exec child processes
- #62370 Skill 环境变量未注入到 exec 子进程

Open candidates:

- #31583 [Bug]: `exec` tool does not inherit `skills.entries.*.env` environment variables
- #61095 [Bug]: Agent exec tool inherits Gateway internal env vars, causing CLI commands to fail
