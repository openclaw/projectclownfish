---
repo: openclaw/openclaw
cluster_id: gitcrawl-238822-dedupe-only-20260429c
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
  - "#57718"
candidates:
  - "#57718"
  - "#58480"
  - "#60136"
  - "#60625"
  - "#65290"
cluster_refs:
  - "#57718"
  - "#58480"
  - "#60136"
  - "#60625"
  - "#65290"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57718 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238822 on 2026-04-29."
---

# Gitcrawl Cluster 238822

Generated from local gitcrawl run cluster 238822 for `openclaw/openclaw`.

Display title:

> WhatsApp creds.json repeatedly restored from backup on startup, even after fresh re-pair

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #57718, currently open in local store
- latest member update: 2026-04-24T18:56:26.089Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57718 WhatsApp creds.json repeatedly restored from backup on startup, even after fresh re-pair
- #58480 WhatsApp creds.json corrupted on every reconnect — race between async save and sync restore
- #60136 [BUG] WhatsApp credentials (creds.json) corrupted every ~35 minutes during pre-key rotation
- #60625 WhatsApp: false-positive 'restored corrupted creds.json from backup' on every startup/reconnect
- #65290 Bug: WhatsApp channel in creds.json corruption/reconnect loop every ~30 mins
