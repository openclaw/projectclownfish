---
repo: openclaw/openclaw
cluster_id: gitcrawl-2880-dedupe-only-20260429-remote
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
  - "#44539"
candidates:
  - "#44354"
  - "#46494"
  - "#59287"
  - "#62763"
cluster_refs:
  - "#35560"
  - "#44354"
  - "#44539"
  - "#44546"
  - "#46494"
  - "#46772"
  - "#55482"
  - "#59287"
  - "#62763"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44539 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2880 on 2026-04-29."
---

# Gitcrawl Cluster 2880

Generated from local gitcrawl run cluster 2880 for `openclaw/openclaw`.

Display title:

> openclaw doctor reports 'Telegram: not configured' despite Telegram channel working correctly

Cluster shape from gitcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 4
- representative: #44539, currently closed in local store
- latest member update: 2026-04-28T22:51:07.306545726Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #35560 Doctor injects orphan top-level keys into multi-account telegram config on every CLI command
- #44539 openclaw doctor reports 'Telegram: not configured' despite Telegram channel working correctly
- #44546 openclaw doctor reports 'LINE channel access token not configured' despite LINE channel working correctly
- #46772 Doctor fabricates phantom accounts.default in multi-account Telegram config even with no top-level fields
- #55482 Telegram health endpoint shows running:false while bot is functional

Open candidates:

- #44354 Bug: openclaw health --json reports stale Discord state
- #46494 [Bug]: `openclaw health --json` reports Telegram `running: false` / `tokenSource: "none"` while `channels status --json` reports `running: true` / `tokenSource: "config"`
- #59287 [Bug]: openclaw health --json reports telegram.running=false while probe succeeds and status --deep shows Telegram OK
- #62763 openclaw doctor --fix corrupts signal multi-account config by inventing a phantom accounts.default block
