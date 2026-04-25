# projectclownfish

Private cluster-ops control repo for farming GitHub issue/PR dedupe work to Codex workers.

The repo stays deliberately small:

- Markdown cluster job files are the control plane.
- GitHub Actions or Blacksmith runners are the compute plane.
- Codex workers use repo-local prompts and skills.
- Results land as artifacts and structured JSON.

## Quick Start

Create a job:

```bash
cp jobs/openclaw/cluster-example.md jobs/openclaw/cluster-001.md
$EDITOR jobs/openclaw/cluster-001.md
```

Validate and render locally:

```bash
npm run validate:job -- jobs/openclaw/cluster-001.md
npm run render -- jobs/openclaw/cluster-001.md --mode plan
npm run build-fix-artifact -- jobs/openclaw/autonomous-example.md --offline
```

Run locally without calling Codex:

```bash
npm run worker -- jobs/openclaw/cluster-001.md --mode plan --dry-run
```

Apply a reviewed execute result:

```bash
CLOWNFISH_ALLOW_EXECUTE=1 npm run apply-result -- jobs/openclaw/cluster-001.md --latest
```

`apply-result` is the only path that mutates GitHub. It re-fetches the target issue/PR, verifies `target_updated_at`, skips maintainer-authored items, posts an idempotent close comment, then closes only duplicate, superseded, or fixed-by-candidate actions.

Dispatch one worker:

```bash
gh workflow run cluster-worker.yml \
  -f job=jobs/openclaw/cluster-001.md \
  -f mode=plan \
  -f runner=ubuntu-latest
```

Use a Blacksmith runner by passing its runner label:

```bash
gh workflow run cluster-worker.yml \
  -f job=jobs/openclaw/cluster-001.md \
  -f mode=plan \
  -f runner=blacksmith-4vcpu-ubuntu-2404
```

The workflow queues duplicate runs for the same job path and mode instead of running them concurrently.

## Secrets

Required for real worker runs:

- `CLOWNFISH_GH_TOKEN`: GitHub token with the narrowest possible repo scope.
- `OPENAI_API_KEY`: OpenAI API key for Codex CLI when the runner does not already have auth.
- `CODEX_API_KEY`: same key for `codex exec` auth. The workflow falls back to `OPENAI_API_KEY` when this is unset, but setting both matches Codex CI behavior.

Optional:

- `CLOWNFISH_ALLOWED_OWNER`: defaults to `openclaw`.
- `CLOWNFISH_ALLOW_EXECUTE`: set to `1` only for execute jobs.
- `CLOWNFISH_CODEX_BYPASS`: set to `1` only for externally sandboxed runners.

## Modes

`plan` produces action recommendations only.

`execute` and `autonomous` are gated by all of these:

- workflow input `mode=execute` or `mode=autonomous`
- job frontmatter with the same mode
- `CLOWNFISH_ALLOW_EXECUTE=1`

In execute and autonomous mode Codex still returns JSON only. Projectclownfish applies safe closures deterministically from that JSON, using the ClawSweeper-style live-state and idempotency checks.

`autonomous` also builds a live cluster preflight and fix artifact. It may recommend canonical fixes, merge paths, and post-merge closeouts, but direct GitHub mutations still flow through `apply-result`.

Start with `plan` over a batch of clusters. Promote boring, obvious closeout work to `execute`; use `autonomous` for clusters where duplicate closeout and canonical fix planning should happen together.
