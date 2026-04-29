---
repo: openclaw/openclaw
cluster_id: gitcrawl-14016-dedupe-only-20260429-remote
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
  - "#55464"
candidates:
  - "#38789"
  - "#40663"
  - "#44129"
  - "#45912"
  - "#48034"
  - "#59219"
  - "#59688"
  - "#63312"
  - "#66385"
  - "#67480"
cluster_refs:
  - "#38789"
  - "#40518"
  - "#40663"
  - "#43526"
  - "#43789"
  - "#44129"
  - "#45912"
  - "#48034"
  - "#49198"
  - "#49215"
  - "#49604"
  - "#50458"
  - "#51471"
  - "#55464"
  - "#55800"
  - "#57189"
  - "#59219"
  - "#59446"
  - "#59688"
  - "#60145"
  - "#60155"
  - "#60513"
  - "#61403"
  - "#61515"
  - "#63312"
  - "#66385"
  - "#67480"
  - "#69093"
  - "#70770"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55464 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14016 on 2026-04-29."
---

# Gitcrawl Cluster 14016

Generated from local gitcrawl run cluster 14016 for `openclaw/openclaw`.

Display title:

> fix: fallback to file copy when symlink creation fails on Windows

Cluster shape from gitcrawl:

- total members: 29
- issues: 1
- pull requests: 28
- open candidates in local store: 10
- representative: #55464, currently closed in local store
- latest member update: 2026-04-28T22:51:06.924445091Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40518 fix(skills): expand tilde in workspace path before skill root validation
- #43526 fix: remap skill paths to sandbox workspace in non-main sessions
- #43789 [AI-assisted] fix(agents): compact sandbox skill paths
- #49198 Fix/dist-runtime skill copy instead of symlink
- #49215 fix(plugins): stage bundled skills inside runtime root
- #49604 fix: fallback to copy when symlink fails on Windows
- #50458 fix: keep bundled plugin skills inside dist-runtime
- #51471 Refresh skill prompts inside sandbox workspaces
- #55464 fix: fallback to file copy when symlink creation fails on Windows
- #55800 Build: fall back on Windows symlink errors
- #57189 Fallback when Windows runtime symlinks are denied
- #59446 fix(build): fall back to file copy on Windows when file symlink is denied
- #60145 [Bug]: security audit symlink_escape probe uses wrong boundary (workspace root vs skills directory)
- #60155 fix(security): align audit symlink_escape boundary with skill loader
- #60513 fix(security): align audit symlink_escape boundary with skill loader
- #61403 fix(win): fall back to file copy when symlink requires Developer Mode
- #61515 fix(skills): resolve bundled runtime overlay paths to silence escaped-root warnings
- #69093 build: avoid readlink crashes in Windows runtime deps fingerprinting
- #70770 fix: materialize openclaw package root in staged plugin runtime deps

Open candidates:

- #38789 fix(agents): rebuild sandbox skill prompt paths
- #40663 fix(agents): correct sandbox path guidance in system prompt
- #44129 fix(skills): exempt managed skills from path escaping checks on WSL (#44051)
- #45912 fix(skills): allow symlinked skills in configured roots
- #48034 fix: sync skills to workspace in rw mode
- #59219 fix[Bug]: [skills] Skipping skill path error triggered on officially installed skills via clawhub (WSL Environment)
- #59688 fix(skills): allow managed-skill symlinks pointing to other known skill roots
- #63312 Skills: allow symlinked skill dirs in user-managed .agents/skills/
- #66385 feat(skills): add allowExternalSkillsIn config
- #67480 fix(skills): prevent nested redirect when skills root already has skills
