<img width="1584" height="672" alt="image" src="https://github.com/user-attachments/assets/ba1571d9-785e-47df-92b6-ce90681ca8e4" />

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

Last dashboard update: Apr 28, 2026, 05:44 UTC

<!-- projectclownfish-dashboard:start -->
State: Failed clusters need inspection

Scope: 179 active latest cluster reports. 1 policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 179 | 100% |
| Policy-archived clusters | 1 | audit |
| Clean completed clusters | 84 | 46.9% |
| Needs-human clusters | 42 | 23.5% |
| Latest successful clusters | 177 | 98.9% |
| Latest failed clusters | 2 | 1.1% |
| Latest cancelled clusters | 0 | 0.0% |
| Run attempts archived | 404 | audit |
| Fix action attempts | 113 | audit |
| Fix actions executed | 0 | 0.0% |
| Fix actions failed | 26 | 23.0% |
| Fix actions blocked | 27 | 23.9% |
| Latest clusters with fix failures | 23 | 12.8% |
| Distinct PRs touched | 713 | 100% |
| Open PRs tracked | 314 | 44.0% |
| Closed unmerged PRs tracked | 321 | 45.0% |
| Completed close actions | 30 | 12.2% |
| Completed merge actions | 23 | 9.3% |
| Duplicate closes | 22 | 73.3% |
| Superseded closes | 0 | 0.0% |
| Fixed-by-candidate closes | 0 | 0.0% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 86 | 35.0% |
| Skipped mutation attempts | 107 | 43.5% |

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
| [ghcrawl-156617-autonomous-smoke](results/openclaw/ghcrawl-156617-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156617-autonomous-smoke.md | base branch advanced after validation and clownfish/ghcrawl-156617-autonomous-smoke needs a fresh rebase pass: Rebasing (1/2) error: coul... | [report](results/openclaw/ghcrawl-156617-autonomous-smoke.md) | [25035222674](https://github.com/openclaw/clownfish/actions/runs/25035222674) |
| [ghcrawl-156636-autonomous-smoke](results/openclaw/ghcrawl-156636-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156636-autonomous-smoke.md | remote: Permission to security-for-ai-agent/openclaw.git denied to vincentkoc. fatal: unable to access 'https://github.com/security-for-a... | [report](results/openclaw/ghcrawl-156636-autonomous-smoke.md) | [25032428566](https://github.com/openclaw/clownfish/actions/runs/25032428566) |
| [ghcrawl-156651-autonomous-smoke](results/openclaw/ghcrawl-156651-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156651-autonomous-smoke.md | mergeable state is CONFLICTING | [report](results/openclaw/ghcrawl-156651-autonomous-smoke.md) | [25023019730](https://github.com/openclaw/clownfish/actions/runs/25023019730) |
| [ghcrawl-156647-autonomous-smoke](results/openclaw/ghcrawl-156647-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156647-autonomous-smoke.md | merge state status is UNSTABLE | [report](results/openclaw/ghcrawl-156647-autonomous-smoke.md) | [25023014227](https://github.com/openclaw/clownfish/actions/runs/25023014227) |
| [ghcrawl-156675-autonomous-smoke](results/openclaw/ghcrawl-156675-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156675-autonomous-smoke.md | mergeable state is CONFLICTING | [report](results/openclaw/ghcrawl-156675-autonomous-smoke.md) | [25023049824](https://github.com/openclaw/clownfish/actions/runs/25023049824) |
| [ghcrawl-156642-autonomous-smoke](results/openclaw/ghcrawl-156642-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156642-autonomous-smoke.md | Codex /review failed: structured output was not written to repair-codex-review-1.json; stdout={"type":"thread.started","thread_id":"019dd... | [report](results/openclaw/ghcrawl-156642-autonomous-smoke.md) | [25023008984](https://github.com/openclaw/clownfish/actions/runs/25023008984) |
| [ghcrawl-156658-autonomous-smoke](results/openclaw/ghcrawl-156658-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156658-autonomous-smoke.md | canonical is not listed in job refs | [report](results/openclaw/ghcrawl-156658-autonomous-smoke.md) | [25023026716](https://github.com/openclaw/clownfish/actions/runs/25023026716) |
| [ghcrawl-156656-autonomous-smoke](results/openclaw/ghcrawl-156656-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156656-autonomous-smoke.md | mergeable state is CONFLICTING | [report](results/openclaw/ghcrawl-156656-autonomous-smoke.md) | [25023023225](https://github.com/openclaw/clownfish/actions/runs/25023023225) |
| [ghcrawl-156644-autonomous-smoke](results/openclaw/ghcrawl-156644-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156644-autonomous-smoke.md | mergeable state is CONFLICTING | [report](results/openclaw/ghcrawl-156644-autonomous-smoke.md) | [25023010799](https://github.com/openclaw/clownfish/actions/runs/25023010799) |
| [ghcrawl-156665-autonomous-smoke](results/openclaw/ghcrawl-156665-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156665-autonomous-smoke.md | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/cron/isolated-agent/run-e... | [report](results/openclaw/ghcrawl-156665-autonomous-smoke.md) | [25023036489](https://github.com/openclaw/clownfish/actions/runs/25023036489) |
| [ghcrawl-156648-autonomous-smoke](results/openclaw/ghcrawl-156648-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156648-autonomous-smoke.md | Codex /review failed: structured output was not written to replacement-codex-review-2.json; stdout={"type":"thread.started","thread_id":"... | [report](results/openclaw/ghcrawl-156648-autonomous-smoke.md) | [25023016010](https://github.com/openclaw/clownfish/actions/runs/25023016010) |
| [ghcrawl-156657-autonomous-smoke](results/openclaw/ghcrawl-156657-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156657-autonomous-smoke.md | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/agents/workspace.load-ext... | [report](results/openclaw/ghcrawl-156657-autonomous-smoke.md) | [25023025041](https://github.com/openclaw/clownfish/actions/runs/25023025041) |
| [ghcrawl-156671-autonomous-smoke](results/openclaw/ghcrawl-156671-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156671-autonomous-smoke.md | no PR checks found | [report](results/openclaw/ghcrawl-156671-autonomous-smoke.md) | [25023044075](https://github.com/openclaw/clownfish/actions/runs/25023044075) |
| [ghcrawl-156661-autonomous-smoke](results/openclaw/ghcrawl-156661-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156661-autonomous-smoke.md | validation command failed (pnpm check:changed): [check:changed] lanes=extensions, extensionTests, docs [check:changed] extensions/feishu/... | [report](results/openclaw/ghcrawl-156661-autonomous-smoke.md) | [25023028672](https://github.com/openclaw/clownfish/actions/runs/25023028672) |
| [ghcrawl-156667-autonomous-smoke](results/openclaw/ghcrawl-156667-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156667-autonomous-smoke.md | target is not listed in job candidates | [report](results/openclaw/ghcrawl-156667-autonomous-smoke.md) | [25023040628](https://github.com/openclaw/clownfish/actions/runs/25023040628) |
| [ghcrawl-156655-autonomous-smoke](results/openclaw/ghcrawl-156655-autonomous-smoke.md) | fix blocked | jobs/openclaw/inbox/ghcrawl-156655-autonomous-smoke.md | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [report](results/openclaw/ghcrawl-156655-autonomous-smoke.md) | [25023021455](https://github.com/openclaw/clownfish/actions/runs/25023021455) |
| [ghcrawl-156624-autonomous-smoke](results/openclaw/ghcrawl-156624-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156624-autonomous-smoke.md | target changed since worker review | [report](results/openclaw/ghcrawl-156624-autonomous-smoke.md) | [24989068371](https://github.com/openclaw/clownfish/actions/runs/24989068371) |
| [ghcrawl-156629-autonomous-smoke](results/openclaw/ghcrawl-156629-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156629-autonomous-smoke.md | branch projectclownfish/repair-ghcrawl-156629-autonomous-smoke-72660 could not rebase onto origin/main: Codex could not repair rebase con... | [report](results/openclaw/ghcrawl-156629-autonomous-smoke.md) | [24989070557](https://github.com/openclaw/clownfish/actions/runs/24989070557) |
| [ghcrawl-156598-autonomous-smoke](results/openclaw/ghcrawl-156598-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156598-autonomous-smoke.md | merge state status is UNSTABLE | [report](results/openclaw/ghcrawl-156598-autonomous-smoke.md) | [24988621633](https://github.com/openclaw/clownfish/actions/runs/24988621633) |
| [ghcrawl-156602-autonomous-smoke](results/openclaw/ghcrawl-156602-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156602-autonomous-smoke.md | target changed since worker review | [report](results/openclaw/ghcrawl-156602-autonomous-smoke.md) | [24988931507](https://github.com/openclaw/clownfish/actions/runs/24988931507) |
| [ghcrawl-156588-autonomous-smoke](results/openclaw/ghcrawl-156588-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156588-autonomous-smoke.md | target changed since worker review | [report](results/openclaw/ghcrawl-156588-autonomous-smoke.md) | [24988616631](https://github.com/openclaw/clownfish/actions/runs/24988616631) |
| [ghcrawl-156610-autonomous-smoke](results/openclaw/ghcrawl-156610-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156610-autonomous-smoke.md | target changed since worker review | [report](results/openclaw/ghcrawl-156610-autonomous-smoke.md) | [24987399670](https://github.com/openclaw/clownfish/actions/runs/24987399670) |
| [ghcrawl-156594-autonomous-smoke](results/openclaw/ghcrawl-156594-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/ghcrawl-156594-autonomous-smoke.md | mergeable state is CONFLICTING | [report](results/openclaw/ghcrawl-156594-autonomous-smoke.md) | [24981853908](https://github.com/openclaw/clownfish/actions/runs/24981853908) |
| [ghcrawl-156613-autonomous-smoke](results/openclaw/ghcrawl-156613-autonomous-smoke.md) | needs human | jobs/openclaw/inbox/ghcrawl-156613-autonomous-smoke.md | #64953: maintainer decision needed on whether models.mode=replace should include implicit, provider-discovered, or plugin-augmented model... | [report](results/openclaw/ghcrawl-156613-autonomous-smoke.md) | [24981856066](https://github.com/openclaw/clownfish/actions/runs/24981856066) |
| [ghcrawl-156626-autonomous-smoke](results/openclaw/ghcrawl-156626-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/ghcrawl-156626-autonomous-smoke.md | validation command failed (pnpm test:serial extensions/memory-lancedb/index.test.ts): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Comman... | [report](results/openclaw/ghcrawl-156626-autonomous-smoke.md) | [24980262624](https://github.com/openclaw/clownfish/actions/runs/24980262624) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [ghcrawl-156617-autonomous-smoke](results/openclaw/ghcrawl-156617-autonomous-smoke.md) | blocked |  |  | base branch advanced after validation and clownfish/ghcrawl-156617-autonomous-smoke needs a fresh rebase pass: Rebasing (1/2) error: coul... | [25035222674](https://github.com/openclaw/clownfish/actions/runs/25035222674) |
| [ghcrawl-156636-autonomous-smoke](results/openclaw/ghcrawl-156636-autonomous-smoke.md) | failed |  |  | remote: Permission to security-for-ai-agent/openclaw.git denied to vincentkoc. fatal: unable to access 'https://github.com/security-for-a... | [25032428566](https://github.com/openclaw/clownfish/actions/runs/25032428566) |
| [ghcrawl-156642-autonomous-smoke](results/openclaw/ghcrawl-156642-autonomous-smoke.md) | failed |  |  | Codex /review failed: structured output was not written to repair-codex-review-1.json; stdout={"type":"thread.started","thread_id":"019dd... | [25023008984](https://github.com/openclaw/clownfish/actions/runs/25023008984) |
| [ghcrawl-156642-autonomous-smoke](results/openclaw/ghcrawl-156642-autonomous-smoke.md) | blocked |  |  | Codex /review failed: structured output was not written to repair-codex-review-1.json; stdout={"type":"thread.started","thread_id":"019dd... | [25023008984](https://github.com/openclaw/clownfish/actions/runs/25023008984) |
| [ghcrawl-156665-autonomous-smoke](results/openclaw/ghcrawl-156665-autonomous-smoke.md) | failed |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/cron/isolated-agent/run-e... | [25023036489](https://github.com/openclaw/clownfish/actions/runs/25023036489) |
| [ghcrawl-156665-autonomous-smoke](results/openclaw/ghcrawl-156665-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/cron/isolated-agent/run-e... | [25023036489](https://github.com/openclaw/clownfish/actions/runs/25023036489) |
| [ghcrawl-156648-autonomous-smoke](results/openclaw/ghcrawl-156648-autonomous-smoke.md) | blocked |  |  | Codex /review failed: structured output was not written to replacement-codex-review-2.json; stdout={"type":"thread.started","thread_id":"... | [25023016010](https://github.com/openclaw/clownfish/actions/runs/25023016010) |
| [ghcrawl-156657-autonomous-smoke](results/openclaw/ghcrawl-156657-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/agents/workspace.load-ext... | [25023025041](https://github.com/openclaw/clownfish/actions/runs/25023025041) |
| [ghcrawl-156661-autonomous-smoke](results/openclaw/ghcrawl-156661-autonomous-smoke.md) | failed |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=extensions, extensionTests, docs [check:changed] extensions/feishu/... | [25023028672](https://github.com/openclaw/clownfish/actions/runs/25023028672) |
| [ghcrawl-156661-autonomous-smoke](results/openclaw/ghcrawl-156661-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=extensions, extensionTests, docs [check:changed] extensions/feishu/... | [25023028672](https://github.com/openclaw/clownfish/actions/runs/25023028672) |
| [ghcrawl-156655-autonomous-smoke](results/openclaw/ghcrawl-156655-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [25023021455](https://github.com/openclaw/clownfish/actions/runs/25023021455) |
| [ghcrawl-156629-autonomous-smoke](results/openclaw/ghcrawl-156629-autonomous-smoke.md) | failed |  |  | branch projectclownfish/repair-ghcrawl-156629-autonomous-smoke-72660 could not rebase onto origin/main: Codex could not repair rebase con... | [24989070557](https://github.com/openclaw/clownfish/actions/runs/24989070557) |
| [ghcrawl-156629-autonomous-smoke](results/openclaw/ghcrawl-156629-autonomous-smoke.md) | blocked |  |  | branch projectclownfish/repair-ghcrawl-156629-autonomous-smoke-72660 could not rebase onto origin/main: Codex could not repair rebase con... | [24989070557](https://github.com/openclaw/clownfish/actions/runs/24989070557) |
| [ghcrawl-156626-autonomous-smoke](results/openclaw/ghcrawl-156626-autonomous-smoke.md) | failed |  |  | validation command failed (pnpm test:serial extensions/memory-lancedb/index.test.ts): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Comman... | [24980262624](https://github.com/openclaw/clownfish/actions/runs/24980262624) |
| [ghcrawl-156599-autonomous-smoke](results/openclaw/ghcrawl-156599-autonomous-smoke.md) | failed |  |  | source PR #44325 is closed | [24980225169](https://github.com/openclaw/clownfish/actions/runs/24980225169) |
| [ghcrawl-156622-autonomous-smoke](results/openclaw/ghcrawl-156622-autonomous-smoke.md) | failed |  |  | validation command failed (pnpm check:changed): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Command "check:changed" not found Did you me... | [24980256758](https://github.com/openclaw/clownfish/actions/runs/24980256758) |
| [ghcrawl-156622-autonomous-smoke](results/openclaw/ghcrawl-156622-autonomous-smoke.md) | blocked |  |  | Codex /review failed: structured output was not written to replacement-codex-review-1.json; stdout={"type":"thread.started","thread_id":"... | [24980256758](https://github.com/openclaw/clownfish/actions/runs/24980256758) |
| [ghcrawl-156601-autonomous-smoke](results/openclaw/ghcrawl-156601-autonomous-smoke.md) | blocked |  |  | Codex /review failed: structured output was not written to replacement-codex-review-1.json; stdout={"type":"thread.started","thread_id":"... | [24980228607](https://github.com/openclaw/clownfish/actions/runs/24980228607) |
| [ghcrawl-156621-autonomous-smoke](results/openclaw/ghcrawl-156621-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [24980255440](https://github.com/openclaw/clownfish/actions/runs/24980255440) |
| [ghcrawl-156627-autonomous-smoke](results/openclaw/ghcrawl-156627-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [24980264116](https://github.com/openclaw/clownfish/actions/runs/24980264116) |
| [ghcrawl-156625-autonomous-smoke](results/openclaw/ghcrawl-156625-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [24980261072](https://github.com/openclaw/clownfish/actions/runs/24980261072) |
| [ghcrawl-156619-autonomous-smoke](results/openclaw/ghcrawl-156619-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [24980252527](https://github.com/openclaw/clownfish/actions/runs/24980252527) |
| [ghcrawl-207042-agentic-merge](results/openclaw/ghcrawl-207042-agentic-merge.md) | failed |  |  | validation command failed (pnpm check:changed): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Command "check:changed" not found Did you me... | [24978961186](https://github.com/openclaw/clownfish/actions/runs/24978961186) |
| [ghcrawl-207042-agentic-merge](results/openclaw/ghcrawl-207042-agentic-merge.md) | blocked |  |  | Codex /review did not pass after 2 attempt(s): Not merge-ready. The local changed-surface gate is green, and the #59344 Greptile/Codex pa... | [24978961186](https://github.com/openclaw/clownfish/actions/runs/24978961186) |
| [ghcrawl-199248-agentic-merge](results/openclaw/ghcrawl-199248-agentic-merge.md) | failed |  |  | source PR #43611 is closed | [24978965075](https://github.com/openclaw/clownfish/actions/runs/24978965075) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| action status is blocked | 89 | [ghcrawl-156636-autonomous-smoke](results/openclaw/ghcrawl-156636-autonomous-smoke.md) |
| close requires ProjectClownfish fix PR opened/pushed or merge executed first | 11 | [ghcrawl-156628-autonomous-smoke](results/openclaw/ghcrawl-156628-autonomous-smoke.md) |
| merge state status is UNSTABLE | 10 | [ghcrawl-156647-autonomous-smoke](results/openclaw/ghcrawl-156647-autonomous-smoke.md) |
| target changed since worker review | 9 | [ghcrawl-156624-autonomous-smoke](results/openclaw/ghcrawl-156624-autonomous-smoke.md) |
| mergeable state is CONFLICTING | 7 | [ghcrawl-156651-autonomous-smoke](results/openclaw/ghcrawl-156651-autonomous-smoke.md) |
| target is not listed in job candidates | 3 | [ghcrawl-156667-autonomous-smoke](results/openclaw/ghcrawl-156667-autonomous-smoke.md) |
| candidate fix is not merged | 2 | [ghcrawl-191459-agentic-merge](results/openclaw/ghcrawl-191459-agentic-merge.md) |
| canonical is not listed in job refs | 2 | [ghcrawl-156658-autonomous-smoke](results/openclaw/ghcrawl-156658-autonomous-smoke.md) |
| maintainer issue comment blocks low-signal auto-close | 2 | [low-signal-pr-sweep-20260425T2346-01](results/openclaw/low-signal-pr-sweep-20260425t2346-01.md) |
| closure requires canonical or duplicate_of | 1 | [ghcrawl-143818-autonomous-smoke](results/openclaw/ghcrawl-143818-autonomous-smoke.md) |
| no PR checks found | 1 | [ghcrawl-156671-autonomous-smoke](results/openclaw/ghcrawl-156671-autonomous-smoke.md) |
| security-sensitive PR requires central security triage | 1 | [ghcrawl-156597-autonomous-smoke](results/openclaw/ghcrawl-156597-autonomous-smoke.md) |

### Open PR Finalizer Queue

| PR | Title | Cluster | Branch | Blockers | Next action |
| --- | --- | --- | --- | --- | --- |
| [#72664](https://github.com/openclaw/openclaw/pull/72664) | fix(qwen): allow explicit qwen3.6-plus on Coding Plan | ghcrawl-156617-autonomous-smoke | clownfish/ghcrawl-156617-autonomous-smoke | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | route to central security triage |
| [#72621](https://github.com/openclaw/openclaw/pull/72621) | fix(whatsapp): recover stale listener after auth conflict churn | ghcrawl-156581-autonomous-smoke | clownfish/ghcrawl-156581-autonomous-smoke | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node... | route to central security triage |
| [#72615](https://github.com/openclaw/openclaw/pull/72615) | fix(memory-wiki): route bridge CLI through gateway | ghcrawl-156579-autonomous-smoke | clownfish/ghcrawl-156579-autonomous-smoke | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-core-runtime-shared:FAILURE; CI / checks... | route to central security triage |
| [#72409](https://github.com/openclaw/openclaw/pull/72409) | fix(plugins): suppress false duplicate-id warnings across origins | ghcrawl-207039-agentic-merge | clownfish/ghcrawl-207039-agentic-merge | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-agenti... | route to central security triage |
| [#72326](https://github.com/openclaw/openclaw/pull/72326) | fix(cron): infer session agentId when omitted | ghcrawl-165998-agentic-merge | clownfish/ghcrawl-165998-agentic-merge | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node... | route to central security triage |

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

Each cluster job:

1. Starts from one markdown job file under `jobs/`.
2. Hydrates the listed issue/PR refs and first-hop linked refs.
3. Builds a cluster plan and fix artifact for autonomous jobs.
4. Runs Codex with repo-local policy prompts and JSON output schema in a read-only sandbox.
5. Writes structured run artifacts under `.projectclownfish/runs/`.
6. Reviews the worker artifact with deterministic safety checks.
7. Executes credited fix artifacts through `scripts/execute-fix-artifact.mjs` when the fix gate is open: repair a maintainer-editable contributor branch first, otherwise raise a narrow replacement PR and close the uneditable source PR after the replacement push succeeds.
8. Applies guarded close/comment and explicit merge actions through `scripts/apply-result.mjs`.
9. Publishes a sanitized result ledger back to this repo under `results/`, `jobs/openclaw/closed/`, `apply-report.json`, and this README dashboard.

Codex does not receive a GitHub token during classification. The runner preflights GitHub state before model execution, then Codex receives those artifacts and returns JSON only. When a reviewed fix artifact is executed, Codex gets a temporary target checkout without GitHub credentials; the deterministic executor owns commit, push, PR creation, and source-PR closeout using `CLOWNFISH_GH_TOKEN`. Commit author metadata defaults to `projectclownfish` and can be overridden with `CLOWNFISH_GIT_USER_NAME` and `CLOWNFISH_GIT_USER_EMAIL`; this is separate from the GitHub token used to push. The applicator re-fetches the target item, checks `updated_at`, blocks unsafe closeouts, writes idempotent close comments, closes supported duplicate/superseded/fixed-by-candidate actions, and can squash-merge explicitly allowed clean PR actions.

Merge is deliberately harder than closeout. A merge action must include `merge_preflight` proving security clearance, resolved human comments, resolved review-bot findings, a passed Codex `/review`, addressed review findings, and clean validation commands. The fix executor runs an agentic edit/review loop before it writes a fix PR: edit, validate, Codex `/review`, address findings, revalidate, and resolve PR review threads when permitted. The applicator also checks live unresolved GitHub review threads immediately before merge.

Replacement fix work uses a recoverable target branch named `clownfish/<cluster-id>`. The executor resumes that branch if it already exists and pushes checkpoint commits after agent edits and review-fix edits, then opens or updates the PR only after validation and Codex `/review` pass. If `/review` still blocks the merge after retries, the run writes a blocked fix report and leaves the checkpoint branch recoverable instead of losing the patch.

Runs for the same job path and mode are queued instead of running concurrently. The workflow uses Node 24, `blacksmith-4vcpu-ubuntu-2404` for cluster planning/review, and `blacksmith-16vcpu-ubuntu-2404` for fix/apply execution. Fix execution prepares the target checkout with Corepack and the target `pnpm` package manager before validation; the execution job caches Codex, npm, Corepack, and the target pnpm store. Fix validation is pinned to OpenClaw's fast changed-lane posture by default: `pnpm check:changed` plus diff checks are the hard local gate, and target validation commands normalize to `pnpm check:changed` unless `CLOWNFISH_TARGET_VALIDATION_MODE=strict` or `CLOWNFISH_STRICT_TARGET_VALIDATION=1` is explicitly set. Unrelated flaky main CI, broad `pnpm check`, full tests, live, docker, and e2e lanes do not block narrow ProjectClownfish fixes by default.

Full worker prompts, Codex transcripts, and raw artifacts stay in GitHub Actions. The committed ledger keeps only the cluster summary, run URL, action counts, apply outcomes, closed targets, and needs-human entries.

## Modes

- `plan`: produces recommendations only.
- `execute`: can apply reviewed safe close and explicit clean merge actions from structured JSON.
- `autonomous`: adds live cluster preflight and fix-artifact generation. It may recommend and drive a canonical fix path; direct mutation still goes through the fix executor and applicator gates.
- `route_security`: quarantines true security-sensitive refs without poisoning unrelated cluster work.
- `needs_human`: only product-direction, trust-boundary, canonical-choice, merge-path, or contributor-credit decisions that remain unclear after the hydrated artifact and single-item review/check/decide pass.
- Automated reviewer feedback must be cleared during autonomous PR work. Greptile, Codex, Asile, CodeRabbit, Copilot, and similar bot comments must be addressed, proven non-actionable, or escalated before any merge or post-merge closeout recommendation.
- Merge preflight: no PR can merge until security issues are cleared, comments are resolved, Codex `/review` has passed, findings are addressed, and changed-surface validation is clean.
- Repair ladder: make the useful contributor PR mergeable when its branch is maintainer-editable; otherwise replace draft, stale, unmergeable, uneditable, or unsafe branches with a narrow credited fix PR. When fix PR mode is enabled, "wait or replace" is already answered: replace, preserve credit, then supersede only the source PR that could not be safely updated.

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
# or --max-live-workers.
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

# Dry-run job hygiene: classify old smoke jobs, outbox-ready jobs, unprocessed
# jobs, and requeue candidates without deleting, moving, or dispatching.
npm run sweep-openclaw-jobs -- --live

# Apply reviewed job hygiene. This deletes old smoke jobs, moves finalized jobs
# to jobs/openclaw/outbox/finalized, and parks never-run backlog in
# jobs/openclaw/outbox/stuck; it never dispatches workers.
npm run sweep-openclaw-jobs -- --live --apply-delete-tests --apply-outbox --apply-stuck

# Dry-run a small parked-backlog promotion from outbox/stuck back into inbox.
npm run promote-stuck-jobs -- --limit 20

# Promote a reviewed parked-backlog batch into the active queue.
npm run promote-stuck-jobs -- --limit 20 --apply

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
- execution gates that default on for execute/autonomous jobs: set `CLOWNFISH_ALLOW_EXECUTE=0` or `CLOWNFISH_ALLOW_FIX_PR=0` only when intentionally pausing live work
- optional `CLOWNFISH_CODEX_CLI_VERSION` variable to pin and refresh the cached Codex CLI
- optional `CLOWNFISH_MODEL` override for dispatch scripts; default Codex model is `gpt-5.5`
- optional `CLOWNFISH_MAX_LIVE_WORKERS` variable for dispatch/requeue/self-heal worker fan-out; default is `50`
- optional `CLOWNFISH_CODEX_TIMEOUT_MS` and `CLOWNFISH_FIX_CODEX_TIMEOUT_MS` variables; worker planning defaults to 30 minutes, while fix execution defaults to a 20 minute Codex budget inside the 30 minute build-PR step so timeout artifacts can be written
- optional `CLOWNFISH_CODEX_REVIEW_ATTEMPTS` and `CLOWNFISH_RESOLVE_REVIEW_THREADS` variables for agentic merge-prep review loops

Keep exact secret names, token scopes, and execution-window procedures in private operations docs or repository settings notes. Do not put token values or live operational credentials in job files.
