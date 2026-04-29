<img width="1584" height="672" alt="clownfish_banner" src="https://github.com/user-attachments/assets/6b2a0d0f-aca8-47e5-8a1f-eb266c760646" />

# 🐠 Clownfish

Clownfish is a conservative OpenClaw maintainer tool for one-cluster issue and PR cleanup.

It takes a curated GitHub issue/PR cluster, asks a Codex worker to classify the items, and applies only narrow, auditable cleanup actions when the evidence is strong. This compliments the pre-pass work on [clawsweeper](https://github.com/openclaw/clawsweeper) and act as the second-pass intent based cluster resolution.

Allowed automated close reasons:

- duplicate of a clear canonical thread
- superseded by a clear canonical thread
- fixed by a specific candidate fix

Manual backlog-cleanup jobs may also use
[`instructions/low-signal-prs.md`](instructions/low-signal-prs.md) for
drive-by PRs that are clearly blank-template, docs-only discoverability churn,
test-only coverage spam, refactor-only noise, third-party capabilities that
belong on ClawHub, risky unapproved infra, or dirty branches. This policy is
opt-in per job and should return `needs_human` for plausible bug fixes or
anything with active maintainer signal.

Everything else stays open or is escalated for maintainer review.

Security-sensitive reports are deliberately out of scope. Clownfish
routes those refs to central OpenClaw security handling and keeps processing
unrelated ordinary bugs, provider gaps, and duplicate cleanup in the same
cluster. It follows OpenClaw `SECURITY.md`: trusted-operator exec behavior,
provider gaps, feature gaps, and hardening-only parity drift are not treated as
vulnerabilities unless there is a real trust-boundary bypass.

## Status

Clownfish is intentionally smaller than ClawSweeper. ClawSweeper scans the whole OpenClaw backlog on a cadence; Clownfish handles targeted clusters that were already grouped by a human, gitcrawl, or another dedupe tool.

Cluster discovery currently comes from [openclaw/gitcrawl](https://github.com/openclaw/gitcrawl).

<img width="3582" height="2160" alt="image" src="https://github.com/user-attachments/assets/20b816cc-72ab-479e-bc18-84f5b2b53745" />

The default workflow is proposal-first. It does not comment or close unless a job is explicitly promoted and the deterministic applicator confirms live GitHub state has not changed.

## Dashboard

Last dashboard update: Apr 29, 2026, 22:08 UTC

<!-- projectclownfish-dashboard:start -->
State: Failed clusters need inspection

Scope: 319 active latest cluster reports. 1 policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 319 | 100% |
| Policy-archived clusters | 1 | audit |
| Clean completed clusters | 147 | 46.1% |
| Needs-human clusters | 46 | 14.4% |
| Latest successful clusters | 291 | 91.2% |
| Latest failed clusters | 4 | 1.3% |
| Latest cancelled clusters | 0 | 0.0% |
| Run attempts archived | 572 | audit |
| Fix action attempts | 164 | audit |
| Fix actions executed | 0 | 0.0% |
| Fix actions failed | 35 | 21.3% |
| Fix actions blocked | 50 | 30.5% |
| Latest clusters with fix failures | 44 | 13.8% |
| Distinct PRs touched | 997 | 100% |
| Open PRs tracked | 364 | 36.5% |
| Closed unmerged PRs tracked | 518 | 52.0% |
| Completed close actions | 30 | 10.4% |
| Completed merge actions | 23 | 8.0% |
| Duplicate closes | 22 | 73.3% |
| Superseded closes | 0 | 0.0% |
| Fixed-by-candidate closes | 0 | 0.0% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 119 | 41.2% |
| Skipped mutation attempts | 117 | 40.5% |

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
| [gitcrawl-2880-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2880-dedupe-only-20260429-remote.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-2880-dedupe-only-20260429-remote.md | target changed since worker review | [report](results/openclaw/gitcrawl-2880-dedupe-only-20260429-remote.md) | [25134553126](https://github.com/openclaw/clownfish/actions/runs/25134553126) |
| [gitcrawl-2733-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2733-dedupe-only-20260429-remote.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-2733-dedupe-only-20260429-remote.md | target changed since worker review | [report](results/openclaw/gitcrawl-2733-dedupe-only-20260429-remote.md) | [25134075609](https://github.com/openclaw/clownfish/actions/runs/25134075609) |
| [gitcrawl-2477-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2477-dedupe-only-20260429-remote.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-2477-dedupe-only-20260429-remote.md | candidate fix is not listed in job refs | [report](results/openclaw/gitcrawl-2477-dedupe-only-20260429-remote.md) | [25133514336](https://github.com/openclaw/clownfish/actions/runs/25133514336) |
| [gitcrawl-2282-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2282-dedupe-only-20260429-remote.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-2282-dedupe-only-20260429-remote.md | candidate fix is not listed in job refs | [report](results/openclaw/gitcrawl-2282-dedupe-only-20260429-remote.md) | [25132458580](https://github.com/openclaw/clownfish/actions/runs/25132458580) |
| [gitcrawl-2111-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2111-dedupe-only-20260429-remote.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-2111-dedupe-only-20260429-remote.md | target changed since worker review | [report](results/openclaw/gitcrawl-2111-dedupe-only-20260429-remote.md) | [25131909532](https://github.com/openclaw/clownfish/actions/runs/25131909532) |
| [gitcrawl-1972-dedupe-only-20260429-remote](results/openclaw/gitcrawl-1972-dedupe-only-20260429-remote.md) | needs human | jobs/openclaw/inbox/gitcrawl-1972-dedupe-only-20260429-remote.md | #43443: maintainer decision needed on launchd EIO retry plus SIGKILL/PID identity semantics before any automated replacement or rebase. | [report](results/openclaw/gitcrawl-1972-dedupe-only-20260429-remote.md) | [25131315944](https://github.com/openclaw/clownfish/actions/runs/25131315944) |
| [gitcrawl-1998-dedupe-only-20260429-remote](results/openclaw/gitcrawl-1998-dedupe-only-20260429-remote.md) | needs human | jobs/openclaw/inbox/gitcrawl-1998-dedupe-only-20260429-remote.md | #64731 requires maintainer product-direction choice: Telegram-specific fallback notices outside verbose mode versus the broader unhydrate... | [report](results/openclaw/gitcrawl-1998-dedupe-only-20260429-remote.md) | [25131329587](https://github.com/openclaw/clownfish/actions/runs/25131329587) |
| [gitcrawl-1957-dedupe-only-20260429-remote](results/openclaw/gitcrawl-1957-dedupe-only-20260429-remote.md) | needs human | jobs/openclaw/inbox/gitcrawl-1957-dedupe-only-20260429-remote.md | #49408 requires maintainer policy judgment on whether root-escaping symlinked managed skills should be supported or explicitly documented... | [report](results/openclaw/gitcrawl-1957-dedupe-only-20260429-remote.md) | [25131311478](https://github.com/openclaw/clownfish/actions/runs/25131311478) |
| [gitcrawl-1953-dedupe-only-20260429-remote](results/openclaw/gitcrawl-1953-dedupe-only-20260429-remote.md) | needs human | jobs/openclaw/inbox/gitcrawl-1953-dedupe-only-20260429-remote.md | No single open canonical issue or PR clearly replaces closed representative #43551. The open candidates should be split by maintainers in... | [report](results/openclaw/gitcrawl-1953-dedupe-only-20260429-remote.md) | [25131307011](https://github.com/openclaw/clownfish/actions/runs/25131307011) |
| [gitcrawl-16529-dedupe-only-20260429-remote](results/openclaw/gitcrawl-16529-dedupe-only-20260429-remote.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-16529-dedupe-only-20260429-remote.md | candidate fix is not listed in job refs | [report](results/openclaw/gitcrawl-16529-dedupe-only-20260429-remote.md) | [25130299053](https://github.com/openclaw/clownfish/actions/runs/25130299053) |
| [gitcrawl-12535-dedupe-only-20260429-remote](results/openclaw/gitcrawl-12535-dedupe-only-20260429-remote.md) | needs human | jobs/openclaw/inbox/gitcrawl-12535-dedupe-only-20260429-remote.md | Codex worker timed out after 1800000ms | [report](results/openclaw/gitcrawl-12535-dedupe-only-20260429-remote.md) | [25109664831](https://github.com/openclaw/clownfish/actions/runs/25109664831) |
| [gitcrawl-12851-dedupe-only-20260429-remote](results/openclaw/gitcrawl-12851-dedupe-only-20260429-remote.md) | workflow failure | jobs/openclaw/inbox/gitcrawl-12851-dedupe-only-20260429-remote.md | No close, merge, label, or fix action is safe from this dedupe-only pass. The canonical hint #67816 and related QR follow-up #67820 have ... | [report](results/openclaw/gitcrawl-12851-dedupe-only-20260429-remote.md) | [25109675769](https://github.com/openclaw/clownfish/actions/runs/25109675769) |
| [gitcrawl-238838-dedupe-only-20260429c](results/openclaw/gitcrawl-238838-dedupe-only-20260429c.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-238838-dedupe-only-20260429c.md | target is not listed in job candidates | [report](results/openclaw/gitcrawl-238838-dedupe-only-20260429c.md) | [25108831266](https://github.com/openclaw/clownfish/actions/runs/25108831266) |
| [gitcrawl-238871-dedupe-only-20260429c](results/openclaw/gitcrawl-238871-dedupe-only-20260429c.md) | needs human | jobs/openclaw/inbox/gitcrawl-238871-dedupe-only-20260429c.md | Choose the canonical Feishu group-thread mention API and implementation path between #48945 threadFollowUp active/topic/off and #40530 re... | [report](results/openclaw/gitcrawl-238871-dedupe-only-20260429c.md) | [25107991613](https://github.com/openclaw/clownfish/actions/runs/25107991613) |
| [gitcrawl-238843-dedupe-only-20260429c](results/openclaw/gitcrawl-238843-dedupe-only-20260429c.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-238843-dedupe-only-20260429c.md | target changed since worker review | [report](results/openclaw/gitcrawl-238843-dedupe-only-20260429c.md) | [25105238272](https://github.com/openclaw/clownfish/actions/runs/25105238272) |
| [gitcrawl-238856-dedupe-only-20260429c](results/openclaw/gitcrawl-238856-dedupe-only-20260429c.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-238856-dedupe-only-20260429c.md | target changed since worker review | [report](results/openclaw/gitcrawl-238856-dedupe-only-20260429c.md) | [25105234648](https://github.com/openclaw/clownfish/actions/runs/25105234648) |
| [low-signal-pr-sweep-20260425T2355-03](results/openclaw/low-signal-pr-sweep-20260425t2355-03.md) | apply blocked | jobs/openclaw/inbox/low-signal-pr-sweep-20260425T2355-03.md | target changed since worker review | [report](results/openclaw/low-signal-pr-sweep-20260425t2355-03.md) | [25105232771](https://github.com/openclaw/clownfish/actions/runs/25105232771) |
| [low-signal-pr-sweep-20260427T0530-01](results/openclaw/low-signal-pr-sweep-20260427t0530-01.md) | apply blocked | jobs/openclaw/inbox/low-signal-pr-sweep-20260427T0530-01.md | target changed since worker review | [report](results/openclaw/low-signal-pr-sweep-20260427t0530-01.md) | [25105230558](https://github.com/openclaw/clownfish/actions/runs/25105230558) |
| [automerge-openclaw-openclaw-74126](results/openclaw/automerge-openclaw-openclaw-74126.md) | needs human | jobs/openclaw/inbox/automerge-openclaw-openclaw-74126.md | #74126: maintainer needs to complete the live automerge adoption smoke check and close the PR manually if appropriate; the hydrated artif... | [report](results/openclaw/automerge-openclaw-openclaw-74126.md) | [25101630563](https://github.com/openclaw/clownfish/actions/runs/25101630563) |
| [gitcrawl-238884-dedupe-only-20260429c](results/openclaw/gitcrawl-238884-dedupe-only-20260429c.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-238884-dedupe-only-20260429c.md | target changed since worker review | [report](results/openclaw/gitcrawl-238884-dedupe-only-20260429c.md) | [25100259952](https://github.com/openclaw/clownfish/actions/runs/25100259952) |
| [clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a](results/openclaw/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md | job does not allow merge | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md) | [25095715904](https://github.com/openclaw/clownfish/actions/runs/25095715904) |
| [clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b](results/openclaw/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b.md) | fix blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b.md | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b.md) | [25094690632](https://github.com/openclaw/clownfish/actions/runs/25094690632) |
| [clawsweeper-commit-openclaw-openclaw-4eba70b532f8](results/openclaw/clawsweeper-commit-openclaw-openclaw-4eba70b532f8.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-4eba70b532f8.md | job does not allow merge | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-4eba70b532f8.md) | [25093937673](https://github.com/openclaw/clownfish/actions/runs/25093937673) |
| [clawsweeper-commit-openclaw-openclaw-a887a512ef8e](results/openclaw/clawsweeper-commit-openclaw-openclaw-a887a512ef8e.md) | workflow failure | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-a887a512ef8e.md | Found one concrete CI regression. The commit adds duplicate `run_checks_node_extensions` keys in the workflow output map and manifest obj... | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-a887a512ef8e.md) | [25093541960](https://github.com/openclaw/clownfish/actions/runs/25093541960) |
| [clawsweeper-commit-openclaw-openclaw-5435591f6a1a](results/openclaw/clawsweeper-commit-openclaw-openclaw-5435591f6a1a.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-5435591f6a1a.md | job does not allow merge | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-5435591f6a1a.md) | [25090570865](https://github.com/openclaw/clownfish/actions/runs/25090570865) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b](results/openclaw/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [25094690632](https://github.com/openclaw/clownfish/actions/runs/25094690632) |
| [ghcrawl-166004-agentic-merge](results/openclaw/ghcrawl-166004-agentic-merge.md) | blocked |  |  | Codex /review did not pass after 2 attempt(s): Cannot perform the review without inspecting the repository diff and validation state. | [25087637821](https://github.com/openclaw/clownfish/actions/runs/25087637821) |
| [ghcrawl-156717-autonomous-smoke](results/openclaw/ghcrawl-156717-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] ui/src/styles/chat/layout.css... | [25085937628](https://github.com/openclaw/clownfish/actions/runs/25085937628) |
| [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) | failed |  |  | To https://github.com/LiaoyuanNing/openclaw.git ! [remote rejected] HEAD -> fix/feishu-p2p-thread-reply (refusing to allow a GitHub App t... | [25084314903](https://github.com/openclaw/clownfish/actions/runs/25084314903) |
| [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) | blocked |  |  | Codex /review did not pass after 2 attempt(s): Blocked. The diff is narrow and has no visible secret, dependency, workflow, install, or s... | [25084314903](https://github.com/openclaw/clownfish/actions/runs/25084314903) |
| [ghcrawl-156627-autonomous-smoke](results/openclaw/ghcrawl-156627-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [25070489790](https://github.com/openclaw/clownfish/actions/runs/25070489790) |
| [ghcrawl-156585-autonomous-smoke](results/openclaw/ghcrawl-156585-autonomous-smoke.md) | failed |  |  | Codex produced no target repo changes after 3 edit attempt(s). | [25069725706](https://github.com/openclaw/clownfish/actions/runs/25069725706) |
| [ghcrawl-156585-autonomous-smoke](results/openclaw/ghcrawl-156585-autonomous-smoke.md) | blocked |  |  | Codex produced no target repo changes after 3 edit attempt(s). | [25069725706](https://github.com/openclaw/clownfish/actions/runs/25069725706) |
| [ghcrawl-156586-autonomous-smoke](results/openclaw/ghcrawl-156586-autonomous-smoke.md) | blocked |  |  | Codex /review failed: structured output was not written to replacement-codex-review-1.json; stdout={"type":"thread.started","thread_id":"... | [25069727471](https://github.com/openclaw/clownfish/actions/runs/25069727471) |
| [ghcrawl-156582-autonomous-smoke](results/openclaw/ghcrawl-156582-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=all [check:changed] extension-impacting surface; extension typechec... | [25069721873](https://github.com/openclaw/clownfish/actions/runs/25069721873) |
| [ghcrawl-156860-autonomous-smoke](results/openclaw/ghcrawl-156860-autonomous-smoke.md) | failed |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156860-autonomous-smoke-53667 needs a fresh rebase pass: Rebasi... | [25043323244](https://github.com/openclaw/clownfish/actions/runs/25043323244) |
| [ghcrawl-156860-autonomous-smoke](results/openclaw/ghcrawl-156860-autonomous-smoke.md) | blocked |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156860-autonomous-smoke-53667 needs a fresh rebase pass: Rebasi... | [25043323244](https://github.com/openclaw/clownfish/actions/runs/25043323244) |
| [ghcrawl-157006-autonomous-smoke](results/openclaw/ghcrawl-157006-autonomous-smoke.md) | failed |  |  | Codex /review failed: structured output was not written to repair-codex-review-1.json; stdout={"type":"thread.started","thread_id":"019dd... | [25040511075](https://github.com/openclaw/clownfish/actions/runs/25040511075) |
| [ghcrawl-157006-autonomous-smoke](results/openclaw/ghcrawl-157006-autonomous-smoke.md) | blocked |  |  | Codex /review failed: structured output was not written to repair-codex-review-1.json; stdout={"type":"thread.started","thread_id":"019dd... | [25040511075](https://github.com/openclaw/clownfish/actions/runs/25040511075) |
| [ghcrawl-156843-autonomous-smoke](results/openclaw/ghcrawl-156843-autonomous-smoke.md) | failed |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156843-autonomous-smoke-49981 needs a fresh rebase pass: Rebasi... | [25039684300](https://github.com/openclaw/clownfish/actions/runs/25039684300) |
| [ghcrawl-156843-autonomous-smoke](results/openclaw/ghcrawl-156843-autonomous-smoke.md) | blocked |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156843-autonomous-smoke-49981 needs a fresh rebase pass: Rebasi... | [25039684300](https://github.com/openclaw/clownfish/actions/runs/25039684300) |
| [ghcrawl-156832-autonomous-smoke](results/openclaw/ghcrawl-156832-autonomous-smoke.md) | failed |  |  | Codex /review did not pass after 2 attempt(s): Blocked: the branch is narrow and `pnpm check:changed` plus `git diff --check` pass, but t... | [25039623993](https://github.com/openclaw/clownfish/actions/runs/25039623993) |
| [ghcrawl-156832-autonomous-smoke](results/openclaw/ghcrawl-156832-autonomous-smoke.md) | blocked |  |  | Codex /review did not pass after 2 attempt(s): Blocked: the branch is narrow and `pnpm check:changed` plus `git diff --check` pass, but t... | [25039623993](https://github.com/openclaw/clownfish/actions/runs/25039623993) |
| [ghcrawl-156946-autonomous-smoke](results/openclaw/ghcrawl-156946-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [25040211577](https://github.com/openclaw/clownfish/actions/runs/25040211577) |
| [ghcrawl-156879-autonomous-smoke](results/openclaw/ghcrawl-156879-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [25039930706](https://github.com/openclaw/clownfish/actions/runs/25039930706) |
| [ghcrawl-156868-autonomous-smoke](results/openclaw/ghcrawl-156868-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [25039867359](https://github.com/openclaw/clownfish/actions/runs/25039867359) |
| [ghcrawl-156864-autonomous-smoke](results/openclaw/ghcrawl-156864-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [25039821052](https://github.com/openclaw/clownfish/actions/runs/25039821052) |
| [ghcrawl-156741-autonomous-smoke](results/openclaw/ghcrawl-156741-autonomous-smoke.md) | failed |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156741-autonomous-smoke-59382 needs a fresh rebase pass: Rebasi... | [25039129783](https://github.com/openclaw/clownfish/actions/runs/25039129783) |
| [ghcrawl-156741-autonomous-smoke](results/openclaw/ghcrawl-156741-autonomous-smoke.md) | blocked |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156741-autonomous-smoke-59382 needs a fresh rebase pass: Rebasi... | [25039129783](https://github.com/openclaw/clownfish/actions/runs/25039129783) |
| [ghcrawl-156805-autonomous-smoke](results/openclaw/ghcrawl-156805-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=extensions, extensionTests, docs [check:changed] extensions/telegra... | [25039479679](https://github.com/openclaw/clownfish/actions/runs/25039479679) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| action status is blocked | 89 | [ghcrawl-156636-autonomous-smoke](results/openclaw/ghcrawl-156636-autonomous-smoke.md) |
| target changed since worker review | 18 | [gitcrawl-2880-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2880-dedupe-only-20260429-remote.md) |
| close requires ProjectClownfish fix PR opened/pushed or merge executed first | 13 | [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) |
| merge state status is UNSTABLE | 10 | [ghcrawl-156647-autonomous-smoke](results/openclaw/ghcrawl-156647-autonomous-smoke.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | 9 | [ghcrawl-156679-autonomous-smoke](results/openclaw/ghcrawl-156679-autonomous-smoke.md) |
| job does not allow merge | 5 | [clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a](results/openclaw/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md) |
| mergeable state is CONFLICTING | 5 | [ghcrawl-156651-autonomous-smoke](results/openclaw/ghcrawl-156651-autonomous-smoke.md) |
| target is not listed in job candidates | 5 | [gitcrawl-238838-dedupe-only-20260429c](results/openclaw/gitcrawl-238838-dedupe-only-20260429c.md) |
| candidate fix is not listed in job refs | 3 | [gitcrawl-2477-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2477-dedupe-only-20260429-remote.md) |
| canonical is not listed in job refs | 2 | [ghcrawl-156658-autonomous-smoke](results/openclaw/ghcrawl-156658-autonomous-smoke.md) |
| Clearly superseded by the canonical PR path, but closure is blocked until the canonical fix lands. | 2 | [ghcrawl-156879-autonomous-smoke](results/openclaw/ghcrawl-156879-autonomous-smoke.md) |
| Fix-first policy blocks superseded closeout until #49430 is repaired and merged. | 2 | [ghcrawl-156585-autonomous-smoke](results/openclaw/ghcrawl-156585-autonomous-smoke.md) |
| maintainer issue comment blocks low-signal auto-close | 2 | [low-signal-pr-sweep-20260425T2346-01](results/openclaw/low-signal-pr-sweep-20260425t2346-01.md) |
| require_fix_before_close blocks superseded PR closeout until the canonical fix path is landed or opened as a concrete fix PR. | 2 | [ghcrawl-156789-autonomous-smoke](results/openclaw/ghcrawl-156789-autonomous-smoke.md) |
| candidate fix is not merged | 1 | [ghcrawl-191459-agentic-merge](results/openclaw/ghcrawl-191459-agentic-merge.md) |

### Open PR Finalizer Queue

| PR | Title | Cluster | Branch | Blockers | Next action |
| --- | --- | --- | --- | --- | --- |
| [#73390](https://github.com/openclaw/openclaw/pull/73390) | Add configurable WebChat send shortcut | ghcrawl-156934-autonomous-smoke | clownfish/ghcrawl-156934-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73389](https://github.com/openclaw/openclaw/pull/73389) | feat(slack): publish App Home tab views | ghcrawl-156940-autonomous-smoke | clownfish/ghcrawl-156940-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73385](https://github.com/openclaw/openclaw/pull/73385) | fix: gate sandbox write tools on writable workspace access | ghcrawl-156881-autonomous-smoke | clownfish/ghcrawl-156881-autonomous-smoke | needs_merge_preflight, needs_result_backfill | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#74049](https://github.com/openclaw/openclaw/pull/74049) | fix: The executable defaults now use `openai/gpt-5.5`, and the pinned | clawsweeper-commit-openclaw-openclaw-d130a77a3b1e | clownfish/clawsweeper-commit-openclaw-openclaw-d130a77a3b1e | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-commands:FAILURE; CI / check-lint:FAILURE; CI / ... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74010](https://github.com/openclaw/openclaw/pull/74010) | fix(compaction): respect effective reserve tokens in compaction gates | ghcrawl-199269-agentic-merge | clownfish/ghcrawl-199269-agentic-merge | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mo... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74009](https://github.com/openclaw/openclaw/pull/74009) | fix(agents): prefer sessionKey in sessions_send | ghcrawl-166009-agentic-merge | clownfish/ghcrawl-166009-agentic-merge | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Parity gate / Run the OpenAI / Opus 4.6... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74002](https://github.com/openclaw/openclaw/pull/74002) | fix(exec): respect OPENCLAW_STATE_DIR for exec approvals | ghcrawl-191457-agentic-merge | clownfish/ghcrawl-191457-agentic-merge | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74001](https://github.com/openclaw/openclaw/pull/74001) | fix(feishu): reply inside P2P direct-message threads | ghcrawl-165996-agentic-merge | clownfish/ghcrawl-165996-agentic-merge | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73998](https://github.com/openclaw/openclaw/pull/73998) | fix(feishu): reconcile WebSocket reconnect backoff | ghcrawl-207048-agentic-merge | clownfish/ghcrawl-207048-agentic-merge | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73996](https://github.com/openclaw/openclaw/pull/73996) | fix: interpolate responsePrefix template variables in heartbeat replies | ghcrawl-157060-autonomous-smoke | clownfish/ghcrawl-157060-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73993](https://github.com/openclaw/openclaw/pull/73993) | fix(telegram): avoid silent polling drops for in-flight updates | ghcrawl-191453-agentic-merge | clownfish/ghcrawl-191453-agentic-merge | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73991](https://github.com/openclaw/openclaw/pull/73991) | Add per-agent command lane isolation | ghcrawl-157052-autonomous-smoke | clownfish/ghcrawl-157052-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73989](https://github.com/openclaw/openclaw/pull/73989) | fix(health-monitor): add reconnect grace for gateway reconnects | ghcrawl-157023-autonomous-smoke | clownfish/ghcrawl-157023-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73988](https://github.com/openclaw/openclaw/pull/73988) | fix(agents): load symlinked workspace bootstrap files | ghcrawl-157010-autonomous-smoke | clownfish/ghcrawl-157010-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / plugin-prerelease-docker-suite / p... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73987](https://github.com/openclaw/openclaw/pull/73987) | fix(control-ui): share gateway token scope across loopback hosts | ghcrawl-157066-autonomous-smoke | clownfish/ghcrawl-157066-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / plugin-prerelease-docker-suite / D... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73986](https://github.com/openclaw/openclaw/pull/73986) | fix(feishu): fallback to media when file download returns 502 | ghcrawl-199239-agentic-merge | clownfish/ghcrawl-199239-agentic-merge | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (npm-onbo... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73982](https://github.com/openclaw/openclaw/pull/73982) | fix(chat-bash): inherit exec policy defaults | ghcrawl-157029-autonomous-smoke | clownfish/ghcrawl-157029-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (kitchen-... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73981](https://github.com/openclaw/openclaw/pull/73981) | fix(streaming): preserve markdown boundaries across block chunks | ghcrawl-157042-autonomous-smoke | clownfish/ghcrawl-157042-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / plugin-prerelease-docker-suite / D... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |

### Latest ProjectClownfish Closures

| Target | Type | Title | Closed | Action | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#59439](https://github.com/openclaw/openclaw/pull/59439) | pull_request | Use daemon auth for unmanaged restart probes | Apr 28, 2026, 05:25 UTC | close_superseded | [ghcrawl-207050-agentic-merge](results/openclaw/ghcrawl-207050-agentic-merge.md) | [report](results/openclaw/ghcrawl-207050-agentic-merge.md) | [25035228706](https://github.com/openclaw/clownfish/actions/runs/25035228706) |
| [#59431](https://github.com/openclaw/openclaw/pull/59431) | pull_request | fix(feishu): correct Chinese filename encoding in attachments | Apr 28, 2026, 05:23 UTC | close_superseded | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#59409](https://github.com/openclaw/openclaw/issues/59409) | issue | [Bug]: Feishu plugin: Chinese filenames in attachments display as garbled (Latin-1 encoding issue) | Apr 28, 2026, 05:23 UTC | close_fixed_by_candidate | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#50435](https://github.com/openclaw/openclaw/pull/50435) | pull_request | fix(feishu): recover Chinese filenames from Latin-1 mojibake in Content-Disposition | Apr 28, 2026, 05:23 UTC | close_superseded | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#48388](https://github.com/openclaw/openclaw/issues/48388) | issue | [Bug]: Feishu file names with Chinese characters are garbled (UTF-8 encoding issue) | Apr 28, 2026, 05:23 UTC | close_fixed_by_candidate | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#61016](https://github.com/openclaw/openclaw/pull/61016) | pull_request | fix(media): anchor sanitizeMimeType regex and make case-insensitive per RFC 2045 | Apr 28, 2026, 04:48 UTC | close_superseded | [ghcrawl-156640-autonomous-smoke](results/openclaw/ghcrawl-156640-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-156640-autonomous-smoke.md) | [25034019917](https://github.com/openclaw/clownfish/actions/runs/25034019917) |
| [#49961](https://github.com/openclaw/openclaw/pull/49961) | pull_request | fix: restore compact JS placeholders in session export template | Apr 28, 2026, 04:36 UTC | close_superseded | [ghcrawl-156664-autonomous-smoke](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [25033552424](https://github.com/openclaw/clownfish/actions/runs/25033552424) |
| [#49957](https://github.com/openclaw/openclaw/issues/49957) | issue | Bug: Session export HTML is empty due to reformatted JS placeholders in template | Apr 28, 2026, 04:36 UTC | close_duplicate | [ghcrawl-156664-autonomous-smoke](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [25033552424](https://github.com/openclaw/clownfish/actions/runs/25033552424) |
| [#54429](https://github.com/openclaw/openclaw/issues/54429) | issue | Gateway Service Installation Failure: Missing systemd Service File | Apr 26, 2026, 03:04 UTC | close_duplicate | [ghcrawl-166002-agentic-merge](results/openclaw/ghcrawl-166002-agentic-merge.md) | [report](results/openclaw/ghcrawl-166002-agentic-merge.md) | [24946559138](https://github.com/openclaw/projectclownfish/actions/runs/24946559138) |
| [#67622](https://github.com/openclaw/openclaw/issues/67622) | issue | [Feature Request] Support file/image upload in browser Control UI (webchat) | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#63094](https://github.com/openclaw/openclaw/issues/63094) | issue | [Feature Request] WebChat/Control UI support file upload | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#56298](https://github.com/openclaw/openclaw/issues/56298) | issue | [Feature Request] Webchat supports image/attachment upload in UI | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#43242](https://github.com/openclaw/openclaw/issues/43242) | issue | [Feature Request] Add file upload support to Control UI (Web) | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#41992](https://github.com/openclaw/openclaw/issues/41992) | issue | [Feature Request] WebChat file upload support | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#67406](https://github.com/openclaw/openclaw/issues/67406) | issue | image tool doesn't recognise Ollama cloud vision models | Apr 25, 2026, 19:58 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#66758](https://github.com/openclaw/openclaw/issues/66758) | issue | Image tool fails with 'Unknown model' for all ollama/ provider models despite #59943 fix | Apr 25, 2026, 19:57 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#65832](https://github.com/openclaw/openclaw/issues/65832) | issue | [Bug]: image tool fails with custom provider — ModelRegistry doesn't recognize custom providers from models.json | Apr 25, 2026, 19:57 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#70180](https://github.com/openclaw/openclaw/issues/70180) | issue | Bug: Image tool reports 'Unknown model' for all custom providers | Apr 25, 2026, 19:57 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#71133](https://github.com/openclaw/openclaw/issues/71133) | issue | memory-core: narrative session cleanup fails with missing scope: operator.admin | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#70395](https://github.com/openclaw/openclaw/issues/70395) | issue | memory-core dreaming cleanup requires operator.admin and logs failure despite successful promotion | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#70353](https://github.com/openclaw/openclaw/issues/70353) | issue | memory-core: dreaming subagent lacks operator.admin to delete its own session | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#69886](https://github.com/openclaw/openclaw/issues/69886) | issue | memory-core narrative session cleanup fails with missing scope: operator.admin | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#67029](https://github.com/openclaw/openclaw/issues/67029) | issue | [Bug]: memory-core dreaming: narrative session cleanup fails with missing scope operator.admin | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#50691](https://github.com/openclaw/openclaw/issues/50691) | issue | openclaw status reports missing operator.read while gateway is healthy; gateway probe times out on same loopback endpoint | Apr 25, 2026, 19:46 UTC | close_duplicate | [ghcrawl-143815-autonomous-smoke](results/openclaw/ghcrawl-143815-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143815-autonomous-smoke.md) | [24939008778](https://github.com/openclaw/projectclownfish/actions/runs/24939008778) |
| [#50541](https://github.com/openclaw/openclaw/issues/50541) | issue | [Bug]: CLI cannot connect to Gateway (missing scope: operator.read) - Downgrade to 2026.3.11 works | Apr 25, 2026, 19:46 UTC | close_duplicate | [ghcrawl-143815-autonomous-smoke](results/openclaw/ghcrawl-143815-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143815-autonomous-smoke.md) | [24939008778](https://github.com/openclaw/projectclownfish/actions/runs/24939008778) |
<!-- projectclownfish-dashboard:end -->

## How It Works

For a maintainer-facing architecture map of the automation lanes, see
[`docs/INTERNAL_FEATURES.md`](docs/INTERNAL_FEATURES.md).

For the ClawSweeper feedback loop that updates existing generated PRs, see
[`docs/auto-update-prs.md`](docs/auto-update-prs.md).

That loop is marker-driven. ClawSweeper comments use hidden
`clawsweeper-verdict:*` markers, and only actionable PR feedback includes
`clawsweeper-action:fix-required`. Clownfish skips stale head SHAs and caps
automatic repairs at five per PR and one per PR head SHA.

Maintainers can opt an existing Clownfish PR into the bounded merge loop with
`/clownfish automerge`. That adds `clownfish:automerge`, dispatches
ClawSweeper for the current head, lets Clownfish repair trusted
`needs-changes` findings for up to five rounds, and merges only after a trusted
pass verdict for the exact current head plus green checks, clean mergeability,
and explicit `CLOWNFISH_ALLOW_MERGE=1` and `CLOWNFISH_ALLOW_AUTOMERGE=1`
gates.

ClawSweeper commit findings have a separate intake lane. A
`clawsweeper_commit_finding` dispatch fetches the latest markdown commit report,
writes an audit record under `results/commit-findings/`, and only sends the
finding into the PR executor when the issue is narrow, non-security, and still
worth repairing on latest `main`.

Each cluster job:

1. Starts from one markdown job file under `jobs/`.
2. Hydrates the listed issue/PR refs and first-hop linked refs.
3. Builds a cluster plan and fix artifact for autonomous jobs.
4. Runs Codex with repo-local policy prompts and JSON output schema in a read-only sandbox.
5. Writes structured run artifacts under `.projectclownfish/runs/`.
6. Reviews the worker artifact with deterministic safety checks.
7. Executes credited fix artifacts through `scripts/execute-fix-artifact.mjs` when the fix gate is open: repair a maintainer-editable contributor branch first, otherwise raise a narrow replacement PR, add non-bot source PR authors as replacement co-authors, and close the uneditable source PR after the replacement push succeeds.
8. Applies guarded close/comment and explicit merge actions through `scripts/apply-result.mjs`.
9. Publishes a sanitized result ledger back to this repo under `results/`, `jobs/openclaw/closed/`, `apply-report.json`, and this README dashboard.

Codex does not receive a GitHub token during classification. The runner preflights GitHub state before model execution, then Codex receives those artifacts and returns JSON only. When a reviewed fix artifact is executed, Codex gets a temporary target checkout without GitHub credentials; the deterministic executor owns commit, push, PR creation, and source-PR closeout using `CLOWNFISH_GH_TOKEN`. Commit author metadata defaults to `projectclownfish` and can be overridden with `CLOWNFISH_GIT_USER_NAME` and `CLOWNFISH_GIT_USER_EMAIL`; this is separate from the GitHub token used to push. The applicator re-fetches the target item, checks `updated_at`, blocks unsafe closeouts, writes idempotent close comments, closes supported duplicate/superseded/fixed-by-candidate actions, and can squash-merge explicitly allowed clean PR actions.

Merge is deliberately harder than closeout. A merge action must include `merge_preflight` proving security clearance, resolved human comments, resolved review-bot findings, a passed Codex `/review`, addressed review findings, and clean validation commands. The fix executor runs an agentic edit/review loop before it writes a fix PR: edit, validate, Codex `/review`, address findings, revalidate, and resolve PR review threads when permitted. The applicator also checks live unresolved GitHub review threads immediately before merge.

Replacement fix work uses a recoverable target branch named `clownfish/<cluster-id>`. The executor resumes that branch if it already exists and pushes checkpoint commits after agent edits and review-fix edits, adding `Co-authored-by` trailers for non-bot source PR authors when a contributor PR is replaced. It then opens or updates the PR only after validation and Codex `/review` pass. If `/review` still blocks the merge after retries, the run writes a blocked fix report and leaves the checkpoint branch recoverable instead of losing the patch.

Runs for the same job path and mode are queued instead of running concurrently. The workflow uses Node 24, `blacksmith-4vcpu-ubuntu-2404` for cluster planning/review, and `blacksmith-16vcpu-ubuntu-2404` for fix/apply execution. Fix execution prepares the target checkout with Corepack and the target `pnpm` package manager before validation; the execution job caches Codex, npm, Corepack, and the target pnpm store. Fix validation is pinned to OpenClaw's fast changed-lane posture by default: `pnpm check:changed` plus diff checks are the hard local gate, and target validation commands normalize to `pnpm check:changed` unless `CLOWNFISH_TARGET_VALIDATION_MODE=strict` or `CLOWNFISH_STRICT_TARGET_VALIDATION=1` is explicitly set. Unrelated flaky main CI, broad `pnpm check`, full tests, live, docker, and e2e lanes do not block narrow ProjectClownfish fixes by default.

Full worker prompts, Codex transcripts, and raw artifacts stay in GitHub Actions. The committed ledger keeps only the cluster summary, run URL, action counts, apply outcomes, closed targets, and needs-human entries.

## Modes

- `plan`: produces recommendations only.
- `execute`: can apply reviewed safe close and explicit clean merge actions from structured JSON.
- `autonomous`: adds live cluster preflight and fix-artifact generation. It may recommend and drive a canonical fix path; direct mutation still goes through the fix executor and applicator gates.
- `route_security`: quarantines true security-sensitive refs without poisoning unrelated cluster work.
- `needs_human`: only product-direction, trust-boundary, canonical-choice, merge-path, or contributor-credit decisions that remain unclear after the hydrated artifact and single-item review/check/decide pass.
- Automated reviewer feedback must be cleared during autonomous PR work. Greptile, Codex, Asile, CodeRabbit, Copilot, and similar bot comments must be addressed, proven non-actionable, or escalated before any merge or post-merge closeout recommendation.
- Merge preflight: no PR can merge until `CLOWNFISH_ALLOW_MERGE=1`, security issues are cleared, comments are resolved, Codex `/review` has passed, findings are addressed, and changed-surface validation is clean. With the merge gate closed, ProjectClownfish labels merge-ready targets for human review instead of merging.
- Repair ladder: make the useful contributor PR mergeable when its branch is maintainer-editable; otherwise replace draft, stale, unmergeable, uneditable, or unsafe branches with a narrow credited fix PR. When fix PR mode is enabled, "wait or replace" is already answered: replace, preserve credit, then supersede only the source PR that could not be safely updated.

## Maintainer Comment Commands

Clownfish can route maintainer comments from target repositories back into the
cloud repair workflow. It recognizes both command styles:

```text
/clownfish status
@openclaw-clownfish status
```

Do not use `@clownfish`; that is a separate GitHub user. The accepted mention is
`@openclaw-clownfish` or `@openclaw-clownfish[bot]`.

Only maintainers can trigger it. The router checks GitHub `author_association`
and accepts `OWNER`, `MEMBER`, and `COLLABORATOR` by default. Contributor and
unknown comments are ignored without a reply.

Supported commands:

```text
/clownfish status
/clownfish fix ci
/clownfish address review
/clownfish rebase
/clownfish explain
/clownfish stop
@openclaw-clownfish fix ci
```

`status` and `explain` post a short status reply. `fix ci`, `address review`,
and `rebase` dispatch the normal `cluster-worker.yml` repair path, but only for
existing Clownfish PRs identified by the `clownfish` label or `clownfish/*`
branch. `stop` labels the item for human review.

The router writes an idempotency marker into each reply and records processed
comments in `results/comment-router.json`. The scheduled workflow is dry by
default; set `CLOWNFISH_COMMENT_ROUTER_EXECUTE=1` to let scheduled runs post
replies and dispatch workers.

## Local Run

Requires Node 24.

```bash
# Validate all job files.
npm run validate

# Render a plan-mode prompt without running Codex.
npm run render -- jobs/openclaw/inbox/cluster-example.md --mode plan

# Dry-run a worker without calling Codex.
npm run worker -- jobs/openclaw/inbox/cluster-example.md --mode plan --dry-run

# Build an offline autonomous cluster/fix artifact.
npm run build-fix-artifact -- jobs/openclaw/inbox/autonomous-example.md --offline

# Stage low-signal PR sweep jobs from local gitcrawl data.
npm run import-gitcrawl-low-signal -- --limit 20 --batch-size 5 --mode autonomous --sort stale

# Stage the next largest active gitcrawl clusters, skipping already-imported and
# fully security-sensitive clusters by default. Mixed clusters can route security
# refs while continuing ordinary bug/dedupe work.
npm run import-gitcrawl -- --from-gitcrawl --limit 40 --mode autonomous --suffix autonomous-smoke --allow-instant-close --allow-merge --allow-fix-pr --allow-post-merge-close

# Dispatch reviewed jobs. Dispatch, requeue, and self-heal refuse to exceed
# 50 live cluster-worker runs by default; tune with CLOWNFISH_MAX_LIVE_WORKERS
# or --max-live-workers. With --wait-for-capacity, dispatch can drain a larger
# file list in capacity-sized waves instead of refusing the whole batch.
CLOWNFISH_MAX_LIVE_WORKERS=50 npm run dispatch -- jobs/openclaw/inbox/cluster-example.md \
  --mode autonomous \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Find failed cluster jobs that have not been superseded by a later success.
npm run self-heal

# Resolve a job from a run id or job path and show the requeue plan.
npm run requeue -- 24947178021

# Requeue one reviewed job/run into the live queue. This briefly opens both
# write gates when the job is execute/autonomous, waits for the run to start,
# then closes the gates.
npm run requeue -- 24947178021 --execute --open-execute-window \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Execute a reviewed fix artifact locally. Requires both execution gates and a write token.
CLOWNFISH_ALLOW_EXECUTE=1 CLOWNFISH_ALLOW_FIX_PR=1 npm run execute-fix -- jobs/openclaw/inbox/cluster-example.md --latest --dry-run

# Rebuild the open Clownfish PR finalization report without mutating GitHub.
npm run finalize-open-prs -- --write-report

# Dry-run maintainer comment routing. Recognizes `/clownfish ...` and
# `@openclaw-clownfish ...` in recent issue/PR comments.
npm run comment-router -- --repo openclaw/openclaw --lookback-minutes 180

# Execute maintainer comment routing: post replies and dispatch repair workers
# for existing Clownfish PRs when maintainers ask for `fix ci`,
# `address review`, or `rebase`.
npm run comment-router -- --repo openclaw/openclaw --execute --wait-for-capacity

# Dry-run job hygiene: classify old smoke jobs, outbox-ready jobs, unprocessed
# jobs, and requeue candidates without deleting, moving, or dispatching.
npm run sweep-openclaw-jobs -- --live

# Apply reviewed job hygiene. This deletes old smoke jobs, moves finalized jobs
# to jobs/openclaw/outbox/finalized, and parks never-run backlog in
# jobs/openclaw/outbox/stuck; it never dispatches workers.
npm run sweep-openclaw-jobs -- --live --apply-delete-tests --apply-outbox --apply-stuck

# Dry-run a parked-backlog promotion from outbox/stuck back into inbox.
npm run promote-stuck-jobs -- --limit 20

# Promote the largest parked-backlog jobs into the active queue.
npm run promote-stuck-jobs -- --sort size --limit 20 --apply

# Promote every parked-backlog job, largest clusters first.
npm run promote-stuck-jobs -- --sort size --limit all --apply

# Dry-run the Clownfish label backfill. This verifies live GitHub state and
# reports the exact PRs/issues that would receive the "clownfish" label.
npm run tag-clownfish -- --live

# Apply the label backfill after reviewing the dry-run report.
CLOWNFISH_ALLOW_EXECUTE=1 npm run tag-clownfish -- --live --apply

# Retry failed jobs once. This briefly opens the execution gate, waits for the
# dispatched workers to start, records the self-heal ledger, and closes the gate.
npm run self-heal -- --execute --open-execute-window --max-jobs 5 \
  --max-live-workers 50 \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404
```

## Checks

```bash
npm run validate
for f in scripts/*.mjs; do node --check "$f" || exit 1; done
npm run review-results -- .projectclownfish/runs
npm run publish-result -- .projectclownfish/runs
git diff --check
```

## GitHub Actions Setup

The workflow needs:

- Codex/OpenAI authentication for model execution
- a read-only GitHub token for worker inspection
- a separate write-scoped GitHub token for the deterministic applicator
- execution gates that default closed: set `CLOWNFISH_ALLOW_EXECUTE=1` and `CLOWNFISH_ALLOW_FIX_PR=1` only for an intentional execution window; otherwise execute/autonomous dispatches render plan-only output and skip mutation steps
- merge is separately gated by `CLOWNFISH_ALLOW_MERGE`; automerge additionally requires `CLOWNFISH_ALLOW_AUTOMERGE`; both default to `0`, and merge-ready PRs are labeled `clownfish:human-review` and `clownfish:merge-ready` for a maintainer to merge manually
- optional `CLOWNFISH_CODEX_CLI_VERSION` variable to pin and refresh the cached Codex CLI
- optional `CLOWNFISH_MODEL` override for dispatch scripts; default Codex model is `gpt-5.5`
- optional `CLOWNFISH_MAX_LIVE_WORKERS` variable for dispatch/requeue/self-heal worker fan-out; default is `50`
- optional `CLOWNFISH_MAX_ACTIVE_PRS_PER_AREA` variable for replacement PR backpressure; default is `50` open Clownfish PRs per touched area, `0` disables the area cap, and common changelog/release-note files are ignored for this check
- ClawSweeper commit-finding repair PRs are labeled `clownfish:commit-finding`
- optional `CLOWNFISH_CODEX_TIMEOUT_MS` and `CLOWNFISH_FIX_CODEX_TIMEOUT_MS` variables; worker planning defaults to 30 minutes, while fix execution defaults to a 20 minute Codex budget inside the 30 minute build-PR step so timeout artifacts can be written
- optional `CLOWNFISH_CODEX_REVIEW_ATTEMPTS` and `CLOWNFISH_RESOLVE_REVIEW_THREADS` variables for agentic merge-prep review loops
- optional `CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_PR` and
  `CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_HEAD` variables for trusted
  ClawSweeper review feedback; defaults are `5` automatic repair iterations per
  PR and `1` repair per PR head SHA. The per-PR cap is total across changing
  head SHAs and stops the automatic review/repair loop.
- optional `CLOWNFISH_COMMENT_ROUTER_EXECUTE=1` to let the scheduled comment
  router respond to maintainer-only `/clownfish ...` and
  `@openclaw-clownfish ...` commands. Without it, scheduled runs only write a
  dry report.

Keep exact secret names, token scopes, and execution-window procedures in private operations docs or repository settings notes. Do not put token values or live operational credentials in job files.
