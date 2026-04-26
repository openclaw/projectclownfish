---
repo: openclaw/openclaw
cluster_id: ghcrawl-156903-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#65362"
candidates:
  - "#60753"
  - "#65207"
  - "#65362"
cluster_refs:
  - "#60753"
  - "#65207"
  - "#65362"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65362 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156903 on 2026-04-26."
---

# GHCrawl Cluster 156903

Generated from local ghcrawl run cluster 156903 for `openclaw/openclaw`.

Display title:

> [Bug]: Openclaw can't find Ollama local models, 10.4.2026 it worked fine, but now it doesn't

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #65362, currently open in local store
- latest member update: 2026-04-24T18:56:24.011Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #60753 [Bug]: Can't use ollama(llama3.1:8b) on may macmini
- #65207 [Bug] Ollama models not displayed in openclaw models list (2026.4.11)
- #65362 [Bug]: Openclaw can't find Ollama local models, 10.4.2026 it worked fine, but now it doesn't
