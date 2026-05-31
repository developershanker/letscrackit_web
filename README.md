# Let's Crack It — Web

A responsive one-page landing site for **Let's Crack It**, the AI health &
fitness app. Built with **Next.js 14** (App Router) + **Tailwind CSS**.

> Made for Healthy India ❤️

## Features

- Fully responsive (mobile → desktop) one-pager
- Dark navy + gold theme matching the app
- CSS-recreated phone mockup of the app home screen (no image assets needed)
- Scroll-reveal animations, accessible & reduced-motion aware
- One-click **APK download** button wired to a configurable URL

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Configuring the APK download

The download buttons trigger a download of the APK at `NEXT_PUBLIC_APK_URL`.

1. Copy `.env.example` to `.env.local`
2. Set your AWS S3 / CloudFront URL:

   ```
   NEXT_PUBLIC_APK_URL=https://your-bucket.s3.amazonaws.com/letscrackit-latest.apk
   ```

If unset, it falls back to `/downloads/letscrackit-latest.apk` (see
`public/downloads/README.md`).

Optional cosmetic env vars: `NEXT_PUBLIC_APP_VERSION`, `NEXT_PUBLIC_APK_SIZE`.

## Project structure

```
app/            App Router pages, layout, global styles
components/     UI components (PhoneMockup, DownloadButton, Icons, Reveal)
lib/config.ts   App constants + APK URL configuration
public/         Static assets + APK fallback folder
```

## Deploying

Works on any Next.js host (Vercel, Netlify, AWS Amplify, etc.). Remember to set
`NEXT_PUBLIC_APK_URL` in your host's environment variables.
