---
repo: openclaw/openclaw
cluster_id: ghcrawl-156739-autonomous-smoke
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
  - "#62308"
candidates:
  - "#58061"
  - "#58070"
  - "#62308"
  - "#66992"
cluster_refs:
  - "#58061"
  - "#58070"
  - "#62308"
  - "#66992"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #62308 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156739 on 2026-04-26."
---

# GHCrawl Cluster 156739

Generated from local ghcrawl run cluster 156739 for `openclaw/openclaw`.

Display title:

> fix(launchd): set ProcessType=Interactive to prevent macOS App Nap

Cluster shape from ghcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- representative: #62308, currently open in local store
- latest member update: 2026-04-24T18:56:25.351Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58061 launchd gateway startup is delayed for minutes unless plist sets ProcessType=Interactive
- #58070 daemon: set macOS LaunchAgent ProcessType and WorkingDirectory
- #62308 fix(launchd): set ProcessType=Interactive to prevent macOS App Nap
- #66992 macOS: gateway plist should set ProcessType: Interactive to prevent App Nap timer stalls
