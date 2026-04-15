# LiQuId — Portfolio (static extract)

Static copy of Romanenkov Kirill's portfolio, extracted from the rendered
Framer site via Playwright. All assets are local; no Framer dependencies or
branding remain.

## Structure

```
/
├── index.html
├── about.html
├── projects.html
├── projects/
│   ├── appss.html
│   └── creative-posts.html
├── assets/
│   ├── fonts/        # woff2 files
│   └── images/       # png/jpg/svg
└── js/               # runtime modules
```

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/

## Deploy

Drop the folder into GitHub Pages, Netlify, or Vercel. No build step.

## How it was generated

1. Playwright renders each page with a headless Chromium
2. All asset responses are intercepted and saved to `/assets`, `/js`
3. The fully-hydrated HTML is snapshotted
4. All `framer.com` / `framerusercontent.com` URLs are rewritten to local paths
5. "Made in Framer" badge and edit links are stripped
6. Any residual Framer URLs are replaced with `#`
