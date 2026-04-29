---
repo: openclaw/openclaw
cluster_id: gitcrawl-6317-dedupe-only-20260429-remote
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
  - "#46601"
candidates:
  - "#46593"
cluster_refs:
  - "#46588"
  - "#46593"
  - "#46601"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46601 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 6317 on 2026-04-29."
---

# Gitcrawl Cluster 6317

Generated from local gitcrawl run cluster 6317 for `openclaw/openclaw`.

Display title:

> Support real multimodal audio attachment for Gemini CLI in headless @file flows

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- representative: #46601, currently closed in local store
- latest member update: 2026-04-28T07:59:25.764824662Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46588 Telegram audio transcription via Gemini CLI headless is unreliable: @audio paths may trigger invalid run_shell_command fallback
- #46601 Support real multimodal audio attachment for Gemini CLI in headless @file flows

Open candidates:

- #46593 fix: skip Gemini CLI audio autodetect in headless flows
