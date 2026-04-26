<img width="1584" height="672" alt="image" src="https://github.com/user-attachments/assets/ba1571d9-785e-47df-92b6-ce90681ca8e4" />

# 🐠 Project Clownfish

ProjectClownfish is a conservative OpenClaw maintainer tool for one-cluster issue and PR cleanup.

It takes a curated GitHub issue/PR cluster, asks a Codex worker to classify the items, and applies only narrow, auditable cleanup actions when the evidence is strong. This compliments the pre-pass work on [clawsweeper](https://github.com/openclaw/clawsweeper) and act as the second-pass intent based cluster resolution.

Allowed automated close reasons:

- duplicate of a clear canonical thread
- superseded by a clear canonical thread
- fixed by a specific candidate fix

Manual backlog-cleanup jobs may also use
[`instructions/low-signal-prs.md`](instructions/low-signal-prs.md) for
drive-by PRs that are clearly blank-template, docs-only discoverability churn,
test-only coverage spam, refactor-only noise, third-party capabilities that
belong on ClawHub, risky unapproved infra, or dirty branches. This policy is
opt-in per job and should return `needs_human` for plausible bug fixes or
anything with active maintainer signal.

Everything else stays open or is escalated for maintainer review.

## Status

ProjectClownfish is intentionally smaller than ClawSweeper. ClawSweeper scans the whole OpenClaw backlog on a cadence; ProjectClownfish handles targeted clusters that were already grouped by a human, ghcrawl, or another dedupe tool.

Cluster discovery currently comes from [vincentkoc/ghcrawl](https://github.com/vincentkoc/ghcrawl). That repository is expected to migrate into the OpenClaw organization soon.

<img width="3582" height="2160" alt="image" src="https://github.com/user-attachments/assets/20b816cc-72ab-479e-bc18-84f5b2b53745" />

The default workflow is proposal-first. It does not comment or close unless a job is explicitly promoted and the deterministic applicator confirms live GitHub state has not changed.

## Dashboard

Last dashboard update: Apr 26, 2026, 00:02 UTC

<!-- projectclownfish-dashboard:start -->
| Metric | Count |
| --- | ---: |
| Cluster reports | 27 |
| Published runs | 34 |
| Latest successful clusters | 27 |
| Latest failed clusters | 0 |
| Latest cancelled clusters | 0 |
| Executed close actions | 16 |
| Blocked apply actions | 2 |
| Skipped apply actions | 0 |
| Needs-human clusters | 20 |
<!-- projectclownfish-dashboard:end -->

## How It Works

Each cluster job:

1. Starts from one markdown job file under `jobs/`.
2. Hydrates the listed issue/PR refs and first-hop linked refs.
3. Builds a cluster plan and fix artifact for autonomous jobs.
4. Runs Codex with repo-local policy prompts and JSON output schema in a read-only sandbox.
5. Writes structured run artifacts under `.projectclownfish/runs/`.
6. Reviews the worker artifact with deterministic safety checks.
7. Applies only safe close/comment actions through `scripts/apply-result.mjs`.
8. Publishes a sanitized result ledger back to this repo under `results/`, `closed/`, `apply-report.json`, and this README dashboard.

Codex does not receive a GitHub token. The runner preflights GitHub state before model execution, then Codex receives those artifacts and returns JSON only. The applicator re-fetches the target item, checks `updated_at`, blocks maintainer-authored items, writes an idempotent close comment, and closes only supported duplicate/superseded/fixed-by-candidate actions.

Runs for the same job path and mode are queued instead of running concurrently. The workflow uses Node 24 and `ubuntu-latest` for ClawSweeper parity; other hosted runners are opt-in.

Full worker prompts, Codex transcripts, and raw artifacts stay in GitHub Actions. The committed ledger keeps only the cluster summary, run URL, action counts, apply outcomes, closed targets, and needs-human entries.

## Modes

`plan` produces recommendations only.

`execute` can apply reviewed safe close actions from structured JSON.

`autonomous` adds live cluster preflight and fix-artifact generation. It may recommend a canonical fix path, but direct mutation still goes through the applicator.

Any unclear canonical choice, stale cluster state, failing checks, conflict, broad fix, or independent report should become `needs_human`.

Autonomous PR work must also clear automated reviewer feedback. Greptile, Codex, Asile, CodeRabbit, Copilot, and similar bot comments must be addressed, proven non-actionable, or escalated before any merge or post-merge closeout recommendation.

## Local Run

Requires Node 24.

Validate jobs:

```bash
npm run validate
```

Render a prompt:

```bash
npm run render -- jobs/openclaw/cluster-example.md --mode plan
```

Dry-run a worker without calling Codex:

```bash
npm run worker -- jobs/openclaw/cluster-example.md --mode plan --dry-run
```

Build an offline autonomous artifact:

```bash
npm run build-fix-artifact -- jobs/openclaw/autonomous-example.md --offline
```

Stage low-signal PR sweep jobs from local ghcrawl data:

```bash
npm run import-low-signal -- --limit 20 --batch-size 5 --mode autonomous --sort stale
```

Find the latest failed cluster jobs that have not already been superseded by a later success:

```bash
npm run self-heal
```

Retry those failed jobs once. This briefly opens the execution gate, waits for the dispatched workers to start, records the self-heal ledger, and closes the gate again:

```bash
npm run self-heal -- --execute --open-execute-window --max-jobs 5 --runner ubuntu-latest
```

## Checks

```bash
npm run validate
for f in scripts/*.mjs; do node --check "$f" || exit 1; done
npm run review-results -- .projectclownfish/runs
npm run publish-result -- .projectclownfish/runs
git diff --check
```

## GitHub Actions Setup

The workflow needs:

- Codex/OpenAI authentication for model execution
- a read-only GitHub token for worker inspection
- a separate write-scoped GitHub token for the deterministic applicator
- an execution gate that defaults off

Keep exact secret names, token scopes, and execution-window procedures in private operations docs or repository settings notes. Do not put token values or live operational credentials in job files.
