---
repo: openclaw/openclaw
cluster_id: gitcrawl-2030-dedupe-only-20260429-remote
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
  - "#65971"
candidates:
  - "#45102"
  - "#59945"
cluster_refs:
  - "#45100"
  - "#45102"
  - "#56192"
  - "#59945"
  - "#62268"
  - "#63020"
  - "#65971"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65971 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2030 on 2026-04-29."
---

# Gitcrawl Cluster 2030

Generated from local gitcrawl run cluster 2030 for `openclaw/openclaw`.

Display title:

> [Bug]:[macOS] Gateway stops processing messages after 15-20 minutes, requires restart

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 2
- representative: #65971, currently closed in local store
- latest member update: 2026-04-28T18:04:42.553817131Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45100 [Bug] /v1/responses API timeout after long running
- #56192 Gateway receives SIGTERM ~4 seconds after startup, causing frequent restart loop
- #62268 [Bug]: Gateway entered restart loop when Slack enabled
- #63020 bug(gateway): repeated SIGTERM-driven restarts make the gateway look crash-looped
- #65971 [Bug]:[macOS] Gateway stops processing messages after 15-20 minutes, requires restart

Open candidates:

- #45102 [Bug] Gateway requires frequent restart when processing long tasks
- #59945 Slack socket mode fails with "reserved redaction sentinel" error despite valid tokens — infinite restart loop
