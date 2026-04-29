# Closure Policy

Only close when:

- the item is open;
- it is a true duplicate or superseded by a clear canonical item;
- it is clearly covered by a candidate fix that should own validation and follow-up;
- a clear comment has been posted first;
- the comment preserves credit and gives a reopen path;
- the action is allowed by the job frontmatter.

Default close comment shape:

```md
Thanks for this. I am closing this as a duplicate of #CANONICAL because both reports track the same root cause: REASON.

I am keeping the canonical thread open there so fixes, validation, and follow-up stay in one place. If this has a different reproduction path or still reproduces after the canonical fix lands, please reply and we can reopen or split it back out.
```

Never close:

- an item that is already closed in live GitHub state;
- unclear root cause;
- unique reproduction detail;
- unique affected platform/version;
- active maintainer discussion;
- assigned work in progress;
- contributor PR with useful code that should be merged or credited.

Useful contributor PR replacement exception:

- close or supersede the PR only after the run has a concrete replacement fix plan or PR path;
- the close comment must say why Clownfish cannot safely update or land the branch;
- the comment must name the replacement path and state that the contributor will be credited;
- the comment must explicitly contain credit wording such as `credit`, `attribution`, `Thanks @user`, or `source PR`;
- the fix artifact must include the contributor username, original PR URL, validation plan, and changelog attribution when the fix is user-facing.

Auto-closure payloads must include `target_updated_at`. The applicator will re-fetch live GitHub state and skip the close if the target changed after review.
