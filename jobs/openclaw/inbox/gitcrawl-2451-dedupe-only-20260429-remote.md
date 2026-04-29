---
repo: openclaw/openclaw
cluster_id: gitcrawl-2451-dedupe-only-20260429-remote
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
  - "#47079"
candidates:
  - "#43249"
  - "#47674"
cluster_refs:
  - "#43249"
  - "#45227"
  - "#47079"
  - "#47200"
  - "#47674"
  - "#49173"
  - "#53476"
  - "#55387"
  - "#56546"
  - "#62130"
  - "#62690"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47079 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2451 on 2026-04-29."
---

# Gitcrawl Cluster 2451

Generated from local gitcrawl run cluster 2451 for `openclaw/openclaw`.

Display title:

> [Bug]: Mistral API returns 422 - openai-completions adapter sends max_completion_tokens which Mistral rejects

Cluster shape from gitcrawl:

- total members: 11
- issues: 11
- pull requests: 0
- open candidates in local store: 2
- representative: #47079, currently closed in local store
- latest member update: 2026-04-28T18:04:42.850606414Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45227 [Bug]: 422 status code (no body) with mistral
- #47079 [Bug]: Mistral API returns 422 - openai-completions adapter sends max_completion_tokens which Mistral rejects
- #47200 [Bug]: Telegram channel broken when using Mistral API
- #49173 OpenAI GPT-5.4 fails: sends max_tokens instead of max_completion_tokens
- #53476 Mistral provider returns 422 Unprocessable Entity for all models using openai-completions adapter
- #55387 [Bug]:Telegram startup fails with 404 (deleteWebhook / deleteMyCommands / setMyCommands) even though direct Bot API calls succeed
- #56546 [Bug]: Mistral onboarding uses openai-completions, causing 422 errors (store + max_completion_tokens)
- #62130 [Bug]: OpenClaw sends deprecated max_tokens parameter to GPT-5.x models, causing persistent 400 errors
- #62690 [Bug]: Telegram 401 Unauthorized Error - Valid Token Not Accepted

Open candidates:

- #43249 Telegram API returning 400 errors in recent days
- #47674 [Bug]: Telegram channel shows Running briefly then disconnects — deleteWebhook 401 Unauthorized (valid token confirmed)
