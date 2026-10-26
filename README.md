# Lalit Gaikwad — Premium React Portfolio

A responsive React + TypeScript portfolio built with Vite, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Customize before publishing

- Update the experience metrics in `src/App.tsx` to ensure they accurately reflect your experience and measured impact.
- Replace the LinkedIn URL with your actual profile URL.
- Add project-specific demo and repository links where available.
- Add a resume PDF under `public/` and wire a download button if desired.
- Review project descriptions and stack labels for accuracy.

## Deploy

- **Vercel:** Import the GitHub repository; framework preset Vite, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** Configure the repository Pages workflow to build with `npm run build` and publish `dist`. If deploying under a repository subpath, set the appropriate `base` in `vite.config.ts`.
