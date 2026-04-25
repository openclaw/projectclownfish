<img width="1584" height="672" alt="image" src="https://github.com/user-attachments/assets/ba1571d9-785e-47df-92b6-ce90681ca8e4" />

# ProjectClownfish

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

## How It Works

Each cluster job:

1. Starts from one markdown job file under `jobs/`.
2. Hydrates the listed issue/PR refs and first-hop linked refs.
3. Builds a cluster plan and fix artifact for autonomous jobs.
4. Runs Codex with repo-local policy prompts and JSON output schema.
5. Writes structured run artifacts under `.projectclownfish/runs/`.
6. Applies only safe close/comment actions through `scripts/apply-result.mjs`.

Codex does not receive a GitHub write token. The worker can inspect GitHub state, but it returns JSON only. The applicator re-fetches the target item, checks `updated_at`, blocks maintainer-authored items, writes an idempotent close comment, and closes only supported duplicate/superseded/fixed-by-candidate actions.

Runs for the same job path and mode are queued instead of running concurrently. The workflow uses Node 24 and `ubuntu-latest` for ClawSweeper parity; other hosted runners are opt-in.

## Modes

`plan` produces recommendations only.

`execute` can apply reviewed safe close actions from structured JSON.

`autonomous` adds live cluster preflight and fix-artifact generation. It may recommend a canonical fix path, but direct mutation still goes through the applicator.

Any unclear canonical choice, stale cluster state, failing checks, conflict, broad fix, or independent report should become `needs_human`.

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

## Checks

```bash
npm run validate
for f in scripts/*.mjs; do node --check "$f" || exit 1; done
git diff --check
```

## GitHub Actions Setup

The workflow needs:

- Codex/OpenAI authentication for model execution
- a read-only GitHub token for worker inspection
- a separate write-scoped GitHub token for the deterministic applicator
- an execution gate that defaults off

Keep exact secret names, token scopes, and execution-window procedures in private operations docs or repository settings notes. Do not put token values or live operational credentials in job files.
