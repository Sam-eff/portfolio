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
- Root directory: `frontend` if Cloudflare is connected to the repository root

The `public/_redirects` file handles SPA deep links like `/about` and `/portfolio`.
The `public/_headers` file adds basic security headers and cache rules.

## Environment Variables

Copy `.env.example` and set the values in Cloudflare Pages:

```bash
VITE_SITE_URL=https://samueleffiong.com
VITE_API_BASE_URL=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```
