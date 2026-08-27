# Noia Software website

Static portfolio site for Noia Software, including HushCalc, FocusFine, Worth the Hours, and the wider app catalog.

## Local preview

Serve the repository root with any static file server and open `index.html`.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages and use:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: repository root

No environment variables are required. Deployments are fully static.

## Structure

- `index.html` — portfolio landing page
- `hushcalc.html`, `focusfine.html`, `worth-the-hours.html` — current product pages
- `data.jsx` — product copy and feature data
- `styles.css` — shared visual system
- `assets/apps/` — product artwork and screenshots
