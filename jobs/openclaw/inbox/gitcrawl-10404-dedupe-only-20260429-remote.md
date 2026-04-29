---
repo: openclaw/openclaw
cluster_id: gitcrawl-10404-dedupe-only-20260429-remote
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
  - "#60247"
candidates:
  - "#50887"
  - "#59076"
  - "#60247"
  - "#68442"
cluster_refs:
  - "#50887"
  - "#59076"
  - "#60247"
  - "#63315"
  - "#68442"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60247 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 10404 on 2026-04-29."
---

# Gitcrawl Cluster 10404

Generated from local gitcrawl run cluster 10404 for `openclaw/openclaw`.

Display title:

> Control UI: JSON parse error on streaming Chinese/CJK content (UTF-8 multi-byte boundary split)

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 4
- representative: #60247, currently open in local store
- latest member update: 2026-04-28T18:04:42.536457849Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #63315 Control UI: JSON parse error when tool output contains multiline strings or special characters

Open candidates:

- #50887 [Bug]: Streaming Chinese character corruption - random single characters replaced with U+FFFD
- #59076 JSON parse error leaked to Discord when streaming tool calls with long CJK text
- #60247 Control UI: JSON parse error on streaming Chinese/CJK content (UTF-8 multi-byte boundary split)
- #68442 UI chat freeze when edit tool is called with non-ASCII characters in oldText/newText
