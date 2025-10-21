# 99x Engineering Excellence Framework — Legendary README

![status](https://img.shields.io/badge/status-complete-brightgreen) ![license](https://img.shields.io/badge/license-proprietary-blue)

A beautifully simple website that documents the 99x Engineering Excellence Framework. This repository contains a minimal React app (Create React App) used as a shell and a collection of static, content-rich practice pages served from `public/practices/`.

Why this repo is legendary

- Crisp, focused content: each engineering practice gets its own static page for easy reading and sharing.
- Minimal dependencies: static pages avoid a heavier routing or CMS setup.
- Instant previews: open local dev server or browse static pages directly in `public/practices/`.

Legendary Quickstart (TL;DR)

1. Install

   ```bash
   npm install
   ```

2. Run locally

   ```bash
   npm start
   ```

3. Build for production

   ```bash
   npm run build
   ```

Structure at a glance

- `public/`
  - `practices/` — standalone HTML pages (e.g., `version-control.html`)
  - `framework.jpg` — visual used across pages
  - `99xlogo.svg` — inline logo used in the header
- `src/`
  - `App.js` — site shell and list of practice cards
  - `App.css` — styles
- `package.json` — scripts and dependencies

What we changed in this fork

- Added practice pages for many engineering practices and linked them from the main site.
- Replaced lifecycle cards with an illustrative `framework.jpg`.
- Added interactive UI polish (particle hover effects, ripple on clicks, hue accent animation).
- Converted dozens of practice entries into anchor links that point to `public/practices/*.html` files.

How the practice pages are organized

Each page in `public/practices/` is a simple, self-contained HTML document that includes:

- A short overview
- Key aspects
- Risks (with IDs)
- PHR Guidelines / Work Instructions

Contributing

This repo is maintained in `master`. To add or update practice pages:

1. Create or edit `public/practices/<your-practice>.html`.
2. Update `src/App.js` to add an anchor link to the practice card section.
3. Commit and push. Open a PR if you want code review.

Pro tip: keep practice pages self-contained and use consistent heading levels for readability.

Deployment

This is a static-friendly site. You can deploy the `build/` folder to GitHub Pages, Netlify, Vercel, or any static host.

Security note

Run `npm audit` to inspect reported vulnerabilities and `npm audit fix` to apply safe updates.

Changelog (session highlights)

- Many static practice pages added (see `public/practices/`).
- `public/framework.jpg` and `public/99xlogo.svg` added.
- `src/App.js` updated to link to many practice pages.

Credits

Prepared in-session via automated edits and manually curated content.

© 2025 99x Engineering Excellence Framework
