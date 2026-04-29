---
repo: openclaw/openclaw
cluster_id: gitcrawl-14501-dedupe-only-20260429-remote
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
  - "#42009"
candidates:
  - "#35241"
  - "#42009"
  - "#60621"
cluster_refs:
  - "#35241"
  - "#42009"
  - "#56453"
  - "#60621"
  - "#64108"
  - "#69108"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42009 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14501 on 2026-04-29."
---

# Gitcrawl Cluster 14501

Generated from local gitcrawl run cluster 14501 for `openclaw/openclaw`.

Display title:

> fix: honor --to when agent is specified

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 3
- representative: #42009, currently open in local store
- latest member update: 2026-04-28T22:51:06.948588144Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #56453 fix(agent): respect configured default agent for --to sessions
- #64108 Fix #63992: resolveSessionKey hardcodes DEFAULT_AGENT_ID instead of using configured default agent
- #69108 fix(agent): honor --session-id when --agent is present + add --new-session flag

Open candidates:

- #35241 CLI: add --session-key flag to openclaw agent
- #42009 fix: honor --to when agent is specified
- #60621 fix: allow --session-id to override --agent in agent command (fixes #60614)
