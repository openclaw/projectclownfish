---
repo: openclaw/openclaw
cluster_id: gitcrawl-14047-dedupe-only-20260429-remote
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
  - "#65997"
candidates:
  - "#64732"
  - "#65319"
cluster_refs:
  - "#59448"
  - "#59455"
  - "#59575"
  - "#63501"
  - "#63907"
  - "#64729"
  - "#64732"
  - "#65319"
  - "#65997"
  - "#67901"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65997 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14047 on 2026-04-29."
---

# Gitcrawl Cluster 14047

Generated from local gitcrawl run cluster 14047 for `openclaw/openclaw`.

Display title:

> plugin allowlist validation conflicts with CLI gating for help / plugin in OpenClaw 2026.4.12

Cluster shape from gitcrawl:

- total members: 10
- issues: 9
- pull requests: 1
- open candidates in local store: 2
- representative: #65997, currently closed in local store
- latest member update: 2026-04-28T05:49:57.773725942Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #59448 [Bug]: Stale plugin config entry emits noisy warning on every CLI invocation with no way to clean it up
- #59455 [Feature]: Add CLI command to remove stale plugin config entries (currently requires manual JSON editing)
- #59575 feat(plugins): add `plugins clean` command to remove stale plugin config refs
- #63501 Bundled CLI command 'dreaming' blocked by plugins.allow validation conflict
- #63907 openclaw run fails when plugins.allow is configured without 'run' entry
- #64729 openclaw crons list — misleading error when stale plugin ID is in plugins.allow
- #65997 plugin allowlist validation conflicts with CLI gating for help / plugin in OpenClaw 2026.4.12
- #67901 plugins.allow prevents bundled "subagents" CLI command from running

Open candidates:

- #64732 [Bug]: openclaw tool/help CLI surfaces break when plugins.allow omits synthetic command ids
- #65319 Bug: contradictory plugins.allow guidance for /lossless command on 2026.4.11
