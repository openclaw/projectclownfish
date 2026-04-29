---
repo: openclaw/openclaw
cluster_id: gitcrawl-2209-dedupe-only-20260429-remote
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
  - "#52613"
candidates:
  - "#46252"
cluster_refs:
  - "#40870"
  - "#46252"
  - "#50067"
  - "#52613"
  - "#53734"
  - "#70686"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52613 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2209 on 2026-04-29."
---

# Gitcrawl Cluster 2209

Generated from local gitcrawl run cluster 2209 for `openclaw/openclaw`.

Display title:

> [Bug]: Usage dashboard ignores archived session files (.jsonl.reset.*)

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 1
- representative: #52613, currently closed in local store
- latest member update: 2026-04-28T05:49:55.538162765Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40870 Usage dashboard undercounts tokens/cost — reset archive transcripts are ignored
- #50067 Usage dashboard loses historical data on session reset (/new)
- #52613 [Bug]: Usage dashboard ignores archived session files (.jsonl.reset.*)
- #53734 [Bug]: toNormalizedUsage() discards accumulated input/cache tokens — cost tracking underreports ~80% of actual billed usage
- #70686 [Bug]: Compaction checkpoint .jsonl files double-count session cost in Usage dashboard

Open candidates:

- #46252 Cost dashboard omits .jsonl.reset.<timestamp> archive files, severely undercounting daily spend for users of /new
