---
repo: openclaw/openclaw
cluster_id: gitcrawl-14009-dedupe-only-20260429-remote
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
  - "#47279"
candidates:
  - "#19075"
  - "#52207"
  - "#54116"
  - "#54928"
  - "#54939"
  - "#57194"
  - "#57496"
  - "#61972"
  - "#65940"
  - "#66645"
cluster_refs:
  - "#19075"
  - "#39936"
  - "#40214"
  - "#40589"
  - "#41159"
  - "#41766"
  - "#42141"
  - "#45729"
  - "#45843"
  - "#47279"
  - "#47506"
  - "#49688"
  - "#50213"
  - "#51658"
  - "#51723"
  - "#52207"
  - "#54116"
  - "#54815"
  - "#54928"
  - "#54939"
  - "#55188"
  - "#56316"
  - "#56511"
  - "#57194"
  - "#57496"
  - "#61972"
  - "#63039"
  - "#63337"
  - "#64113"
  - "#64587"
  - "#65940"
  - "#66645"
  - "#70170"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47279 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14009 on 2026-04-29."
---

# Gitcrawl Cluster 14009

Generated from local gitcrawl run cluster 14009 for `openclaw/openclaw`.

Display title:

> feat: Add DuckDuckGo as free web search provider

Cluster shape from gitcrawl:

- total members: 33
- issues: 5
- pull requests: 28
- open candidates in local store: 10
- representative: #47279, currently closed in local store
- latest member update: 2026-04-28T22:26:13.648678715Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39936 Add Serper provider support for web_search
- #40214 feat(web-search): add ZAI (智谱AI) search provider
- #40589 Add Baidu Qianfan Coding provider
- #41159 feat: add NanoGPT as API provider with web search support
- #41766 feat(plugins): add registerSearchProvider extension point for custom web search providers
- #42141 feat(web_search): add duckduckgo as a first-class provider
- #45729 [Feature]: Add baseUrl override for Brave Search API
- #45843 feat(web-search): add configurable baseUrl for Brave Search API
- #47279 feat: Add DuckDuckGo as free web search provider
- #47506 feat: add pluggable web search providers
- #49688 Plugins: add bundled Octen web search provider
- #50213 [Feature]: add web search provider baseurl for gemini, so we could use Third-party GEMINI API provider
- #51658 [Feature]: Add support for custom Brave Search API baseUrl
- #51723 feat: add Bright Data web search provider, plugin tools, and web_fetch fallback
- #54815 feat(web-search): Add Bocha Web Search provider
- #55188 plugins: add Baidu web search provider
- #56316 web_search: add optional Baidu provider via qianfan
- #56511 feat: add Serper (Google Search API) as web_search provider
- #63039 feat(web): add Bocha Web Search plugin
- #63337 feat(serper): add Serper.dev Google Search plugin
- #64113 feat(web-search): add Yep as bundled web search plugin
- #64587 feat(zai): add Z.AI Web Search API as a bundled web_search provider [AI]
- #70170 feat(duckduckgo): include DuckDuckGo in onboarding setup wizard

Open candidates:

- #19075 [Feature]: Add baseUrl option for Brave Search provider
- #52207 V2, feat(websearch): add SearXNG provider and freshness support for Tavily
- #54116 feat(google): make Gemini web search base URL configurable
- #54928 Feature: support custom Exa web_search baseUrl (or fail with explicit schema/docs guidance)
- #54939 feat(exa): support custom baseUrl in webSearch config
- #57194 feat(web-search): add SearXNG as a search provider
- #57496 Google: reuse provider config for Gemini web search
- #61972 fix: add baseUrl support for Gemini and xAI web-search/x-search tools
- #65940 fix(onboarding): include DuckDuckGo web search in setup wizard
- #66645 fix(plugins): enable DuckDuckGo web search provider by default
