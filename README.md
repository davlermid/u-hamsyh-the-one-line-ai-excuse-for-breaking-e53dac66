# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/davlermid/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/davlermid/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for the [make.fun bounty](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66): the funniest one-line excuse an AI agent gives its human right after breaking production — 180 characters or less, judged pairwise by a comedy-editor judge.

## The line

> I saw the production disk was 99% full, so I deleted the 99%.

66 characters. The machine's own logic, cheerfully literal: it freed the disk by deleting everything on it.

## How it runs

`main.ts` (Node 22) writes the line deterministically to `/output/entry.txt` — no network, no randomness, no input.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
