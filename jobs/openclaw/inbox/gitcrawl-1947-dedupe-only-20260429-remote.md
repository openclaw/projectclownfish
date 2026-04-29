---
repo: openclaw/openclaw
cluster_id: gitcrawl-1947-dedupe-only-20260429-remote
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
  - "#51396"
candidates:
  - "#48229"
  - "#51396"
  - "#51413"
  - "#52059"
  - "#57889"
  - "#60225"
cluster_refs:
  - "#44034"
  - "#44486"
  - "#45405"
  - "#46070"
  - "#46997"
  - "#48229"
  - "#51396"
  - "#51413"
  - "#52059"
  - "#52562"
  - "#55095"
  - "#56194"
  - "#56195"
  - "#56763"
  - "#57331"
  - "#57434"
  - "#57701"
  - "#57889"
  - "#58487"
  - "#58493"
  - "#60225"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51396 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1947 on 2026-04-29."
---

# Gitcrawl Cluster 1947

Generated from local gitcrawl run cluster 1947 for `openclaw/openclaw`.

Display title:

> [Bug]: clearUnboundScopes strips operator scopes unconditionally for non-local token-auth clients

Cluster shape from gitcrawl:

- total members: 21
- issues: 13
- pull requests: 8
- open candidates in local store: 6
- representative: #51396, currently open in local store
- latest member update: 2026-04-28T21:55:43.706515782Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44034 fix(gateway): honor dangerouslyDisableDeviceAuth in evaluateMissingDeviceIdentity
- #44486 fix(gateway): honor dangerouslyDisableDeviceAuth regardless of sharedAuthOk
- #45405 fix(gateway): honour dangerouslyDisableDeviceAuth for remote WS connections (#45398)
- #46070 [Regression] clearUnboundScopes() in 2026.3.12 breaks Paperclip adapter connections
- #46997 [Bug]: WebChat "missing scope: operator.write" Error
- #52562 fix(gateway): preserve control ui scopes with dangerouslyDisableDeviceAuth
- #55095 [Bug]: errorCode=INVALID_REQUEST errorMessage=missing scope: operator.write conn=28b5f2bb…fa4b id=d990912d…51f5
- #56194 Gateway clears operator scopes for token-authenticated backend clients (regression)
- #56195 fix(gateway): preserve operator scopes for shared-auth connections
- #56763 [Bug]: 2026.3.28 — /v1/models and /v1/chat/completions reject gateway bearer token with 'missing scope: operator.read/write'
- #57331 [Bug] /v1/responses returns 403 missing scope operator.write with valid JWT
- #57434 [Bug]: DingTalk connector gets 403 'missing scope: operator.write' when calling gateway API
- #57701 Control UI loses operator scopes when dangerouslyDisableDeviceAuth is enabled
- #58487 [Bug]: v3.28 scope enforcement (`operator.write`) breaks /v1 API clients that can't send custom headers
- #58493 HTTP /v1/chat/completions: Bearer token auth succeeds but agent run fails with 'missing scope: operator.write'

Open candidates:

- #48229 operator.write scope not granted for WebSocket connections when gateway.bind is 'lan' with token auth
- #51396 [Bug]: clearUnboundScopes strips operator scopes unconditionally for non-local token-auth clients
- #51413 fix(gateway): retain operator scopes for non-local token-auth clients
- #52059 feat(gateway): add gateway.auth.scopes for device-less token/password connections
- #57889 fix(gateway): preserve operator scopes for token-authenticated non-local clients
- #60225 Regression: operator scopes cleared again for shared-auth API clients (v2026.4.1)
