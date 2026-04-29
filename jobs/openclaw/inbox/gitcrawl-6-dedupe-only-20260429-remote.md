---
repo: openclaw/openclaw
cluster_id: gitcrawl-6-dedupe-only-20260429-remote
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
  - "#68020"
candidates:
  - "#68020"
  - "#70332"
  - "#70464"
  - "#70523"
cluster_refs:
  - "#65653"
  - "#67029"
  - "#67958"
  - "#68020"
  - "#68087"
  - "#68130"
  - "#68312"
  - "#68364"
  - "#68681"
  - "#69886"
  - "#69918"
  - "#70332"
  - "#70353"
  - "#70395"
  - "#70402"
  - "#70403"
  - "#70464"
  - "#70509"
  - "#70523"
  - "#70554"
  - "#71107"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68020 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6 on 2026-04-29."
---

# Gitcrawl Cluster 6

Generated from local gitcrawl run cluster 6 for `openclaw/openclaw`.

Display title:

> fix(memory-core): silence expected operator.admin scope miss in dreaming cleanup

Cluster shape from gitcrawl:

- total members: 21
- issues: 8
- pull requests: 13
- open candidates in local store: 4
- representative: #68020, currently open in local store
- latest member update: 2026-04-29T10:20:02.863370269Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #65653 Bug: memory-core dreaming narrative creates orphaned sessions that are never cleaned up
- #67029 [Bug]: memory-core dreaming: narrative session cleanup fails with missing scope operator.admin
- #67958 fix: omit think parameter for Ollama models without thinking support
- #68087 fix(memory-core): downgrade cleanup warning to debug when missing operator.admin scope
- #68130 fix: reduce log level for narrative session cleanup scope failures
- #68312 fix(memory-core): downgrade narrative cleanup WARN to debug for missing-scope errors
- #68364 fix: prevent unbounded narrative session growth by stabilizing session key (#68354)
- #68681 fix(memory-core): suppress expected dreaming cleanup scope warnings
- #69886 memory-core narrative session cleanup fails with missing scope: operator.admin
- #69918 Dreaming narrative sessions leak into agent session list / UI switcher
- #70353 memory-core: dreaming subagent lacks operator.admin to delete its own session
- #70395 memory-core dreaming cleanup requires operator.admin and logs failure despite successful promotion
- #70402 Dreaming sessions pollute UI agent switcher — sessions.json not cleaned up after dream runs
- #70403 fix(memory-core): keep Dream Diary to one entry per sweep
- #70509 [Bug] Dreaming raw candidates pollute daily memory files (memory/YYYY-MM-DD.md)
- #70554 Fix dreaming narrative retries for gateway background runs
- #71107 fix: disable thinking for Ollama models when thinkingLevel=off

Open candidates:

- #68020 fix(memory-core): silence expected operator.admin scope miss in dreaming cleanup
- #70332 fix(memory): harden dreaming diary pipeline
- #70464 fix(memory-core): allow bounded dreaming session cleanup
- #70523 fix(memory-core): suppress raw dreaming inline dumps on fallback (Fixes #70509)
