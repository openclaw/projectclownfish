---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260425T2346-01
mode: autonomous
triage_policy: low_signal_prs
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - label
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - focused_bug_fix
  - green_checks
  - technical_correctness_judgment
canonical: []
candidates:
  - "#53336"
  - "#52216"
  - "#51697"
  - "#51672"
  - "#51513"
cluster_refs:
  - "#53336"
  - "#52216"
  - "#51697"
  - "#51672"
  - "#51513"
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local ghcrawl open PR data on 2026-04-25T23:46:20.623Z."
---

# Low-Signal PR Sweep 1

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## GHCrawl Candidate Signals

### #53336 feat: add HexaClaw as bundled provider plugin

- author: adityavarma9
- updated: 2026-03-24T20:15:31Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 13
- body excerpt: ## Summary - Adds HexaClaw as a first-class bundled provider plugin (`extensions/hexaclaw/`) - HexaClaw is a multi-model AI gateway ([hexaclaw.com](https://hexaclaw.com)) that routes requests to Anthropic, Google, OpenAI, DeepSeek, Mistral,
- changed files: .github/labeler.yml, docs/.generated/config-baseline.json, docs/.generated/config-baseline.jsonl, extensions/hexaclaw/index.test.ts, extensions/hexaclaw/index.ts, extensions/hexaclaw/onboard.ts, extensions/hexaclaw/openclaw.plugin.json, extensions/hexaclaw/package.json, extensions/hexaclaw/provider-catalog.ts, pnpm-lock.yaml, src/plugins/bundled-plugin-metadata.generated.ts, src/plugins/bundled-provider-auth-env-vars.generated.ts, src/plugins/contracts/registry.ts

### #52216 docs: clarify plugin hook systems: api.registerHook vs api.on

- author: vanessa49
- updated: 2026-03-24T20:15:36Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: ## Summary Clarifies the distinction between two plugin hook registration methods that previously caused confusion. ## Changes - Added "Hook systems" section to plugin documentation - Explained difference between `api.registerHook()` and `a
- changed files: docs/tools/plugin.md

### #51697 docs: add missing README for synology-chat extension

- author: zhengbingxian
- updated: 2026-03-24T20:15:38Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: Add README.md for the synology-chat extension which was the only channel extension without one. Includes setup, features, and dependencies.
- changed files: extensions/synology-chat/README.md

### #51672 ci: add missing extension and channel labels to labeler.yml

- author: zhengbingxian
- updated: 2026-03-24T20:15:39Z
- score: 2
- signals: third_party_or_external_capability, risky_infra
- files: 1
- body excerpt: ## Summary - Add labeler.yml rules for 24 extensions and 1 channel that were missing auto-labeling coverage - New extensions: amazon-bedrock, anthropic-vertex, brave, chutes, diffs, elevenlabs, firecrawl, github-copilot, google, google-anti
- changed files: .github/labeler.yml

### #51513 docs(channels): add connection architecture overview and transport notes

- author: loicgasser
- updated: 2026-03-24T20:15:39Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 3
- body excerpt: ## What Adds a **Connection architecture** section to `docs/channels/index.md` with a transport table covering all 22 supported channels across 10 transport categories. Also adds one-line transport notes to the Discord and Telegram channel 
- changed files: docs/channels/discord.md, docs/channels/index.md, docs/channels/telegram.md

