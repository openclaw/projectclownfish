---
repo: openclaw/openclaw
cluster_id: gitcrawl-238816-dedupe-only-20260429b
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
  - "#59658"
candidates:
  - "#47558"
  - "#47935"
  - "#49430"
  - "#56157"
  - "#59658"
cluster_refs:
  - "#47558"
  - "#47935"
  - "#49430"
  - "#56157"
  - "#59658"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59658 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238816 on 2026-04-29."
---

# Gitcrawl Cluster 238816

Generated from local gitcrawl run cluster 238816 for `openclaw/openclaw`.

Display title:

> docs(subagents): fix 6 gaps and inaccuracies in sub-agents documentation

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #59658, currently open in local store
- latest member update: 2026-04-29T08:43:37.768Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47558 docs(subagents): 6 gaps/inaccuracies in sub-agents documentation
- #47935 docs(subagents): fix 6 inaccuracies and gaps
- #49430 docs(subagents): fix 6 documentation issues (#47558)
- #56157 docs(subagents): fix 6 gaps/inaccuracies in sub-agents documentation
- #59658 docs(subagents): fix 6 gaps and inaccuracies in sub-agents documentation
