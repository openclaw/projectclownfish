---
repo: openclaw/openclaw
cluster_id: gitcrawl-238798-dedupe-only-20260429b
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
  - "#43556"
candidates:
  - "#43556"
  - "#56326"
  - "#61724"
  - "#63120"
  - "#64714"
  - "#67248"
cluster_refs:
  - "#43556"
  - "#56326"
  - "#61724"
  - "#63120"
  - "#64714"
  - "#67248"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43556 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238798 on 2026-04-29."
---

# Gitcrawl Cluster 238798

Generated from local gitcrawl run cluster 238798 for `openclaw/openclaw`.

Display title:

> Bug: streamTo in sessions_spawn breaks subagent runtime

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #43556, currently open in local store
- latest member update: 2026-04-27T02:07:49.676Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43556 Bug: streamTo in sessions_spawn breaks subagent runtime
- #56326 Bug: sessions_spawn exposes ACP-only fields and breaks runtime=subagent with schema-following models
- #61724 sessions_spawn(runtime="subagent") fails with "streamTo is only supported for runtime=acp"
- #63120 sessions_spawn: LLMs pass streamTo for subagent runtime causing 100% spawn failures
- #64714 sessions_spawn rejects subagent runtime when streamTo is auto-filled by strict-mode providers
- #67248 [Bug]: sessions_spawn(runtime="subagent") still fails on 2026.4.14 with ACP-only streamTo under GPT-5.4
