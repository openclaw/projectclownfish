---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143815-autonomous-smoke"
mode: "autonomous"
run_id: "24947175620"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24947175620"
head_sha: "cc7e2b9deb213893d18c0bcca95afccd476be4c1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T03:27:48.141Z"
canonical: "https://github.com/openclaw/openclaw/issues/49180"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49180"
canonical_pr: null
actions_total: 8
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-143815-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24947175620](https://github.com/openclaw/projectclownfish/actions/runs/24947175620)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49180

## Summary

Live canonical shifts from closed representative #45835 to open issue #49180. Candidate refs #50541 and #50691 are already closed as duplicates of #49180. Remaining open candidates #49758, #50606, #51016, and #51495 stay open as related because each adds materially different Telegram, TUI, SecretRef, or auto-pairing scope details, so no further close/comment action is high-confidence from this artifact. No mutating ProjectClownfish action is planned in this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49180 | keep_canonical | planned | canonical | Use #49180 as the current canonical issue because it is the only surviving open thread that maintainers are already routing duplicate reports into. |
| #45835 | keep_closed | skipped | superseded | The original representative is already closed, so the live canonical role must move to an open issue. |
| #50541 | keep_closed | skipped | duplicate | Already-closed duplicate; no further ProjectClownfish action is valid. |
| #50691 | keep_closed | skipped | duplicate | Already-closed duplicate; no further ProjectClownfish action is valid. |
| #49758 | keep_related | planned | related | Same symptom family, but broader Telegram and health-reporting scope makes this a related follow-up rather than a safe duplicate closeout. |
| #50606 | keep_related | planned | related | Keep open as related because the TUI-specific path is not cleanly proven as the same root cause as #49180. |
| #51016 | keep_related | planned | related | Keep open as related because the SecretRef-backed credential-resolution path is materially narrower than the generic #49180 reproduction. |
| #51495 | keep_related | planned | related | Keep open as related because the auto-approved pairing lifecycle may represent a narrower sub-path that is not safe to collapse into #49180 from current evidence. |

## Needs Human

- Security boundary: #48986 is marked security-sensitive in the preflight artifact (`security_boundary.security_sensitive_items`). Do not derive or replay any ProjectClownfish mutation from that report; keep it routed to central OpenClaw security triage only.
