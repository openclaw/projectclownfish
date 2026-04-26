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

Last dashboard update: Apr 26, 2026, 00:04 UTC

<!-- projectclownfish-dashboard:start -->
### Workflow Status

Updated: Apr 26, 2026, 00:04 UTC

State: Blocked actions need triage

Scope: 27 latest cluster reports from 34 run attempts. Dashboard totals use the latest report per cluster, not every retry.

### Cluster Health

| Metric | Count |
| --- | ---: |
| Latest successful clusters | 27 |
| Latest failed clusters | 0 |
| Latest cancelled clusters | 0 |
| Clean completed clusters | 7 |
| Needs-human clusters | 20 |
| Run attempts archived | 34 |

### Action Outcomes

| Metric | Count |
| --- | ---: |
| Completed close actions | 16 |
| Merged PRs | 0 |
| Duplicate closes | 16 |
| Superseded closes | 0 |
| Fixed-by-candidate closes | 0 |
| Low-signal PR closes | 0 |
| Blocked mutation attempts | 2 |
| Skipped mutation attempts | 0 |

### Worker Decision Breakdown

| Decision | Count |
| --- | ---: |
| Close duplicate | 24 |
| Close superseded | 1 |
| Needs human | 62 |
| Keep canonical | 28 |
| Keep related | 135 |
| Keep independent | 36 |
| Keep closed | 112 |

### Completed Close/Merge Ledger

| Target | Outcome | Cluster | Reason | Run |
| --- | --- | --- | --- | --- |
| [#67029](https://github.com/openclaw/openclaw/issues/67029) | Close duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | duplicate of the canonical thread | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#69886](https://github.com/openclaw/openclaw/issues/69886) | Close duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | duplicate of the canonical thread | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#70353](https://github.com/openclaw/openclaw/issues/70353) | Close duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | duplicate of the canonical thread | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#70395](https://github.com/openclaw/openclaw/issues/70395) | Close duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | duplicate of the canonical thread | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#71133](https://github.com/openclaw/openclaw/issues/71133) | Close duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | duplicate of the canonical thread | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#70180](https://github.com/openclaw/openclaw/issues/70180) | Close duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | duplicate of the canonical thread | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#65832](https://github.com/openclaw/openclaw/issues/65832) | Close duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | duplicate of the canonical thread | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#66758](https://github.com/openclaw/openclaw/issues/66758) | Close duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | duplicate of the canonical thread | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#67406](https://github.com/openclaw/openclaw/issues/67406) | Close duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | duplicate of the canonical thread | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#50541](https://github.com/openclaw/openclaw/issues/50541) | Close duplicate | [ghcrawl-143815-autonomous-smoke](results/openclaw/ghcrawl-143815-autonomous-smoke.md) | duplicate of the canonical thread | [24939008778](https://github.com/openclaw/projectclownfish/actions/runs/24939008778) |
| [#50691](https://github.com/openclaw/openclaw/issues/50691) | Close duplicate | [ghcrawl-143815-autonomous-smoke](results/openclaw/ghcrawl-143815-autonomous-smoke.md) | duplicate of the canonical thread | [24939008778](https://github.com/openclaw/projectclownfish/actions/runs/24939008778) |
| [#64750](https://github.com/openclaw/openclaw/issues/64750) | Close duplicate | [ghcrawl-143814-autonomous-smoke](results/openclaw/ghcrawl-143814-autonomous-smoke.md) | duplicate of the canonical thread | [24939007967](https://github.com/openclaw/projectclownfish/actions/runs/24939007967) |
| [#65153](https://github.com/openclaw/openclaw/issues/65153) | Close duplicate | [ghcrawl-143805-autonomous-smoke](results/openclaw/ghcrawl-143805-autonomous-smoke.md) | duplicate of the canonical thread | [24939001644](https://github.com/openclaw/projectclownfish/actions/runs/24939001644) |
| [#70373](https://github.com/openclaw/openclaw/issues/70373) | Close duplicate | [ghcrawl-143804-autonomous-smoke](results/openclaw/ghcrawl-143804-autonomous-smoke.md) | duplicate of the canonical thread | [24939000666](https://github.com/openclaw/projectclownfish/actions/runs/24939000666) |
| [#65285](https://github.com/openclaw/openclaw/issues/65285) | Close duplicate | [ghcrawl-143799-autonomous-smoke](results/openclaw/ghcrawl-143799-autonomous-smoke.md) | duplicate of the canonical thread | [24937679258](https://github.com/openclaw/projectclownfish/actions/runs/24937679258) |
| [#69920](https://github.com/openclaw/openclaw/issues/69920) | Close duplicate | [ghcrawl-143799-autonomous-smoke](results/openclaw/ghcrawl-143799-autonomous-smoke.md) | duplicate of the canonical thread | [24937679258](https://github.com/openclaw/projectclownfish/actions/runs/24937679258) |

### Blocked Actions

| Target | Action | Cluster | Reason | Run |
| --- | --- | --- | --- | --- |
| [#41451](https://github.com/openclaw/openclaw/issues/41451) | Close duplicate | [ghcrawl-143810-autonomous-smoke](results/openclaw/ghcrawl-143810-autonomous-smoke.md) | target is not listed in job candidates | [24943077025](https://github.com/openclaw/projectclownfish/actions/runs/24943077025) |
| [#54475](https://github.com/openclaw/openclaw/issues/54475) | Close superseded | [ghcrawl-143818-autonomous-smoke](results/openclaw/ghcrawl-143818-autonomous-smoke.md) | closure requires canonical or duplicate_of | [24939010877](https://github.com/openclaw/projectclownfish/actions/runs/24939010877) |

### Needs Human Clusters

| Cluster | Reason | Run |
| --- | --- | --- |
| [ghcrawl-143810-autonomous-smoke](results/openclaw/ghcrawl-143810-autonomous-smoke.md) | Choose the canonical PR for the Ollama/encoding-format family among #45986, #46069, and #59048, with #41670 and #42531 as adjacent but no... | [24943077025](https://github.com/openclaw/projectclownfish/actions/runs/24943077025) |
| [ghcrawl-143801-autonomous-smoke](results/openclaw/ghcrawl-143801-autonomous-smoke.md) | No single open canonical replaces closed representative #50020. The hydrated refs split into at least five root-cause families: Telegram ... | [24943078008](https://github.com/openclaw/projectclownfish/actions/runs/24943078008) |
| [ghcrawl-143793-autonomous-smoke](results/openclaw/ghcrawl-143793-autonomous-smoke.md) | PR #71466 is draft and the provided artifact does not include the review-thread/bot-review hydration required to rely on it for fixed-by-... | [24943078775](https://github.com/openclaw/projectclownfish/actions/runs/24943078775) |
| [ghcrawl-143821-autonomous-smoke](results/openclaw/ghcrawl-143821-autonomous-smoke.md) | Representative #59951 was already closed in live state on 2026-04-25T13:21:06Z, so the job's hinted canonical is obsolete. | [24939012932](https://github.com/openclaw/projectclownfish/actions/runs/24939012932) |
| [ghcrawl-143818-autonomous-smoke](results/openclaw/ghcrawl-143818-autonomous-smoke.md) | Cluster 143818 is over-broad: the open PRs span distinct auth, timeout, retry, keepalive, logging, diagnostics, and Mattermost subproblem... | [24939010877](https://github.com/openclaw/projectclownfish/actions/runs/24939010877) |
| [ghcrawl-143817-autonomous-smoke](results/openclaw/ghcrawl-143817-autonomous-smoke.md) | Canonical path for the representative stale-socket restart crash is unresolved across open #58216, open #61134, and closed #58988; the ar... | [24939010238](https://github.com/openclaw/projectclownfish/actions/runs/24939010238) |
| [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | Candidate PR review threads and bot comments for #51150 and #71458 were not present in the provided artifact, and no supplemental gh hydr... | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [ghcrawl-143814-autonomous-smoke](results/openclaw/ghcrawl-143814-autonomous-smoke.md) | #61970 stays open because its 2026.4.5 video-specific path may overlap the media-drop regression family or a separate media-type/path issue. | [24939007967](https://github.com/openclaw/projectclownfish/actions/runs/24939007967) |
| [ghcrawl-143813-autonomous-smoke](results/openclaw/ghcrawl-143813-autonomous-smoke.md) | PR #59386 cannot be auto-classified beyond needs_human: CI is failing, the diff is broad and unrelated, and the provided artifact lacks t... | [24939007176](https://github.com/openclaw/projectclownfish/actions/runs/24939007176) |
| [ghcrawl-143809-autonomous-smoke](results/openclaw/ghcrawl-143809-autonomous-smoke.md) | Job frontmatter canonical #68605 is obsolete in live state; PR #68641 is the best live canonical path for the history-persistence regress... | [24939004802](https://github.com/openclaw/projectclownfish/actions/runs/24939004802) |
| [ghcrawl-143808-autonomous-smoke](results/openclaw/ghcrawl-143808-autonomous-smoke.md) | Use #66875 as the surviving open canonical issue for the recent Control UI history-reload race, but leave #42751 and #60930 open because ... | [24939004182](https://github.com/openclaw/projectclownfish/actions/runs/24939004182) |
| [ghcrawl-143807-autonomous-smoke](results/openclaw/ghcrawl-143807-autonomous-smoke.md) | No single live canonical replaces closed representative #48144; the hydrated set spans independent input-history, /model-subcommand, node... | [24939003369](https://github.com/openclaw/projectclownfish/actions/runs/24939003369) |
| [ghcrawl-143806-autonomous-smoke](results/openclaw/ghcrawl-143806-autonomous-smoke.md) | Safe instant closeout is blocked for likely duplicates such as #38437 and #49412 because the provided artifact includes comment counts bu... | [24939002551](https://github.com/openclaw/projectclownfish/actions/runs/24939002551) |
| [ghcrawl-143805-autonomous-smoke](results/openclaw/ghcrawl-143805-autonomous-smoke.md) | Open canonical #62560 remains unresolved; no open code-fix PR exists in this cluster and this job disallows fix or merge actions. | [24939001644](https://github.com/openclaw/projectclownfish/actions/runs/24939001644) |
| [ghcrawl-143804-autonomous-smoke](results/openclaw/ghcrawl-143804-autonomous-smoke.md) | Review #65994's 6-comment thread before duplicate closure; the provided artifact shows it is likely covered by #68508 but does not includ... | [24939000666](https://github.com/openclaw/projectclownfish/actions/runs/24939000666) |
| [ghcrawl-143803-autonomous-smoke](results/openclaw/ghcrawl-143803-autonomous-smoke.md) | Canonical drift: job frontmatter named #57812 as the open canonical, but the preflight artifact shows #57812 closed on 2026-04-25T12:19:1... | [24938999617](https://github.com/openclaw/projectclownfish/actions/runs/24938999617) |
| [ghcrawl-143795-autonomous-smoke](results/openclaw/ghcrawl-143795-autonomous-smoke.md) | The provided live state does not support a single clean canonical for the whole cluster. #50141 is the strongest surviving representative... | [24938997703](https://github.com/openclaw/projectclownfish/actions/runs/24938997703) |
| [ghcrawl-143800-autonomous-smoke](results/openclaw/ghcrawl-143800-autonomous-smoke.md) | #64831 bundles inconsistent cron execution, chat-triggered exec instability, approval timing, Node OOMs, and missing catch-up delivery; i... | [24937905618](https://github.com/openclaw/projectclownfish/actions/runs/24937905618) |
| [ghcrawl-143799-autonomous-smoke](results/openclaw/ghcrawl-143799-autonomous-smoke.md) | Decide whether #62754 and #63220 intentionally track a separate pi-agent-core abort/timeout bug or whether one should supersede the other... | [24937679258](https://github.com/openclaw/projectclownfish/actions/runs/24937679258) |
| [ghcrawl-143800-bug-cron-announce-delivery-reports-success-but-messages-never-ar](results/openclaw/ghcrawl-143800-bug-cron-announce-delivery-reports-success-but-messages-never-ar.md) | #62777 mixes failureAlert suppression with channel-prefix stripping, so it does not reduce cleanly to one canonical family from the provi... | [24936634921](https://github.com/openclaw/projectclownfish/actions/runs/24936634921) |
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
