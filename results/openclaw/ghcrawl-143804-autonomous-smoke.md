---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143804-autonomous-smoke"
mode: "autonomous"
run_id: "24939000666"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24939000666"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.229Z"
canonical: "https://github.com/openclaw/openclaw/issues/68508"
canonical_issue: "https://github.com/openclaw/openclaw/issues/68508"
canonical_pr: null
actions_total: 23
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# ghcrawl-143804-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24939000666](https://github.com/openclaw/projectclownfish/actions/runs/24939000666)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/68508

## Summary

Using the provided preflight artifact as live GitHub state, #68508 remains the best live canonical for the narrow async-exec system-event leak into the visible Control UI/WebChat transcript. I planned one high-confidence duplicate close (#70373), kept heartbeat-specific and broader runtime-context reports open as related or independent, and left the discussed #65994 thread plus broader-family consolidation for maintainer review.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 23 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #70373 | close_duplicate | executed | duplicate | duplicate of the canonical thread |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #55049 | keep_related | planned | related | Related symptom family, but too broad to auto-close as a pure duplicate of the async-exec canonical. |
| #58287 | keep_related | planned | related | Same Control UI leak family, but heartbeat injection is a distinct trigger path from the narrower async-exec canonical. |
| #61433 | keep_related | planned | related | Broader announce/rewrite leak family than #68508; keep open rather than collapsing it into the narrower async-exec report. |
| #62306 | keep_related | planned | related | Subagent-completion and persistence scope exceeds the narrow async-exec canonical, so it should stay open as related. |
| #62418 | keep_related | planned | related | Overlaps #68508, but explicitly preserves broader startup-message leakage, so I did not collapse it into the narrower canonical. |
| #65131 | keep_independent | planned | independent | Feature request for an optional UX control; it could remain valid even if the bug family is fixed. |
| #65315 | keep_closed | skipped | related | Already closed in live state; treat as historical evidence only. |
| #65994 | needs_human | blocked | needs_human | Likely duplicate of #68508, but I would not auto-close over an unreviewed comment thread. |
| #66343 | keep_closed | skipped | independent | Already closed and feature-request scoped; no further action here. |
| #66648 | keep_closed | skipped | related | Already closed in live state; keep as historical evidence for the broader leak family. |
| #66814 | keep_related | planned | related | Broader than the narrow async-exec canonical; keep open as related rather than close it away. |
| #67238 | keep_independent | planned | independent | Feature request for optional filtering, not a pure duplicate of the bug canonical. |
| #67267 | keep_related | planned | related | Same leak family, but with a stronger duplicate-reply/feedback-loop angle that should remain open as related work. |
| #67364 | keep_related | planned | related | Heartbeat-specific variant of the same UI leak family; keep open as related rather than route it to the async-exec canonical. |
| #67527 | keep_closed | skipped | duplicate | Already closed in live state; direct duplicate evidence only. |
| #68094 | keep_closed | skipped | related | Already closed in live state; keep as historical evidence for the broader leak family. |
| #68508 | keep_canonical | planned | canonical | Best live canonical for the narrow async-exec Control UI transcript-leak bug. |
| #68992 | keep_closed | skipped | duplicate | Already closed in live state; direct duplicate evidence only. |
| #69037 | keep_closed | skipped | related | Already closed in live state; related side-effect evidence only. |
| #70289 | keep_closed | skipped | related | Already closed in live state; broader related leak evidence only. |
| #70373 | close_duplicate | planned | duplicate | High-confidence duplicate of #68508. |
| #70458 | keep_closed | skipped | duplicate | Already closed in live state; direct duplicate evidence only. |
| #70732 | keep_related | planned | related | Same leak family, but it preserves a broader storage/persistence problem beyond the visible-transcript-only canonical. |

## Needs Human

- Review #65994's 6-comment thread before duplicate closure; the provided artifact shows it is likely covered by #68508 but does not include comment contents.
- Decide whether broader-family reports #61433, #62306, #66814, and #70732 should remain separate related issues or be consolidated under a broader canonical than #68508.
- Linked open issue #52305 is a related async-completion routing-loss bug outside the primary candidate set and should be handled as a follow-up cluster if desired.
