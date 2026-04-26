---
repo: openclaw/openclaw
cluster_id: ghcrawl-156578-autonomous-smoke
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
  - "#68508"
candidates:
  - "#55049"
  - "#58287"
  - "#62418"
  - "#65131"
  - "#65315"
  - "#65994"
  - "#66343"
  - "#66648"
  - "#66814"
  - "#67238"
  - "#67267"
  - "#67364"
  - "#67527"
  - "#68508"
  - "#70732"
cluster_refs:
  - "#55049"
  - "#58287"
  - "#62418"
  - "#65131"
  - "#65315"
  - "#65994"
  - "#66343"
  - "#66648"
  - "#66814"
  - "#67238"
  - "#67267"
  - "#67364"
  - "#67527"
  - "#68508"
  - "#70732"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #68508 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156578 on 2026-04-26."
---

# GHCrawl Cluster 156578

Generated from local ghcrawl run cluster 156578 for `openclaw/openclaw`.

Display title:

> [Bug]: WebChat / Control UI: System event messages leaked into visible transcript after async exec

Cluster shape from ghcrawl:

- total members: 15
- issues: 15
- pull requests: 0
- open candidates in local store: 15
- representative: #68508, currently open in local store
- latest member update: 2026-04-24T18:56:27.409Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55049 [Bug]:
- #58287 Bug: Heartbeat prompt visible as user message in Control UI chat
- #62418 [Bug] WebChat Control UI displays internal exec notifications in user-visible chat
- #65131 Feature Request: Option to hide system messages from Control UI chat window
- #65315 [Bug]: Internal runtime messages leaking into webchat output
- #65994 [Bug]: exec completion events leak into webchat conversation as System messages
- #66343 [Feature Request] Add option to suppress heartbeat system messages from appearing in chat
- #66648 [Bug] System-level "Exec completed" notifications leak into unrelated webchat sessions
- #66814 Internal exec/heartbeat events leak into visible Control UI chat transcript
- #67238 Feature Request: Option to hide/filter system heartbeat polling messages in Control UI
- #67267 [Bug]: System: message feedback loop in web UI chat
- #67364 Control UI shows internal heartbeat prompts as user messages in chat transcript
- #67527 WebChat: async command completion notifications incorrectly shown in user message bubbles
- #68508 [Bug]: WebChat / Control UI: System event messages leaked into visible transcript after async exec
- #70732 [Bug]:
