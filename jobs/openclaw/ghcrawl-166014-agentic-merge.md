---
repo: openclaw/openclaw
cluster_id: ghcrawl-166014-agentic-merge
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
  - "#54155"
candidates:
  - "#45718"
  - "#51977"
  - "#54155"
  - "#55334"
  - "#57699"
  - "#62717"
  - "#66886"
  - "#69977"
  - "#70717"
cluster_refs:
  - "#45718"
  - "#51977"
  - "#54155"
  - "#55334"
  - "#57699"
  - "#62717"
  - "#66886"
  - "#69977"
  - "#70717"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #54155 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166014 on 2026-04-26."
---

# GHCrawl Cluster 166014

Generated from local ghcrawl run cluster 166014 for `openclaw/openclaw`.

Display title:

> Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation

Cluster shape from ghcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #54155, currently open in local store
- latest member update: 2026-04-24T18:56:30.318Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45718 Session bloat: skillsSnapshot and systemPromptReport accumulated on every run
- #51977 [Bug]: skillsSnapshot.prompt retention/duplication causes gateway heap growth, OOMs, and hangs
- #54155 Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation
- #55334 [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions
- #57699 Memory leak and excessive memory growth in long-running Gateway process
- #62717 v2026.4.2 gateway memory leak: RSS grows to 3-4GB within 1-2 hours, silent OOM crash
- #66886 Memory leak: gateway process persistent memory growth / 메모리 누수: gateway 프로세스의 지속적 메모리 증가
- #69977 Gateway RSS grows to 900MB+ rapidly on macOS MacBook Air after fresh restart
- #70717 Gateway RSS regression on 2026.4.15 — fresh cold-start baseline 700MB+ on macOS ARM64, steady climb regardless of workload
