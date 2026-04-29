---
repo: openclaw/openclaw
cluster_id: gitcrawl-2336-dedupe-only-20260429-remote
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
  - "#56706"
candidates:
  - "#56705"
  - "#56706"
cluster_refs:
  - "#38707"
  - "#56705"
  - "#56706"
  - "#56728"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56706 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2336 on 2026-04-29."
---

# Gitcrawl Cluster 2336

Generated from local gitcrawl run cluster 2336 for `openclaw/openclaw`.

Display title:

> TTS: enforce standalone directive lines parsing

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #56706, currently open in local store
- latest member update: 2026-04-27T22:51:39.00233752Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38707 fix(tts): recognize bare [[tts]] tag in parseTtsDirectives
- #56728 fix(tts): skip directives inside code blocks

Open candidates:

- #56705 Config: centralize known plugin ID resolution for validation
- #56706 TTS: enforce standalone directive lines parsing
