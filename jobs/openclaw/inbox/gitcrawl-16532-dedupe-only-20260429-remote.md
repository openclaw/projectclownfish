---
repo: openclaw/openclaw
cluster_id: gitcrawl-16532-dedupe-only-20260429-remote
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
  - "#47994"
candidates:
  - "#44523"
  - "#58317"
  - "#65330"
  - "#67591"
cluster_refs:
  - "#40091"
  - "#40362"
  - "#44377"
  - "#44523"
  - "#45866"
  - "#45877"
  - "#47994"
  - "#48521"
  - "#51348"
  - "#58317"
  - "#60463"
  - "#64518"
  - "#65330"
  - "#67591"
  - "#68202"
  - "#68764"
  - "#68798"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47994 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 16532 on 2026-04-29."
---

# Gitcrawl Cluster 16532

Generated from local gitcrawl run cluster 16532 for `openclaw/openclaw`.

Display title:

> fix(agent): prevent fallback model from permanently overwriting agent config

Cluster shape from gitcrawl:

- total members: 17
- issues: 0
- pull requests: 17
- open candidates in local store: 4
- representative: #47994, currently closed in local store
- latest member update: 2026-04-28T04:44:23.619927834Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40091 🤖 fix(session): clear model override on /new to restore agent default
- #40362 fix(session): preserve modelOverride for subagent first-run sessions
- #44377 fix(session): guard parent fork totalTokens lookup
- #45866 fix: clear modelOverride, providerOverride and fallback notice on /new
- #45877 fix: clear model/provider overrides on bare /new and /reset
- #47994 fix(agent): prevent fallback model from permanently overwriting agent config
- #48521 fix(session): close tracked browser tabs on idle/daily session reset
- #51348 fix: clear session model override when it matches config default
- #60463 fix: harden parent fork overflow guard
- #64518 fix: clear model/provider override on /new and /reset
- #68202 fix(session): only persist user-selected auth profile overrides across /new and /reset
- #68764 fix: ignore stale auto-fallback model overrides on session reload
- #68798 fix: prevent auto-fallback model from persisting into session state

Open candidates:

- #44523 fix(session): preserve model override across daily freshness resets
- #58317 session: clear model overrides on /reset and /new (#58302)
- #65330 fix(sessions): clear model override on /new and /reset
- #67591 fix(session): clear auto-fallback model overrides on /new and /reset
