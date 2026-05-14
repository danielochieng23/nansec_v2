# Nangsec Technologies — site

Marketing site for Nangsec, built with **Node.js**, **Express**, server-rendered **EJS** templates, and **Tailwind CSS v4** (compiled to static CSS).

## Requirements

- Node.js 18+ (uses `node --watch` in dev; older Node can drop `--watch` or use `nodemon`).

## Install

```bash
npm install
```

## Development

Builds Tailwind once, then runs the CSS watcher and the app with file watching:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

Compile CSS and start the server:

```bash
npm start
```

Set `PORT` to override the default port (`3000`):

```bash
PORT=8080 npm start
```

## Useful scripts

| Script        | Description |
|---------------|-------------|
| `npm run dev` | Tailwind watch + Express with `node --watch` |
| `npm run css` | One-off Tailwind build → `public/css/styles.css` |
| `npm run css:watch` | Tailwind watch only |
| `npm start`   | Build CSS then run `server/index.js` |

## Project layout

- `server/` — Express app (`index.js`), route handlers, and data under `server/data/`.
- `views/` — EJS pages and `views/partials/` (layout, nav, footer, hero).
- `tailwind/input.css` — Tailwind entry (`@import "tailwindcss"`, theme tokens, components).
- `public/` — Static assets; generated styles at `public/css/styles.css`, client JS at `public/js/site.js`.

## Fonts

[Google Sans Flex](https://fonts.google.com/) is loaded via `@fontsource-variable/google-sans-flex` in `tailwind/input.css`.
