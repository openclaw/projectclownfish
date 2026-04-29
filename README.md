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

Last dashboard update: Apr 29, 2026, 08:21 UTC

<!-- projectclownfish-dashboard:start -->
State: Failed clusters need inspection

Scope: 255 active latest cluster reports. 1 policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 255 | 100% |
| Policy-archived clusters | 1 | audit |
| Clean completed clusters | 99 | 38.8% |
| Needs-human clusters | 40 | 15.7% |
| Latest successful clusters | 227 | 89.0% |
| Latest failed clusters | 4 | 1.6% |
| Latest cancelled clusters | 0 | 0.0% |
| Run attempts archived | 495 | audit |
| Fix action attempts | 164 | audit |
| Fix actions executed | 0 | 0.0% |
| Fix actions failed | 35 | 21.3% |
| Fix actions blocked | 50 | 30.5% |
| Latest clusters with fix failures | 44 | 17.3% |
| Distinct PRs touched | 824 | 100% |
| Open PRs tracked | 294 | 35.7% |
| Closed unmerged PRs tracked | 434 | 52.7% |
| Completed close actions | 30 | 10.8% |
| Completed merge actions | 23 | 8.3% |
| Duplicate closes | 22 | 73.3% |
| Superseded closes | 0 | 0.0% |
| Fixed-by-candidate closes | 0 | 0.0% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 106 | 38.1% |
| Skipped mutation attempts | 119 | 42.8% |

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
| [clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a](results/openclaw/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md | job does not allow merge | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md) | [25095715904](https://github.com/openclaw/clownfish/actions/runs/25095715904) |
| [clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b](results/openclaw/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b.md) | fix blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b.md | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b.md) | [25094690632](https://github.com/openclaw/clownfish/actions/runs/25094690632) |
| [clawsweeper-commit-openclaw-openclaw-4eba70b532f8](results/openclaw/clawsweeper-commit-openclaw-openclaw-4eba70b532f8.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-4eba70b532f8.md | job does not allow merge | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-4eba70b532f8.md) | [25093937673](https://github.com/openclaw/clownfish/actions/runs/25093937673) |
| [clawsweeper-commit-openclaw-openclaw-a887a512ef8e](results/openclaw/clawsweeper-commit-openclaw-openclaw-a887a512ef8e.md) | workflow failure | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-a887a512ef8e.md | Found one concrete CI regression. The commit adds duplicate `run_checks_node_extensions` keys in the workflow output map and manifest obj... | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-a887a512ef8e.md) | [25093541960](https://github.com/openclaw/clownfish/actions/runs/25093541960) |
| [clawsweeper-commit-openclaw-openclaw-5435591f6a1a](results/openclaw/clawsweeper-commit-openclaw-openclaw-5435591f6a1a.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-5435591f6a1a.md | job does not allow merge | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-5435591f6a1a.md) | [25090570865](https://github.com/openclaw/clownfish/actions/runs/25090570865) |
| [clawsweeper-commit-openclaw-openclaw-d130a77a3b1e](results/openclaw/clawsweeper-commit-openclaw-openclaw-d130a77a3b1e.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-commit-openclaw-openclaw-d130a77a3b1e.md | job does not allow merge | [report](results/openclaw/clawsweeper-commit-openclaw-openclaw-d130a77a3b1e.md) | [25089704776](https://github.com/openclaw/clownfish/actions/runs/25089704776) |
| [ghcrawl-166004-agentic-merge](results/openclaw/ghcrawl-166004-agentic-merge.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-166004-agentic-merge.md | Codex /review did not pass after 2 attempt(s): Cannot perform the review without inspecting the repository diff and validation state. | [report](results/openclaw/ghcrawl-166004-agentic-merge.md) | [25087637821](https://github.com/openclaw/clownfish/actions/runs/25087637821) |
| [ghcrawl-156863-autonomous-smoke](results/openclaw/ghcrawl-156863-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156863-autonomous-smoke.md | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish | [report](results/openclaw/ghcrawl-156863-autonomous-smoke.md) | [25086686616](https://github.com/openclaw/clownfish/actions/runs/25086686616) |
| [ghcrawl-156715-autonomous-smoke](results/openclaw/ghcrawl-156715-autonomous-smoke.md) | workflow failure | jobs/openclaw/inbox/ghcrawl-156715-autonomous-smoke.md | Hydrated preflight keeps #59752 as the non-security canonical repair path for the media-only same-target messaging reply suppression bug ... | [report](results/openclaw/ghcrawl-156715-autonomous-smoke.md) | [25085923969](https://github.com/openclaw/clownfish/actions/runs/25085923969) |
| [ghcrawl-156717-autonomous-smoke](results/openclaw/ghcrawl-156717-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156717-autonomous-smoke.md | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] ui/src/styles/chat/layout.css... | [report](results/openclaw/ghcrawl-156717-autonomous-smoke.md) | [25085937628](https://github.com/openclaw/clownfish/actions/runs/25085937628) |
| [clawsweeper-openclaw-openclaw-73880](results/openclaw/clawsweeper-openclaw-openclaw-73880.md) | apply blocked | jobs/openclaw/inbox/clawsweeper-openclaw-openclaw-73880.md | job does not allow merge | [report](results/openclaw/clawsweeper-openclaw-openclaw-73880.md) | [25085277561](https://github.com/openclaw/clownfish/actions/runs/25085277561) |
| [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156593-autonomous-smoke.md | To https://github.com/LiaoyuanNing/openclaw.git ! [remote rejected] HEAD -> fix/feishu-p2p-thread-reply (refusing to allow a GitHub App t... | [report](results/openclaw/ghcrawl-156593-autonomous-smoke.md) | [25084314903](https://github.com/openclaw/clownfish/actions/runs/25084314903) |
| [ghcrawl-156679-autonomous-smoke](results/openclaw/ghcrawl-156679-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156679-autonomous-smoke.md | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | [report](results/openclaw/ghcrawl-156679-autonomous-smoke.md) | [25070625859](https://github.com/openclaw/clownfish/actions/runs/25070625859) |
| [ghcrawl-156675-autonomous-smoke](results/openclaw/ghcrawl-156675-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156675-autonomous-smoke.md | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | [report](results/openclaw/ghcrawl-156675-autonomous-smoke.md) | [25070590154](https://github.com/openclaw/clownfish/actions/runs/25070590154) |
| [ghcrawl-156682-autonomous-smoke](results/openclaw/ghcrawl-156682-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156682-autonomous-smoke.md | target is not listed in job candidates | [report](results/openclaw/ghcrawl-156682-autonomous-smoke.md) | [25070632559](https://github.com/openclaw/clownfish/actions/runs/25070632559) |
| [ghcrawl-156720-autonomous-smoke](results/openclaw/ghcrawl-156720-autonomous-smoke.md) | apply skipped | jobs/openclaw/inbox/ghcrawl-156720-autonomous-smoke.md | Closeout is blocked on the canonical fix path landing. | [report](results/openclaw/ghcrawl-156720-autonomous-smoke.md) | [25070819579](https://github.com/openclaw/clownfish/actions/runs/25070819579) |
| [ghcrawl-156594-autonomous-smoke](results/openclaw/ghcrawl-156594-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156594-autonomous-smoke.md | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | [report](results/openclaw/ghcrawl-156594-autonomous-smoke.md) | [25069740030](https://github.com/openclaw/clownfish/actions/runs/25069740030) |
| [ghcrawl-156627-autonomous-smoke](results/openclaw/ghcrawl-156627-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156627-autonomous-smoke.md | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [report](results/openclaw/ghcrawl-156627-autonomous-smoke.md) | [25070489790](https://github.com/openclaw/clownfish/actions/runs/25070489790) |
| [ghcrawl-156585-autonomous-smoke](results/openclaw/ghcrawl-156585-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156585-autonomous-smoke.md | Codex produced no target repo changes after 3 edit attempt(s). | [report](results/openclaw/ghcrawl-156585-autonomous-smoke.md) | [25069725706](https://github.com/openclaw/clownfish/actions/runs/25069725706) |
| [ghcrawl-156586-autonomous-smoke](results/openclaw/ghcrawl-156586-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156586-autonomous-smoke.md | Codex /review failed: structured output was not written to replacement-codex-review-1.json; stdout={"type":"thread.started","thread_id":"... | [report](results/openclaw/ghcrawl-156586-autonomous-smoke.md) | [25069727471](https://github.com/openclaw/clownfish/actions/runs/25069727471) |
| [ghcrawl-156582-autonomous-smoke](results/openclaw/ghcrawl-156582-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156582-autonomous-smoke.md | validation command failed (pnpm check:changed): [check:changed] lanes=all [check:changed] extension-impacting surface; extension typechec... | [report](results/openclaw/ghcrawl-156582-autonomous-smoke.md) | [25069721873](https://github.com/openclaw/clownfish/actions/runs/25069721873) |
| [ghcrawl-156595-autonomous-smoke](results/openclaw/ghcrawl-156595-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156595-autonomous-smoke.md | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | [report](results/openclaw/ghcrawl-156595-autonomous-smoke.md) | [25069741964](https://github.com/openclaw/clownfish/actions/runs/25069741964) |
| [ghcrawl-156860-autonomous-smoke](results/openclaw/ghcrawl-156860-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156860-autonomous-smoke.md | base branch advanced after validation and projectclownfish/repair-ghcrawl-156860-autonomous-smoke-53667 needs a fresh rebase pass: Rebasi... | [report](results/openclaw/ghcrawl-156860-autonomous-smoke.md) | [25043323244](https://github.com/openclaw/clownfish/actions/runs/25043323244) |
| [ghcrawl-156991-autonomous-smoke](results/openclaw/ghcrawl-156991-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156991-autonomous-smoke.md | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | [report](results/openclaw/ghcrawl-156991-autonomous-smoke.md) | [25040442199](https://github.com/openclaw/clownfish/actions/runs/25040442199) |
| [ghcrawl-157006-autonomous-smoke](results/openclaw/ghcrawl-157006-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-157006-autonomous-smoke.md | Codex /review failed: structured output was not written to repair-codex-review-1.json; stdout={"type":"thread.started","thread_id":"019dd... | [report](results/openclaw/ghcrawl-157006-autonomous-smoke.md) | [25040511075](https://github.com/openclaw/clownfish/actions/runs/25040511075) |

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
| close requires ProjectClownfish fix PR opened/pushed or merge executed first | 13 | [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | 10 | [ghcrawl-156679-autonomous-smoke](results/openclaw/ghcrawl-156679-autonomous-smoke.md) |
| merge state status is UNSTABLE | 10 | [ghcrawl-156647-autonomous-smoke](results/openclaw/ghcrawl-156647-autonomous-smoke.md) |
| target changed since worker review | 9 | [ghcrawl-156624-autonomous-smoke](results/openclaw/ghcrawl-156624-autonomous-smoke.md) |
| job does not allow merge | 5 | [clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a](results/openclaw/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a.md) |
| mergeable state is CONFLICTING | 5 | [ghcrawl-156651-autonomous-smoke](results/openclaw/ghcrawl-156651-autonomous-smoke.md) |
| target is not listed in job candidates | 4 | [ghcrawl-156682-autonomous-smoke](results/openclaw/ghcrawl-156682-autonomous-smoke.md) |
| canonical is not listed in job refs | 2 | [ghcrawl-156658-autonomous-smoke](results/openclaw/ghcrawl-156658-autonomous-smoke.md) |
| Clearly superseded by the canonical PR path, but closure is blocked until the canonical fix lands. | 2 | [ghcrawl-156879-autonomous-smoke](results/openclaw/ghcrawl-156879-autonomous-smoke.md) |
| Fix-first policy blocks superseded closeout until #49430 is repaired and merged. | 2 | [ghcrawl-156585-autonomous-smoke](results/openclaw/ghcrawl-156585-autonomous-smoke.md) |
| maintainer issue comment blocks low-signal auto-close | 2 | [low-signal-pr-sweep-20260425T2346-01](results/openclaw/low-signal-pr-sweep-20260425t2346-01.md) |
| require_fix_before_close blocks superseded PR closeout until the canonical fix path is landed or opened as a concrete fix PR. | 2 | [ghcrawl-156789-autonomous-smoke](results/openclaw/ghcrawl-156789-autonomous-smoke.md) |
| candidate fix is not merged | 1 | [ghcrawl-191459-agentic-merge](results/openclaw/ghcrawl-191459-agentic-merge.md) |
| Clear covered issue, but closeout is blocked on the canonical fix path landing. | 1 | [ghcrawl-156739-autonomous-smoke](results/openclaw/ghcrawl-156739-autonomous-smoke.md) |

### Open PR Finalizer Queue

| PR | Title | Cluster | Branch | Blockers | Next action |
| --- | --- | --- | --- | --- | --- |
| [#73958](https://github.com/openclaw/openclaw/pull/73958) | fix(feishu): preserve root_id thread routing without thread_id forcing | ghcrawl-157004-autonomous-smoke | clownfish/ghcrawl-157004-autonomous-smoke | unresolved review threads remain, needs_merge_preflight, needs_result_backfill | address unresolved human and review-bot comments, then rerun review |
| [#73925](https://github.com/openclaw/openclaw/pull/73925) | fix(gateway): bound websocket auth after valid connect | ghcrawl-156675-autonomous-smoke | clownfish/ghcrawl-156675-autonomous-smoke | unresolved review threads remain, needs_merge_preflight | address unresolved human and review-bot comments, then rerun review |
| [#73923](https://github.com/openclaw/openclaw/pull/73923) | fix(ui): preserve gateway token during safe websocket url edits | ghcrawl-156708-autonomous-smoke | clownfish/ghcrawl-156708-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73917](https://github.com/openclaw/openclaw/pull/73917) | feat(bootstrap): allow arbitrary extra bootstrap files | ghcrawl-156657-autonomous-smoke | clownfish/ghcrawl-156657-autonomous-smoke | unresolved review threads remain, needs_merge_preflight | address unresolved human and review-bot comments, then rerun review |
| [#73891](https://github.com/openclaw/openclaw/pull/73891) | fix(imessage): normalize leading echo-cache corruption bytes | ghcrawl-156611-autonomous-smoke | clownfish/ghcrawl-156611-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73890](https://github.com/openclaw/openclaw/pull/73890) | fix(installer): warn before npm prefix redirection | ghcrawl-156595-autonomous-smoke | clownfish/ghcrawl-156595-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73889](https://github.com/openclaw/openclaw/pull/73889) | fix(cli): stabilize Windows scheduled-task restart health after ready | ghcrawl-156629-autonomous-smoke | clownfish/ghcrawl-156629-autonomous-smoke | needs_merge_state:UNSTABLE, needs_checks:CI / checks-node-agentic-commands:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73888](https://github.com/openclaw/openclaw/pull/73888) | fix(daemon): recover systemctl user bus env for gateway commands | ghcrawl-156597-autonomous-smoke | clownfish/ghcrawl-156597-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-commands:FAILURE; CI / checks-node-core:FAILURE,... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73800](https://github.com/openclaw/openclaw/pull/73800) | fix(hooks): repair shared-hook announcement policy | ghcrawl-156636-autonomous-smoke | clownfish/ghcrawl-156636-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73799](https://github.com/openclaw/openclaw/pull/73799) | fix(media): treat legacy Word docs as binary attachments | ghcrawl-156640-autonomous-smoke | clownfish/ghcrawl-156640-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73751](https://github.com/openclaw/openclaw/pull/73751) | fix(exec): decode Windows command output with codepage-aware streaming | ghcrawl-156777-autonomous-smoke | clownfish/ghcrawl-156777-autonomous-smoke | needs_merge_state:UNSTABLE, unresolved review threads remain, needs_checks:CI / build-artifacts:FAILURE; CI / check-prod-types:FAILURE; C... | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73750](https://github.com/openclaw/openclaw/pull/73750) | fix(telegram): suppress acknowledged mutating tool warning leaks | ghcrawl-156771-autonomous-smoke | clownfish/ghcrawl-156771-autonomous-smoke | needs_merge_preflight, needs_result_backfill | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#73749](https://github.com/openclaw/openclaw/pull/73749) | fix(tui): recover stale streaming status after unbound final | ghcrawl-156749-autonomous-smoke | clownfish/ghcrawl-156749-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / checks-fast-bundled:FAILURE; CI / ... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73744](https://github.com/openclaw/openclaw/pull/73744) | feat(ui): show persistent chat context usage | ghcrawl-156717-autonomous-smoke | clownfish/ghcrawl-156717-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-extensions-shard-4:FAI... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73739](https://github.com/openclaw/openclaw/pull/73739) | fix(feishu): recover WebSocket after SDK retry exhaustion | ghcrawl-156682-autonomous-smoke | clownfish/ghcrawl-156682-autonomous-smoke | needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#73737](https://github.com/openclaw/openclaw/pull/73737) | fix(gateway): reduce session-store clone memory growth | ghcrawl-156648-autonomous-smoke | clownfish/ghcrawl-156648-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / checks-fast-bundled:FAILURE; CI / ... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73732](https://github.com/openclaw/openclaw/pull/73732) | fix(whatsapp): recover group inbound after reconnect churn | ghcrawl-156581-autonomous-smoke | clownfish/ghcrawl-156581-autonomous-smoke | needs_merge_state:UNSTABLE, needs_checks:CI / checks-node-agentic-commands:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73725](https://github.com/openclaw/openclaw/pull/73725) | fix(webchat): create dashboard sessions from New Chat | ghcrawl-156619-autonomous-smoke | clownfish/ghcrawl-156619-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-commands:FAILURE; CI / checks-node-core:FAILURE,... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73724](https://github.com/openclaw/openclaw/pull/73724) | fix(cli): avoid false local gateway unreachable on probe timeout | ghcrawl-156625-autonomous-smoke | clownfish/ghcrawl-156625-autonomous-smoke | security_hold, needs_merge_state:UNSTABLE, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-extensions-shard-5:FAILURE; CI... | route to central security triage |
| [#73403](https://github.com/openclaw/openclaw/pull/73403) | fix(agent): route explicit channel targets per recipient | ghcrawl-157028-autonomous-smoke | clownfish/ghcrawl-157028-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73402](https://github.com/openclaw/openclaw/pull/73402) | fix(tui): subscribe to live session transcript updates | ghcrawl-156978-autonomous-smoke | clownfish/ghcrawl-156978-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73401](https://github.com/openclaw/openclaw/pull/73401) | fix(agents): load symlinked workspace bootstrap files | ghcrawl-156975-autonomous-smoke | clownfish/ghcrawl-156975-autonomous-smoke | needs_merge_state:UNSTABLE, needs_checks:CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (gateway-network):IN_PROGRESS; C... | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73399](https://github.com/openclaw/openclaw/pull/73399) | fix(feishu): carry forward DM fallback and topic labels | ghcrawl-156980-autonomous-smoke | clownfish/ghcrawl-156980-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73395](https://github.com/openclaw/openclaw/pull/73395) | fix(discord): cool down Cloudflare HTML 429 REST failures | ghcrawl-156979-autonomous-smoke | clownfish/ghcrawl-156979-autonomous-smoke | security_hold, needs_merge_state:UNSTABLE, unresolved review threads remain, needs_checks:CI / check-lint:FAILURE; CI / check-additional-... | route to central security triage |
| [#73393](https://github.com/openclaw/openclaw/pull/73393) | feat(whatsapp): support newsletter targets in message tool | ghcrawl-156943-autonomous-smoke | clownfish/ghcrawl-156943-autonomous-smoke | needs_merge_preflight, needs_result_backfill | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |

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
