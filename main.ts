// Seventeen Syllables of Debugging — make.fun entry.
// Writes one 5-7-5 haiku about debugging (<=200 chars) to entry.txt.
// Node 22, stdlib only, fully deterministic, no network.
//
// Syllable counts, verified programmatically (see syllable_check.py):
//   "Black screen, one red wound."        -> 5  (Black-1 screen-1 one-1 red-1 wound-1)
//   "The error names a ghost file."       -> 7  (The-1 er-ror-2 names-1 a-1 ghost-1 file-1)
//   "I killed it last week."              -> 5  (I-1 killed-1 it-1 last-1 week-1)
// Total: 17 syllables, 81 characters incl. newlines (gate: 1-200).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Black screen, one red wound.",
  "The error names a ghost file.",
  "I killed it last week.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU + "\n", "utf8");
