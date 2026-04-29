# Auto-Updating Clownfish PRs

Read when: changing Clownfish PR repair automation, ClawSweeper review
integration, comment routing, duplicate dispatch guards, or generated-PR
marking.

## Goal

Clownfish-created PRs should keep improving after they are opened. When
ClawSweeper reviews a Clownfish PR and leaves actionable feedback, Clownfish
can dispatch the same cluster job again and update the existing branch. It
must not create another PR for the same issue cluster, and it must not react to
ordinary contributor comments.

The loop is intentionally small:

1. Clownfish opens or updates `clownfish/<cluster-id>`.
2. ClawSweeper reviews that PR.
3. The comment router sees trusted ClawSweeper feedback.
4. Clownfish dispatches the existing job through `cluster-worker.yml`.
5. The repair worker pushes another commit to the same branch if it finds a
   safe, narrow fix.
6. ClawSweeper reviews the updated PR again.

## Trust Model

There are two accepted input lanes.

Maintainer commands:

- author association must be `OWNER`, `MEMBER`, or `COLLABORATOR` by default;
- supported commands are `/clownfish fix ci`, `/clownfish address review`,
  `/clownfish rebase`, `/clownfish status`, `/clownfish explain`, and
  `/clownfish stop`;
- commands from contributors are ignored without a reply.

Trusted automation:

- author login must be in `CLOWNFISH_TRUSTED_BOTS`;
- default trusted bot logins are `clawsweeper[bot]` and
  `openclaw-clawsweeper[bot]`;
- the target must already be a Clownfish PR;
- the action becomes `clawsweeper_auto_repair`.

The trusted automation lane exists only for review bots we control. It does
not treat random `@clownfish`, `@openclaw-clownfish`, or contributor prose as
permission to spend workers or push commits.

## Clownfish PR Markers

The router considers a PR to be from Clownfish when any of these are true:

- branch starts with `clownfish/`;
- the PR has the `clownfish` label;
- PR author login is in `CLOWNFISH_AUTHOR_LOGINS`.

The branch prefix is the durable identity because it maps directly back to the
cluster id and job path. The label and author checks are compatibility markers
for already-open PRs and dashboard tools.

## ClawSweeper Trigger

Preferred ClawSweeper comments should include a hidden marker:

```html
<!-- clawsweeper-action:fix-required sha=<head-sha> finding=<id> -->
```

Accepted marker actions:

- `fix-required`
- `repair-required`
- `address-review`
- `fix-ci`

The router also has a conservative fallback for current ClawSweeper review
comments. It only applies to trusted bot authors and looks for phrases like
`keep this PR open`, `needs follow-up`, `still missing`, `unresolved review`,
or `failing checks`. It ignores positive summaries such as `no actionable`,
`looks good`, `safe to merge`, and `no findings`.

The marker is still the preferred contract. It is easier to audit and safer
than relying on prose.

## Duplicate Guards

Clownfish has three layers of duplicate protection:

- job creation checks for an existing open PR or branch before writing a new
  job;
- the comment router writes an idempotency marker in its reply and records
  processed comments in `results/comment-router.json`;
- trusted ClawSweeper repairs are capped per PR head SHA.

The default cap is one auto-repair dispatch per PR head SHA:

```bash
CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_HEAD=1
```

That means many ClawSweeper comments on the same commit trigger at most one
repair run. If Clownfish pushes a new commit, the PR head SHA changes and a
new ClawSweeper finding can trigger one more repair run.

Runs for the same job path and mode share the `cluster-worker.yml` concurrency
group, so repeated dispatches queue instead of racing the same branch.

## Failure Behavior

The router does not dispatch when:

- the comment author is not trusted automation and is not a maintainer;
- the issue or PR is closed;
- the target is not a PR;
- the PR is not marked as a Clownfish PR;
- the branch cannot be mapped back to a job file;
- the same comment was already processed;
- the same PR head SHA already reached the auto-repair cap.

For trusted automation comments, these blocked cases are silent skips. That
keeps Clownfish from replying to every ordinary contributor PR that
ClawSweeper reviews.

Security-sensitive reports stay out of this lane. Those should be routed to the
central OpenClaw security process rather than auto-repaired from review
comments.

## Implementation Map

Workflow:

- `.github/workflows/comment-router.yml`

Scripts:

- `scripts/comment-router.mjs`
- `scripts/comment-router-core.mjs`
- `scripts/comment-router-utils.mjs`

Durable state:

- `results/comment-router.json`
- `results/comment-router-latest.json`

Important knobs:

- `CLOWNFISH_COMMENT_ROUTER_EXECUTE=1` enables scheduled writes and dispatches;
- `CLOWNFISH_TRUSTED_BOTS` controls trusted automation authors;
- `CLOWNFISH_AUTHOR_LOGINS` controls PR author identities treated as Clownfish;
- `CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_HEAD` controls per-head repair caps.

## Verification

Syntax and workflow checks:

```bash
node --check scripts/comment-router.mjs
node --check scripts/comment-router-core.mjs
node --check scripts/comment-router-utils.mjs
actionlint .github/workflows/comment-router.yml
```

Dry-run the router against live recent comments:

```bash
npm run comment-router -- \
  --repo openclaw/openclaw \
  --lookback-minutes 180 \
  --max-comments 100
```

The scheduled workflow remains dry unless `CLOWNFISH_COMMENT_ROUTER_EXECUTE=1`
is set or a maintainer manually dispatches the workflow with `execute=true`.
