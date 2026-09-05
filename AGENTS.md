# Agent instructions

## Purpose

This repository contains a bilingual personal site and serves as a compact exercise in agent-driven development.

## Non-negotiable scope

- Static site generation only
- Vue 3 through Nuxt
- One page per language
- Russian at `/`
- English at `/en/`
- No blog, CMS, contact form, analytics, UI framework, animation library, or additional routes without explicit approval

## Architecture

- `app/pages/` contains only route entry points
- `app/components/PersonalPage.vue` renders both languages
- `app/data/site.ts` is the single source of localized content
- `app/assets/css/main.css` contains all styling
- `.github/workflows/deploy.yml` builds and deploys to GitHub Pages

## Content rules

- Personal information must remain explicit `TODO` placeholders until the owner supplies real content
- Do not invent names, employers, contact details, interests, or biographical facts
- Keep phone numbers, physical addresses, photographs, and CV downloads out of the site unless explicitly requested

## Verification

Use Node.js `>=24.15.0`; `.nvmrc` pins `24.20.0`.

Run the narrowest relevant check first. Before considering implementation complete, run:

```bash
npm run verify
```

If dependencies have changed, run `npm install` first.

## Git boundaries

- Stage only specific files
- Do not commit unless explicitly asked
- Do not push or deploy without explicit approval
