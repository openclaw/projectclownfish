---
repo: openclaw/openclaw
cluster_id: gitcrawl-6067-dedupe-only-20260429-remote
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
  - "#45626"
candidates:
  - "#38170"
  - "#45626"
  - "#50200"
  - "#62792"
  - "#64429"
cluster_refs:
  - "#38170"
  - "#45626"
  - "#50200"
  - "#53800"
  - "#62792"
  - "#64184"
  - "#64429"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45626 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6067 on 2026-04-29."
---

# Gitcrawl Cluster 6067

Generated from local gitcrawl run cluster 6067 for `openclaw/openclaw`.

Display title:

> fix: add fileId to message tool schema for Slack download-file

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 5
- representative: #45626, currently open in local store
- latest member update: 2026-04-28T22:51:07.576922614Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #53800 fix(message-tool): make channel plugin schema properties optional
- #64184 fix(slack): propagate file IDs through media pipeline to agent context

Open candidates:

- #38170 feat(telegram): embed file_id in media placeholders and add download-file action
- #45626 fix: add fileId to message tool schema for Slack download-file
- #50200 fix(slack): fetch fresh download URL via files.info for DM file attachments
- #62792 Fix Slack file access in channels and DMs 
- #64429 feat(slack): add fileId field to SlackMediaResult type
