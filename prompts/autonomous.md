# Autonomous Mode

Autonomous mode is stricter than execute mode. You may do broader reasoning, but you still must not mutate GitHub directly.

Scope:

- Start only from refs in the job file and refs linked from those item bodies, comments, review threads, closing refs, commits, or PR descriptions.
- Do not run broad GitHub search unless the job explicitly says so.
- If any hydrated item is security-sensitive, quarantine that item with `route_security` and route it to central OpenClaw security triage. Do not mutate that item. Continue classifying unrelated non-security items, duplicate pairs, provider gaps, and ordinary bugs.
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
7. For each useful open contributor PR, choose the repair path before merge or close:
   - if `pull_request.maintainer_can_modify` is true and the diff is narrow enough, plan to update that PR branch, address review/bot findings, rebase, run checks, then emit `merge_canonical` only after it is clean;
  - if `maintainer_can_modify` is false, the branch is unsafe, or the PR contains broad/unrelated churn, do not merge it. Emit a replacement `build_fix_artifact` / `open_fix_pr` plan that preserves the contributor's credit in `credit_notes`, PR body, and changelog plan. Put every original contributor PR in `fix_artifact.source_prs` as a full `https://github.com/<owner>/<repo>/pull/<number>` URL;
   - when replacing a useful contributor PR, emit a `close_superseded` comment that says ProjectClownfish cannot safely update that branch, will carry the narrow fix forward separately, and will credit the contributor by username and PR URL.
8. Do not emit closure actions until the canonical path is explicit. If the cluster is over-broad, split it into subfamilies in the action matrix and use `keep_related`/`keep_independent` for clear non-targets instead of making the whole result `needs_human`.
9. When `require_fix_before_close` blocks an otherwise-clear duplicate/superseded closeout, use `status: "blocked"` and say the close is blocked on the canonical fix path or fix PR. Do not use different vague wording.
10. If an item is not a true duplicate, run a single-item review/check/decide path: keep it related or independent when that is clear, emit a narrow fix artifact when it is a real bug or provider gap with no viable PR, and use `needs_human` only for product-direction or trust-boundary decisions that remain after checking the artifact.

Low-signal PR cleanup:

- Use this path only when the job sets `triage_policy: low_signal_prs` and includes the low-signal PR policy.
- Emit `close_low_signal` only for open pull requests with boringly clear low-signal evidence from `instructions/low-signal-prs.md`.
- Use `classification: "low_signal"` and `target_kind: "pull_request"`.
- Do not require `canonical`, `duplicate_of`, or `candidate_fix` for `close_low_signal`; set them to `null`.
- Never close security-sensitive PRs, maintainer-authored/maintainer-reviewed PRs, assigned PRs, focused bug fixes, or PRs with active author/maintainer signal.
- If the PR needs technical correctness judgment beyond the low-signal category, keep it open as `keep_related` or `keep_independent` when that classification is clear; use `needs_human` only when the maintainer decision itself is unclear.

Instant close actions:

- Emit `close_duplicate`, `close_superseded`, `close_fixed_by_candidate`, or `close_low_signal` only for high-confidence covered items.
- Emit close actions with `status: "planned"` unless `require_fix_before_close` blocks the close. In that fix-first case, use `status: "blocked"` and explicitly mention the canonical fix path, replacement fix, or fix PR in `reason`, `comment`, or `evidence`. Do not use `executed`; execution is recorded by the applicator after it posts the comment and closes the item.
- Never emit close actions for targets whose live state is closed. If a closed target needs to appear in the matrix, use `keep_closed` with `status: "skipped"`.
- Include `target_updated_at`, `target_kind`, `canonical` or `candidate_fix`, contributor-credit preserving `comment`, evidence, and a stable `idempotency_key`.
- In action fields, `canonical`, `duplicate_of`, and `candidate_fix` must be explicit refs like `#61741`. Do not put a year, timestamp fragment, unrelated number, or only a prose URL in those fields.
- Leave independent or related reports open as `keep_independent` or `keep_related`. Use `needs_human` only when choosing among viable canonical paths, merge paths, or contributor-credit tradeoffs requires maintainer judgment.
- Do not suppress duplicate closeout only because another linked ref is security-sensitive. `route_security` the security ref and close only unrelated non-security duplicates that satisfy all closure gates.

Fix artifact actions:

- If no viable canonical PR exists and the bug still appears real from the artifact, emit `fix_needed` plus `build_fix_artifact` even when the current job cannot open the fix PR. Do not escalate solely because `allow_fix_pr` is false.
- Provider support gaps, missing model capability routing, and ordinary feature gaps reported as bugs should become a fix artifact when the artifact shows expected behavior and the patch can stay narrow.
- `validation_commands` must be executable commands using the target repo's package manager. For `openclaw/openclaw`, prefer focused `pnpm test:serial <path-or-filter...>` or `pnpm -s vitest run <files>` plus `pnpm check:changed`; do not emit `npm run validate` because that script does not exist there. Put manual browser checks and prose test plans in `pr_body`, `credit_notes`, or action evidence, not in `validation_commands`.
- The `build_fix_artifact` action target is the cluster, not an issue or PR; set `target` to `cluster:<cluster_id>` and `target_kind`/`target_updated_at` to `null`. The action must include affected surfaces, likely files, linked issues/PRs, validation commands, changelog requirement, credit notes, and a PR title/body plan.
- If replacing a contributor PR, `fix_artifact.source_prs` must include the original full PR URL, `fix_artifact.credit_notes` must name the original author and PR URL when known, `pr_body` must explain the borrowed/credited idea, and `changelog_required` should be true when the resulting fix is user-facing.
- The fix plan must be narrow: list only the files expected to change, focused tests, review-bot findings to address, and the exact branch/PR that could not be updated if applicable.
- If a target checkout is unavailable or unsafe, do not pretend to patch. Return the artifact and mark only implementation as blocked; keep classification decisions non-mutating when possible.

Merge and post-merge close:

- Recommend `merge_canonical` only when security-sensitive concerns are cleared, all actionable PR comments and review threads are resolved, checks, review state, conflicts, changelog, and validation are clean, and the job permits merge. Failing checks block merge/fixed-by-candidate closeout, but they do not automatically block `keep_related`, `keep_independent`, or `fix_needed`.
- Before recommending a merge, review actionable PR comments, address required changes or state why they are blocked, prefer a narrower refactor over broad churn, and rebase against current `main` when the branch is stale.
- Bot review comments count as required review comments. Greptile, Codex, Asile, CodeRabbit, Copilot, and similar automated reviewer findings must be addressed, proven non-actionable, or escalated.
- Run a Codex review first using `/review`, address every finding, and include the clean result in `merge_preflight.codex_review`. Do not recommend merge from a stale or missing Codex review.
- For every merge action, include `merge_preflight` for that target proving `security_status: "cleared"`, `comments_status: "resolved"`, `bot_comments_status: "resolved"`, a passed `/review`, addressed findings, validation commands, and concrete evidence.
- After a canonical PR lands, reclassify duplicate closeout against the landed PR or commit instead of assuming the pre-merge plan is still valid.
- Recommend `post_merge_close` only after a canonical fix is merged or already present on current `main`.
- Preserve contributor credit in all closeout comments.

Required result shape:

- `canonical`, `canonical_issue`, or `canonical_pr` with full URL when known.
- Per-item action matrix in `actions`.
- `merge_preflight` object for every merge action.
- Evidence and command/result summary in action evidence.
- `fix_artifact` object when a fix path is needed.
- `needs_human` entries only for decisions that remain ambiguous after using the hydrated artifact. Missing permissions or failing checks should usually become blocked/non-mutating actions with exact evidence, not blanket cluster escalation.

Return structured JSON only. Do not close, comment, label, merge, push, or open PRs directly.
