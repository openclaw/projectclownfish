---
repo: openclaw/openclaw
cluster_id: gitcrawl-4432-dedupe-only-20260429-remote
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
  - "#39954"
candidates:
  - "#39963"
  - "#47878"
  - "#53289"
  - "#59670"
cluster_refs:
  - "#39954"
  - "#39963"
  - "#47878"
  - "#48403"
  - "#52495"
  - "#53253"
  - "#53289"
  - "#59670"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39954 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4432 on 2026-04-29."
---

# Gitcrawl Cluster 4432

Generated from local gitcrawl run cluster 4432 for `openclaw/openclaw`.

Display title:

> docs: clarify messaging vs full tool profiles

Cluster shape from gitcrawl:

- total members: 8
- issues: 1
- pull requests: 7
- open candidates in local store: 4
- representative: #39954, currently closed in local store
- latest member update: 2026-04-28T22:51:07.547920868Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39954 docs: clarify messaging vs full tool profiles
- #48403 docs: clarify 2026.3.2 tool-profile default change
- #52495 docs: add memory tools to built-in tools table
- #53253 [Docs] Clarify CLI usage: distinguish between shell commands and OpenClaw subcommands

Open candidates:

- #39963 config: clarify tools.profile help text
- #47878 docs: add read, write, edit tool documentation
- #53289 docs: clarify OpenClaw CLI subcommand usage
- #59670 docs(tools): document owner-only tools and commands.ownerAllowFrom
