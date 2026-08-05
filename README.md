# Marco Akl — Portfolio

Personal portfolio site built with React + Vite. Showcases projects, skills,
and contact info.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployed on [Netlify](https://www.netlify.com/), configured via
[`netlify.toml`](./netlify.toml):

- Build command: `npm run build`
- Publish directory: `dist`

Connect this repo in the Netlify dashboard ("Add new site" → "Import an
existing project") and it will pick up those settings automatically.

## Editing content

- `src/data/projects.js` — project cards
- `src/data/skills.js` — skills lists
- `src/components/` — page sections (Hero, About, Skills, Projects, Contact)
