---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-806a0119f3cd
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-806a0119f3cd
source: clawsweeper_commit
commit_sha: 806a0119f3cd0683c1b7797f835dc09203253948
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/806a0119f3cd0683c1b7797f835dc09203253948.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-806a0119f3cd`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/806a0119f3cd0683c1b7797f835dc09203253948
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/806a0119f3cd0683c1b7797f835dc09203253948.md
- Latest main at intake: 0fc303232506cdcce42306ff71a2b3c657fe2d31

## ClawSweeper Report

```md
---
sha: 806a0119f3cd0683c1b7797f835dc09203253948
parent: aa84b738b6eaeb00689d4d0952c5904cece57137
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T05:25:23+01:00"
commit_committed_at: "2026-04-29T05:25:42+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T04:29:34Z
---

# Commit 806a011

## Summary

Found one release-CI regression in the new shared live-test Docker image path.

## Findings

### Medium: Shared live-test image omits plugin dependencies required by reused Docker live suites

- Kind: regression
- File: `.github/workflows/openclaw-live-and-e2e-checks-reusable.yml`
- Line: 1328
- Evidence: The new shared image is built once with only `OPENCLAW_EXTENSIONS=matrix`, then `validate_live_docker_provider_suites` runs all Docker live backend suites with `OPENCLAW_LIVE_IMAGE` and `OPENCLAW_SKIP_DOCKER_BUILD=1`. Existing suite wrappers still declare extra build requirements: `scripts/test-live-acp-bind-docker.sh:238` appends `acpx`, and `scripts/test-live-codex-harness-docker.sh:221` appends `codex`, before calling `scripts/test-live-build-docker.sh`. But `scripts/test-live-build-docker.sh:25` exits after inspecting/pulling the image when `OPENCLAW_SKIP_DOCKER_BUILD=1`, so those appended extension build args are never applied. `extensions/acpx/package.json:6` depends on packages such as `acpx`, `@zed-industries/codex-acp`, and `@agentclientprotocol/claude-agent-acp`, which are not root dependencies.
- Impact: Release live/E2E Docker provider suites that exercise ACP bind, and potentially Codex harness behavior, can now pull the shared `matrix`-only image and run without the plugin dependency set they previously built into their lane image. This can break the release validation path even when product code is healthy.
- Suggested fix: Build the shared live-test image with the union of plugin extensions required by all reused Docker live suites, at least `matrix codex acpx`, or keep separate image variants keyed by required extension set. Alternatively, do not set `OPENCLAW_SKIP_DOCKER_BUILD=1` for lanes that need additional build extensions.
- Confidence: high

## Reviewed

- Diff: `aa84b738b6eaeb00689d4d0952c5904cece57137..806a0119f3cd0683c1b7797f835dc09203253948`
- Changed files: `.github/workflows/openclaw-live-and-e2e-checks-reusable.yml`, `docs/ci.md`, `docs/help/testing.md`
- Code read: changed workflow in full around live/E2E jobs, prior workflow version, Docker live wrapper scripts, live staging script, Dockerfile build target, ACPX/Codex package manifests, relevant live tests
- Dependencies/web: no external web needed; issue is established from local workflow and script contracts

## Tests / Live Checks

- `pnpm docs:list`
- `pnpm check:workflows` passed
- `git diff --check aa84b738b6eaeb00689d4d0952c5904cece57137..806a0119f3cd0683c1b7797f835dc09203253948` passed
- `gh api repos/openclaw/openclaw/commits/806a0119f3cd0683c1b7797f835dc09203253948/pulls` returned no associated PRs

## Limitations

- Did not build/push or run the GHCR/Blacksmith live Docker suites locally; the finding is based on traced workflow/script behavior.
```
