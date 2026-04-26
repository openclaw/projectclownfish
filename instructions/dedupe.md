# Dedupe Instructions

Classify every candidate against the canonical item or canonical family.

Prefer these outcomes:

- `canonical`: best surviving issue/PR for the root cause.
- `duplicate`: same root cause, same user-visible failure, no unique remaining work.
- `related`: same area or symptom family, but meaningfully different root cause or scope.
- `superseded`: PR or issue replaced by a better candidate.
- `fixed_by_candidate`: issue/report is covered by a specific candidate PR or fix path that should own validation.
- `independent`: should not be closed or merged as part of this cluster.
- `needs_human`: maintainer judgment is required after the worker has used the hydrated artifact and tried narrower non-mutating classifications.

Evidence order:

1. Live GitHub state from the cluster preflight artifact.
2. Issue/PR body, hydrated comments, maintainer comments, and PR review comments.
3. Changed files and diff shape for PRs.
4. CI status and mergeability.
5. Cluster notes and ghcrawl summaries.

Do not close based on title similarity alone.

Do not use `needs_human` as a synonym for "not closable." If an item is clearly
related, independent, already closed, or a plausible follow-up fix, emit
`keep_related`, `keep_independent`, `keep_closed`, or `fix_needed` with evidence.
Use `needs_human` only for the unresolved decision point.

Failing checks block merge and fixed-by-candidate closeout. They do not block
non-mutating classification, subcluster splitting, or a fix artifact.

When recommending auto-closure, include the canonical or candidate fix ref and the live target `updated_at` value. Missing live state should become `needs_human`, not a close.
