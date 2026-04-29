---
repo: openclaw/openclaw
cluster_id: gitcrawl-2149-dedupe-only-20260429-remote
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
  - "#55186"
candidates:
  - "#52120"
  - "#52236"
  - "#57565"
  - "#57609"
  - "#58439"
  - "#59791"
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
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55186 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2149 on 2026-04-29."
---

# Gitcrawl Cluster 2149

Generated from local gitcrawl run cluster 2149 for `openclaw/openclaw`.

Display title:

> fix(mattermost): restore threadRootId priority in thread replies

Cluster shape from gitcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 6
- representative: #55186, currently closed in local store
- latest member update: 2026-04-28T18:51:14.961280364Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #55151 fix(mattermost): use inbound root_id to correct non-root replyToId (closes #30977)
- #55186 fix(mattermost): restore threadRootId priority in thread replies
- #60115 fix(mattermost): prevent DM replies from threading via resolveMattermostReplyRootId

Open candidates:

- #52120 fix(mattermost): inherit thread context in message tool send action
- #52236 fix(mattermost): persist threadId in delivery context for all session types
- #57565 fix(mattermost): route thread replies correctly when replyToMode is off
- #57609 fix(mattermost): record pending history for non-allowlisted group senders
- #58439 fix(mattermost): forward mediaLocalRoots in handleAction for agent workspace file uploads
- #59791 fix(mattermost): prioritize threadRootId over kind===direct for DM thread replies [fixes #59758]
