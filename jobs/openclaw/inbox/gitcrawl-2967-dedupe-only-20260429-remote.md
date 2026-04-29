---
repo: openclaw/openclaw
cluster_id: gitcrawl-2967-dedupe-only-20260429-remote
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
  - "#48552"
candidates:
  - "#41624"
  - "#47660"
  - "#52176"
  - "#55933"
  - "#60052"
  - "#64485"
  - "#65561"
  - "#65735"
  - "#65962"
cluster_refs:
  - "#41624"
  - "#44350"
  - "#45291"
  - "#47260"
  - "#47283"
  - "#47401"
  - "#47411"
  - "#47417"
  - "#47660"
  - "#48072"
  - "#48175"
  - "#48422"
  - "#48423"
  - "#48523"
  - "#48552"
  - "#49498"
  - "#50259"
  - "#52176"
  - "#53818"
  - "#55933"
  - "#60052"
  - "#62015"
  - "#62048"
  - "#62407"
  - "#62668"
  - "#62796"
  - "#63959"
  - "#64485"
  - "#65561"
  - "#65735"
  - "#65962"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48552 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2967 on 2026-04-29."
---

# Gitcrawl Cluster 2967

Generated from local gitcrawl run cluster 2967 for `openclaw/openclaw`.

Display title:

> [Bug]: Docker self-build from `main` broken — gateway fails to start after channel-to-extension migration

Cluster shape from gitcrawl:

- total members: 31
- issues: 10
- pull requests: 21
- open candidates in local store: 9
- representative: #48552, currently closed in local store
- latest member update: 2026-04-28T21:55:43.817853647Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44350 [Bug]: Docker OPENCLAW_EXTENSIONS modules being pruned out by later step
- #45291 Claude/fix dockerfile syntax s fxar
- #47260 Extensions fail to load after Docker build: send-deps.ts missing from runtime image
- #47283 fix(docker): copy src/ into runtime image for tsx-based extension loading
- #47401 [Bug]: Official Docker runtime fails to load Telegram/Discord plugins   because /app/src is missing
- #47411 [Bug]: Docker runtime image missing src/ breaks extensions with ../../../src relative imports
- #47417 fix(docker): include src in runtime image
- #48072 fix(docker): resolve volume permission denied (EACCES) for non-root deployments
- #48175 dist/plugins/runtime/index.js missing from production build — all channel providers silently dead (v2026.3.14)
- #48422 Docker: Discord/WhatsApp channels broken — missing dist/plugins/runtime/index.js
- #48423 fix(docker): add plugins/runtime as tsdown entry for Docker channel startup
- #48523 docker: fix self-build breakage after extension migration
- #48552 [Bug]: Docker self-build from `main` broken — gateway fails to start after channel-to-extension migration
- #49498 Dockerfile: WhatsApp extension fails — missing src/ and apps/ in runtime image
- #50259 Docker build: optional extensions missing compiled index.js files
- #53818 feat: self-healing for missing bundled plugin runtime modules (npm publish pipeline regression)
- #62015 chage code
- #62048 fix: use dist/extensions for OPENCLAW_BUNDLED_PLUGINS_DIR to fix Node 24 crash
- #62407 fix(build): enable clean dist to prevent stale hashed chunks
- #62668 Fix/cache mount syntax
- #62796 Claw
- #63959 fix(docker): pre-create .openclaw dir with node ownership for named volumes

Open candidates:

- #41624 fix(docker): Change ownership of cache directory
- #47660 Dockerfile: simplify multi-stage build
- #52176 feat(docker): add optional uv installation for skills and extensions
- #55933 fix(docker): add pnpm store cache mount to prune step
- #60052 fix(docker): npm lack of perms to run install in docker
- #64485 fix(docker): add config dir defaults to prevent broken volume mounts
- #65561 fix(runtime): add missing tsdown entries for lazy runtime modules
- #65735 fix: add missing runtime entries for /status command
- #65962 fix(build): add missing config/sessions/store.runtime entry
