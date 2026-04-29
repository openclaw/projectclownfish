---
repo: openclaw/openclaw
cluster_id: gitcrawl-2283-dedupe-only-20260429-remote
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
  - "#61087"
candidates:
  - "#60652"
  - "#60808"
  - "#61087"
  - "#61100"
cluster_refs:
  - "#60652"
  - "#60808"
  - "#61087"
  - "#61100"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61087 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2283 on 2026-04-29."
---

# Gitcrawl Cluster 2283

Generated from local gitcrawl run cluster 2283 for `openclaw/openclaw`.

Display title:

> fix(discord): advertise upload-file action so agents can discover file-send capability

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- representative: #61087, currently open in local store
- latest member update: 2026-04-24T18:56:23.889Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #60652 [Bug]: Discord message tool never advertises upload-file/sendAttachment — agents cannot discover file-send capability
- #60808 fix(discord): advertise upload-file action in describeDiscordMessageTool
- #61087 fix(discord): advertise upload-file action so agents can discover file-send capability
- #61100 feat(discord): add upload-file action support [claude-generated]
