# LiQuId — Portfolio

Clean HTML/CSS/JS portfolio for Romanenkov Kirill, Indonesia-based digital designer.

## Pages

- `index.html` — home (hero, services, projects, contact form)
- `about.html` — about & services
- `projects.html` — projects index
- `projects/appss.html` — UI / UX case study
- `projects/creative-posts.html` — Marketing Creatives case study

## Features

- Dark / light theme with sticky toggle that follows scroll (bottom-right)
- Fully responsive (mobile burger nav, stacked grids)
- Scroll-triggered reveal animations (IntersectionObserver)
- Interactive service cards with cursor-tracking spotlight
- Marquee, hover micro-interactions
- Contact form → opens `mailto:` with pre-filled subject & body
- Antonio (display) + Inter (body) typography
- Accent: `#8c29ff`

## Run

```
python3 -m http.server 8000
```

## Deploy

Works on GitHub Pages, Netlify, Vercel — no build step. For GitHub Pages:
Settings → Pages → Source: `main` / root.
