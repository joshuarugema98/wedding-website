# Wedding website

A minimal React + TypeScript website built with Vite, ready for your wedding information.

## Getting started

Use Node.js 24 LTS or a compatible newer release, with npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Changes in `src/` reload automatically.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Check TypeScript and build production files into `dist/` |
| `npm run lint` | Run Oxlint, including React hooks rules |
| `npm run preview` | Preview the production build locally |

## Customize

- `src/App.tsx`: starter wedding content and information sections.
- `src/App.css`: page layout and styles.
- `src/index.css`: global styles.
- `index.html`: page title and description.
- `public/`: static assets served directly, such as wedding photos.

React and React DOM are the runtime dependencies. Vite, TypeScript, the React
plugin, type definitions, and Oxlint provide the development tooling. TypeScript
strict mode is enabled.

Date, venue, schedule, travel, and RSVP content are placeholders. The starter
does not collect RSVPs yet.

For a fresh checkout, use `npm ci` to install the versions in `package-lock.json`.
The generated `dist/` directory can be deployed to a static website host.

Vite reference: https://vite.dev/guide/
