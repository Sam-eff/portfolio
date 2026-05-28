# Samuel Effiong Portfolio

Production Vite/React portfolio configured for Cloudflare Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Checks

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20.19.0` or newer
- Root directory: leave blank. This GitHub repository already uses the frontend folder as its root.

The `public/_redirects` file handles SPA deep links like `/about` and `/portfolio`.
The `public/_headers` file adds basic security headers and cache rules.

## Environment Variables

Copy `.env.example` and set the values in Cloudflare Pages:

```bash
VITE_SITE_URL=https://sameffiong.pages.dev
VITE_API_BASE_URL=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Use your Cloudflare Pages default domain for `VITE_SITE_URL` until you add a custom domain.
