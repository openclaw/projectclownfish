---
repo: openclaw/openclaw
cluster_id: gitcrawl-14000-dedupe-only-20260429-remote
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
  - "#59658"
candidates:
  - "#40447"
  - "#45228"
  - "#47558"
  - "#47935"
  - "#49430"
  - "#55549"
  - "#56157"
  - "#56163"
  - "#56319"
  - "#57308"
  - "#57340"
  - "#59658"
  - "#61374"
  - "#67751"
  - "#68365"
cluster_refs:
  - "#10458"
  - "#38400"
  - "#38415"
  - "#38662"
  - "#40447"
  - "#40728"
  - "#42297"
  - "#42723"
  - "#43327"
  - "#43606"
  - "#44020"
  - "#45228"
  - "#45566"
  - "#45605"
  - "#45678"
  - "#46078"
  - "#47033"
  - "#47036"
  - "#47038"
  - "#47165"
  - "#47558"
  - "#47935"
  - "#49430"
  - "#49453"
  - "#50018"
  - "#51284"
  - "#51692"
  - "#52065"
  - "#52099"
  - "#53499"
  - "#55514"
  - "#55549"
  - "#56147"
  - "#56157"
  - "#56162"
  - "#56163"
  - "#56319"
  - "#56685"
  - "#56766"
  - "#56843"
  - "#57308"
  - "#57340"
  - "#59476"
  - "#59478"
  - "#59658"
  - "#61091"
  - "#61248"
  - "#61374"
  - "#63384"
  - "#63836"
  - "#64307"
  - "#64605"
  - "#65439"
  - "#67751"
  - "#68365"
  - "#69983"
  - "#71023"
  - "#71025"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59658 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14000 on 2026-04-29."
---

# Gitcrawl Cluster 14000

Generated from local gitcrawl run cluster 14000 for `openclaw/openclaw`.

Display title:

> docs(subagents): fix 6 gaps and inaccuracies in sub-agents documentation

Cluster shape from gitcrawl:

- total members: 58
- issues: 4
- pull requests: 54
- open candidates in local store: 15
- representative: #59658, currently open in local store
- latest member update: 2026-04-28T22:51:07.321116498Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #10458 Docs: README uses deprecated --to for openclaw message send (should be --target)
- #38400 docs: added tech stack to the README
- #38415 docs: add third-party package marketplaces section to README
- #38662 Update README.md
- #40728 docs: add a note about Chinese docs
- #42297 docs: fix broken troubleshooting anchor in Anthropic provider page
- #42723 docs: add npm downloads badge
- #43327 Fix/tui shift enter newline
- #43606 fix(docs): update links in Chinese documentation
- #44020 Docs: Modify the Chinese translation of some documents
- #45566 docs: add bot validation marker for PR workflow test
- #45605 Bot/fix status enter key
- #45678 fix: restore multi-line input support in Web UI chat box
- #46078 docs: fix sub-agent bootstrap file list (5 files, not 2)
- #47033 Docs: fix Node minimum version in README (≥22 → ≥22.16)
- #47036 Docs: fix Node minimum version in setup.md (>=22 → >=22.16)
- #47038 Docs: fix Node minimum version in FAQ (>= 22 → >= 22.16)
- #47165 docs: add comprehensive Chinese tutorial to community resources
- #49453 中文版
- #50018 docs: add Desktop Apps & GUI Clients section
- #51284 docs: fix broken internal links across documentation
- #51692 docs: fix broken /configuration link in plugin manifest
- #52065 docs(readme): add Chinese documentation entry points
- #52099 docs: add WeChat channel via @tencent-weixin/openclaw-weixin
- #53499 Create README_CN.md
- #55514 docs: fix README typo and add pnpm/Corepack tip
- #56147 docs: fix FAQ anchor in troubleshooting
- #56162 docs(subagents): fix bootstrap files list (2 -> 5 files)
- #56685 docs: fix subagent context file list and coding profile description
- #56766 fix(slack): wake interaction system events
- #56843 Update contributor links in README.md
- #59476 SECURITY.md references Node.js >=22.12.0 but runtime enforces >=22.14.0
- #59478 docs: fix Node.js minimum version in SECURITY.md (22.12.0 → 22.14.0)
- #61091 Docs: use --target in README message send example (instead of outdated --to argument)
- #61248 docs: add Gemini AI Cloud free model provider
- #63384 Update command syntax in README for message sending
- #63836 feat: add SiliconFlow model provider
- #64307 README: add Feishu quick-start section
- #64605 docs(i18n): Add Chinese translations for CLI gateway, doctor, onboard [AI-assisted]Docs/i18n clean v4
- #65439 Add avatar link for soumikbhatta to README
- #69983 fix(memory-core): suppress false cron unavailable warning on startup
- #71023 [Bug]: Slack exec approval buttons do not resolve approvals — commands time out despite user clicking Allow Once
- #71025 fix(slack): resolve exec approval decisions from interactive buttons

Open candidates:

- #40447 docs: fix message send flag and claude-max-api-proxy links (#10458, #…
- #45228 docs(subagents): fix bootstrap file injection list (5 files, not 2)
- #47558 docs(subagents): 6 gaps/inaccuracies in sub-agents documentation
- #47935 docs(subagents): fix 6 inaccuracies and gaps
- #49430 docs(subagents): fix 6 documentation issues (#47558)
- #55549 fix(ui): exec approval modal closes without submitting decision
- #56157 docs(subagents): fix 6 gaps/inaccuracies in sub-agents documentation
- #56163 docs: replace TODO placeholder in exec-approvals example
- #56319 fix: delete Telegram exec approval message after approval resolved
- #57308 fix(slack): wake interaction system events (rebased #56766)
- #57340 feat(telegram): handle plugin approval events in TelegramExecApprovalHandler
- #59658 docs(subagents): fix 6 gaps and inaccuracies in sub-agents documentation
- #61374 fix(slack): wake sessions for interactive block actions
- #67751 fix(slack): wake agent session on interactive reply button clicks [AI-assisted]
- #68365 docs: fix broken links and display text consistency (fixes #50828)
