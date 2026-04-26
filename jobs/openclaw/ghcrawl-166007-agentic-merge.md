---
repo: openclaw/openclaw
cluster_id: ghcrawl-166007-agentic-merge
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
  - "#39463"
candidates:
  - "#39463"
  - "#40850"
  - "#44986"
  - "#49594"
  - "#49673"
  - "#50479"
  - "#51436"
  - "#58340"
  - "#67795"
cluster_refs:
  - "#39463"
  - "#40850"
  - "#44986"
  - "#49594"
  - "#49673"
  - "#50479"
  - "#51436"
  - "#58340"
  - "#67795"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #39463 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166007 on 2026-04-26."
---

# GHCrawl Cluster 166007

Generated from local ghcrawl run cluster 166007 for `openclaw/openclaw`.

Display title:

> fix: improve npm install resilience on low-memory systems

Cluster shape from ghcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 9
- representative: #39463, currently open in local store
- latest member update: 2026-04-25T07:30:09.919Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39463 fix: improve npm install resilience on low-memory systems
- #40850 fix(install): detect and warn about multiple Node.js environments
- #44986 feat: skip install when local version matches target in install.sh
- #49594 fix(installer): source nvm before Node detection (#49556)
- #49673 fix(installer): load nvm before Node.js version check
- #50479 fix(install.sh): warn about .npmrc prefix override and sudo npm incom…
- #51436 fix(install): suppress gum ioctl errors and fix premature @next fallback
- #58340 feat(installer): add April Fools Day holiday tagline
- #67795 Update install.sh
