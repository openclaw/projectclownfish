---
repo: openclaw/openclaw
cluster_id: ghcrawl-166000-agentic-merge
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
  - "#45228"
candidates:
  - "#45228"
  - "#46078"
  - "#47558"
  - "#47935"
  - "#49430"
  - "#56157"
  - "#56162"
  - "#56163"
  - "#56319"
  - "#56685"
  - "#59658"
cluster_refs:
  - "#45228"
  - "#46078"
  - "#47558"
  - "#47935"
  - "#49430"
  - "#56157"
  - "#56162"
  - "#56163"
  - "#56319"
  - "#56685"
  - "#59658"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #45228 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166000 on 2026-04-26."
---

# GHCrawl Cluster 166000

Generated from local ghcrawl run cluster 166000 for `openclaw/openclaw`.

Display title:

> docs(subagents): fix bootstrap file injection list (5 files, not 2)

Cluster shape from ghcrawl:

- total members: 11
- issues: 1
- pull requests: 10
- open candidates in local store: 11
- representative: #45228, currently open in local store
- latest member update: 2026-04-24T18:56:30.038Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45228 docs(subagents): fix bootstrap file injection list (5 files, not 2)
- #46078 docs: fix sub-agent bootstrap file list (5 files, not 2)
- #47558 docs(subagents): 6 gaps/inaccuracies in sub-agents documentation
- #47935 docs(subagents): fix 6 inaccuracies and gaps
- #49430 docs(subagents): fix 6 documentation issues (#47558)
- #56157 docs(subagents): fix 6 gaps/inaccuracies in sub-agents documentation
- #56162 docs(subagents): fix bootstrap files list (2 -> 5 files)
- #56163 docs: replace TODO placeholder in exec-approvals example
- #56319 fix: delete Telegram exec approval message after approval resolved
- #56685 docs: fix subagent context file list and coding profile description
- #59658 docs(subagents): fix 6 gaps and inaccuracies in sub-agents documentation
