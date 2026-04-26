---
repo: openclaw/openclaw
cluster_id: ghcrawl-156616-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#67251"
candidates:
  - "#60407"
  - "#62400"
  - "#63227"
  - "#64216"
  - "#64853"
  - "#66359"
  - "#66481"
  - "#67251"
cluster_refs:
  - "#60407"
  - "#62400"
  - "#63227"
  - "#64216"
  - "#64853"
  - "#66359"
  - "#66481"
  - "#67251"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #67251 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156616 on 2026-04-26."
---

# GHCrawl Cluster 156616

Generated from local ghcrawl run cluster 156616 for `openclaw/openclaw`.

Display title:

> Windows: CLI subcommands hang with SIGKILL in exec environment (2026.4.14)

Cluster shape from ghcrawl:

- total members: 8
- issues: 8
- pull requests: 0
- open candidates in local store: 8
- representative: #67251, currently open in local store
- latest member update: 2026-04-24T18:56:24.174Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #60407 [Bug]: Exec commands succeed but return no output (SIGKILL / "Command still running")
- #62400 [Bug]: CLI Local Commands Hang Indefinitely in OpenClaw 4.5
- #63227 Windows: CLI commands hang for 30-90s after output completes (event loop not exiting)
- #64216 CLI browser commands hang 30-60s after output (WSL2/Linux, not just Windows)
- #64853 [Bug] CLI commands hang on Windows
- #66359 [Bug] exec commands receive SIGKILL frequently (every conversation turn)
- #66481 Windows: CLI subcommands hang in OpenClaw exec/tool environment, but work in normal PowerShell terminals
- #67251 Windows: CLI subcommands hang with SIGKILL in exec environment (2026.4.14)
