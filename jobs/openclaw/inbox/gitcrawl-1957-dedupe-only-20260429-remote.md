---
repo: openclaw/openclaw
cluster_id: gitcrawl-1957-dedupe-only-20260429-remote
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
  - "#48266"
candidates:
  - "#43735"
  - "#44051"
  - "#49408"
  - "#56915"
cluster_refs:
  - "#38231"
  - "#38546"
  - "#39890"
  - "#40154"
  - "#42284"
  - "#42359"
  - "#43735"
  - "#44051"
  - "#48069"
  - "#48266"
  - "#49408"
  - "#49873"
  - "#54209"
  - "#55374"
  - "#56915"
  - "#60498"
  - "#64816"
  - "#65946"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48266 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1957 on 2026-04-29."
---

# Gitcrawl Cluster 1957

Generated from local gitcrawl run cluster 1957 for `openclaw/openclaw`.

Display title:

> Custom skills in ~/.openclaw/skills/ and <workspace>/skills/ not auto-discovered

Cluster shape from gitcrawl:

- total members: 18
- issues: 18
- pull requests: 0
- open candidates in local store: 4
- representative: #48266, currently closed in local store
- latest member update: 2026-04-28T21:55:43.594791118Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38231 Feature Request: Restore recursive skill scanning for better skill organization
- #38546 Title: Skills show as "ready" in list but "not found" in info, and can't be used by agent Steps to reproduce:
- #39890 [Feature]: Restore recursive skill scanning for better skill organization
- #40154 [Bug]: Custom workspace skills with `~/.openclaw/workspace/skills/...` are skipped as “outside configured root” in v2026.3.7
- #42284 Workspace skills not discovered despite docs and ClawHub installation
- #42359 Skills in ~/.agents/skills appear to affect slash command registration but are not always visible in available_skills
- #48069 [Bug] Global skills directory (~/.openclaw/skills) not automatically loaded for all agents
- #48266 Custom skills in ~/.openclaw/skills/ and <workspace>/skills/ not auto-discovered
- #49873 [Bug]: Custom skills from extraDirs / workspace skills/ not discovered by CLI or system prompt
- #54209 User-installed skills (openclaw-managed) not injected into agent's available_skills list
- #55374 [Bug]: Global Skills take precedence over workspace skills in loading
- #60498 skills.load.extraDirs: most skills not injected into available_skills system prompt
- #64816 Plugin-bundled skill visible to CLI but not surfaced to agent available_skills in live session
- #65946 Skills from extraDirs and workspace symlinks register as eligible but are not injected into agent sessions

Open candidates:

- #43735 Skills not loading in agent context from ~/.openclaw/workspace/skills/
- #44051 [Bug]: [skills] Skipping skill path error triggered on officially installed skills via clawhub (WSL Environment)
- #49408 [Bug]: Symbolic links for skill directories under ~/.openclaw/skills/ are not consistently resolved
- #56915 [Bug]: [Bug] Skills scanner ignores subdirectories under ~/.openclaw/skills/
