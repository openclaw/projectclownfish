---
repo: openclaw/openclaw
cluster_id: gitcrawl-2462-dedupe-only-20260429-remote
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
  - "#57374"
candidates:
  - "#48472"
  - "#50662"
  - "#63061"
  - "#66000"
cluster_refs:
  - "#47594"
  - "#48472"
  - "#50662"
  - "#52829"
  - "#57374"
  - "#59439"
  - "#59495"
  - "#63061"
  - "#66000"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57374 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2462 on 2026-04-29."
---

# Gitcrawl Cluster 2462

Generated from local gitcrawl run cluster 2462 for `openclaw/openclaw`.

Display title:

> fix(gateway): use configured probe auth during restart health checks

Cluster shape from gitcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 4
- representative: #57374, currently closed in local store
- latest member update: 2026-04-28T22:51:07.234305878Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #47594 fix: respect OPENCLAW_PROFILE in gateway lifecycle commands
- #52829 fix: restart gateway after token change to fix CLI connection failure (#52749)
- #57374 fix(gateway): use configured probe auth during restart health checks
- #59439 Use daemon auth for unmanaged restart probes
- #59495 fix: ensure CLI service operations respect --profile on macOS

Open candidates:

- #48472 (fix) gateway restart health timeout
- #50662 [codex] Fix restart probe auth and rate-limit fallback rotation
- #63061 CLI: align profile state dir with OPENCLAW_HOME
- #66000 fix(cli): clear conflicting OPENCLAW_LAUNCHD_LABEL when --profile is provided
