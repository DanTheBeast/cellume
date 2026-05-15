# LED Therapy Map

A personal LED light therapy session tracker with a body/hand/face heatmap overlay. Built with React + Vite.

## What it does

Track Hooga Torch, Celluma POD, Celluma PRO, and TheraFace Glow sessions across body, hands, and face panels. Each session decays exponentially over 72 hours so you can see at a glance which areas have been recently treated and which are ready for another round.

Sessions are saved locally in your browser (localStorage) — no account or backend required.

## Local development

Requires **Node.js 18 or newer**. Check with `node --version`. If you need to install it, grab the LTS version from [nodejs.org](https://nodejs.org/).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (auto-opens at http://localhost:5173)
npm run dev

# 3. When you're ready to publish, build the production bundle
npm run build
```

After `npm run build` you'll have a `dist/` folder containing static HTML/JS/CSS. That folder is the deployable app — upload it anywhere that serves static files.

## Deploying

### Easiest options (free, no server setup):

**Vercel** — drag-and-drop the `dist/` folder onto [vercel.com/new](https://vercel.com/new), or connect a GitHub repo for automatic redeploys on git push.

**Netlify** — drag-and-drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Same git integration available.

**GitHub Pages** — push the project to a GitHub repo, then either configure Actions to build/deploy or push the `dist/` folder to a `gh-pages` branch. Note: GitHub Pages serves at a sub-path like `username.github.io/celluma-tracker/`, which works fine because we set `base: './'` in `vite.config.js`.

### To preview the production build locally before deploying:

```bash
npm run preview
```

## Notes about the app

- **Data persistence:** Sessions live in `localStorage` under the key `celluma-v18`. They persist across browser sessions on the same device, but do NOT sync across devices (your phone Safari and laptop Chrome see different data). Cross-device sync would require adding a backend.
- **Clearing cache:** If a user clears their browser data, all sessions are lost. There's no automatic backup.
- **Storage limit:** `localStorage` typically allows ~5MB per origin, which is hundreds of thousands of sessions — won't be an issue in normal use.
- **Mobile-friendly:** Designed primarily for phone use with touch support throughout.
- **Bundle size:** ~140KB of JS/CSS plus inline base64 images for the body, hand, ear, nose, and mouth diagrams.

## Customization knobs

Most of the things you'd want to tweak are constants near the top of `src/App.jsx`:

- `FADE_HOURS` and `HALF_LIFE_HOURS` — how quickly sessions fade
- `HEAT_BANDS` — the three color tiers (peach, coral, raspberry) and their J/cm² thresholds
- `SATURATION_JOULES` — when the color hits its highest band
- `DEVICES` — device definitions (dimensions, dose per session, etc.)
- `DEVICE_VIEW_SCALES` — per-device sizing on hand and face panels

## File structure

```
celluma-tracker/
├── index.html              HTML entry, sets viewport/theme color
├── package.json            Dependencies & npm scripts
├── vite.config.js          Vite build config
├── src/
│   ├── main.jsx            Mounts React into the page
│   └── App.jsx             The entire app (single file, all components)
└── README.md               This file
```

## License

Personal-use project. Not for redistribution.
