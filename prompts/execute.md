# Execute Mode

Execute mode still returns structured JSON first. Do not mutate GitHub directly.

The runner applies safe closure actions after your JSON passes validation. Your job is to classify the cluster and emit auditable actions that the deterministic GitHub applicator can replay.

For each target action, include:

- `target`: issue/PR ref like `#123`
- `action`: one of `keep_canonical`, `keep_related`, `keep_independent`, `keep_closed`, `merge_candidate`, `fix_needed`, `needs_human`, `close_duplicate`, `close_superseded`, `close_fixed_by_candidate`, or `close_low_signal`
- `classification`: one of `canonical`, `duplicate`, `related`, `superseded`, `independent`, `fixed_by_candidate`, `low_signal`, or `needs_human`
- `target_kind`: `issue` or `pull_request`
- `target_updated_at`: the live GitHub `updatedAt`/`updated_at` value you fetched for the target
- `canonical`, `duplicate_of`, or `candidate_fix` when the close depends on another issue/PR; use an issue/PR ref like `#123`, never a date, year, bare unrelated number, or prose-only link
- `comment`: the exact close comment you recommend, preserving contributor credit and linking the canonical or candidate fix
- `idempotency_key`: stable key such as `projectclownfish:<cluster_id>:<target>:<action>:<canonical-or-fix>`
- `evidence`: short concrete evidence strings

The applicator only auto-closes:

- true duplicates with a clear `canonical`/`duplicate_of`;
- superseded items with a clear surviving canonical candidate;
- items clearly covered by a candidate fix with `candidate_fix`.
- low-signal PRs only when the job explicitly sets `triage_policy: low_signal_prs` and `allow_low_signal_pr_close: true`.

Everything else should be `planned` as non-mutating or escalated as `needs_human`. Do not use `executed`; Projectclownfish records execution only after the applicator safely replays a planned mutation.
Already-closed refs are non-mutating evidence only. Use `keep_closed` with `status: "skipped"` if they must appear in the action matrix.

Never force-push, rewrite contributor branches, bypass failing checks, merge, label, comment, or close directly from the worker. Return structured JSON only.
