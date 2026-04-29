---
repo: openclaw/openclaw
cluster_id: gitcrawl-2052-dedupe-only-20260429-remote
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#52836"
candidates:
  - "#41304"
  - "#41824"
  - "#47606"
  - "#62505"
  - "#63135"
  - "#65490"
cluster_refs:
  - "#39866"
  - "#40082"
  - "#41091"
  - "#41304"
  - "#41824"
  - "#47606"
  - "#52836"
  - "#55243"
  - "#56596"
  - "#56676"
  - "#57263"
  - "#62505"
  - "#63135"
  - "#65490"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52836 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2052 on 2026-04-29."
---

# Gitcrawl Cluster 2052

Generated from local gitcrawl run cluster 2052 for `openclaw/openclaw`.

Display title:

> [Bug]: Agent is not reporting back or doing actual tasks it is supposed to do.

Cluster shape from gitcrawl:

- total members: 14
- issues: 14
- pull requests: 0
- open candidates in local store: 6
- representative: #52836, currently closed in local store
- latest member update: 2026-04-28T21:55:43.855367116Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39866 [Bug]: Fresh install of 2026.3.7 open claw, doesnt fire cron and drops any task when asked
- #40082 [Bug]: OpenClaw accepts tasks but agents often do not execute them, return placeholder replies, and activity/log visibility is inconsistent
- #41091 [Bug]: he answers but never execute
- #52836 [Bug]: Agent is not reporting back or doing actual tasks it is supposed to do.
- #55243 [Bug]: Agent won't do assigned task (says it will but does nothing)
- #56596 [Bug]: After updating, openclaw promise to do task but never really done anthing.
- #56676 [Bug]: read tool allowed in config but not executed; agent narrates/fakes read output in Telegram and direct CLI
- #57263 [Bug]: Agent enters reply loop: repeatedly acknowledges action requests without executing them

Open candidates:

- #41304 [Bug]: Agent refuses to invoke write/action tools (send email, create Github, ) hallucinates success
- #41824 Agent confabulates completed actions on Telegram surface — same config works reliably on Claude Code/Codex
- #47606 Execution anti-drift guards: artifact-gated status, escalation timers, and no-idle-after-green
- #62505 [Bug]: Coding Agent never completes anything (worked in 2026.4.2 and earlier)
- #63135 [Bug]: Agents respond they are working on a request but then fail to perform any actions.
- #65490 Running an OpenClaw agent in production: the execution discipline gap
