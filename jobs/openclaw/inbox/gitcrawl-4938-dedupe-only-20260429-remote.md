---
repo: openclaw/openclaw
cluster_id: gitcrawl-4938-dedupe-only-20260429-remote
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
  - "#39786"
candidates:
  - "#42304"
  - "#42350"
  - "#59914"
cluster_refs:
  - "#39033"
  - "#39786"
  - "#40101"
  - "#40123"
  - "#41382"
  - "#41413"
  - "#41565"
  - "#41735"
  - "#41908"
  - "#42000"
  - "#42123"
  - "#42136"
  - "#42283"
  - "#42304"
  - "#42307"
  - "#42350"
  - "#42566"
  - "#43090"
  - "#43433"
  - "#43744"
  - "#44029"
  - "#44201"
  - "#44830"
  - "#45002"
  - "#45121"
  - "#45214"
  - "#46718"
  - "#47644"
  - "#47869"
  - "#48275"
  - "#48276"
  - "#48298"
  - "#48672"
  - "#49466"
  - "#50006"
  - "#50016"
  - "#51250"
  - "#51508"
  - "#51674"
  - "#52041"
  - "#52854"
  - "#53196"
  - "#53325"
  - "#53435"
  - "#53545"
  - "#53737"
  - "#54304"
  - "#54399"
  - "#54434"
  - "#55599"
  - "#55984"
  - "#56350"
  - "#56571"
  - "#57631"
  - "#58118"
  - "#58974"
  - "#58996"
  - "#59914"
  - "#60681"
  - "#61978"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39786 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4938 on 2026-04-29."
---

# Gitcrawl Cluster 4938

Generated from local gitcrawl run cluster 4938 for `openclaw/openclaw`.

Display title:

> docs(plugins): add @aramisfa/openclaw-a2a-outbound to community plugins

Cluster shape from gitcrawl:

- total members: 60
- issues: 0
- pull requests: 60
- open candidates in local store: 3
- representative: #39786, currently closed in local store
- latest member update: 2026-04-28T21:55:43.767788323Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39033 docs: add @awsoft/ets — Email Token Saver plugin
- #39786 docs(plugins): add @aramisfa/openclaw-a2a-outbound to community plugins
- #40101 Add JuhBDI — BDI governance plugin for AI agents
- #40123 docs: add ClawdBoost to community plugins
- #41382 docs(plugins): add Memory-Munch to community plugin list
- #41413 Add Carapace to community plugins
- #41565 feat(cards): add shared adaptive card rendering for all channels
- #41735 docs(plugins): add Adaptive Cards to community plugins
- #41908 docs(concepts): add Adaptive Cards documentation
- #42000 docs(plugins): add Codex CLI Session community plugin
- #42123 docs(plugins): add mindkeeper to community plugins list
- #42136 docs: add openclaw-feishu-custom to community plugins
- #42283 docs: add MCP Bridge to community plugins
- #42307 web: add inline Adaptive Card rendering in chat
- #42566 docs: add Tier Router community plugin listing
- #43090 docs: add Vocab Coach community plugin
- #43433 docs: add @memorilabs/openclaw-memori to community plugins
- #43744 docs: add memory-openviking community plugin
- #44029 docs: add @civic/openclaw-google to community plugins
- #44201 docs: add Memory Core Plus to community plugins
- #44830 docs: add ClawCollect to community plugins [AI-assisted]
- #45002 docs: add ratelimit-retry to community plugins
- #45121 docs: add TweetClaw community plugin
- #45214 docs: add n8n-as-code community plugin listing
- #46718 docs(plugins): add MemoLite community listing
- #47644 docs: add AARI Execution Firewall to community plugins
- #47869 docs: add experience-replay community plugin
- #48275 docs: add Cortex Memory to community plugins
- #48276 docs: add ClawTalk community plugin listing
- #48298 Docs: add Lightcone to community plugins
- #48672 docs(plugins): add ClawPool community plugins
- #49466 docs: add bamdra-openclaw-memory to community plugins
- #50006 Add ContentClaw to community plugins
- #50016 docs: add MAX messenger plugin to community plugins list
- #51250 Add Qmemory to community plugins
- #51508 docs: add cc-soul to community plugins
- #51674 feat: add openclaw-ydim community plugin
- #52041 docs: add Google Chat Pub/Sub to community plugins
- #52854 Docs/plugins: add OpenClaw China Channels listing
- #53196 docs: Add LobsterMail to community plugins
- #53325 Add LobsterMail community plugin
- #53435 Add MAX Messenger to community plugins
- #53545 docs: add tickflow-assist to community plugins
- #53737 docs: add Team Ops community plugin
- #54304 docs: add @honeybbq/openclaw-teamspeak to community plugins page
- #54399 add AIFBA Amazon Listing Analyzer community plugin
- #54434 docs: add Sage (Gen Digital) to community plugins
- #55599 docs(plugins): add ExperienceEngine to community plugins
- #55984 Add @moltenbot/openclaw-plugin-statocyst to community plugins
- #56350 docs: add ElevenLabs STT to community plugins
- #56571 docs: add OrgX community plugin listing
- #57631 docs: add Pompelmi Attachment Firewall to community plugins
- #58118 docs: add EchoMemory plugin to community listing
- #58974 docs: add OSOP workflow skills to community plugins
- #58996 docs: add AxonFlow governance plugin to community plugins
- #60681 docs: add memory-lancedb-pro and openclaw-a2a-gateway to community plugins
- #61978 Update community.md new plugin (mdpersona)

Open candidates:

- #42304 feat(android): add inline Adaptive Card rendering in chat
- #42350 feat(ios): add inline Adaptive Card rendering in chat
- #59914 docs: add financialclaw to community plugins
