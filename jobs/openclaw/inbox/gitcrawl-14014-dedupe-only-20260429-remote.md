---
repo: openclaw/openclaw
cluster_id: gitcrawl-14014-dedupe-only-20260429-remote
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
  - "#54527"
candidates:
  - "#40970"
cluster_refs:
  - "#21290"
  - "#28166"
  - "#37549"
  - "#37663"
  - "#39163"
  - "#40254"
  - "#40970"
  - "#47370"
  - "#47551"
  - "#47647"
  - "#47700"
  - "#50085"
  - "#50567"
  - "#54403"
  - "#54527"
  - "#54589"
  - "#55602"
  - "#58740"
  - "#60784"
  - "#62349"
  - "#62449"
  - "#62458"
  - "#62482"
  - "#65804"
  - "#66457"
  - "#67175"
  - "#67206"
  - "#67209"
  - "#70424"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54527 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14014 on 2026-04-29."
---

# Gitcrawl Cluster 14014

Generated from local gitcrawl run cluster 14014 for `openclaw/openclaw`.

Display title:

> fix(logging): rebuild subsystem file logger on date rollover

Cluster shape from gitcrawl:

- total members: 29
- issues: 0
- pull requests: 29
- open candidates in local store: 1
- representative: #54527, currently closed in local store
- latest member update: 2026-04-28T07:04:51.871054276Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #21290 feat(diagnostics-otel): OpenTelemetry diagnostics with GenAI semantic conventions
- #28166 Diagnostics: dedupe OTEL trace context + log transport fixes
- #37549 fix(logging): subsystem loggers now follow root logger rotation
- #37663 fix: log file rotation at midnight
- #39163 fix(logging): share external log transports across bundled module instances
- #40254 feat(otel): add Langfuse-oriented full trace-tree enrichment + semantic attrs
- #47370 fix(logging): rotate log file when date changes in rolling-path mode
- #47551 fix(logging): keep parent minLevel when child level is unset
- #47647 fix: child logger inherits parent minLevel when no override given
- #47700 Fix logfile rotation: resolve file path at write time
- #50085 fix(logging): use globalThis for log transport registry to survive jiti plugin loading
- #50567 fix(diagnostics-otel): fix log transport module isolation and add opt-in content capture
- #54403 fix: rebuild subsystem file logger on date rollover
- #54527 fix(logging): rebuild subsystem file logger on date rollover
- #54589 fix(logger): re-create file logger after midnight to use correct dated log file
- #55602 feat: support %DATE% placeholder in logging.file config
- #58740 otel instrumentation
- #60784 fix(logging): preserve parent minLevel for child loggers
- #62349 fix(logging): invalidate cached subsystem file loggers on date roll
- #62449 fix(logging):Subsystem File Logger Writes to Stale Date-Rolled Log File (Closes #62381)
- #62458 fix(logging): refresh subsystem file logger when parent logger is rebuilt on date roll
- #62482 fix: refresh subsystem file loggers across daily log rollovers [AI-assisted]
- #65804 fix: refresh SubsystemLogger file child on rolling log rotation
- #66457 fix(logging): implement log file rotation and update related tests
- #67175 fix(logging): honor logging.file in bundled gateway runtime
- #67206 fix(logging): invalidate subsystem file loggers when parent logger is rebuilt (#67168)
- #67209 fix(logging): honor logging.file config early
- #70424 feat(diagnostics-otel): unify end-to-end tracing

Open candidates:

- #40970 logging.file configuration supports wildcard characters YYYY-MM-DD
