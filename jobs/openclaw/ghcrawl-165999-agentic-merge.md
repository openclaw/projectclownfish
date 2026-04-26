---
repo: openclaw/openclaw
cluster_id: ghcrawl-165999-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#57256"
candidates:
  - "#44426"
  - "#44932"
  - "#56968"
  - "#57256"
  - "#59894"
  - "#59942"
  - "#60177"
  - "#60819"
  - "#62599"
  - "#64183"
  - "#68171"
cluster_refs:
  - "#44426"
  - "#44932"
  - "#56968"
  - "#57256"
  - "#59894"
  - "#59942"
  - "#60177"
  - "#60819"
  - "#62599"
  - "#64183"
  - "#68171"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #57256 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165999 on 2026-04-26."
---

# GHCrawl Cluster 165999

Generated from local ghcrawl run cluster 165999 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw status falsely reports openclaw-mem0 memory as unavailable when the live gateway plugin is working

Cluster shape from ghcrawl:

- total members: 11
- issues: 11
- pull requests: 0
- open candidates in local store: 11
- representative: #57256, currently open in local store
- latest member update: 2026-04-24T18:56:31.299Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44426 [Bug]: doctor shows memory probe timeout while memory status is ready (false warning)
- #44932 [Bug]: openclaw doctor reports false memory probe timeout warning when memory is fully operational
- #56968 Bug: status shows 'Memory enabled · unavailable' for third-party memory plugins (memory-lancedb-pro)
- #57256 [Bug]: openclaw status falsely reports openclaw-mem0 memory as unavailable when the live gateway plugin is working
- #59894 [Bug]: doctor falsely reports no active memory plugin while mem0 is loaded and working
- #59942 status/doctor reports memory unavailable while memory-lancedb-pro appears registered at runtime
- #60177 [Bug]: memory-lancedb-pro loaded and working, but doctor/status reports no active memory plugin
- #60819 doctor/status memory false positive after mem0 runtime recovery
- #62599 [Bug]: openclaw status loads memory plugins locally and can report false vector state
- #64183 status: memory may show unavailable while Memoria plugin health is ok
- #68171 doctor memory-search probe has a 3 s gateway timeout too short for cold-start embeddings
