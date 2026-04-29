---
repo: openclaw/openclaw
cluster_id: gitcrawl-8396-dedupe-only-20260429-remote
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
  - "#53621"
candidates:
  - "#51245"
  - "#51584"
  - "#53198"
  - "#53259"
  - "#53783"
  - "#59933"
cluster_refs:
  - "#51245"
  - "#51584"
  - "#53198"
  - "#53259"
  - "#53621"
  - "#53783"
  - "#53804"
  - "#57509"
  - "#59933"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53621 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 8396 on 2026-04-29."
---

# Gitcrawl Cluster 8396

Generated from local gitcrawl run cluster 8396 for `openclaw/openclaw`.

Display title:

> Discord slash sessions fail elevated allowFrom resolution; sandbox explain reports channel as unknown

Cluster shape from gitcrawl:

- total members: 9
- issues: 6
- pull requests: 3
- open candidates in local store: 6
- representative: #53621, currently closed in local store
- latest member update: 2026-04-28T18:51:14.987929018Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #53621 Discord slash sessions fail elevated allowFrom resolution; sandbox explain reports channel as unknown
- #53804 fix(elevated): fall back to session key channel for Discord slash elevated resolution
- #57509 [Bug]: Telegram helper-agent slash:<user> session keys are incorrectly mapped to group:<group_id>:topic:1 sessions

Open candidates:

- #51245 [Bug]: Telegram slash sessions still resolve to channel=(unknown), causing elevated allowFrom checks to fail on 2026.3.13
- #51584 fix(sandbox): fall back to static channel registry for sandbox explain channel resolution
- #53198 [Bug]: Discord elevated allowFrom fallback from channels.discord.allowFrom does not work on 2026.3.22
- #53259 fix(elevated): restore Discord allowFrom fallback
- #53783 [Bug]: Telegram group: cross-agent sessions_list visibility mismatch causes one-way sessions_send failure
- #59933 [Bug]: sessions_list does not surface group sessions for the same agent
