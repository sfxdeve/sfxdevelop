# sfxdevelops

Personal portfolio website built with Astro, TypeScript, Tailwind CSS v4, and GSAP.

## Overview

This project includes:

- A landing page with positioning, trust signals, and featured experience
- A work page with a full delivery timeline
- A resume page with skills, languages, and education
- A contact page with direct links and a project inquiry form

Most portfolio content is centralized in `src/data/portfolio.ts`.

## Tech Stack

- Astro 6
- TypeScript
- Tailwind CSS 4 via `@tailwindcss/vite`
- GSAP for page and scroll-triggered animations
- Vercel adapter via `@astrojs/vercel`
- Utility tooling: `oxlint` and `oxfmt`

## Routes

- `/` -> landing page
- `/work` -> work history
- `/resume` -> technical profile
- `/contact` -> contact details and inquiry form

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Install

```sh
pnpm install
```

### Run locally

```sh
pnpm dev
```

The local dev server runs at `http://localhost:4321`.

### Build for production

```sh
pnpm build
pnpm preview
```

## Scripts

| Command          | Description              |
| :--------------- | :----------------------- |
| `pnpm dev`       | Start local dev server   |
| `pnpm build`     | Build production output  |
| `pnpm preview`   | Preview production build |
| `pnpm lint`      | Run `oxlint`             |
| `pnpm lint:fix`  | Auto-fix lint issues     |
| `pnpm fmt`       | Format code with `oxfmt` |
| `pnpm fmt:check` | Check formatting         |

## Content Updates

Update `src/data/portfolio.ts` to change:

- Profile summary and contact details
- Featured and full experience entries
- Brand positioning and focus areas
- Skill groups, education, and languages

## Deployment

The site is configured with the Vercel adapter in `astro.config.mjs`.

The contact page currently contains a static HTML form UI. If you want form submissions to work on Vercel, add a server-side form handler or a third-party form backend. The existing `data-netlify="true"` attribute is not enough on its own when deploying to Vercel.
