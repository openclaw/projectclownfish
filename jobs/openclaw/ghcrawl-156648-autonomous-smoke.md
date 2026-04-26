---
repo: openclaw/openclaw
cluster_id: ghcrawl-156648-autonomous-smoke
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
  - "#54155"
candidates:
  - "#54155"
  - "#57699"
  - "#62717"
  - "#66886"
  - "#69977"
  - "#70717"
cluster_refs:
  - "#54155"
  - "#57699"
  - "#62717"
  - "#66886"
  - "#69977"
  - "#70717"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #54155 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156648 on 2026-04-26."
---

# GHCrawl Cluster 156648

Generated from local ghcrawl run cluster 156648 for `openclaw/openclaw`.

Display title:

> Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation

Cluster shape from ghcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #54155, currently open in local store
- latest member update: 2026-04-24T18:56:27.799Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54155 Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation
- #57699 Memory leak and excessive memory growth in long-running Gateway process
- #62717 v2026.4.2 gateway memory leak: RSS grows to 3-4GB within 1-2 hours, silent OOM crash
- #66886 Memory leak: gateway process persistent memory growth / 메모리 누수: gateway 프로세스의 지속적 메모리 증가
- #69977 Gateway RSS grows to 900MB+ rapidly on macOS MacBook Air after fresh restart
- #70717 Gateway RSS regression on 2026.4.15 — fresh cold-start baseline 700MB+ on macOS ARM64, steady climb regardless of workload
