---
repo: openclaw/openclaw
cluster_id: ghcrawl-156620-autonomous-smoke
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
  - "#56671"
candidates:
  - "#38295"
  - "#40427"
  - "#56468"
  - "#56671"
  - "#57979"
  - "#59520"
  - "#61105"
cluster_refs:
  - "#38295"
  - "#40427"
  - "#56468"
  - "#56671"
  - "#57979"
  - "#59520"
  - "#61105"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #56671 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156620 on 2026-04-26."
---

# GHCrawl Cluster 156620

Generated from local ghcrawl run cluster 156620 for `openclaw/openclaw`.

Display title:

> fix(config): deduplicate clobbered config snapshots in-process

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #56671, currently open in local store
- latest member update: 2026-04-25T07:30:10.222Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38295 fix(config): dedupe warning spam and slow restart storms
- #40427 Config: dedupe config warning logs
- #56468 fix: prevent duplicate clobbered config backup files during doctor --fix
- #56671 fix(config): deduplicate clobbered config snapshots in-process
- #57979 fix(config): deduplicate config warning logs to prevent spam
- #59520 fix(logging): typo, newline escape sequence in logger warning
- #61105 fix(config): apply tools.exec.pathPrepend to process.env.PATH at startup
