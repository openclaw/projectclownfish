<img width="1584" height="672" alt="image" src="https://github.com/user-attachments/assets/ba1571d9-785e-47df-92b6-ce90681ca8e4" />

# 🐠 Project Clownfish

ProjectClownfish is a conservative OpenClaw maintainer tool for one-cluster issue and PR cleanup.

It takes a curated GitHub issue/PR cluster, asks a Codex worker to classify the items, and applies only narrow, auditable cleanup actions when the evidence is strong. This compliments the pre-pass work on [clawsweeper](https://github.com/openclaw/clawsweeper) and act as the second-pass intent based cluster resolution.

Allowed automated close reasons:

- duplicate of a clear canonical thread
- superseded by a clear canonical thread
- fixed by a specific candidate fix

Everything else stays open or is escalated for maintainer review.

## Status

ProjectClownfish is intentionally smaller than ClawSweeper. ClawSweeper scans the whole OpenClaw backlog on a cadence; ProjectClownfish handles targeted clusters that were already grouped by a human, ghcrawl, or another dedupe tool.

Cluster discovery currently comes from [vincentkoc/ghcrawl](https://github.com/vincentkoc/ghcrawl). That repository is expected to migrate into the OpenClaw organization soon.

<img width="3582" height="2160" alt="image" src="https://github.com/user-attachments/assets/20b816cc-72ab-479e-bc18-84f5b2b53745" />

The default workflow is proposal-first. It does not comment or close unless a job is explicitly promoted and the deterministic applicator confirms live GitHub state has not changed.

## Dashboard

Last dashboard update: Apr 25, 2026, 23:46 UTC

<!-- projectclownfish-dashboard:start -->
| Metric | Count |
| --- | ---: |
| Cluster reports | 27 |
| Published runs | 34 |
| Successful runs | 28 |
| Failed runs | 6 |
| Cancelled runs | 0 |
| Executed close actions | 16 |
| Blocked apply actions | 2 |
| Skipped apply actions | 365 |
| Needs-human entries | 90 |

Recent cluster runs:

| Cluster | Workflow | Worker | Executed | Blocked | Needs human | Run |
| --- | --- | --- | ---: | ---: | ---: | --- |
| [ghcrawl-143810-autonomous-smoke](results/openclaw/ghcrawl-143810-autonomous-smoke.md) | success | needs_human | 0 | 1 | 4 | [24943077025](https://github.com/openclaw/projectclownfish/actions/runs/24943077025) |
| [ghcrawl-143801-autonomous-smoke](results/openclaw/ghcrawl-143801-autonomous-smoke.md) | success | needs_human | 0 | 0 | 5 | [24943078008](https://github.com/openclaw/projectclownfish/actions/runs/24943078008) |
| [ghcrawl-143793-autonomous-smoke](results/openclaw/ghcrawl-143793-autonomous-smoke.md) | success | needs_human | 0 | 0 | 2 | [24943078775](https://github.com/openclaw/projectclownfish/actions/runs/24943078775) |
| [ghcrawl-143811-autonomous-smoke](results/openclaw/ghcrawl-143811-autonomous-smoke.md) | success | planned | 0 | 0 | 0 | [24943076135](https://github.com/openclaw/projectclownfish/actions/runs/24943076135) |
| [ghcrawl-143821-autonomous-smoke](results/openclaw/ghcrawl-143821-autonomous-smoke.md) | success | needs_human | 0 | 0 | 3 | [24939012932](https://github.com/openclaw/projectclownfish/actions/runs/24939012932) |
| [ghcrawl-143820-autonomous-smoke](results/openclaw/ghcrawl-143820-autonomous-smoke.md) | success | planned | 0 | 0 | 0 | [24939012263](https://github.com/openclaw/projectclownfish/actions/runs/24939012263) |
| [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | success | planned | 5 | 0 | 0 | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [ghcrawl-143818-autonomous-smoke](results/openclaw/ghcrawl-143818-autonomous-smoke.md) | success | needs_human | 0 | 1 | 3 | [24939010877](https://github.com/openclaw/projectclownfish/actions/runs/24939010877) |
| [ghcrawl-143817-autonomous-smoke](results/openclaw/ghcrawl-143817-autonomous-smoke.md) | success | needs_human | 0 | 0 | 5 | [24939010238](https://github.com/openclaw/projectclownfish/actions/runs/24939010238) |
| [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | success | needs_human | 4 | 0 | 4 | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [ghcrawl-143815-autonomous-smoke](results/openclaw/ghcrawl-143815-autonomous-smoke.md) | success | planned | 2 | 0 | 0 | [24939008778](https://github.com/openclaw/projectclownfish/actions/runs/24939008778) |
| [ghcrawl-143814-autonomous-smoke](results/openclaw/ghcrawl-143814-autonomous-smoke.md) | success | needs_human | 1 | 0 | 3 | [24939007967](https://github.com/openclaw/projectclownfish/actions/runs/24939007967) |
| [ghcrawl-143813-autonomous-smoke](results/openclaw/ghcrawl-143813-autonomous-smoke.md) | success | needs_human | 0 | 0 | 4 | [24939007176](https://github.com/openclaw/projectclownfish/actions/runs/24939007176) |
| [ghcrawl-143811-autonomous-smoke](results/openclaw/ghcrawl-143811-autonomous-smoke.md) | failure | planned | 0 | 0 | 0 | [24939006288](https://github.com/openclaw/projectclownfish/actions/runs/24939006288) |
| [ghcrawl-143810-autonomous-smoke](results/openclaw/ghcrawl-143810-autonomous-smoke.md) | failure | needs_human | 0 | 0 | 6 | [24939005515](https://github.com/openclaw/projectclownfish/actions/runs/24939005515) |
| [ghcrawl-143809-autonomous-smoke](results/openclaw/ghcrawl-143809-autonomous-smoke.md) | success | needs_human | 0 | 0 | 4 | [24939004802](https://github.com/openclaw/projectclownfish/actions/runs/24939004802) |
| [ghcrawl-143808-autonomous-smoke](results/openclaw/ghcrawl-143808-autonomous-smoke.md) | success | needs_human | 0 | 0 | 4 | [24939004182](https://github.com/openclaw/projectclownfish/actions/runs/24939004182) |
| [ghcrawl-143807-autonomous-smoke](results/openclaw/ghcrawl-143807-autonomous-smoke.md) | success | needs_human | 0 | 0 | 4 | [24939003369](https://github.com/openclaw/projectclownfish/actions/runs/24939003369) |
| [ghcrawl-143806-autonomous-smoke](results/openclaw/ghcrawl-143806-autonomous-smoke.md) | success | needs_human | 0 | 0 | 3 | [24939002551](https://github.com/openclaw/projectclownfish/actions/runs/24939002551) |
| [ghcrawl-143805-autonomous-smoke](results/openclaw/ghcrawl-143805-autonomous-smoke.md) | success | planned | 1 | 0 | 2 | [24939001644](https://github.com/openclaw/projectclownfish/actions/runs/24939001644) |
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
