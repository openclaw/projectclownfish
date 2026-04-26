# Autonomous Mode

Autonomous mode is stricter than execute mode. You may do broader reasoning, but you still must not mutate GitHub directly.

Scope:

- Start only from refs in the job file and refs linked from those item bodies, comments, review threads, closing refs, commits, or PR descriptions.
- Do not run broad GitHub search unless the job explicitly says so.
- Use the provided cluster preflight artifact and fix artifact as your starting inventory. It should include hydrated issue comments, PR review summaries, inline PR review comments, check state, merge state, touched files, and linked refs.
- Treat closed context refs as evidence, not targets. Do not emit close actions for them.
- If the cluster changed materially since preflight, block only the affected mutation. Keep classifying other items when the artifact is still current enough for non-mutating decisions.

Before drive mode:

1. Use the artifact's current `main` SHA when recommending a fix, merge, `fixed_by_candidate`, or post-merge closeout. For pure issue-dedupe against a still-open canonical issue, prove the canonical issue and duplicate targets are live and current instead of claiming current `main` behavior is fixed.
2. Use the preflight artifact hydration for every provided and linked issue/PR: bodies, issue comments, labels, state, checks, review state, inline review comments, merge state, linked refs, and touched files. Do not claim comments are missing when `comments_hydrated` or `review_comments_hydrated` shows they are present.
3. For every canonical or candidate PR, inspect review comments and issue comments from review bots including Greptile, Codex, Asile, CodeRabbit, Copilot, and similar automated reviewers when they are present in the artifact.
4. Address every actionable bot review finding in the fix path, prove it is non-actionable from the artifact, or mark only that PR/action `needs_human` with the exact unresolved comment/blocker. Do not treat a PR as merge-ready while an actionable bot finding is unresolved.
5. Classify each item as `canonical`, `duplicate`, `related`, `superseded`, `independent`, `fixed_by_candidate`, or `needs_human`.
6. Identify the canonical path:
   - still-open canonical issue for pure duplicate routing;
   - already merged PR/commit on `main`;
   - open PR that is mergeable or repairable;
   - new fix PR needed because the bug is real and no viable PR exists.
7. Do not emit closure actions until the canonical path is explicit. If the cluster is over-broad, split it into subfamilies in the action matrix and use `keep_related`/`keep_independent` for clear non-targets instead of making the whole result `needs_human`.

Low-signal PR cleanup:

- Use this path only when the job sets `triage_policy: low_signal_prs` and includes the low-signal PR policy.
- Emit `close_low_signal` only for open pull requests with boringly clear low-signal evidence from `instructions/low-signal-prs.md`.
- Use `classification: "low_signal"` and `target_kind: "pull_request"`.
- Do not require `canonical`, `duplicate_of`, or `candidate_fix` for `close_low_signal`; set them to `null`.
- Never close security-sensitive PRs, maintainer-authored/maintainer-reviewed PRs, assigned PRs, focused bug fixes, or PRs with active author/maintainer signal.
- If the PR needs technical correctness judgment beyond the low-signal category, keep it open as `keep_related` or `keep_independent` when that classification is clear; use `needs_human` only when the maintainer decision itself is unclear.

Instant close actions:

- Emit `close_duplicate`, `close_superseded`, `close_fixed_by_candidate`, or `close_low_signal` only for high-confidence covered items.
- Emit close actions with `status: "planned"` only. Do not use `executed`; execution is recorded by the applicator after it posts the comment and closes the item.
- Never emit close actions for targets whose live state is closed. If a closed target needs to appear in the matrix, use `keep_closed` with `status: "skipped"`.
- Include `target_updated_at`, `target_kind`, `canonical` or `candidate_fix`, contributor-credit preserving `comment`, evidence, and a stable `idempotency_key`.
- In action fields, `canonical`, `duplicate_of`, and `candidate_fix` must be explicit refs like `#61741`. Do not put a year, timestamp fragment, unrelated number, or only a prose URL in those fields.
- Leave independent or related reports open as `keep_independent` or `keep_related`. Use `needs_human` only when choosing among viable canonical paths, merge paths, or contributor-credit tradeoffs requires maintainer judgment.

Fix artifact actions:

- If no viable canonical PR exists and the bug still appears real from the artifact, emit `fix_needed` plus `build_fix_artifact` even when the current job cannot open the fix PR. Do not escalate solely because `allow_fix_pr` is false.
- The `build_fix_artifact` action must include affected surfaces, likely files, linked issues/PRs, validation commands, changelog requirement, credit notes, and a PR title/body plan.
- If a target checkout is unavailable or unsafe, do not pretend to patch. Return the artifact and mark only implementation as blocked; keep classification decisions non-mutating when possible.

Merge and post-merge close:

- Recommend `merge_canonical` only when checks, review state, conflicts, changelog, and validation are clean and the job permits merge. Failing checks block merge/fixed-by-candidate closeout, but they do not automatically block `keep_related`, `keep_independent`, or `fix_needed`.
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
- `needs_human` entries only for decisions that remain ambiguous after using the hydrated artifact. Missing permissions or failing checks should usually become blocked/non-mutating actions with exact evidence, not blanket cluster escalation.

Return structured JSON only. Do not close, comment, label, merge, push, or open PRs directly.
