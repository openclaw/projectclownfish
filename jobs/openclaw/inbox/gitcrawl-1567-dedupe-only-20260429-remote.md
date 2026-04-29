---
repo: openclaw/openclaw
cluster_id: gitcrawl-1567-dedupe-only-20260429-remote
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
  - "#64650"
candidates:
  - "#6457"
  - "#49980"
  - "#56741"
  - "#64609"
cluster_refs:
  - "#6457"
  - "#49980"
  - "#56741"
  - "#64609"
  - "#64650"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #64650 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1567 on 2026-04-29."
---

# Gitcrawl Cluster 1567

Generated from local gitcrawl run cluster 1567 for `openclaw/openclaw`.

Display title:

> fix(telegram): honor channel-level topic prompts in multi-account mode

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 4
- representative: #64650, currently closed in local store
- latest member update: 2026-04-28T22:51:07.009511061Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #64650 fix(telegram): honor channel-level topic prompts in multi-account mode

Open candidates:

- #6457 fix(telegram): register commands for group scope + preserve topic thread params
- #49980 fix(telegram): prioritize topic-level requireMention over activation override
- #56741 fix(telegram): respect topic-level groupPolicy overrides for /commands in forum topics (fixes #56699)
- #64609 Telegram multi-account: group/topic systemPrompt silently ignored due to inconsistent config resolution
