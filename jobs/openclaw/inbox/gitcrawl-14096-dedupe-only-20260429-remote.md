---
repo: openclaw/openclaw
cluster_id: gitcrawl-14096-dedupe-only-20260429-remote
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
  - "#62848"
candidates:
  - "#56352"
  - "#62851"
cluster_refs:
  - "#56352"
  - "#62847"
  - "#62848"
  - "#62851"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62848 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14096 on 2026-04-29."
---

# Gitcrawl Cluster 14096

Generated from local gitcrawl run cluster 14096 for `openclaw/openclaw`.

Display title:

> [Bug] Main lane failover is too slow for provider transport failures, allowing TUI/Telegram degradation before fallback

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 2
- representative: #62848, currently closed in local store
- latest member update: 2026-04-28T07:59:25.599937781Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #62847 [Bug] Main session can brick on arcee/trinity-large-thinking: repeated connection errors, TUI spam, Telegram nonresponsive until delayed fallback
- #62848 [Bug] Main lane failover is too slow for provider transport failures, allowing TUI/Telegram degradation before fallback

Open candidates:

- #56352 [Bug]: Lane remains occupied after reply emitted during failover — blocks subsequent inbound messages
- #62851 [Bug] arcee/trinity-large-thinking works as subagent but fails as main session, suggesting lane/path mismatch
