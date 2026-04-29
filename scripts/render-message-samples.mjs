#!/usr/bin/env node
import { sampleExternalMessages } from "./external-messages.mjs";

for (const sample of sampleExternalMessages()) {
  console.log(`## ${sample.title}`);
  console.log("");
  console.log(sample.body);
  console.log("");
}
