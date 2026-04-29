---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-1c4262ef87e9
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical: []
candidates: []
cluster_refs: []
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-1c4262ef87e9
source: clawsweeper_commit
commit_sha: 1c4262ef87e9397f14a3f2f88514b95b6816111b
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/1c4262ef87e9397f14a3f2f88514b95b6816111b.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-1c4262ef87e9`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/1c4262ef87e9397f14a3f2f88514b95b6816111b
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/1c4262ef87e9397f14a3f2f88514b95b6816111b.md
- Latest main at intake: 9d8de70c2009d2562c835a226440e540115d3fd7

## ClawSweeper Report

```md
---
sha: 1c4262ef87e9397f14a3f2f88514b95b6816111b
parent: f3f614fae6971e0cf2f6e1e7f4a7503de1bb5b60
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T08:56:41+01:00"
commit_committed_at: "2026-04-29T08:56:48+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:59:49+00:00
---

# Commit 1c4262e

## Summary

Found one regression in the extracted Docker wait helper usage: the Open WebUI smoke now fails before the Open WebUI container is ever started.

## Findings

### Medium: Open WebUI Docker smoke waits on a container that does not exist yet

- Kind: regression
- File: `scripts/e2e/openwebui-docker.sh`
- Line: 127
- Evidence: `scripts/e2e/openwebui-docker.sh:127` calls `docker_e2e_wait_container_bash_while_running "$OW_NAME" "$GW_NAME" ...` while waiting for the gateway HTTP surface. The helper in `scripts/lib/docker-e2e-container.sh:27` immediately returns failure if its first container argument is not running. But `$OW_NAME` is only started later at `scripts/e2e/openwebui-docker.sh:140`, so this readiness check always fails before probing the already-started gateway container.
- Impact: `pnpm test:docker:openwebui` is a documented live smoke and package script. With this commit it reports “Gateway failed to start” even when the gateway is healthy, blocking that validation lane and hiding real Open WebUI compatibility regressions.
- Suggested fix: use the gateway container as the running guard for the gateway readiness check, e.g. `docker_e2e_wait_container_bash "$GW_NAME" ...`. For the later Open WebUI readiness check at `scripts/e2e/openwebui-docker.sh:164`, use `docker_e2e_wait_container_bash_while_running "$OW_NAME" "$GW_NAME" ...` if preserving the old “stop early when Open WebUI exits” behavior matters.
- Confidence: high

## Reviewed

- Diff: `f3f614fae6971e0cf2f6e1e7f4a7503de1bb5b60..1c4262ef87e9397f14a3f2f88514b95b6816111b`
- Changed files: all 10 changed files in the prompt
- Code read: changed scripts in full, extracted Docker helper, existing Docker harness helpers, old parent version of `scripts/e2e/openwebui-docker.sh`, package/docs references for `test:docker:openwebui`
- Dependencies/web: no dependency files changed; no web lookup needed

## Tests / Live Checks

- `pnpm docs:list`
- `bash -n` on all changed shell scripts: passed
- `node --check scripts/e2e/lib/onboard/assert-config.mjs`: passed
- `git diff --check`: passed
- Simulated `docker_e2e_wait_container_bash_while_running` with a temporary fake Docker command: confirmed `ow gw ...` fails when `ow` is absent/running false, while `gw gw ...` succeeds

## Limitations

- Did not run the full Open WebUI Docker smoke. Docker is available, but no `OPENAI_API_KEY` was present in the environment or shell profile, and the static/helper simulation proves the preflight failure path without pulling/building images.
```
