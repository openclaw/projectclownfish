---
repo: openclaw/openclaw
cluster_id: gitcrawl-14034-dedupe-only-20260429-remote
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
  - "#40850"
candidates:
  - "#44986"
  - "#50479"
  - "#58340"
  - "#67795"
cluster_refs:
  - "#39463"
  - "#40839"
  - "#40850"
  - "#44076"
  - "#44986"
  - "#49594"
  - "#49673"
  - "#50479"
  - "#51436"
  - "#58340"
  - "#67795"
  - "#70432"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40850 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14034 on 2026-04-29."
---

# Gitcrawl Cluster 14034

Generated from local gitcrawl run cluster 14034 for `openclaw/openclaw`.

Display title:

> fix(install): detect and warn about multiple Node.js environments

Cluster shape from gitcrawl:

- total members: 12
- issues: 1
- pull requests: 11
- open candidates in local store: 4
- representative: #40850, currently closed in local store
- latest member update: 2026-04-28T22:51:07.499275406Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39463 fix: improve npm install resilience on low-memory systems
- #40839 Install script: detect multiple Node.js environments and warn
- #40850 fix(install): detect and warn about multiple Node.js environments
- #44076 fix(install): remove redundant --probe flag
- #49594 fix(installer): source nvm before Node detection (#49556)
- #49673 fix(installer): load nvm before Node.js version check
- #51436 fix(install): suppress gum ioctl errors and fix premature @next fallback
- #70432 fix(install): detect silent brew install failures on macOS

Open candidates:

- #44986 feat: skip install when local version matches target in install.sh
- #50479 fix(install.sh): warn about .npmrc prefix override and sudo npm incom…
- #58340 feat(installer): add April Fools Day holiday tagline
- #67795 Update install.sh
