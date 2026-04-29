---
repo: openclaw/openclaw
cluster_id: gitcrawl-2727-dedupe-only-20260429-remote
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
  - "#40571"
candidates:
  - "#42245"
  - "#43808"
  - "#49704"
  - "#58893"
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
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40571 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2727 on 2026-04-29."
---

# Gitcrawl Cluster 2727

Generated from local gitcrawl run cluster 2727 for `openclaw/openclaw`.

Display title:

> fix(cron): auto-fill agentId from session when not explicitly provided

Cluster shape from gitcrawl:

- total members: 11
- issues: 0
- pull requests: 11
- open candidates in local store: 4
- representative: #40571, currently closed in local store
- latest member update: 2026-04-28T21:55:43.579103072Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40571 fix(cron): auto-fill agentId from session when not explicitly provided
- #44325 Cron: preserve Telegram DM topic delivery inference
- #44351 fix(cron): preserve telegram direct-thread context in inferred delivery targets
- #44412 fix(cron): harden telegram direct-thread delivery inference
- #54307 fix(cron): infer agentId from workspace when adding jobs
- #59069 Normalize telegram topic targets in delivery resolution
- #64708 fix: preserve Telegram topic thread IDs for cron delivery

Open candidates:

- #42245 fix(cron): warn when --agent is not specified on cron add
- #43808 cron: honor delivery.threadId for Telegram announce delivery
- #49704 fix(cron): announce delivery for Telegram forum topics
- #58893 [codex] fix chat reminder cron delivery
