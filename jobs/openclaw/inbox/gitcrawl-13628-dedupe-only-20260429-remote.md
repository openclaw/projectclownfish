---
repo: openclaw/openclaw
cluster_id: gitcrawl-13628-dedupe-only-20260429-remote
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
  - "#66198"
candidates:
  - "#64720"
  - "#66196"
  - "#66197"
  - "#66198"
  - "#66199"
  - "#66200"
  - "#66521"
cluster_refs:
  - "#26700"
  - "#64720"
  - "#66196"
  - "#66197"
  - "#66198"
  - "#66199"
  - "#66200"
  - "#66521"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66198 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13628 on 2026-04-29."
---

# Gitcrawl Cluster 13628

Generated from local gitcrawl run cluster 13628 for `openclaw/openclaw`.

Display title:

> security: wrap Signal inbound DM body via wrapExternalContent

Cluster shape from gitcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 7
- representative: #66198, currently open in local store
- latest member update: 2026-04-28T07:04:52.154768009Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #26700 fix(security): strip leaked external untrusted-content wrappers from user-facing replies

Open candidates:

- #64720 fix(security): apply external content protection to channel message bodies
- #66196 security: wrap WhatsApp inbound DM body via wrapExternalContent
- #66197 security: wrap Telegram inbound DM body via wrapExternalContent
- #66198 security: wrap Signal inbound DM body via wrapExternalContent
- #66199 security: wrap iMessage inbound DM body via wrapExternalContent
- #66200 security: wrap BlueBubbles inbound DM body via wrapExternalContent
- #66521 fix(signal): send early typing indicator before dispatch
