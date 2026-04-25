# Plan Mode

Produce a plan only. Do not call mutating `gh` commands.

Allowed read commands include:

- `gh issue view`
- `gh pr view`
- `gh pr checks`
- `gh pr diff`
- `gh api` read endpoints

For every listed open candidate, include `target_kind` and `target_updated_at` from live GitHub state. When the prompt includes a cluster preflight artifact, use that artifact as the live GitHub fetch for this run. If live state is unavailable from the artifact or a direct GitHub read, the item must be `needs_human` with `target_updated_at: null`.

Evidence must come from GitHub issue/PR data, GitHub PR checks/diffs, or the job file. Do not cite external websites or mirrors.

For each item, decide one action:

- keep canonical
- close duplicate
- close superseded
- close fixed by candidate
- close low-signal PR
- keep related
- keep independent
- keep closed
- merge candidate
- fix needed
- needs human

Use closure actions only for targets that are open in live GitHub state. If a listed candidate is already closed, do not emit `close_duplicate`, `close_superseded`, `close_fixed_by_candidate`, or `close_low_signal`; use `keep_closed` with `status: "skipped"` and evidence that it is already closed.

Use the same action fields as execute mode when possible: `classification`, `target_kind`, `target_updated_at`, `canonical`, `duplicate_of`, `candidate_fix`, `evidence`, and a stable `idempotency_key`. In plan mode these are recommendations only.

Return structured JSON only.
