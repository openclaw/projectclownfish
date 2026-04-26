---
repo: openclaw/openclaw
cluster_id: ghcrawl-156602-autonomous-smoke
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
  - "#55186"
candidates:
  - "#52120"
  - "#52236"
  - "#55151"
  - "#55186"
  - "#57565"
  - "#57609"
  - "#58439"
  - "#59791"
  - "#60115"
cluster_refs:
  - "#52120"
  - "#52236"
  - "#55151"
  - "#55186"
  - "#57565"
  - "#57609"
  - "#58439"
  - "#59791"
  - "#60115"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55186 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156602 on 2026-04-26."
---

# GHCrawl Cluster 156602

Generated from local ghcrawl run cluster 156602 for `openclaw/openclaw`.

Display title:

> fix(mattermost): restore threadRootId priority in thread replies

Cluster shape from ghcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 9
- representative: #55186, currently open in local store
- latest member update: 2026-04-24T18:56:27.374Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52120 fix(mattermost): inherit thread context in message tool send action
- #52236 fix(mattermost): persist threadId in delivery context for all session types
- #55151 fix(mattermost): use inbound root_id to correct non-root replyToId (closes #30977)
- #55186 fix(mattermost): restore threadRootId priority in thread replies
- #57565 fix(mattermost): route thread replies correctly when replyToMode is off
- #57609 fix(mattermost): record pending history for non-allowlisted group senders
- #58439 fix(mattermost): forward mediaLocalRoots in handleAction for agent workspace file uploads
- #59791 fix(mattermost): prioritize threadRootId over kind===direct for DM thread replies [fixes #59758]
- #60115 fix(mattermost): prevent DM replies from threading via resolveMattermostReplyRootId
