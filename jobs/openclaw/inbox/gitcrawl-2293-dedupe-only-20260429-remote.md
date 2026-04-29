---
repo: openclaw/openclaw
cluster_id: gitcrawl-2293-dedupe-only-20260429-remote
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
  - "#68240"
candidates:
  - "#68240"
cluster_refs:
  - "#67565"
  - "#68240"
  - "#68297"
  - "#68301"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68240 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2293 on 2026-04-29."
---

# Gitcrawl Cluster 2293

Generated from local gitcrawl run cluster 2293 for `openclaw/openclaw`.

Display title:

> feat(onboard): add --daemon-env flag to openclaw onboard --install-daemon

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 1
- representative: #68240, currently open in local store
- latest member update: 2026-04-27T22:51:37.524886053Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #67565 [Feature]: Add --daemon-env flag to openclaw onboard --install-daemon
- #68297 [Feature]: Add --daemon-env flag to openclaw node install
- #68301 feat(node): add --daemon-env flag to openclaw node install

Open candidates:

- #68240 feat(onboard): add --daemon-env flag to openclaw onboard --install-daemon
