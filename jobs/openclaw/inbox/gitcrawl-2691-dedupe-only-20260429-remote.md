---
repo: openclaw/openclaw
cluster_id: gitcrawl-2691-dedupe-only-20260429-remote
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
  - "#39825"
candidates:
  - "#39825"
  - "#61536"
  - "#63098"
  - "#65039"
cluster_refs:
  - "#39825"
  - "#60236"
  - "#61536"
  - "#63098"
  - "#65039"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39825 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2691 on 2026-04-29."
---

# Gitcrawl Cluster 2691

Generated from local gitcrawl run cluster 2691 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord native /vc join fails immediately with 'The operation was aborted' and no active session

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 4
- representative: #39825, currently open in local store
- latest member update: 2026-04-28T22:51:06.877663631Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #60236 [Bug]: Discord voice joins successfully but never captures user speech on OpenClaw 2026.4.2

Open candidates:

- #39825 [Bug]: Discord native /vc join fails immediately with 'The operation was aborted' and no active session
- #61536 [Bug]: Discord `/vc join` hears/transcribes speech but returns no spoken reply; voice session uses `tts` + `NO_REPLY`, gateway logs `No reply from agent.`
- #63098 Discord voice: Bot joins channel then immediately leaves with "The operation was aborted" after 2026.4.5 update
- #65039 Discord /vc join aborts before Ready: voice WS closes after Hello, before UDP handshaking
