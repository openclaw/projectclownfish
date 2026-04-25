# Autonomous Mode

Autonomous mode is stricter than execute mode. You may do broader reasoning, but you still must not mutate GitHub directly.

Scope:

- Start only from refs in the job file and refs linked from those item bodies, comments, review threads, closing refs, commits, or PR descriptions.
- Do not run broad GitHub search unless the job explicitly says so.
- Use the provided cluster preflight artifact and fix artifact as your starting inventory.
- If the cluster changed materially since preflight, return `needs_human`.

Before drive mode:

1. Fetch current `main` for the target repo when recommending a fix, merge, `fixed_by_candidate`, or post-merge closeout. For pure issue-dedupe against a still-open canonical issue, prove the canonical issue and duplicate targets are live and current instead of claiming current `main` behavior is fixed.
2. Hydrate every provided and linked issue/PR with bodies, comments, labels, state, checks, review state, linked closing refs, and touched files when available.
3. For every canonical or candidate PR, fetch review comments and issue comments from review bots including Greptile, Codex, Asile, CodeRabbit, Copilot, and similar automated reviewers.
4. Address every actionable bot review finding in the fix path, or mark the item `needs_human` with the exact unresolved comment/blocker. Do not treat a PR as merge-ready while an actionable bot finding is unresolved.
5. Classify each item as `canonical`, `duplicate`, `related`, `superseded`, `independent`, `fixed_by_candidate`, or `needs_human`.
6. Identify the canonical path:
   - still-open canonical issue for pure duplicate routing;
   - already merged PR/commit on `main`;
   - open PR that is mergeable or repairable;
   - new fix PR needed because the bug is real and no viable PR exists.
7. Do not emit closure actions until the canonical path is explicit.

Instant close actions:

- Emit `close_duplicate`, `close_superseded`, or `close_fixed_by_candidate` only for high-confidence covered items.
- Include `target_updated_at`, `target_kind`, `canonical` or `candidate_fix`, contributor-credit preserving `comment`, evidence, and a stable `idempotency_key`.
- In action fields, `canonical`, `duplicate_of`, and `candidate_fix` must be explicit refs like `#61741`. Do not put a year, timestamp fragment, unrelated number, or only a prose URL in those fields.
- Leave independent or unclear reports open as `keep_independent`, `keep_related`, or `needs_human`.

Fix artifact actions:

- If no viable canonical PR exists and the bug still reproduces, emit `fix_needed` plus `build_fix_artifact`.
- The `build_fix_artifact` action must include affected surfaces, likely files, linked issues/PRs, validation commands, changelog requirement, credit notes, and a PR title/body plan.
- If a target checkout is unavailable or unsafe, do not pretend to patch. Return the artifact and mark implementation as `needs_human`.

Merge and post-merge close:

- Recommend `merge_canonical` only when checks, review state, conflicts, changelog, and validation are clean.
- Before recommending a merge, review actionable PR comments, address required changes or state why they are blocked, prefer a narrower refactor over broad churn, and rebase against current `main` when the branch is stale.
- Bot review comments count as required review comments. Greptile, Codex, Asile, CodeRabbit, Copilot, and similar automated reviewer findings must be addressed, proven non-actionable, or escalated.
- After a canonical PR lands, reclassify duplicate closeout against the landed PR or commit instead of assuming the pre-merge plan is still valid.
- Recommend `post_merge_close` only after a canonical fix is merged or already present on current `main`.
- Preserve contributor credit in all closeout comments.

Required result shape:

- `canonical`, `canonical_issue`, or `canonical_pr` with full URL when known.
- Per-item action matrix in `actions`.
- Evidence and command/result summary in action evidence.
- `fix_artifact` object when a fix path is needed.
- `needs_human` entries for anything blocked by ambiguity, stale state, failing checks, missing checkout, or missing permissions.

Return structured JSON only. Do not close, comment, label, merge, push, or open PRs directly.
