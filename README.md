# Zachary D. Calhoun — Academic Website

A React + Vite single-page site for showcasing research, publications, teaching, and community engagement.

## Getting Started

```bash
npm install
npm run dev
```

The development server will be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev` – start the Vite development server with hot reload.
- `npm run build` – create an optimized production build.
- `npm run preview` – serve the production build locally for verification.
- `npm run lint` – run ESLint using the shared Vite configuration.

## Customize the Content

- `src/App.jsx` contains structured data for navigation, research highlights, publications, courses, mentoring, and contact details. Update or extend the arrays to reflect current work.
- `src/App.css` and `src/index.css` define the design system (colors, spacing, typography). Adjust variables and component classes as needed.
- `public/` can host assets such as a CV (`cv.pdf`) or social preview imagery referenced in the layout and metadata.
- `index.html` includes metadata for SEO and social sharing. Replace placeholder URLs with live links once deployed.

## Deployment

```bash
npm run build
npm run preview
```

Deploy the contents of the `dist/` directory to your preferred static host (e.g., Netlify, Vercel, GitHub Pages).
