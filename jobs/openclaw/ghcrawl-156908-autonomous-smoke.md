---
repo: openclaw/openclaw
cluster_id: ghcrawl-156908-autonomous-smoke
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
  - "#62847"
candidates:
  - "#62847"
  - "#62848"
  - "#62851"
cluster_refs:
  - "#62847"
  - "#62848"
  - "#62851"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #62847 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156908 on 2026-04-26."
---

# GHCrawl Cluster 156908

Generated from local ghcrawl run cluster 156908 for `openclaw/openclaw`.

Display title:

> [Bug] Main session can brick on arcee/trinity-large-thinking: repeated connection errors, TUI spam, Telegram nonresponsive until delayed fallback

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #62847, currently open in local store
- latest member update: 2026-04-24T18:56:23.027Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62847 [Bug] Main session can brick on arcee/trinity-large-thinking: repeated connection errors, TUI spam, Telegram nonresponsive until delayed fallback
- #62848 [Bug] Main lane failover is too slow for provider transport failures, allowing TUI/Telegram degradation before fallback
- #62851 [Bug] arcee/trinity-large-thinking works as subagent but fails as main session, suggesting lane/path mismatch
