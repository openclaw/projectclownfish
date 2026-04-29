---
repo: openclaw/openclaw
cluster_id: gitcrawl-2101-dedupe-only-20260429-remote
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
  - "#50118"
candidates:
  - "#43803"
  - "#46405"
  - "#54803"
  - "#55458"
  - "#59745"
  - "#68257"
  - "#68258"
cluster_refs:
  - "#40951"
  - "#41270"
  - "#43803"
  - "#44560"
  - "#46310"
  - "#46397"
  - "#46405"
  - "#47218"
  - "#48626"
  - "#50118"
  - "#54803"
  - "#55458"
  - "#59745"
  - "#64204"
  - "#68257"
  - "#68258"
  - "#71208"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50118 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2101 on 2026-04-29."
---

# Gitcrawl Cluster 2101

Generated from local gitcrawl run cluster 2101 for `openclaw/openclaw`.

Display title:

> Gateway: refresh fallback context on hot reload

Cluster shape from gitcrawl:

- total members: 17
- issues: 6
- pull requests: 11
- open candidates in local store: 7
- representative: #50118, currently closed in local store
- latest member update: 2026-04-28T18:04:42.574037142Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40951 Gateway: refresh plugin fallback context after hot reload
- #41270 Config mutation commands have inconsistent restart semantics (config.set vs config.patch)
- #44560 fix(gateway): sync fallback context on hot reload
- #46310 config.patch unconditionally schedules SIGUSR1 restart, ignoring hot-reload capability
- #46397 fix(gateway): skip config.patch restart for hot-reloadable changes
- #47218 fix: CONTRIBUTING Discord link + update fallback gateway context on h…
- #48626 fix(gateway): allow query strings on /health endpoint
- #50118 Gateway: refresh fallback context on hot reload
- #64204 [Bug]: browser.* config reload rule triggers unnecessary full gateway restart for profile-only changes
- #71208 [Bug]: config.patch triggers gateway restart when openclaw.json contains ${VAR} env-refs on gateway.* or plugins.* paths

Open candidates:

- #43803 [BUG] config.patch still sends SIGUSR1 for hot-reloadable paths (browser.profiles.*), bypassing reload mode
- #46405 fix(agents): MiniMax M2.5 XML tool calls + fix(gateway): config.patch hot-reload (#46401, #46397)
- #54803 /status: show usage fetch errors instead of silently hiding
- #55458 Status: surface memory probe errors instead of hiding them
- #59745 gateway: fall back to restart in hot reload mode
- #68257 fix(gateway): stop restarting gateway on OAuth token refresh (auth.profiles.*) [AI-assisted]
- #68258 [Bug]: Gateway self-SIGTERMs on OAuth token refresh (auth.profiles.* unmatched in reload plan)
