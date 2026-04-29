---
repo: openclaw/openclaw
cluster_id: gitcrawl-1915-dedupe-only-20260429-remote
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
  - "#51536"
candidates:
  - "#45270"
  - "#46895"
  - "#47069"
  - "#47083"
  - "#51270"
  - "#51536"
  - "#55645"
  - "#61024"
  - "#65381"
  - "#66485"
cluster_refs:
  - "#38709"
  - "#39773"
  - "#44045"
  - "#45270"
  - "#45282"
  - "#45335"
  - "#45913"
  - "#46620"
  - "#46766"
  - "#46895"
  - "#47069"
  - "#47083"
  - "#47379"
  - "#48144"
  - "#48268"
  - "#48827"
  - "#49113"
  - "#49917"
  - "#51270"
  - "#51536"
  - "#52329"
  - "#55645"
  - "#56936"
  - "#60649"
  - "#61024"
  - "#63238"
  - "#65381"
  - "#66485"
  - "#68557"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51536 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1915 on 2026-04-29."
---

# Gitcrawl Cluster 1915

Generated from local gitcrawl run cluster 1915 for `openclaw/openclaw`.

Display title:

> fix(webchat): use totalTokens for context utilization display

Cluster shape from gitcrawl:

- total members: 29
- issues: 0
- pull requests: 29
- open candidates in local store: 10
- representative: #51536, currently open in local store
- latest member update: 2026-04-28T22:51:07.248172521Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38709 fix(ui): harden webchat input history behavior
- #39773 fix(session): correct totalTokensFresh flag for fallback path
- #44045 fix: hide stale session context usage in status
- #45282 fix(ui): add context-notice component and refresh token stats after every chat turn, solve #45230, #45034, #45192, #45794
- #45335 fix(control-ui): use fresh totals for context usage notice
- #45913 fix(control-ui): use actual context size instead of cumulative input …
- #46620 fix(ui): use totalTokens instead of inputTokens for context notice banner
- #46766 fix(ui): Chat UI shows correct token count instead of inflated cumulative value
- #47379 fix(status): show configured fallback models in /status output
- #48144 fix(ui): show current context tokens instead of cumulative in Control UI
- #48268 fix(ui): use current context usage in chat notice
- #48827 fix: include cached tokens in context window % calculation
- #49113 fix stale Control UI context warning math
- #49917 fix(ui): context % uses full token footprint instead of uncached input only
- #52329 fix(agents): include cache tokens in /status cost estimate
- #56936 tui: improve /sessions search coverage for named sessions
- #60649 fix: Control UI context % shows 100% when actual is ~56%
- #63238 fix: treat empty status model overrides as unset
- #68557 fix(ui): include cache tokens in ctx% badge and cache-hit-rate

Open candidates:

- #45270 fix(status): avoid misleading context usage when totalTokensFresh=false
- #46895 fix(slash): handle /model status locally[AI-assisted]#46894
- #47069 fix(ui): treat /model status|list|info as info queries, not model names
- #47083 fix: respect totalTokensFresh flag to avoid showing stale token counts
- #51270 fix(tui): handle /model list and /model status as commands
- #51536 fix(webchat): use totalTokens for context utilization display
- #55645 fix(status): clarify configured vs fallback active model
- #61024 fix: show 0% instead of 100% when session has no tokens
- #65381 fix(status): include cache tokens in cost estimate
- #66485 Align context usage display, refresh chat after compaction
