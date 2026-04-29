---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-4932e91517ad
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-4932e91517ad
source: clawsweeper_commit
commit_sha: 4932e91517ad04797ae57283a602bd5c2ac92199
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/4932e91517ad04797ae57283a602bd5c2ac92199.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-4932e91517ad`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/4932e91517ad04797ae57283a602bd5c2ac92199
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/4932e91517ad04797ae57283a602bd5c2ac92199.md
- Latest main at intake: 67e8d35f1cf8ef4b8173d963e250c776af355099

## ClawSweeper Report

```md
---
sha: 4932e91517ad04797ae57283a602bd5c2ac92199
parent: 39513771bb76aedef021675b95a1d65985b73cb5
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T06:35:00+01:00"
commit_committed_at: "2026-04-29T06:35:54+01:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T05:40:08Z
---

# Commit 4932e91

## Summary

Found one low-severity reliability issue in the Windows smoke recovery change: the new retry/recovery loop still aborts on the first failed probe under `set -e`, so the added deadline and `gateway start` recovery path do not run for the unavailable-gateway case it is meant to handle.

## Findings

### Low: failed gateway probes still exit before the recovery loop can run

- Kind: reliability
- File: `scripts/e2e/parallels-windows-smoke.sh`
- Line: 2405
- Evidence: `scripts/e2e/parallels-windows-smoke.sh` runs with `set -euo pipefail`, and `verify_gateway_reachable` assigns `probe_json="$(guest_run_openclaw ... gateway probe ... --json)"` before the retry/recovery logic. A failed `gateway probe --json` exits with status 1 when no gateway is reachable, even though it prints JSON. Under `set -e`, that assignment exits the helper immediately, before `run_gateway_daemon_action start` at line 2422 can execute. I verified locally with `node scripts/run-node.mjs gateway probe --url ws://127.0.0.1:9 --timeout 250 --json`, which returned `rc=1` with `{ "ok": false, ... }`, and with a Bash `set -e` command-substitution smoke showing the function exits before later statements.
- Impact: the Windows Parallels smoke can still fail immediately when the gateway is unavailable instead of waiting up to `TIMEOUT_GATEWAY_S` and attempting the new start recovery.
- Suggested fix: capture the probe exit status without triggering `errexit`, for example `if probe_json="$(guest_run_openclaw ...)"; then probe_rc=0; else probe_rc=$?; fi`, then parse any JSON output and continue into the retry/recovery path on non-ok results.
- Confidence: high

## Reviewed

- Diff: `39513771bb76aedef021675b95a1d65985b73cb5..4932e91517ad04797ae57283a602bd5c2ac92199`
- Changed files: `scripts/e2e/parallels-windows-smoke.sh`, `test/scripts/parallels-smoke-model.test.ts`
- Code read: changed helper, gateway daemon action helper, fresh/upgrade call sites, phase timeout wrapper, gateway probe CLI output/exit behavior
- Dependencies/web: no dependency changes; no web lookup needed

## Tests / Live Checks

- `pnpm install` to restore missing local dependencies
- `pnpm test test/scripts/parallels-smoke-model.test.ts` passed
- `bash -n scripts/e2e/parallels-windows-smoke.sh` passed
- `git diff --check 39513771bb76aedef021675b95a1d65985b73cb5..4932e91517ad04797ae57283a602bd5c2ac92199` passed
- Local CLI probe against unused port verified `gateway probe --json` exits 1 on unreachable gateway

## Limitations

- Did not run the full Parallels Windows smoke VM lane.
```
