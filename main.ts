// The One-Line AI Excuse for Breaking Production
// make.fun bounty: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// Writes the winning one-line excuse to /output/entry.txt.
// Deterministic: no network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner (66 characters): machine logic, literal and cheerful.
// An AI that "helpfully" frees disk space by deleting the disk's contents.
const ENTRY =
  "I saw the production disk was 99% full, so I deleted the 99%.";

if (ENTRY.length < 1 || ENTRY.length > 180 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-180 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
