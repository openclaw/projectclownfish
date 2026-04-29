# Clownfish Internal Feature Map

Read when: changing Clownfish automation, debugging a generated PR, wiring
comment commands, or deciding where a new lane belongs.

This document explains how the current Clownfish features fit together. It is
an internal maintainer map, not a runbook with secrets. Keep token values,
private key material, and one-off execution windows out of this file.

## Design Shape

Clownfish is a conservative, targeted automation layer for OpenClaw issue and
PR maintenance. It does not scan the whole backlog by itself. It takes a known
cluster, hydrates current GitHub state, asks Codex for a structured decision,
then lets deterministic scripts perform the allowed writes.

The core invariants:

- One cluster maps to one job file.
- One implementation path maps to one branch: `clownfish/<cluster-id>`.
- One branch should produce or update one PR.
- Codex workers do not get GitHub write tokens.
- GitHub writes happen through deterministic scripts with live-state checks.
- Merge stays closed unless a maintainer explicitly opens the merge gate.
- Security-sensitive work is out of scope and must be routed elsewhere.

## Main Objects

### Job File

Path: `jobs/<repo-slug>/inbox/*.md`

A job file is the durable request. It contains frontmatter for the repo,
cluster id, refs, mode, allowed actions, gates, and the maintainer prompt. It
is committed before dispatch because Actions reads the job file from GitHub.

Common creation paths:

- `npm run create-job -- --repo openclaw/openclaw --refs 123 --prompt-file /tmp/prompt.md`
- `npm run create-job -- --from-report ../clawsweeper/records/.../items/123.md`
- gitcrawl import scripts for larger clustered backlog batches

`create-job` checks for an existing matching PR or branch before writing a new
job. That is the primary duplicate-PR guard.

### Cluster Plan

Path: `.projectclownfish/runs/<run>/cluster-plan.json`

Created by `scripts/plan-cluster.mjs`. It hydrates the listed GitHub refs,
linked refs, labels, bodies, comments, PR files, PR reviews, PR review
comments, checks, and current `main` state. The Codex worker receives this as
its live evidence bundle.

### Worker Result

Path: `.projectclownfish/runs/<run>/result.json`

Created by `scripts/run-worker.mjs` via `codex exec` using
`schemas/codex-result.schema.json`. The worker can recommend actions and fix
artifacts, but it must not mutate GitHub directly.

`scripts/review-results.mjs` validates the result before any follow-up lane
trusts it.

### Fix Artifact

Path: `.projectclownfish/runs/<run>/fix-artifact.json` and embedded result
fields.

A fix artifact tells the deterministic executor how to repair a contributor
branch or create/update a Clownfish replacement branch. It includes likely
files, validation commands, credit notes, changelog requirements, source PRs,
and the planned PR title/body.

### Published Ledger

Paths:

- `results/runs/*.json`
- `results/openclaw/*.md`
- `apply-report.json`
- `README.md` dashboard sections

These are the sanitized durable record. Full prompts, transcripts, and raw run
artifacts stay in Actions artifacts or local `.projectclownfish/runs`.

## Modes

### `plan`

Read-only recommendation mode. The worker classifies the cluster and returns
structured JSON. No GitHub writes should happen.

### `execute`

Structured-result application mode. It can apply reviewed safe comments,
closures, and explicit merge actions, but only through deterministic scripts
and only when gates permit.

### `autonomous`

Full targeted repair mode. Clownfish hydrates live state, asks Codex to produce
or refine a fix plan, then `execute-fix-artifact` can repair a branch or open a
replacement PR. Direct mutation still happens outside Codex.

## Cloud Worker Flow

Workflow: `.github/workflows/cluster-worker.yml`

The cluster worker has two jobs:

1. `cluster`
   - checks out Clownfish
   - mints a read GitHub App token when configured
   - installs Codex
   - validates the job
   - hydrates the cluster
   - runs Codex in read-only mode
   - reviews the structured result
   - uploads transfer artifacts

2. `execute`
   - runs only for `execute` or `autonomous`
   - mints a write GitHub App token when configured
   - downloads worker artifacts
   - runs `execute-fix-artifact`
   - runs `apply-result`
   - runs `post-flight`
   - labels Clownfish targets
   - uploads final artifacts

The workflow concurrency group is based on job path and mode, so repeat
dispatches of the same job queue instead of racing each other.

## Creating Implementation PRs

Script: `scripts/execute-fix-artifact.mjs`

This is the PR creation and branch repair engine.

It can:

- update a maintainer-editable contributor branch when that path is safe
- fall back to a replacement branch when the source branch is uneditable or
  unsafe
- create or update `clownfish/<cluster-id>`
- push checkpoint commits after Codex edits
- run changed-surface validation
- run Codex `/review`
- address Codex review findings
- open or update the target PR
- preserve contributor credit in co-author trailers, PR body, and closeout comments

The executor prepares a temporary checkout of the target repo. Codex edits that
checkout without GitHub credentials. The deterministic executor commits,
pushes, opens PRs, and comments using the GitHub token.

When replacing a meaningful contributor PR, the executor fetches the source PR
author, skips bot authors, adds `Co-authored-by` trailers to replacement
checkpoint commits, records carried-forward credit in the replacement PR body,
and says in the source close comment that the contribution is carried forward
rather than rejected.

Generated Clownfish PRs are marked by:

- branch prefix: `clownfish/`
- `clownfish` label from `scripts/tag-clownfish-targets.mjs`
- author usually `app/openclaw-clownfish`

Current operational gotcha: OpenClaw's PR queue policy can close PRs when the
Clownfish app author has more than 10 active PRs. That is a target-repo policy
interaction, not evidence that the generated PR is invalid. Reduce or land the
active Clownfish queue before reopening those PRs.

Replacement PR creation also has a per-area backpressure guard. Before opening a
new `clownfish/*` replacement branch, `execute-fix-artifact` groups the proposed
`likely_files` into touched areas such as `extensions/discord`, `src/core`, or
`docs`, reads open Clownfish PRs in the target repo, and blocks if the same area
already has `CLOWNFISH_MAX_ACTIVE_PRS_PER_AREA` open Clownfish PRs. The default
limit is `50`; set it to `0` only for a deliberately uncapped execution window.
Common changelog and release-note files are ignored for this backpressure check
because they are shared support files rather than a meaningful repair area.

## ClawSweeper Commit Findings

Workflow: `.github/workflows/commit-finding-intake.yml`
Script: `scripts/commit-finding-intake.mjs`

ClawSweeper can dispatch `clawsweeper_commit_finding` when a main-branch commit
review report has `result: findings`. Clownfish treats that report as a source
finding, not as an order to open a PR.

The intake step fetches the report from latest `openclaw/clawsweeper@main`,
writes one audit file, and then decides whether an automatic repair PR is
allowed:

- audit path: `results/commit-findings/<repo-slug>/<sha>.md`
- job path: `jobs/<owner>/inbox/clawsweeper-commit-<repo-slug>-<shortsha>.md`
- branch: `clownfish/clawsweeper-commit-<repo-slug>-<shortsha>`

Non-finding, disabled, security/privacy/supply-chain, and broad findings stop
at the audit record. Eligible ordinary bug/regression/reliability findings get a
deterministic synthetic Clownfish result and fix artifact. That skips the normal
cluster-planning Codex pass and sends the report straight to
`execute-fix-artifact`, where Codex is used for the repair loop against latest
target `main`.

Commit-finding fix artifacts set `allow_no_pr: true`. If the repair loop
verifies the report but produces no target-repo diff, Clownfish records a clean
skipped no-PR outcome instead of failing the workflow.

The generated job uses `source: clawsweeper_commit` and may have no issue/PR
`candidates`. The fix artifact uses `repair_strategy: new_fix_pr`; merge and
close actions remain blocked.

## Applying Comments, Closures, And Merges

Script: `scripts/apply-result.mjs`

This script owns safe GitHub mutations from reviewed worker results.

It re-fetches every live target before writing. It blocks when:

- the target changed since review
- the target is closed
- the target is maintainer-authored and not explicitly allowed
- the target is security-sensitive
- the job does not allow the action
- the action lacks required canonical/fix evidence
- merge preflight is incomplete

Close comments include idempotency markers so reruns do not post duplicates.

Merging is intentionally hard. Merge requires:

- job allows merge
- `allow_merge: true`
- `CLOWNFISH_ALLOW_MERGE=1`
- clean merge state
- clean relevant checks
- resolved human review threads
- resolved review-bot findings
- passed Codex `/review`
- validation evidence
- security clearance

With merge gated closed, Clownfish labels ready candidates for human review
instead of merging.

## Post-Flight Finalization

Script: `scripts/post-flight.mjs`

Post-flight watches the PRs that `execute-fix-artifact` opened or repaired.
It waits for merge readiness, validates merge preflight, and either:

- merges when the merge gate is explicitly open, or
- labels the PR with human-review/merge-ready labels, or
- records the exact blocker.

After a canonical fix lands, post-flight can apply planned post-merge closeouts
for duplicate or superseded items covered by that fix.

## Open PR Finalizer

Workflow: `.github/workflows/finalize-open-prs.yml`
Script: `scripts/finalize-open-prs.mjs`

The finalizer scans open Clownfish PRs in the target repo. It finds PRs by the
`clownfish` label and `clownfish/*` branch prefix. It classifies blockers:

- draft
- stale/conflicting branch
- dirty or unknown merge state
- failing or pending checks
- unresolved review threads
- review required or changes requested
- missing merge preflight
- missing result backfill
- security hold

When `--dispatch-repairs --execute` is enabled, it dispatches the existing
cluster job back through `cluster-worker.yml` instead of creating another PR.
The idempotency key includes target repo, PR number, and head SHA, so the same
PR/head is not repeatedly repaired unless `--allow-repeat` is used.

This is the lane to extend for richer CI self-repair. The next improvement is
to fetch compact failed-check logs, classify transient infra failures, rerun
clearly transient jobs, and pass branch-caused failures into the repair prompt.

## Self-Heal Failed Clownfish Runs

Workflow: `.github/workflows/self-heal.yml`
Script: `scripts/self-heal-failed-runs.mjs`

Self-heal retries failed Clownfish cluster-worker runs. It reads published
`results/runs/*.json`, selects the latest failed run per source job, skips jobs
already retried unless `--allow-repeat` is set, and dispatches fresh worker
runs.

Important distinction: this heals failed Clownfish worker runs. It does not
currently inspect target PR CI logs. Target PR repair belongs in the open PR
finalizer/comment command repair path.

## Maintainer Comment Routing

Workflow: `.github/workflows/comment-router.yml`
Scripts:

- `scripts/comment-router.mjs`
- `scripts/comment-router-core.mjs`

Comment routing scans recent target-repo issue/PR comments and accepts only
maintainer-authored commands. Default allowed GitHub `author_association`
values:

- `OWNER`
- `MEMBER`
- `COLLABORATOR`

Contributor comments are ignored without a reply.

The generated-PR auto-update design is documented in
[`docs/auto-update-prs.md`](auto-update-prs.md). That lane lets trusted
ClawSweeper comments dispatch a repair run for an existing Clownfish PR without
allowing arbitrary comment authors to trigger work.

Accepted command styles:

```text
/clownfish status
@openclaw-clownfish status
@openclaw-clownfish[bot] status
```

Do not use `@clownfish`; that is a separate GitHub user.

Supported commands:

```text
/clownfish status
/clownfish fix ci
/clownfish address review
/clownfish rebase
/clownfish explain
/clownfish stop
@openclaw-clownfish fix ci
```

Behavior:

- `status` and `explain`: post a short status response.
- `fix ci`: dispatch the existing Clownfish PR's job for repair.
- `address review`: dispatch the existing Clownfish PR's job for repair.
- `rebase`: dispatch the existing Clownfish PR's job for repair.
- `automerge`: label an existing Clownfish PR with `clownfish:automerge`
  and dispatch a ClawSweeper review for the current head.
- `stop`: label the item for human review.

Repair commands currently apply only to existing Clownfish PRs. The router
finds those by `clownfish` label, `clownfish/*` branch, or configured
Clownfish author login, resolves the cluster job from the branch, posts one
idempotent response marker, and dispatches `cluster-worker.yml`.

Trusted ClawSweeper comments become `clawsweeper_auto_repair`. Preferred
comments use hidden `clawsweeper-verdict:*` markers and include
`clawsweeper-action:fix-required` only when Clownfish should wake up. The
default caps are five automatic repair iterations per PR and one dispatch per
PR head SHA. The per-PR cap is total across head SHA changes, so repeated
findings on the same commit do not stampede the branch and a single PR cannot
loop forever.

For PRs labeled `clownfish:automerge`, trusted ClawSweeper `pass`, `approved`,
or `no-changes` verdict markers become `clawsweeper_auto_merge`. The router
merges only when the marker SHA matches the current PR head, checks are green,
GitHub mergeability is clean, no human-review label is present, and both
`CLOWNFISH_ALLOW_MERGE=1` and `CLOWNFISH_ALLOW_AUTOMERGE=1` are set. Otherwise
it leaves the PR open and labels it `clownfish:merge-ready` when appropriate.

The scheduled workflow is dry by default. Set
`CLOWNFISH_COMMENT_ROUTER_EXECUTE=1` to let scheduled runs post replies and
dispatch workers. Manual workflow dispatch can also pass `execute=true`.
Branch mutation still requires the downstream `CLOWNFISH_ALLOW_EXECUTE=1` and
`CLOWNFISH_ALLOW_FIX_PR=1` gates.

Ledgers:

- `results/comment-router.json`: processed command ledger
- `results/comment-router-latest.json`: latest scan report

## Label Backfill

Script: `scripts/tag-clownfish-targets.mjs`

This script labels Clownfish-created or Clownfish-tracked PRs/issues in the
target repo. It helps downstream tools and maintainers distinguish generated
work from ordinary contributor work.

The exact label is `clownfish`. The script intentionally refuses alternate
label names to keep the marker stable.

## Job Hygiene

Scripts:

- `scripts/sweep-openclaw-jobs.mjs`
- `scripts/promote-stuck-jobs.mjs`
- `scripts/requeue-job.mjs`

These scripts manage the Clownfish backlog:

- move finalized jobs out of inbox
- park old or never-run jobs in outbox/stuck
- promote parked jobs back into inbox
- resolve a run id or job path and requeue it

They should not create new implementation PRs by themselves. They control job
inventory and dispatch pressure.

## Dashboard Publishing

Workflow: `.github/workflows/publish-results.yml`
Script: `scripts/publish-result.mjs`

Publishing turns raw run artifacts into durable, sanitized summaries. It updates
the README dashboard, per-cluster markdown reports, and aggregate JSON ledgers.

The README dashboard is the public status surface, but it is derived from the
latest published artifacts. For live truth, check GitHub Actions and the target
PR directly.

## Gates And Variables

Important gates:

- `CLOWNFISH_ALLOW_EXECUTE`: allows deterministic write lanes. Workflows treat
  any value except literal `1` as closed.
- `CLOWNFISH_ALLOW_FIX_PR`: allows branch repair and replacement PR creation.
  Workflows treat any value except literal `1` as closed.
- `CLOWNFISH_ALLOW_MERGE`: allows Clownfish to merge. Keep this `0` unless a
  maintainer explicitly opens it.
- `CLOWNFISH_ALLOW_AUTOMERGE`: allows the comment router to merge a
  `clownfish:automerge` PR after ClawSweeper passes the exact current head.
  Keep this `0` unless a maintainer explicitly opens an automerge window.
- `CLOWNFISH_COMMENT_ROUTER_EXECUTE`: lets scheduled comment routing post
  replies and dispatch workers.

Important defaults:

- `CLOWNFISH_MODEL`: default worker model, usually `gpt-5.5`.
- `CLOWNFISH_CODEX_REASONING_EFFORT`: model reasoning effort; use `xhigh` for
  difficult repair work.
- `CLOWNFISH_MAX_LIVE_WORKERS`: dispatch capacity guard.
- `CLOWNFISH_MAX_ACTIVE_PRS_PER_AREA`: replacement PR area backpressure; default
  is `50` open Clownfish PRs per touched area, and `0` disables the cap.
- ClawSweeper commit-finding repair PRs get the `clownfish:commit-finding`
  label in addition to the standard `clownfish` tracking label.
- `CLOWNFISH_TARGET_VALIDATION_MODE`: changed-only validation by default.
- `CLOWNFISH_RESOLVE_REVIEW_THREADS`: lets fix execution resolve threads after
  it addresses them.

## Where To Add New Behavior

- New issue/PR-to-PR entrypoint: extend `create-job` or add an importer that
  writes the same job schema.
- Better CI self-repair: extend `finalize-open-prs` to collect failed check
  logs and classify rerun vs repair.
- New maintainer command: extend `comment-router-core.mjs` parsing and
  `comment-router.mjs` execution.
- New mutation type: add schema support, worker prompt policy, result review
  validation, and deterministic application in `apply-result`.
- New dashboard field: publish it from `publish-result`, not from ad hoc README
  edits.

## Safety Checklist For Changes

Before shipping automation changes:

```bash
npm run validate
for f in scripts/*.mjs; do node --check "$f" || exit 1; done
actionlint .github/workflows/<changed-workflow>.yml
git diff --check
```

For live lanes, dry-run first when available:

```bash
npm run comment-router -- --repo openclaw/openclaw --lookback-minutes 180
npm run finalize-open-prs -- --write-report
npm run tag-clownfish -- --live
```

Do not treat a dry report as permission to mutate. A maintainer still needs to
open the relevant execution gate or run the workflow with `execute=true`.
