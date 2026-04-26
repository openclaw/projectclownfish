---
repo: openclaw/openclaw
cluster_id: ghcrawl-156638-autonomous-smoke
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
  - "#39954"
candidates:
  - "#39954"
  - "#39963"
  - "#47878"
  - "#52495"
  - "#53289"
  - "#59670"
cluster_refs:
  - "#39954"
  - "#39963"
  - "#47878"
  - "#52495"
  - "#53289"
  - "#59670"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39954 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156638 on 2026-04-26."
---

# GHCrawl Cluster 156638

Generated from local ghcrawl run cluster 156638 for `openclaw/openclaw`.

Display title:

> docs: clarify messaging vs full tool profiles

Cluster shape from ghcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 6
- representative: #39954, currently open in local store
- latest member update: 2026-04-25T07:30:10.556Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39954 docs: clarify messaging vs full tool profiles
- #39963 config: clarify tools.profile help text
- #47878 docs: add read, write, edit tool documentation
- #52495 docs: add memory tools to built-in tools table
- #53289 docs: clarify OpenClaw CLI subcommand usage
- #59670 docs(tools): document owner-only tools and commands.ownerAllowFrom
