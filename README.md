# Portfolio Website

This repository contains a personal portfolio built with Next.js (App Router), Tailwind CSS and Framer Motion. It is a statically exported site (see `next.config.mjs: output: 'export'`), so production hosts serve the pre-rendered `out/` directory.

## What this repo contains

- Personal portfolio pages: Home, About, Portfolio, Contact, Resume.
- Framer Motion animations and scroll-driven portfolio carousel.
- Tailwind CSS for utility-first styling.
- Static export configuration so the site can be deployed as static files.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The dev server supports fast refresh so edits update immediately.

## Production build & static export

This project is configured for static export. Build and export with:

```bash
npm run build
# this will generate the static `out/` directory
```

You can serve `out/` locally for a production-like test. Use a static server that does not rewrite unknown routes to index (no SPA fallback):

```bash
npx http-server out -p 5000
# or
npx serve out -l 5000    # do NOT use `serve -s` because `-s` forces SPA fallback rewrites
```

Open http://localhost:5000/portfolio.html and http://localhost:5000/contact.html to verify pages.

## Deploying to Heroku (static export)

If you deploy on Heroku (or any static host that serves a folder), ensure the server serves files as-is (no SPA rewrite). Example `Procfile` for Heroku that works with static export:

```
web: npx http-server out -p $PORT
```

Avoid `serve -s out` because `-s` rewrites requests (e.g. `/portfolio.html` → `/portfolio`) and may return your index page for every route, which makes links open the homepage instead of the intended static `.html` files.

## Notes & troubleshooting

- Static export: routes are generated as `.html` files (e.g. `out/portfolio.html`). Links in production should point to `.html` or the static server must support rewrites.
- If you see the old site on Heroku after pushing, make sure you pushed the correct branch to the Heroku remote, for example:

```bash
git push heroku khussaldev:main
```

- For mobile clickability issues, ensure overlays use `pointer-events: none` where appropriate and the navbar has a higher z-index than page content.

## Tech stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion

