---
repo: openclaw/openclaw
cluster_id: gitcrawl-2133-dedupe-only-20260429-remote
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
  - "#49624"
candidates:
  - "#50992"
  - "#52412"
  - "#66532"
cluster_refs:
  - "#42172"
  - "#49624"
  - "#50992"
  - "#52412"
  - "#66531"
  - "#66532"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49624 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2133 on 2026-04-29."
---

# Gitcrawl Cluster 2133

Generated from local gitcrawl run cluster 2133 for `openclaw/openclaw`.

Display title:

> Plugin SDK: expose steer/abort APIs (queueEmbeddedPiMessage, abortEmbeddedPiRun) for channel plugins

Cluster shape from gitcrawl:

- total members: 6
- issues: 5
- pull requests: 1
- open candidates in local store: 3
- representative: #49624, currently closed in local store
- latest member update: 2026-04-28T22:51:07.390344524Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42172 agent RPC runs cannot be aborted via chat.abort
- #49624 Plugin SDK: expose steer/abort APIs (queueEmbeddedPiMessage, abortEmbeddedPiRun) for channel plugins
- #66531 [Feature]: Add agent.abort RPC to cancel embedded agent runs

Open candidates:

- #50992 feat(plugin-sdk): expose steer/abort APIs for active agent runs
- #52412 [Feature]: Plugin API for aborting agent runs (api.runtime.agent.abort)
- #66532 [Feature]: Expose abortEmbeddedPiRun family on api.runtime.agent
