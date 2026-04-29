# Operations

For the internal feature map across job creation, PR generation, comment
commands, finalizers, self-heal, gates, and ledgers, see
[`docs/INTERNAL_FEATURES.md`](INTERNAL_FEATURES.md).

For the trusted ClawSweeper-to-Clownfish PR repair loop, see
[`docs/auto-update-prs.md`](auto-update-prs.md).

For commit-review findings, ClawSweeper dispatches
`clawsweeper_commit_finding` to this repository. Clownfish fetches the latest
markdown report, writes `results/commit-findings/<repo-slug>/<sha>.md`, and
only opens a PR when the finding is an ordinary narrow bug/regression candidate.
Security/privacy/supply-chain and broad findings are audit-only.

## Batch Flow

1. Create or export cluster job markdown files under `jobs/<repo>/`.
2. Exclude security-sensitive clusters before staging. ProjectClownfish does not handle vulnerability, advisory, CVE/GHSA, leaked secret, credential/token exposure, plaintext secret storage, exploitability, security-class injection, SSRF/XSS/CSRF/RCE, or sensitive-data exposure work.
3. Run local validation:

   ```bash
   npm run validate
   ```

4. Dispatch plan jobs:

   ```bash
   npm run dispatch -- jobs/openclaw/cluster-001.md jobs/openclaw/cluster-002.md --mode plan
   ```

5. Review artifacts from GitHub Actions.
6. Require `npm run review-results -- <artifact-dir>` to pass before promotion.
7. Change selected jobs to `mode: execute` or `mode: autonomous`.
8. Set repo variable `CLOWNFISH_ALLOW_EXECUTE=1` only for the execution window.
9. Set `CLOWNFISH_ALLOW_FIX_PR=1` only when reviewed fix artifacts are allowed to repair branches or open credited replacement PRs.
10. Dispatch execute/autonomous jobs for reviewed clusters only. Workers still return JSON; `execute-fix-artifact` owns branch repair/replacement PR creation, and `apply-result` performs remaining safe GitHub mutations afterward.
11. Reset `CLOWNFISH_ALLOW_EXECUTE=0` and `CLOWNFISH_ALLOW_FIX_PR=0`.

## Manual Fix PR From Issue or PR Refs

Use `scripts/create-job.mjs` when ClawSweeper or a maintainer has identified a
valid issue/PR cluster that should get one implementation PR. It writes one
idempotent job file and checks for an existing open PR or branch before creating
another job.

```bash
npm run create-job -- \
  --repo openclaw/openclaw \
  --refs 123,456 \
  --prompt-file /tmp/clownfish-prompt.md
```

From a ClawSweeper report, reuse the stored work prompt, related refs,
validation, and likely files:

```bash
npm run create-job -- --from-report ../clawsweeper/records/openclaw-openclaw/items/123.md
```

The generated job defaults to `mode: autonomous`, `allow_fix_pr: true`,
`allow_instant_close: false`, `allow_merge: false`, and
`require_fix_before_close: true`. Commit and push the new job file, then
dispatch it:

```bash
npm run validate:job -- jobs/openclaw/inbox/clawsweeper-openclaw-openclaw-123.md
npm run dispatch -- jobs/openclaw/inbox/clawsweeper-openclaw-openclaw-123.md --mode autonomous
```

Keep `CLOWNFISH_ALLOW_MERGE=0` unless a human explicitly opens the merge gate.

## Manual Fix PR From Commit Finding

Use the `commit finding intake` workflow for a ClawSweeper commit report:

```bash
gh workflow run commit-finding-intake.yml \
  --repo openclaw/clownfish \
  -f target_repo=openclaw/openclaw \
  -f commit_sha=<sha> \
  -f report_repo=openclaw/clawsweeper \
  -f report_path=records/openclaw-openclaw/commits/<sha>.md
```

The workflow is idempotent for the commit SHA. It updates the same audit file,
job file, branch, and PR path on rerun.

If latest `main` no longer needs a fix, the generated artifact allows a clean
no-PR outcome and the audit file records the skip.

## Security Boundary

Security-sensitive work is centrally managed outside ProjectClownfish. The importer skips those clusters by default, the job schema rejects `security_sensitive: true`, the planner marks any hydrated security-sensitive item, `review-results` fails mutating recommendations against those items, and `apply-result` blocks live targets with security-sensitive labels/title/body.

Use the central OpenClaw security path for:

- vulnerability reports, advisories, CVEs, GHSAs, exploitability, or security-class injection bugs;
- leaked secrets, credentials, tokens, API keys, private keys, plaintext secret storage, or sensitive-data exposure;
- SSRF, XSS, CSRF, RCE, auth-token leakage, or similar security-class bugs.

This boundary is intentionally conservative. If a cluster is borderline, do not stage it here.

## Auto-Closure

`npm run apply-result -- <job.md> --latest` is the deterministic mutation path.

It only applies closure actions when all of these are true:

- the job and result are both `mode: execute`;
- or the job and result are both `mode: autonomous`;
- `CLOWNFISH_ALLOW_EXECUTE=1`;
- the job allows both `comment` and `close`;
- the action is `close_duplicate`, `close_superseded`, or `close_fixed_by_candidate`;
- the action includes a canonical/candidate fix ref and live `target_updated_at`;
- GitHub still reports the same `updated_at`;
- the target is open and not maintainer-authored.
- the target is not security-sensitive.

The applicator writes an idempotency marker into the close comment before closing. Re-runs skip already-applied comments/closures instead of posting twice.

## Autonomous Flow

`npm run build-fix-artifact -- <job.md>` hydrates the job refs, linked refs, current `main`, PR files, commits, and checks, then writes:

- `cluster-plan.json`: live cluster inventory and canonical candidates;
- `fix-artifact.json`: drive plan, gates, permissions, and per-item matrix.

Autonomous workers receive those artifacts in the prompt. They can emit instant close actions for high-confidence duplicate/superseded/fixed-by-candidate items, and they can emit `build_fix_artifact` when a canonical fix PR is needed.

They still must not mutate GitHub directly. Missing checkout, failing checks, conflicts, unclear canonical choice, or stale item state means `needs_human`.

When a canonical PR exists, autonomous follow-through must not skip the maintainer loop. The required path is: review current PR state, clear security-sensitive concerns, inspect actionable review comments, inspect review-bot comments from Greptile, Codex, Asile, CodeRabbit, Copilot, and similar reviewers, address findings or mark them blocked, run Codex `/review`, address every Codex review finding, rebase/refactor to the narrowest safe change, run targeted validation, confirm changelog/credit, then only recommend merge after checks and review state are clean. After the PR lands, rerun duplicate classification against the landed PR/commit before recommending closeout.

Every merge action must carry `merge_preflight`. Missing security clearance, unresolved human or bot comments, missing/failed Codex `/review`, unaddressed findings, or missing validation commands blocks merge. The fix executor runs the agentic prep loop before pushing: edit, validation, Codex `/review`, address findings, revalidate, then resolve review threads when `CLOWNFISH_RESOLVE_REVIEW_THREADS=1`. The applicator also checks live GitHub review threads immediately before squash merge.

## Runner Strategy

Use `ubuntu-latest` for ClawSweeper parity and correctness smoke tests.

Use Blacksmith labels only when you intentionally want a non-parity hosted runner for bulk planning/execution:

```bash
npm run dispatch -- jobs/openclaw/cluster-*.md --mode plan --runner blacksmith-4vcpu-ubuntu-2404
```

The workflow uses Node 24 and logs Codex in with `OPENAI_API_KEY`, while also passing `CODEX_API_KEY` to `codex exec`. Set `CODEX_API_KEY` to the same value unless you intentionally separate CI auth.

Codex runs in a read-only sandbox for classification and receives no GitHub token. GitHub read access is scoped to deterministic preflight scripts. For reviewed fix artifacts, `execute-fix-artifact` gives Codex a temporary target checkout without GitHub credentials, then the deterministic executor commits, pushes, opens the replacement PR, and closes uneditable source PRs only after the replacement exists. Remaining write access is scoped to `apply-result`.

Runs for the same job path and mode share a concurrency group. Different cluster jobs can still run in parallel.

Live preflight hydrates job-provided refs by default and records linked refs without expanding them. Set repo variables `CLOWNFISH_MAX_LINKED_REFS` above `0` only for small clusters that need first-hop context and `CLOWNFISH_HYDRATE_COMMENTS=1` when comment bodies are necessary evidence; normal scale runs use issue/PR metadata, body excerpts, PR files, and PR checks.

## Maintainer Comment Routing

`npm run comment-router` scans recent issue and PR comments in the target repo.
It accepts only maintainer-authored commands, gated by GitHub
`author_association` values `OWNER`, `MEMBER`, or `COLLABORATOR` by default.
Contributor comments are ignored without a reply.

Supported triggers:

```text
/clownfish status
/clownfish fix ci
/clownfish address review
/clownfish rebase
/clownfish explain
/clownfish stop
@openclaw-clownfish fix ci
```

Repair commands currently apply only to existing Clownfish PRs, identified by
the `clownfish` label or `clownfish/*` branch prefix. The router resolves the
cluster job from the branch name, posts one idempotent reply with a hidden
marker, and dispatches the normal `cluster-worker.yml` repair path. It records
processed comments in `results/comment-router.json`.

The router also has a trusted automation path for ClawSweeper comments on
existing Clownfish PRs. Default trusted authors are `clawsweeper[bot]` and
`openclaw-clawsweeper[bot]`; override with `CLOWNFISH_TRUSTED_BOTS`. It
dispatches at most one auto-repair per PR head SHA by default, controlled by
`CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_HEAD`.

The scheduled workflow is dry by default. Set
`CLOWNFISH_COMMENT_ROUTER_EXECUTE=1` in repo variables to let scheduled runs
post replies and dispatch workers. Manual workflow dispatch can also pass
`execute=true`.

## Token Strategy

Prefer a fine-grained token or GitHub App token.

Minimum useful permissions depend on action tier:

- `CLOWNFISH_READ_GH_TOKEN`: metadata, issues read, pull requests read, contents read; do not use a broad PAT here
- `CLOWNFISH_GH_TOKEN`: issues write, pull requests write
- merge: contents write and pull requests write
- fix PRs: contents write, pull requests write, issues write

Do not put tokens in job files. Codex receives no GitHub token; the read token is scoped to preflight, and the write token is scoped to the deterministic apply step.

## Promotion Rules

Promote from `plan` to `execute` or `autonomous` only when:

- the canonical item is clear;
- `npm run review-results` passes for the exact artifact;
- no unique reports are being closed;
- comments preserve contributor credit;
- idempotency keys are present;
- `target_updated_at` was fetched from live GitHub state;
- merge actions include passing `merge_preflight` with security clearance, resolved comments, resolved bot comments, passed Codex `/review`, addressed findings, and validation commands;
- high-risk work is marked `needs_human`.
