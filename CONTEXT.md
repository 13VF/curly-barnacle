# Project context

## Goal

Create a minimal bilingual personal site while practicing agent-driven development with explicit scope, small changes, and repeatable verification.

## Locked decisions

### Product

- Personal single-page site
- Russian is the primary language
- English is also supported
- One page per language: `/` and `/en/`
- Continuous scroll without navigation
- Sections: identity, current role, interests, contacts
- Explicit `TODO` placeholders until real personal content is supplied

### Technology

- Node.js `>=24.15.0` (`24.20.0` pinned)
- Nuxt 4
- Vue 3
- Static generation
- npm
- TypeScript strict mode
- Plain CSS
- No Tailwind, UI library, i18n module, CMS, or animation library

### Design

- Terminal-inspired but not a terminal simulation
- Dark-only palette suitable for night viewing
- Soft mint accent
- System monospace font
- Text-only command styling and links
- No typing animation, scanlines, glow effects, or terminal window chrome

### Quality

- Prettier formatting check
- ESLint
- Nuxt type checking
- Static generation as the build gate

### Deployment

- GitHub Pages
- GitHub Actions workflow
- Base path `/curly-barnacle/`
- Expected URL: `https://13vf.github.io/curly-barnacle/`
- No push or deployment without explicit approval

## Current open task

Replace every `TODO` in `app/data/site.ts` with owner-approved bilingual personal content before public deployment.
