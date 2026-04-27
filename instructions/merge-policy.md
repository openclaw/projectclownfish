# Merge And Fix Policy

Merging is higher risk than closure. Prefer non-mutating classification unless the merge path is obvious.

Safe-ish merge candidate:

- security-sensitive concerns have been explicitly cleared;
- tests pass or maintainer explicitly accepts risk;
- actionable review comments and review threads have been addressed or explicitly blocked;
- automated review bot comments have been addressed or explicitly blocked, including Greptile, Codex, Asile, CodeRabbit, Copilot, and similar reviewers;
- Codex `/review` has run before merge, passed cleanly, and every finding is addressed;
- branch is current with `main` or has been rebased/refreshed;
- no conflicts;
- small focused diff;
- no broad setup, generated, lockfile, or unrelated churn;
- author credit is preserved;
- superseded PRs are acknowledged before closing.

If merge is unsafe, keep classifying. Failing checks, stale branches, broad diffs,
or unresolved review comments block merge and fixed-by-candidate closeout, but
they do not require whole-cluster `needs_human`. Use `keep_related`,
`keep_independent`, `superseded`, or `fix_needed` when that decision is clear.

When a job includes maintainer calibration approving finalization of a specific
ProjectClownfish PR, do not stop at the first stale branch, unstable merge
state, missing review preflight, or failing relevant check. Treat those as
repair tasks: rebase onto current `main`, make the smallest needed fix/refactor,
address human and review-bot comments, run Codex `/review`, run
`pnpm check:changed`, and then emit merge or a precise blocked result. Block
only with concrete proof that the PR is nonsense, crosses a real security or
privilege boundary, or cannot be repaired inside the job window.

Every merge action must include `merge_preflight` proving security clearance,
resolved comments, resolved bot comments, passed Codex `/review`, addressed
review findings, and validation commands. Missing proof blocks merge.

For multiple PRs:

- keep the clearest passing PR as canonical;
- mark overlapping PRs as superseded or related;
- if two PRs each contain useful parts, emit `needs_human` with a combine plan instead of trying to freestyle a merge.
- after a PR lands, rerun the duplicate/closeout matrix against the landed PR or merge commit before closing anything.

For fix work:

- only create a fix PR when the job allows `fix` or `raise_pr`;
- first try to make the best useful contributor PR landable when `maintainer_can_modify` is true: address review and bot findings, narrow the diff, rebase, validate, then merge if clean;
- if `maintainer_can_modify` is false or the branch cannot be safely repaired, do not force it. Close/supersede only after creating a replacement fix plan that credits the contributor and original PR URL;
- keep the patch tiny;
- refactor only when it makes the fix narrower or removes review blockers;
- inspect review-bot findings before final validation and include the addressed/blocked result in evidence;
- run the repo's narrow tests;
- include links to the cluster, canonical issue, source PR, and credited author in the replacement PR body and changelog plan.
