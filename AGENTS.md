# Repository Guidelines

## Project Structure & Module Organization

This Astro portfolio keeps route files in `src/pages/` for `/`, `/work`, `/resume`, and `/contact`. Reusable UI and layout components live in `src/components/`, shared helpers in `src/lib/`, and TypeScript models in `src/types/`. Portfolio copy is centralized in `src/data/portfolio.ts`, while the contact form action and Google Sheets integration live in `src/actions/index.ts` and `src/lib/google-sheets.ts`. Use `public/` for static assets such as icons and downloadable files.

## Build, Test, and Development Commands

- `pnpm install` — install dependencies for Node 18+ and pnpm 10+.
- `pnpm dev` — start the Astro dev server on `http://localhost:4321`.
- `pnpm build` — create the production bundle in `dist/`.
- `pnpm preview` — serve the built site locally for final checks.
- `pnpm lint` / `pnpm lint:fix` — run or auto-fix `oxlint` issues.
- `pnpm fmt` / `pnpm fmt:check` — format or verify formatting with `oxfmt`.

## Coding Style & Naming Conventions

Follow the existing TypeScript-first style: 2-space indentation, ESM imports, double quotes, and semicolons. Keep Astro component filenames in kebab-case such as `section-title.astro` and `root-layout.astro`; use descriptive module names like `google-sheets.ts`. Prefer shared helpers over page-local duplication, and keep editable portfolio content in `src/data/portfolio.ts`.

## Testing Guidelines

There is no dedicated automated validations. Treat `pnpm fmt:check`, `pnpm lint`, and `pnpm build` as the baseline validation set before opening a PR. For contact-form changes, verify required Google Sheets environment variables and manually verify a submission in local preview.

## Commit & Pull Request Guidelines

Match the repository’s history with short, imperative commit subjects such as `Refine contact form validation` or `Update README for Vercel deployment`. Keep commits focused on one change. Pull requests should summarize the user-facing impact, list validation commands run, link related issues, include screenshots for visual updates, and call out any new environment variables or deployment steps.
