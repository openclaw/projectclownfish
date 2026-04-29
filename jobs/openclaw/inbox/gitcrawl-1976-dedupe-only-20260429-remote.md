---
repo: openclaw/openclaw
cluster_id: gitcrawl-1976-dedupe-only-20260429-remote
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
  - "#44893"
candidates:
  - "#58822"
  - "#58823"
cluster_refs:
  - "#44784"
  - "#44879"
  - "#44893"
  - "#44994"
  - "#45014"
  - "#45073"
  - "#45081"
  - "#45397"
  - "#46053"
  - "#48303"
  - "#49119"
  - "#49534"
  - "#50577"
  - "#55022"
  - "#58822"
  - "#58823"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44893 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1976 on 2026-04-29."
---

# Gitcrawl Cluster 1976

Generated from local gitcrawl run cluster 1976 for `openclaw/openclaw`.

Display title:

> fix: ANTHROPIC_MODEL_ALIASES TDZ ReferenceError

Cluster shape from gitcrawl:

- total members: 16
- issues: 1
- pull requests: 15
- open candidates in local store: 2
- representative: #44893, currently closed in local store
- latest member update: 2026-04-28T18:04:42.583408368Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44784 config: fix bundled Anthropic provider startup TDZ
- #44879 fix: avoid TDZ on Anthropic model aliases in context pruning defaults
- #44893 fix: ANTHROPIC_MODEL_ALIASES TDZ ReferenceError
- #44994 fix(config): move Anthropic aliases to own module to prevent TDZ on startup
- #45014 fix(agents): prevent TDZ on ANTHROPIC_MODEL_ALIASES across chunk boundaries
- #45073 fix: resolve TDZ crash on ANTHROPIC_MODEL_ALIASES
- #45081 fix(models): lazy-init ANTHROPIC_MODEL_ALIASES to avoid TDZ crash
- #45397 fix(config): prevent ANTHROPIC_MODEL_ALIASES TDZ ReferenceError on config load (#45368)
- #46053 fix: avoid TDZ error in CLI by moving ANTHROPIC_MODEL_ALIASES inline
- #48303 fix(agent): inherit per-agent model override in embedded/subagent runs (fixes #48255)
- #49119 fix(agents): prefer agent model for subagent spawns
- #49534 fix: guard ANTHROPIC_MODEL_ALIASES initialization to prevent ReferenceError crash
- #50577 fix: retry model resolution with provider prefix for bare IDs with slash (Issue #50509)
- #55022 fix: auto-resolve model provider when model ID matches configured pro…

Open candidates:

- #58822 fix(agents): subagent model precedence — global default shadowed by parent agent's own model
- #58823 fix(agents): restore global subagent model default priority over agent own model
