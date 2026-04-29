---
repo: openclaw/openclaw
cluster_id: gitcrawl-14023-dedupe-only-20260429-remote
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
  - "#42065"
candidates:
  - "#39692"
  - "#42065"
  - "#43827"
  - "#44695"
  - "#48836"
  - "#48902"
  - "#52776"
  - "#61073"
  - "#61080"
  - "#61092"
  - "#61104"
  - "#61112"
cluster_refs:
  - "#39028"
  - "#39692"
  - "#42065"
  - "#43827"
  - "#44695"
  - "#47156"
  - "#48836"
  - "#48902"
  - "#52776"
  - "#53400"
  - "#56017"
  - "#61073"
  - "#61080"
  - "#61092"
  - "#61104"
  - "#61112"
  - "#61119"
  - "#61130"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42065 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14023 on 2026-04-29."
---

# Gitcrawl Cluster 14023

Generated from local gitcrawl run cluster 14023 for `openclaw/openclaw`.

Display title:

> UI: add global locale switch and complete zh-CN dashboard translations

Cluster shape from gitcrawl:

- total members: 18
- issues: 0
- pull requests: 18
- open candidates in local store: 12
- representative: #42065, currently open in local store
- latest member update: 2026-04-28T22:51:06.885021957Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39028 ui: refine zh-CN i18n and make weekday labels follow selected locale
- #47156 The README and parts of the web UI have been localized.
- #53400 i18n(zh-CN): add 5 missing translations / 补充缺失的 5 个翻译
- #56017 feat(i18n): add Simplified Chinese (zh-CN) localization
- #61119 UI: localize connect command labels
- #61130 UI: localize command palette labels

Open candidates:

- #39692 Localize control UI hardcoded strings to zh-CN
- #42065 UI: add global locale switch and complete zh-CN dashboard translations
- #43827 feat(ui): Adapt Chat page for i18n fields
- #44695 feat(onboarding): complete zh-CN locale onboarding bundle + review fixes
- #48836 feat(i18n): add Chinese translations for chat UI
- #48902 fix(i18n): UI internationalization for theme toggle, search, command palette, and overview attention
- #52776 UI: localize Control UI shell labels
- #61073 UI: localize instances hardcoded labels
- #61080 UI: localize logs hardcoded labels
- #61092 UI: localize skills hardcoded labels
- #61104 UI: localize agent tools and skills labels
- #61112 UI: localize markdown sidebar labels
