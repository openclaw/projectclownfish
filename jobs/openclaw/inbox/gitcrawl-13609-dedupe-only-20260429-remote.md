---
repo: openclaw/openclaw
cluster_id: gitcrawl-13609-dedupe-only-20260429-remote
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
  - "#69024"
candidates:
  - "#67618"
cluster_refs:
  - "#44574"
  - "#44672"
  - "#50229"
  - "#56377"
  - "#57688"
  - "#61762"
  - "#62176"
  - "#64421"
  - "#65843"
  - "#67618"
  - "#69024"
  - "#70476"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69024 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13609 on 2026-04-29."
---

# Gitcrawl Cluster 13609

Generated from local gitcrawl run cluster 13609 for `openclaw/openclaw`.

Display title:

> [Bug]: device pairing approval fails with `GatewayClientRequestError: unknown requestId`

Cluster shape from gitcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 1
- representative: #69024, currently closed in local store
- latest member update: 2026-04-28T05:49:59.055810939Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44574 [Bug]: WS node pairing auto-approved at runtime but never persists (device-auth.json never created)
- #44672 [Bug]: macOS app can stay stuck on generic 'pairing required' after node->operator upgrade approval
- #50229 [Bug]: Android App (Unreleased Build) Stuck on 'Pairing Required' Despite Gateway Approval
- #56377 [Bug]: Device pairing gets stuck after macOS minor update because paired device metadata pins old OS version
- #57688 [Bug]: cron add fails with "pairing required" - no way to approve CLI pairing in OpenClaw 2026.3.28
- #61762 [Bug]: `cron add` fails with "pairing required" on local loopback mode (macOS)
- #62176 Device re-pairing required after minor macOS update on already-paired device
- #64421 Misleading error: pairing required when cron.add fails due to insufficient scopes
- #65843 [Bug]: Paring failure when add remote OpenClaw as ACP server
- #69024 [Bug]: device pairing approval fails with `GatewayClientRequestError: unknown requestId`
- #70476 Android: unknown requestId error during pairing (Advance Setup, no Google Play)

Open candidates:

- #67618 Improve pairing required error message to include approval command
