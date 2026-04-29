---
repo: openclaw/openclaw
cluster_id: gitcrawl-2064-dedupe-only-20260429-remote
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
  - "#51288"
candidates:
  - "#41851"
  - "#43061"
  - "#44445"
  - "#59697"
cluster_refs:
  - "#41709"
  - "#41851"
  - "#42616"
  - "#42805"
  - "#42807"
  - "#42975"
  - "#43061"
  - "#44445"
  - "#50009"
  - "#50796"
  - "#50920"
  - "#51288"
  - "#53588"
  - "#59697"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51288 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2064 on 2026-04-29."
---

# Gitcrawl Cluster 2064

Generated from local gitcrawl run cluster 2064 for `openclaw/openclaw`.

Display title:

> fix: strip relevant-memories blocks from user messages in Control UI

Cluster shape from gitcrawl:

- total members: 14
- issues: 0
- pull requests: 14
- open candidates in local store: 4
- representative: #51288, currently closed in local store
- latest member update: 2026-04-28T22:51:07.305486834Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41709 fix(directives): preserve indentation inside code blocks during whitespace normalization
- #42616 fix: preserve fenced code indentation when stripping reply tags
- #42805 fix(directives): preserve whitespace inside fenced code blocks
- #42807 Reply: preserve indentation after stripping inline tags
- #42975 fix: preserve fenced code block indentation in directive whitespace normalization
- #50009 fix(directives): preserve fenced code block indentation
- #50796 fix(control-ui): hide relevant-memories scaffolding in chat output
- #50920 fix(ui): hide assistant internal scaffolding in webchat
- #51288 fix: strip relevant-memories blocks from user messages in Control UI
- #53588 fix: strip <relevant-memories> tags from user messages in WebChat UI

Open candidates:

- #41851 fix: preserve code block indentation in duplicate block collapsing
- #43061 fix: resolve 3 high-impact bugs (#42576, #42068, #42165)
- #44445 fix(session-memory): strip channel-injected metadata from user messages before storing
- #59697 fix: strip <relevant-memories> injected by memory plugin from user messages in WebUI
