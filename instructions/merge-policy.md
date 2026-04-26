# Merge And Fix Policy

Merging is higher risk than closure. Prefer non-mutating classification unless the merge path is obvious.

Safe-ish merge candidate:

- tests pass or maintainer explicitly accepts risk;
- actionable review comments have been addressed or explicitly blocked;
- automated review bot comments have been addressed or explicitly blocked, including Greptile, Codex, Asile, CodeRabbit, Copilot, and similar reviewers;
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

For multiple PRs:

- keep the clearest passing PR as canonical;
- mark overlapping PRs as superseded or related;
- if two PRs each contain useful parts, emit `needs_human` with a combine plan instead of trying to freestyle a merge.
- after a PR lands, rerun the duplicate/closeout matrix against the landed PR or merge commit before closing anything.

For fix work:

- only create a fix PR when the job allows `fix` or `raise_pr`;
- keep the patch tiny;
- refactor only when it makes the fix narrower or removes review blockers;
- inspect review-bot findings before final validation and include the addressed/blocked result in evidence;
- run the repo's narrow tests;
- include links to the cluster and canonical issue.
