---
repo: openclaw/openclaw
cluster_id: gitcrawl-238900-dedupe-only-20260429c
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
  - "#49305"
candidates:
  - "#49305"
  - "#58408"
  - "#70856"
cluster_refs:
  - "#49305"
  - "#58408"
  - "#70856"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49305 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238900 on 2026-04-29."
---

# Gitcrawl Cluster 238900

Generated from local gitcrawl run cluster 238900 for `openclaw/openclaw`.

Display title:

> WhatsApp Web listener does not survive session logout - gateway breaks permanently until manual restart

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #49305, currently open in local store
- latest member update: 2026-04-28T10:53:12.305Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49305 WhatsApp Web listener does not survive session logout - gateway breaks permanently until manual restart
- #58408 [Bug]: WhatsApp Inbound Works But Outbound CLI Fails With "No Active Listener"
- #70856 [Bug]: WhatsApp listener repeatedly disconnects/stalls on Windows, causing "No active WhatsApp Web listener" and missed messages
