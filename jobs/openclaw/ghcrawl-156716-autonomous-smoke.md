---
repo: openclaw/openclaw
cluster_id: ghcrawl-156716-autonomous-smoke
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
  - "#44518"
candidates:
  - "#44518"
  - "#47222"
  - "#57971"
  - "#66735"
cluster_refs:
  - "#44518"
  - "#47222"
  - "#57971"
  - "#66735"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #44518 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156716 on 2026-04-26."
---

# GHCrawl Cluster 156716

Generated from local ghcrawl run cluster 156716 for `openclaw/openclaw`.

Display title:

> fix(daemon): trigger SIGUSR1 in-process restart when scheduling launchd handoff

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #44518, currently open in local store
- latest member update: 2026-04-25T07:30:11.487Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44518 fix(daemon): trigger SIGUSR1 in-process restart when scheduling launchd handoff
- #47222 fix(gateway): prevent spurious SIGTERM shutdown on CLI disconnect under systemd
- #57971 fix(macOS): write gateway LaunchAgent plist with 0600
- #66735 fix(daemon): hand off systemd self-restarts
