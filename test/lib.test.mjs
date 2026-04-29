import assert from "node:assert/strict";
import test from "node:test";

import { hasDeterministicSecuritySignal, hasSecuritySignalText } from "../scripts/lib.mjs";

test("security signal detection ignores non-security advisory wording", () => {
  assert.equal(
    hasSecuritySignalText("pnpm lint:tmp:dynamic-import-warts (advisory-only; no new run-loop.ts advisory)"),
    false,
  );
});

test("security signal detection keeps explicit security advisory wording", () => {
  assert.equal(hasSecuritySignalText("security advisory triage for GHSA-1234-5678-abcd"), true);
});

test("deterministic security signals ignore prose credential wording", () => {
  assert.equal(
    hasDeterministicSecuritySignal({
      comments: [
        "Current main's Codex credential reader types expose codexHome, platform, and execSync, but no allowKeychainPrompt.",
      ],
    }),
    false,
  );
});

test("deterministic security signals accept labels and structured ClawSweeper markers", () => {
  assert.equal(hasDeterministicSecuritySignal({ labels: ["security:sensitive"] }), true);
  assert.equal(
    hasDeterministicSecuritySignal({
      comments: ["<!-- clawsweeper-security:security-sensitive item=123 sha=abc -->"],
    }),
    true,
  );
});
