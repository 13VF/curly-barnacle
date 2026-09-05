# curly-barnacle

Bilingual personal site built as a small exercise in agent-driven development.

## Status

The site is structurally complete, but all personal information is intentionally represented by explicit `TODO` placeholders. Replace the placeholders in `app/data/site.ts` before publishing the site as a real personal page.

## Stack

- Node.js `24.20.0` (minimum `24.15.0`)
- Nuxt 4
- Vue 3
- Static site generation
- TypeScript strict mode
- Plain CSS with custom properties
- npm

## Routes

- `/` — Russian, primary language
- `/en/` — English

Both routes render the same single-page component with localized typed content.

## Commands

```bash
npm install
npm run dev
npm run verify
```

Individual checks:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run generate
```

Generated static output is written to `.output/public`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages when changes are pushed to `main`.

The workflow uses:

```text
NUXT_APP_BASE_URL=/curly-barnacle/
NUXT_PUBLIC_SITE_URL=https://13vf.github.io/curly-barnacle
```

Do not enable or publish GitHub Pages until the placeholders in `app/data/site.ts` have been replaced.

## Agent workflow

This repository is optimized for small, verifiable agent tasks:

1. Read `CONTEXT.md` and `AGENTS.md`.
2. Make the smallest change that satisfies the request.
3. Run the relevant verification commands.
4. Report changed files and command results.
5. Do not commit, push, or deploy unless explicitly asked.
