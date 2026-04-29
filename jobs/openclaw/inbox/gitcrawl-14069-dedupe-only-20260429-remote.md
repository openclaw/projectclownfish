---
repo: openclaw/openclaw
cluster_id: gitcrawl-14069-dedupe-only-20260429-remote
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
  - "#49337"
candidates:
  - "#48512"
  - "#49996"
cluster_refs:
  - "#48512"
  - "#49337"
  - "#49996"
  - "#51915"
  - "#53064"
  - "#70742"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49337 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14069 on 2026-04-29."
---

# Gitcrawl Cluster 14069

Generated from local gitcrawl run cluster 14069 for `openclaw/openclaw`.

Display title:

> fix(telegram): preserve literal <think> mentions in final response text

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 2
- representative: #49337, currently closed in local store
- latest member update: 2026-04-28T15:00:43.17284841Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49337 fix(telegram): preserve literal <think> mentions in final response text
- #51915 fix(text): recover content after unclosed reasoning tag in strict mode
- #53064 fix(telegram): handle thinking-only empty replies
- #70742 fix(pi-embedded-runner): make idle-timeout cleanup return before flushing pending tool results

Open candidates:

- #48512 fix(pi-embedded-runner): wire pending tool calls hint into idle flush guard
- #49996 fix(telegram): recover answer text after unclosed reasoning tag in strict strip mode
