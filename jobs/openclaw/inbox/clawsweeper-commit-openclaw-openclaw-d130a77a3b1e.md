---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-d130a77a3b1e
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-d130a77a3b1e
source: clawsweeper_commit
commit_sha: d130a77a3b1e9a66c769e55d946360350fd3f651
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/d130a77a3b1e9a66c769e55d946360350fd3f651.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-d130a77a3b1e`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/d130a77a3b1e9a66c769e55d946360350fd3f651
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/d130a77a3b1e9a66c769e55d946360350fd3f651.md
- Latest main at intake: aa1bccfe8017f8d14ce3c2a858637704b79fba6b

## ClawSweeper Report

```md
---
sha: d130a77a3b1e9a66c769e55d946360350fd3f651
parent: e27fe55aa8e345806e252c2e1d12f9a442b894d4
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T04:34:59+01:00"
commit_committed_at: "2026-04-29T04:35:03+01:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T03:38:20Z
---

# Commit d130a77

## Summary

The executable defaults now use `openai/gpt-5.5`, and the pinned upstream model catalog includes `gpt-5.5`, so I did not find a runtime regression in the smoke path. I did find a low-severity help-text regression: all four scripts still advertise the old `openai/gpt-5.4` default.

## Findings

### Low: Smoke script help still documents the old OpenAI default

- Kind: bug
- File: `scripts/e2e/parallels-linux-smoke.sh`
- Line: 109
- Evidence: `bash <script> --help` still prints `Default: openai/gpt-5.4 for the OpenAI lane` in all changed scripts, while the provider switch now defaults `OPENCLAW_PARALLELS_OPENAI_MODEL` to `openai/gpt-5.5` at `scripts/e2e/parallels-linux-smoke.sh:212`, `scripts/e2e/parallels-macos-smoke.sh:269`, `scripts/e2e/parallels-npm-update-smoke.sh:217`, and `scripts/e2e/parallels-windows-smoke.sh:260`.
- Impact: Operators relying on `--help` can run the OpenAI lane believing it uses `gpt-5.4` while it actually uses `gpt-5.5`, which affects expected model behavior and billing.
- Suggested fix: Update the four `usage()` blocks to say `Default: openai/gpt-5.5 for the OpenAI lane`.
- Confidence: high

## Reviewed

- Diff: `e27fe55aa8e345806e252c2e1d12f9a442b894d4..d130a77a3b1e9a66c769e55d946360350fd3f651`
- Changed files: `scripts/e2e/parallels-linux-smoke.sh`, `scripts/e2e/parallels-macos-smoke.sh`, `scripts/e2e/parallels-npm-update-smoke.sh`, `scripts/e2e/parallels-windows-smoke.sh`
- Code read: provider option parsing, `MODEL_ID` defaults, `openclaw models set` call sites, onboard/auth setup call sites, OpenAI provider defaults and catalog handling
- Dependencies/web: checked pinned `@mariozechner/pi-ai@0.70.5` tarball; it includes direct `openai` `gpt-5.5` catalog metadata. OpenAI’s own release note says GPT-5.5 and GPT-5.5 Pro became API-available on April 24, 2026. ([openai.com](https://openai.com/index/introducing-gpt-5-5/))

## Tests / Live Checks

- `pnpm docs:list`
- `bash -n` on all four changed scripts
- `bash <script> --help | rg 'Default: openai/gpt-5\.'` on all four changed scripts
- `git diff --check e27fe55aa8e345806e252c2e1d12f9a442b894d4..d130a77a3b1e9a66c769e55d946360350fd3f651`
- Live Parallels smoke not run: `prlctl` unavailable and no `OPENAI_API_KEY` in env or `~/.profile`.

## Limitations

- Full Parallels E2E execution was not feasible in this runner.
```
