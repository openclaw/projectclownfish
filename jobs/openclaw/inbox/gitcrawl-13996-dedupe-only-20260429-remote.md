---
repo: openclaw/openclaw
cluster_id: gitcrawl-13996-dedupe-only-20260429-remote
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
  - "#59438"
candidates:
  - "#7406"
  - "#20230"
  - "#38439"
  - "#40016"
  - "#41201"
  - "#42504"
  - "#45703"
  - "#45755"
  - "#53378"
  - "#55249"
  - "#55718"
  - "#56308"
  - "#56997"
  - "#61213"
  - "#63558"
  - "#68248"
  - "#68959"
  - "#68981"
cluster_refs:
  - "#7406"
  - "#17298"
  - "#20230"
  - "#35675"
  - "#38439"
  - "#40016"
  - "#41201"
  - "#42504"
  - "#43007"
  - "#43119"
  - "#44446"
  - "#44774"
  - "#45045"
  - "#45365"
  - "#45582"
  - "#45654"
  - "#45703"
  - "#45755"
  - "#46241"
  - "#46833"
  - "#46835"
  - "#46909"
  - "#48064"
  - "#48121"
  - "#49382"
  - "#49895"
  - "#50077"
  - "#50224"
  - "#50228"
  - "#52650"
  - "#53012"
  - "#53378"
  - "#53380"
  - "#53438"
  - "#53610"
  - "#53701"
  - "#54163"
  - "#54714"
  - "#54823"
  - "#55249"
  - "#55555"
  - "#55718"
  - "#56308"
  - "#56997"
  - "#57822"
  - "#59438"
  - "#60006"
  - "#60348"
  - "#60530"
  - "#61213"
  - "#63204"
  - "#63558"
  - "#63690"
  - "#64893"
  - "#64998"
  - "#66539"
  - "#68248"
  - "#68652"
  - "#68959"
  - "#68981"
  - "#70166"
  - "#70610"
  - "#70700"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59438 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13996 on 2026-04-29."
---

# Gitcrawl Cluster 13996

Generated from local gitcrawl run cluster 13996 for `openclaw/openclaw`.

Display title:

> [Bug]: Agent avatar not refreshing correctly when switching between agents in same browser session

Cluster shape from gitcrawl:

- total members: 63
- issues: 63
- pull requests: 0
- open candidates in local store: 18
- representative: #59438, currently closed in local store
- latest member update: 2026-04-28T22:51:07.173620396Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #17298 Control UI should display configured agent avatars instead of default favicon
- #35675 Feature: Auto-populate session label with chat/group name from messaging providers
- #43007 [Feature Request] Telegram: Resolve and include forum topic name in inbound message metadata
- #43119 [Feature]: control-ui should read per-agent identity (name + avatar) from agents.list[].identity
- #44446 [Bug]: Control UI - WebChat images not forwarded to agent + Agent dropdown only shows 1
- #44774 [Feature Request] Agent selector in top-right corner instead of client label
- #45045 Control UI: Avatar doesn't update when switching between agent sessions
- #45365 Bug: Agent 会话页面显示 SVG path 代码而非图形
- #45582 Control UI: allow setting a user/operator avatar (not just assistant avatar)
- #45654 [Bug]: Sidebar has horrible contrast and text is tiny (v2 UI)
- #46241 [Feature Request] 支持 WebChat 自定义用户头像
- #46833 Display multiple channel sessions in Control UI sidebar
- #46835 Display multiple channel sessions in Control UI sidebar
- #46909 [Bug]: Agent avatar disappears after updating to 2026.3.12 - Control UI display issue
- #48064 [Feature Request] Support custom user display name and avatar in Control UI / WebChat
- #48121 [Bug]: Switching agents does not update avatar until manual refresh
- #49382 Allow custom agent name display in webchat control UI
- #49895 [Feature] Sub-agent lifecycle management: better naming and dynamic creation/destruction
- #50077 Feature: Display session label in chat header (control-ui)
- #50224 [Feature Request] ??????????????? label ?????displayName
- #50228 [Feature Request] Show label instead of displayName in session list
- #52650 [Feature Request] Add user avatar support in WebUI
- #53012 Control UI: show session displayName in chat dropdown instead of raw key
- #53380 Support custom avatar/emoji for agents and users in Control UI
- #53438 [Feature Request] Control UI Chat Window - Support Custom Agent Display Name
- #53610 [Bug]: Avatar endpoint /avatar/{agentId} returns 404 — workspace-relative avatar path not served
- #53701 [Feature Request]: Show human-readable Telegram forum topic names in Control UI session selector
- #54163 [Feature]: Display agent identity name in Control UI session list instead of raw session key
- #54714 [Bug]: Subagent Identity shows Default Agent Name/Avatar in Control UI
- #54823 Feature: Session display name / alias support
- #55555 [Feature]: Custom Session Names/Labels
- #57822 [ Bug ]: Web UI agent dropdown shows agent.id instead of identity.name
- #59438 [Bug]: Agent avatar not refreshing correctly when switching between agents in same browser session
- #60006 [Feature]: Support custom session display names in Control UI
- #60348 [Bug]: Avatar image in Gateway Webinterface outdated
- #60530 WebChat: Add human-readable session aliases in sidebar
- #63204 Feature Request: Support custom display names for sessions
- #63690 Webchat: avatar not updated when switching between agent sessions
- #64893 [Feature Request] Add session rename / custom title functionality
- #64998 Control UI: stale avatar when switching agents on chat tab
- #66539 [Feature]: Control UI should support stable aliases/pinned names for session keys
- #68652 Feature: include Telegram forum topic names in dashboard session labels
- #70166 Control UI avatar broken after upgrade from v4.14 to v4.21
- #70610 Control UI agent switcher shows raw session key instead of agent display name for non-default agents
- #70700 [Bug]: Control UI inconsistently handles workspace-relative agent avatars even when /avatar/{agentId} resolves correctly

Open candidates:

- #7406 [Feature]: Human-readable Telegram topic names in session dropdown
- #20230 [Feature]: Per-agent chat bubble styling and agent name display in WebUI
- #38439 [Bug] Webchat avatar endpoint /avatar/{agentId} returns 404 even with valid IDENTITY.md avatar
- #40016 feat: CLI command to set session subject/label
- #41201 [Bug]: Control UI Avatar not displaying (broken image)
- #42504 Control UI: upload agent avatars from Agents tab
- #45703 [Bug]: Agent section is horrible (v2 UI)
- #45755 [Bug]: Agent emoji as AWOL (ui v0.2)
- #53378 Control UI: Show channel icon/name in session list
- #55249 Feature: Session labels / nicknames for easier identification
- #55718 [Feature]: [Feature Request] Support custom display labels for channel accounts in control-ui session list
- #56308 Feature Request: Session title/summary for better session identification
- #56997 [Feature] Control UI: Support channel-based session view toggle
- #61213 Web 控制界面显示 ou_xxx open_id 和冗长的 session key，难以识别
- #63558 Control UI: Dreaming tab has no agent selector — cannot switch between agent contexts
- #68248 [Feature Request] Add avatar/favicon customization for Control UI agents
- #68959 Control UI: No agent switcher — cannot switch between agents in web UI
- #68981 [Enhancement] Session Management: Human-readable names, auto-cleanup, and grouped Control UI
