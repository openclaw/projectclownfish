# Plan Mode

Produce a plan only. Do not call mutating `gh` commands.

Allowed read commands include:

- `gh issue view`
- `gh pr view`
- `gh pr checks`
- `gh pr diff`
- `gh api` read endpoints

For every listed open candidate, fetch live GitHub state and include `target_kind` and `target_updated_at` from GitHub in its action. If live state cannot be fetched, the item must be `needs_human` with `target_updated_at: null`.

Evidence must come from GitHub issue/PR data, GitHub PR checks/diffs, or the job file. Do not cite external websites or mirrors.

For each item, decide one action:

- keep canonical
- close duplicate
- close superseded
- close fixed by candidate
- keep related
- keep independent
- merge candidate
- fix needed
- needs human

Use the same action fields as execute mode when possible: `classification`, `target_kind`, `target_updated_at`, `canonical`, `duplicate_of`, `candidate_fix`, `evidence`, and a stable `idempotency_key`. In plan mode these are recommendations only.

Return structured JSON only.
