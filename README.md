# 99x Engineering Excellence Framework — Website

A lightweight React site (Create React App) used to present the 99x Engineering Excellence Framework and detailed practice pages.

This repository contains a site shell in `src/` and a set of static practice pages under `public/practices/` that are served directly by the web server.

Why this repo exists

- Present the Engineering Excellence Framework in a simple, fast website.
- Provide dedicated documentation pages for each engineering practice without requiring a heavier routing setup.

Quick stats

- Many static practice pages were created under `public/practices/`.
- An illustrative framework image (`public/framework.jpg`) and an inline logo (`public/99xlogo.svg`) were added.

Table of Contents

- What’s included
- Quickstart
- Project structure
- Notable changes made
- Suggestions & next steps
- License / Contact

What’s included

- `public/` — static assets and practice pages
  - `public/practices/*.html` — static HTML pages for each practice
  - `framework.jpg` — illustrative image used on the site
  - `99xlogo.svg` — inline logo
- `src/` — small React app used as the primary site shell
  - `src/App.js` — main UI; practice cards now link to static pages
  - `src/App.css` — styles
- `package.json` — scripts and dependencies (use `npm start` to run)

Legendary Quickstart

1. Install dependencies

   ```bash
   npm install
   ```

2. Start dev server

   ```bash
   npm start
   ```

3. Open http://localhost:3000

Build for production

```bash
npm run build
```

Project structure (short)

- `public/index.html` — app shell
- `public/practices/` — per-practice static pages created during this session
- `src/App.js` — main UI and list of practice cards
- `src/App.css` — styles

Notable changes made in this branch

- Created many practice pages (see `public/practices/`), for example:
  - `version-control.html`, `work-in-small-batches.html`, `limit-work-in-progress.html`, `continuous-integration.html`, `test-automation.html`, `test-data-management.html`, `deployment-automation.html`, `shift-left-on-quality.html`, `shift-left-security-privacy.html`, `lightweight-change-approval.html`, `proactive-notification-build-deploy.html`, `monitoring-and-feedback-production.html`, `visual-management-production-build-deployment.html`, `empowered-teams.html`, `team-experimentation.html`, `training-and-development.html`, `continuous-delivery.html`, `trunk-based-development.html`, and more.
- Updated `src/App.js` to convert practice card elements into anchor links to these static pages.
- Added `public/framework.jpg` and `public/99xlogo.svg`.

Design notes and rationale

- Static HTML pages keep the content straightforward and easy to edit without adding client-side routing.
- This is a pragmatic approach for documentation-style sites where each page is self-contained.

Suggestions & next steps

- Optionally migrate practice pages to React routes if you want single-page navigation and history support.
- Run `npm audit` and `npm audit fix` to inspect and fix npm security findings.
- Add a small automated test or a GitHub Action to lint and build on PRs.

How I pushed these changes

- The local changes were committed and pushed to `https://github.com/DisanduP/99x-Engineering-Excellence-Framework-Website-Final.git` on branch `master`.

License / Contact

- © 2025 99x Engineering Excellence Framework
- If you want further edits, tell me which pages or content to add and I’ll create/update them.
