---
repo: openclaw/openclaw
cluster_id: ghcrawl-166002-agentic-merge
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
  - "#65184"
candidates:
  - "#39673"
  - "#42025"
  - "#44070"
  - "#44417"
  - "#54429"
  - "#54517"
  - "#57188"
  - "#63561"
  - "#65184"
  - "#68287"
cluster_refs:
  - "#39673"
  - "#42025"
  - "#44070"
  - "#44417"
  - "#54429"
  - "#54517"
  - "#57188"
  - "#63561"
  - "#65184"
  - "#68287"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #65184 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166002 on 2026-04-26."
---

# GHCrawl Cluster 166002

Generated from local ghcrawl run cluster 166002 for `openclaw/openclaw`.

Display title:

> [Bug]:openclaw gateway install may fail with "Unit file openclaw-gateway.service does not exist" on migrated root + systemd --user installs

Cluster shape from ghcrawl:

- total members: 10
- issues: 10
- pull requests: 0
- open candidates in local store: 10
- representative: #65184, currently open in local store
- latest member update: 2026-04-24T18:56:27.741Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39673 [Bug]:Gateway install failed: Error: systemctl --user unavailable: Failed to connect to bus: 找不到介质
- #42025 [Bug]: Gateway service install failed systemctl enable failed
- #44070 [Bug]: openclaw gateway install failure
- #44417 Bug: systemctl --user detection fails and hangs during `sudo -u` due to SUDO_USER fallback
- #54429 Gateway Service Installation Failure: Missing systemd Service File
- #54517 Bug: systemctl enable fails on Ubuntu Server - should use systemctl --user enable for user services
- #57188 [Bug]: 2026.3.28 update breaks gateway on Linux VPS/systemd — recovery fails, required snapshot restore
- #63561 [Bug]: `openclaw gateway status` and `openclaw gateway install` falsely report user systemd unavailable while the user service is enabled and active
- #65184 [Bug]:openclaw gateway install may fail with "Unit file openclaw-gateway.service does not exist" on migrated root + systemd --user installs
- #68287 [Bug]: openclaw node install fails with 'Unit file openclaw-gateway.service does not exist' on node-only VMs
