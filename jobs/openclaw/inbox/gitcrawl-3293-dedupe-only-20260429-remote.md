---
repo: openclaw/openclaw
cluster_id: gitcrawl-3293-dedupe-only-20260429-remote
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
  - "#58537"
candidates:
  - "#58537"
cluster_refs:
  - "#58314"
  - "#58537"
  - "#59009"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58537 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3293 on 2026-04-29."
---

# Gitcrawl Cluster 3293

Generated from local gitcrawl run cluster 3293 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu oc_ (OpenChat) chats create duplicate group/direct sessions — outbound vs inbound chatType mismatch

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #58537, currently open in local store
- latest member update: 2026-04-28T05:49:56.740561574Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #58314 Bug: Weixin plugin missing inferTargetChatType creates duplicate group session for outbound messages
- #59009 [Bug] Feishu: p2p reactions routed to group session — chat_id oc_ prefix misidentified as group

Open candidates:

- #58537 [Bug]: Feishu oc_ (OpenChat) chats create duplicate group/direct sessions — outbound vs inbound chatType mismatch
