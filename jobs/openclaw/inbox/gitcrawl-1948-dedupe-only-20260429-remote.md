---
repo: openclaw/openclaw
cluster_id: gitcrawl-1948-dedupe-only-20260429-remote
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
  - "#61451"
candidates:
  - "#60427"
cluster_refs:
  - "#48452"
  - "#55175"
  - "#56775"
  - "#59270"
  - "#60427"
  - "#61193"
  - "#61233"
  - "#61451"
  - "#61647"
  - "#61653"
  - "#61667"
  - "#64361"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61451 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1948 on 2026-04-29."
---

# Gitcrawl Cluster 1948

Generated from local gitcrawl run cluster 1948 for `openclaw/openclaw`.

Display title:

> exec allowlist pattern matching broken — commands with args fail with allowlist miss

Cluster shape from gitcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 1
- representative: #61451, currently closed in local store
- latest member update: 2026-04-29T10:20:02.872025669Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48452 Feature Request: Path-based argument filtering in exec allowlist
- #55175 [Bug]: Allowlist error
- #56775 Bug: exec denied: allowlist miss despite correct configuration
- #59270 [Bug]: tools.exec.security config setting completely ignored
- #61193 Bug: exec approvals allowlist glob pattern not matching commands
- #61233 Bug: allow-always does not persist — each command triggers new approval
- #61451 exec allowlist pattern matching broken — commands with args fail with allowlist miss
- #61647 [Bug]: exec approval 的命令哈希机制导致 allow-always 无法有效覆盖常用命令
- #61653 [Bug]: # Bug Report: exec approval 的命令哈希机制导致 allow-always 无法有效覆盖常用命令
- #61667 [Bug]: Exact command hashing in `exec` approvals renders `allow-always` ineffective for dynamic commands
- #64361 [Bug]: exec tool always uses security=deny regardless of tools.exec.security config (v2026.4.9)

Open candidates:

- #60427 [Feature]: exec allowlist should support argument-level pattern matching, not just binary path
