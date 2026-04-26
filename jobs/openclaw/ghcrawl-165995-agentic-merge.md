---
repo: openclaw/openclaw
cluster_id: ghcrawl-165995-agentic-merge
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
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#59390"
candidates:
  - "#43556"
  - "#53370"
  - "#56193"
  - "#56326"
  - "#59390"
  - "#60965"
  - "#61724"
  - "#63120"
  - "#64714"
  - "#67248"
  - "#68275"
  - "#69166"
cluster_refs:
  - "#43556"
  - "#53370"
  - "#56193"
  - "#56326"
  - "#59390"
  - "#60965"
  - "#61724"
  - "#63120"
  - "#64714"
  - "#67248"
  - "#68275"
  - "#69166"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #59390 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165995 on 2026-04-26."
---

# GHCrawl Cluster 165995

Generated from local ghcrawl run cluster 165995 for `openclaw/openclaw`.

Display title:

> sessions_spawn(runtime="subagent") can fail because unified schema exposes ACP-only streamTo

Cluster shape from ghcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 12
- representative: #59390, currently open in local store
- latest member update: 2026-04-24T18:56:29.641Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43556 Bug: streamTo in sessions_spawn breaks subagent runtime
- #53370 [Feature]: Make sessions_spawn more forgiving for ACP-only fields in subagent runtime
- #56193 [Bug]: sessions_spawn(runtime="subagent") can receive ACP-only streamTo from the current tool-call bridge
- #56326 Bug: sessions_spawn exposes ACP-only fields and breaks runtime=subagent with schema-following models
- #59390 sessions_spawn(runtime="subagent") can fail because unified schema exposes ACP-only streamTo
- #60965 sessions_spawn schema allows streamTo for runtime=subagent but execute rejects it
- #61724 sessions_spawn(runtime="subagent") fails with "streamTo is only supported for runtime=acp"
- #63120 sessions_spawn: LLMs pass streamTo for subagent runtime causing 100% spawn failures
- #64714 sessions_spawn rejects subagent runtime when streamTo is auto-filled by strict-mode providers
- #67248 [Bug]: sessions_spawn(runtime="subagent") still fails on 2026.4.14 with ACP-only streamTo under GPT-5.4
- #68275 sessions_spawn auto-injects `streamTo:"parent"` for `runtime="subagent"` and causes hard failure
- #69166 sessions_spawn: streamTo schema lacks runtime=acp hint, causes 2x-token retry loop for subagent callers
