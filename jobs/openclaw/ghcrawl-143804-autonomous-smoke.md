---
repo: openclaw/openclaw
cluster_id: ghcrawl-143804-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#68508"
candidates:
  - "#55049"
  - "#58287"
  - "#61433"
  - "#62306"
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
  - "#68094"
  - "#68508"
  - "#68992"
  - "#69037"
  - "#70289"
  - "#70373"
  - "#70458"
  - "#70732"
cluster_refs:
  - "#39473"
  - "#55049"
  - "#56489"
  - "#58287"
  - "#61433"
  - "#61990"
  - "#62306"
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
  - "#68094"
  - "#68508"
  - "#68992"
  - "#69037"
  - "#70289"
  - "#70373"
  - "#70458"
  - "#70732"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #68508 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 143804 on 2026-04-25."
---

# GHCrawl Cluster 143804

Generated from local ghcrawl run cluster 143804 for `openclaw/openclaw`.

Display title:

> [Bug]: WebChat / Control UI: System event messages leaked into visible transcript after async exec

Cluster shape from ghcrawl:

- total members: 26
- issues: 26
- pull requests: 0
- open candidates in local store: 23
- representative: #68508, currently open in local store
- latest member update: 2026-04-25T17:12:54.242Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39473 [Bug]: Web control UI leaks internal control tokens into visible chat messages
- #56489 [Bug]: System events and cron payloads appear as user messages in webchat (still broken in 2026.3.23-2)
- #61990 [Bug] Exec completion events injected into user chat session as queued messages, derailing active conversation

Open candidates:

- #55049 [Bug]:
- #58287 Bug: Heartbeat prompt visible as user message in Control UI chat
- #61433 [Bug]: internal completion/announce payloads can leak raw runtime metadata into user chat
- #62306 [Bug]: Subagent completion announce leaks internal runtime context into Control UI chat and persists it in session history
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
- #68094 [Bug]: Startup context prelude and system event blocks bleed into Control UI chat as visible user message text
- #68508 [Bug]: WebChat / Control UI: System event messages leaked into visible transcript after async exec
- #68992 [Bug]: Control UI renders async exec system events in the visible chat transcript
- #69037 [Bug] Async exec completion notices re-inject original user message, causing duplicate agent replies
- #70289 [Bug]: Control UI leaks internal OpenClaw runtime context into visible chat messages
- #70373 Control UI shows async exec system events inline as if authored by the user
- #70458 Control UI exposes internal-only async exec completion system messages to users
- #70732 [Bug]:
