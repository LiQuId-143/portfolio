# LiQuId — Portfolio

Exact HTML mirror of the Framer portfolio at
https://stale-assistant-536643-b4b367fe9.framer.app/

Pages:
- `index.html` — home
- `about.html` — about
- `projects.html` — projects index
- `projects/shopease-redesign-sprint.html`
- `projects/summer-vibes-festival-campaign.html`

All assets (fonts, images, bundled JS) are served from Framer's CDN, so the
site is a single-file-per-page static copy with the original look,
typography, and animations intact.

## Serve locally

```
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy

Works on GitHub Pages, Netlify, Vercel — no build step.
