---
repo: openclaw/openclaw
cluster_id: gitcrawl-9101-dedupe-only-20260429-remote
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
  - "#55978"
candidates:
  - "#39060"
  - "#45114"
  - "#47245"
  - "#47582"
  - "#50980"
  - "#53916"
  - "#55978"
  - "#60031"
  - "#66658"
cluster_refs:
  - "#37670"
  - "#39060"
  - "#41509"
  - "#41638"
  - "#45114"
  - "#45536"
  - "#47245"
  - "#47582"
  - "#48953"
  - "#50980"
  - "#51464"
  - "#53437"
  - "#53916"
  - "#55978"
  - "#60031"
  - "#62228"
  - "#66658"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55978 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 9101 on 2026-04-29."
---

# Gitcrawl Cluster 9101

Generated from local gitcrawl run cluster 9101 for `openclaw/openclaw`.

Display title:

> ui: fix cron workspace form sticky offset using CSS variable

Cluster shape from gitcrawl:

- total members: 17
- issues: 0
- pull requests: 17
- open candidates in local store: 9
- representative: #55978, currently open in local store
- latest member update: 2026-04-28T22:51:07.333750402Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37670 fix(control-ui): avoid cron jobs/new job panel overlap on medium widths
- #41509 fix(ui): align chat composer buttons with message input
- #41638 fix(ui): allow cronjob edit form to scroll independently on narrow screens
- #45536 fix: remove unknown line-clamp property to resolve CSS error
- #48953 Claude/openclaw control console y s ze f
- #51464 Add overflow and max-height to component styles
- #53437 fix(ui): prevent exec approval command overflow
- #62228 fix(exec-approval): add max-height and overflow to prevent button overflow on desktop

Open candidates:

- #39060 feat(agent-files): add word wrap toggle functionality and related styles
- #45114 ui(chat): remove unsupported line-clamp declaration
- #47245 fix(ui): distinguish command palette hover and selection states
- #47582 fix(ui-cron): keep new-job form in normal flow
- #50980 fix(ui): keep exec approval actions reachable
- #53916 fix: make log stream height responsive to viewport
- #55978 ui: fix cron workspace form sticky offset using CSS variable
- #60031 fix(ui): make exec approval command display scrollable
- #66658 fix(control-ui): keep exec approval modal within viewport
