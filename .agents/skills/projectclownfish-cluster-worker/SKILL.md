---
name: projectclownfish-cluster-worker
description: "Use when operating ProjectClownfish cluster workflows in this repo: reviewing GitHub Actions run artifacts, tuning worker/applicator guardrails, importing ghcrawl clusters, dispatching canaries, scaling batches, or deciding whether autonomous write-mode cluster cleanup is safe to ramp."
---

# ProjectClownfish Cluster Workflow

Use this skill for ProjectClownfish operations in this repo. It is not just a one-job worker skill; it is the fast path for running the whole guarded cluster loop.

## Hard Stance

- Default to safe read/plan posture. `CLOWNFISH_ALLOW_EXECUTE=0` is the resting state.
- Do not dispatch a broad write-mode batch if the last canary failed, has unreviewed artifacts, or any stale pre-fix run is still active.
- Treat GitHub Actions repository variables as captured at workflow start. Resetting `CLOWNFISH_ALLOW_EXECUTE` does not revoke already-started runs.
- If a stale run was started with old guardrails and write mode enabled, cancel it before scaling.
- Codex workers never mutate GitHub directly. They emit JSON; `scripts/apply-result.mjs` is the only mutation path.
- Only the applicator may record `executed`. Worker output containing `executed` is a bug.
- Closed historical refs are evidence only. They must not receive `close_*` actions.

## Recovery Check

Start every session here:

```bash
pwd
git rev-parse --show-toplevel
git branch --show-current
git status --short --branch
df -h .
test -e node_modules && { ls -ld node_modules; test -L node_modules && echo node_modules_symlink=yes || echo node_modules_symlink=no; } || echo node_modules_missing
```

Then check live workflow state and safety vars:

```bash
gh run list --repo openclaw/projectclownfish --workflow cluster-worker.yml --limit 10 \
  --json databaseId,headSha,status,conclusion,createdAt,updatedAt,url \
  --jq '.[] | {databaseId,headSha,status,conclusion,createdAt,updatedAt,url}'

gh variable list --repo openclaw/projectclownfish --json name,value \
  --jq 'map(select(.name|test("^CLOWNFISH_"))) | sort_by(.name) | .[] | {name,value}'
```

## Review Results

For every completed run that matters:

```bash
rm -rf /tmp/projectclownfish-check-RUN_ID
mkdir -p /tmp/projectclownfish-check-RUN_ID
gh run download RUN_ID --repo openclaw/projectclownfish --dir /tmp/projectclownfish-check-RUN_ID
npm run review-results -- /tmp/projectclownfish-check-RUN_ID
```

Summarize artifacts:

```bash
find /tmp/projectclownfish-check-RUN_ID -name result.json -print -quit |
  xargs jq '{status,summary,actions_total:(.actions|length),action_counts:(.actions|group_by(.action)|map({action:.[0].action,count:length}))}'

find /tmp/projectclownfish-check-RUN_ID -name apply-report.json -print -quit |
  xargs jq '{totals:{executed:([.actions[]? | select(.status=="executed")]|length),blocked:([.actions[]? | select(.status=="blocked")]|length),skipped:([.actions[]? | select(.status=="skipped")]|length),planned:([.actions[]? | select(.status=="planned")]|length)}}'
```

If review fails, inspect the failure class before doing anything else:

- `executed` in worker result: tighten schema, prompts, and `scripts/review-results.mjs`.
- `close action targets closed item`: tune prompts and planner so closed context refs are evidence-only; use `keep_closed`.
- long `Run worker`: reduce prompt size by hydrating canonical + open candidates only; add/verify `CLOWNFISH_CODEX_TIMEOUT_MS`.
- applicator blocked because target changed: rerun the job against fresh state, do not force apply.

## Tune Engine

Use repo scripts and prompts as the control plane:

- `schemas/codex-result.schema.json`: what Codex may emit.
- `prompts/worker-system.md`, `prompts/autonomous.md`, `prompts/execute.md`, `prompts/plan-only.md`: worker behavior.
- `instructions/low-signal-prs.md`: opt-in manual backlog cleanup policy for random docs churn, blank-template PRs, test-only spam, third-party capability PRs that belong on ClawHub, risky infra drive-bys, and dirty branches.
- `scripts/review-results.mjs`: deterministic artifact gate.
- `scripts/plan-cluster.mjs`: what gets hydrated into the prompt.
- `scripts/apply-result.mjs`: deterministic mutation gate.
- `scripts/import-ghcrawl-low-signal-prs.mjs`: local ghcrawl open-PR scanner for opt-in low-signal cleanup jobs.
- `.github/workflows/cluster-worker.yml`: runner behavior and env capture.

Current autonomy posture:

- Hydrate comments and PR review comments by default before model execution.
- Hydrate cluster refs and bounded first-hop linked refs so closed representative drift can often be resolved without human review.
- Treat failing checks as a merge/fixed-by-candidate blocker, not a reason to stop classifying the whole cluster.
- Prefer `keep_related`, `keep_independent`, `keep_closed`, `fix_needed`, and subcluster notes over blanket `needs_human`.
- Use `needs_human` only for the exact maintainer decision still unresolved after hydrated evidence is reviewed.

After tuning, run:

```bash
node --check scripts/plan-cluster.mjs
node --check scripts/import-ghcrawl-clusters.mjs
node --check scripts/run-worker.mjs
npm run validate
git diff --check
```

Do a narrow planner smoke before committing hydration changes:

```bash
rm -rf /tmp/projectclownfish-plan-check
node scripts/plan-cluster.mjs jobs/openclaw/ghcrawl-143793-autonomous-smoke.md \
  --offline --run-dir /tmp/projectclownfish-plan-check
jq '{items:(.items|length),seed_refs:(.scope.seed_refs|length),context_refs:(.scope.context_refs|length),hydrate_cluster_refs:.scope.hydrate_cluster_refs}' \
  /tmp/projectclownfish-plan-check/cluster-plan.json
```

For a needs-human reduction smoke, verify the artifact includes real comment
and review-comment excerpts:

```bash
jq '{items:(.items|length), comment_items:([.items[] | select(.comments_hydrated > 0)] | length), review_comment_prs:([.items[] | select(.pull_request.review_comments_hydrated > 0)] | length)}' \
  /tmp/projectclownfish-plan-check/cluster-plan.json
```

## Generate Batch Jobs

Use ghcrawl read-only inspection first:

```bash
ghcrawl doctor --json
ghcrawl configure --json
ghcrawl clusters openclaw/openclaw --min-size 2 --limit 80 --sort size --json |
  jq -r '.clusters[] | select(.isClosed == false) | [.clusterId,.totalCount,.issueCount,.pullRequestCount,.latestUpdatedAt,.displayTitle] | @tsv'

rg -o 'ghcrawl-[0-9]+' jobs/openclaw -g '*.md' |
  sed -E 's/.*ghcrawl-([0-9]+).*/\1/' | sort -n | uniq | tr '\n' ' '
```

Pick the largest active clusters not already imported, then generate autonomous job files:

```bash
node scripts/import-ghcrawl-clusters.mjs ID1 ID2 ID3 \
  --repo openclaw/openclaw \
  --mode autonomous \
  --suffix autonomous-smoke \
  --allow-instant-close
```

Validate before committing:

```bash
npm run validate
```

Commit engine changes separately from generated job batches when practical:

```bash
git add prompts schemas scripts .github
git commit -m "fix: scope autonomous cluster workflow"
git add jobs/openclaw/ghcrawl-*-autonomous-smoke.md
git commit -m "chore: add next autonomous cluster jobs"
git push origin main
```

## Dispatch Policy

Do not jump straight to 20 write-mode jobs. Sequence:

1. Ensure no stale active runs on old SHAs.
2. Ensure `CLOWNFISH_ALLOW_EXECUTE=0`.
3. Dispatch 2-3 canaries on the latest pushed SHA.
4. Review artifacts and applicator reports.
5. Only then dispatch a wider batch.

Canary dispatch:

```bash
gh variable set CLOWNFISH_ALLOW_EXECUTE --repo openclaw/projectclownfish --body 1
npm run dispatch -- \
  jobs/openclaw/ghcrawl-ID1-autonomous-smoke.md \
  jobs/openclaw/ghcrawl-ID2-autonomous-smoke.md \
  --mode autonomous --runner ubuntu-latest
gh variable set CLOWNFISH_ALLOW_EXECUTE --repo openclaw/projectclownfish --body 0
```

Important: after dispatch, already-started runs keep the write gate they captured. If a new bug is found, cancel those runs.

For plan-only scaling, keep write gate off and dispatch with `--mode plan` or `--dry-run` where appropriate.

## Low-Signal PR Sweeps

Use this only for manual backlog cleanup and random drive-by PR triage. It is not dedupe and it must stay separate from duplicate/superseded/fixed-by-candidate closeouts.

Generate staged jobs from local ghcrawl data:

```bash
npm run import-low-signal -- --limit 20 --batch-size 5 --mode autonomous --sort stale
```

Generated jobs set `triage_policy: low_signal_prs` and `allow_low_signal_pr_close: true`. The worker may emit `close_low_signal` only for open pull requests that pass `instructions/low-signal-prs.md`.

Before live dispatch:

- inspect the generated job candidates;
- commit and push the jobs so Actions can read them;
- dispatch 1-2 canaries first;
- review artifacts before scaling the next batches.

## Self-Heal Failed Jobs

Use self-heal after reviewing the failed artifacts and tuning obvious deterministic guardrail issues.

Dry-run candidate selection:

```bash
npm run self-heal
```

This selects only the latest failed run per source job, skips jobs that have a later success, and skips jobs already retried in `results/self-heal.json`.

Live one-attempt retry:

```bash
npm run self-heal -- --execute --open-execute-window --max-jobs 5 --runner ubuntu-latest
```

The local live path temporarily sets `CLOWNFISH_ALLOW_EXECUTE=1`, dispatches the retry jobs, waits until the new runs have started, records the ledger, and resets `CLOWNFISH_ALLOW_EXECUTE=0`.

If using the manual `self-heal failed clusters` workflow, keep it dry-run by default. For execute mode, open the execution gate before triggering it or it should fail before dispatching write-mode jobs.

## Ramp Decision

Say "safe to ramp" only when all are true:

- latest canaries run on the current SHA;
- no worker result uses `executed`;
- no close action targets a closed item;
- applicator executed only planned duplicate/superseded/fixed-by-candidate close actions;
- `CLOWNFISH_ALLOW_EXECUTE` is back to `0`;
- active runs are expected and on the intended SHA;
- artifacts are downloaded or easy to retrieve by run URL.

If not, say exactly what blocked the ramp and patch that first.
