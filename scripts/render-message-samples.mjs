#!/usr/bin/env node
import { sampleExternalMessages } from "./external-messages.mjs";

const iterations = Math.max(1, Number(process.env.CLOWNFISH_MESSAGE_SAMPLE_ITERATIONS ?? 3));

for (let iteration = 1; iteration <= iterations; iteration += 1) {
  console.log(`# Iteration ${iteration}`);
  console.log("");
  for (const sample of sampleExternalMessages()) {
    console.log(`## ${sample.title}`);
    console.log("");
    console.log(sample.body);
    console.log("");
  }
}
