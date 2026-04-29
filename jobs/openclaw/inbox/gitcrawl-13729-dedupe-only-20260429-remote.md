---
repo: openclaw/openclaw
cluster_id: gitcrawl-13729-dedupe-only-20260429-remote
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
  - "#58281"
candidates:
  - "#42895"
  - "#53718"
  - "#57416"
  - "#58281"
  - "#65536"
cluster_refs:
  - "#38254"
  - "#42895"
  - "#53718"
  - "#57416"
  - "#58281"
  - "#65536"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58281 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13729 on 2026-04-29."
---

# Gitcrawl Cluster 13729

Generated from local gitcrawl run cluster 13729 for `openclaw/openclaw`.

Display title:

> fix: expand ${VAR} env variable references in user path resolution

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 5
- representative: #58281, currently open in local store
- latest member update: 2026-04-28T22:51:07.528938952Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38254 fix(dotenv): expand env references in loaded env files

Open candidates:

- #42895 fix(infra): derive home directory from PREFIX on Android/Termux
- #53718 fix(paths): expand env placeholders in resolveUserPath
- #57416 Fix project-local .env regression (#57408)
- #58281 fix: expand ${VAR} env variable references in user path resolution
- #65536 fix: prefer process.env.HOME over os.homedir() in sandbox expandPath
