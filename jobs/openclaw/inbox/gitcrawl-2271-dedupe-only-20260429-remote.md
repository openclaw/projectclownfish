---
repo: openclaw/openclaw
cluster_id: gitcrawl-2271-dedupe-only-20260429-remote
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
  - "#59797"
candidates:
  - "#62120"
cluster_refs:
  - "#53365"
  - "#56552"
  - "#59797"
  - "#62120"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59797 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2271 on 2026-04-29."
---

# Gitcrawl Cluster 2271

Generated from local gitcrawl run cluster 2271 for `openclaw/openclaw`.

Display title:

> [Bug]: 4.1 openclaw-weixin Failed to start login

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #59797, currently closed in local store
- latest member update: 2026-04-28T17:25:21.2645168Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #53365 [Bug]: openclaw-weixin v1.0.2 登录不出二维码，报错缺少函数 resolvePreferredOpenClawTmpDir
- #56552 [Bug]: @tencent-weixin/openclaw-weixin AbortError on QR code fetch despite successful API connectivity
- #59797 [Bug]: 4.1 openclaw-weixin Failed to start login

Open candidates:

- #62120 [Bug] openclaw-weixin login hangs before QR code appears on OpenClaw 2026.4.5
