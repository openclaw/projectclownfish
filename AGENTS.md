# Projectclownfish Agent Notes

projectclownfish farms one GitHub issue/PR cluster to one isolated Codex worker.

## Hard Rules

- Default to `plan`; do not execute GitHub mutations unless the job says `mode: execute` or `mode: autonomous` and `CLOWNFISH_ALLOW_EXECUTE=1`.
- Re-fetch live GitHub state before any close, label, comment, merge, or fix action.
- If canonical choice is unclear or the cluster changed materially, stop with `needs_human`.
- Checks or conflicts block only the affected mutation. For ProjectClownfish replacement branches, rebase/refactor narrowly onto current `origin/main` and let the executor repair recoverable conflicts before escalating.
- Close-action `canonical`, `duplicate_of`, and `candidate_fix` refs must be hydrated preflight items. Unhydrated refs from comments are evidence only until re-planned.
- Never print tokens, secrets, or full environment dumps.
- Every mutation needs an idempotency key and must be recorded in the result artifact.
- Preserve contributor credit. Comment before closing, and explain the canonical path.
- One worker owns one cluster job. Do not roam into adjacent clusters except to report likely follow-up jobs.

## Local Commands

```bash
npm run validate
npm run render -- jobs/openclaw/cluster-example.md --mode plan
npm run worker -- jobs/openclaw/cluster-example.md --mode plan --dry-run
```

## GitHub Actions

Use `cluster-worker.yml` for one cluster job. Use `scripts/dispatch-jobs.mjs` to fan out a selected list.
