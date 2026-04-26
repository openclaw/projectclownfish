---
repo: openclaw/openclaw
cluster_id: ghcrawl-165998-agentic-merge
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
  - "#40571"
candidates:
  - "#40571"
  - "#42245"
  - "#43808"
  - "#44325"
  - "#44351"
  - "#44412"
  - "#49704"
  - "#54307"
  - "#58893"
  - "#59069"
  - "#64708"
cluster_refs:
  - "#40571"
  - "#42245"
  - "#43808"
  - "#44325"
  - "#44351"
  - "#44412"
  - "#49704"
  - "#54307"
  - "#58893"
  - "#59069"
  - "#64708"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #40571 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165998 on 2026-04-26."
---

# GHCrawl Cluster 165998

Generated from local ghcrawl run cluster 165998 for `openclaw/openclaw`.

Display title:

> fix(cron): auto-fill agentId from session when not explicitly provided

Cluster shape from ghcrawl:

- total members: 11
- issues: 0
- pull requests: 11
- open candidates in local store: 11
- representative: #40571, currently open in local store
- latest member update: 2026-04-25T07:30:10.171Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40571 fix(cron): auto-fill agentId from session when not explicitly provided
- #42245 fix(cron): warn when --agent is not specified on cron add
- #43808 cron: honor delivery.threadId for Telegram announce delivery
- #44325 Cron: preserve Telegram DM topic delivery inference
- #44351 fix(cron): preserve telegram direct-thread context in inferred delivery targets
- #44412 fix(cron): harden telegram direct-thread delivery inference
- #49704 fix(cron): announce delivery for Telegram forum topics
- #54307 fix(cron): infer agentId from workspace when adding jobs
- #58893 [codex] fix chat reminder cron delivery
- #59069 Normalize telegram topic targets in delivery resolution
- #64708 fix: preserve Telegram topic thread IDs for cron delivery
