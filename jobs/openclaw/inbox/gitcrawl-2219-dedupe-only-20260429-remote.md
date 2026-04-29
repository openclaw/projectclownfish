---
repo: openclaw/openclaw
cluster_id: gitcrawl-2219-dedupe-only-20260429-remote
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
  - "#41622"
candidates:
  - "#56798"
cluster_refs:
  - "#41622"
  - "#42022"
  - "#42320"
  - "#44242"
  - "#44852"
  - "#44909"
  - "#45176"
  - "#56798"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41622 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2219 on 2026-04-29."
---

# Gitcrawl Cluster 2219

Generated from local gitcrawl run cluster 2219 for `openclaw/openclaw`.

Display title:

> fix(net): preserve proxy-aware undici dispatcher for codex runs

Cluster shape from gitcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 1
- representative: #41622, currently closed in local store
- latest member update: 2026-04-27T22:51:27.847469743Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41622 fix(net): preserve proxy-aware undici dispatcher for codex runs
- #42022 Fix Codex OAuth proxy dispatcher handling
- #42320 Honor proxy env for runtime undici dispatcher
- #44242 Fix memory leak in createPinnedDispatcher
- #44852 fix: Add IPv4-only fallback for Telegram media downloads on api.teleg…
- #44909 fix telegram-media-download-ipv6-fallback issue #44747
- #45176 Auth: localize openai-codex OAuth proxy handling

Open candidates:

- #56798 fix: enable net-level autoSelectFamily for built-in fetch on IPv6-broken networks
