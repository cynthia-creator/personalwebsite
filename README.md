# Cynthia Creator

A personal portfolio website built to showcase my creative work, projects, services, and contact details in a modern and polished online presence.

This portfolio combines a desktop profile layout with a mobile app-inspired interface so it feels premium across devices.

## Stack

- Vite 6
- React 19
- TypeScript
- CSS custom properties
- Three.js
- GSAP
- Lenis
- React Router 7
- Phosphor icons

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run lint       # ESLint with TypeScript and React hooks rules
```

## Customize your portfolio

Edit the content in the following files to make the site your own:

| What | Where |
|---|---|
| Name, bio, socials, stats, headline, and contact details | `src/data/profile.ts` |
| Projects and featured work | `src/data/projects.ts` |
| Tools and technologies | `src/data/ai-stack.ts` |
| FAQs | `src/data/faqs.ts` |
| Featured funnels and website samples | `src/data/funnels.ts` |
| Page copy and section text | `src/components/` |
| Design colors and theme tokens | `src/styles/tokens.css` |
| Profile image | `public/avatar.svg` |
| SEO metadata and favicon | `index.html`, `public/favicon.svg` |

## Notes

- The layout is designed to feel personal, premium, and easy to scale as my portfolio grows.
- The site includes both desktop and mobile layouts, with the mobile app experience activated at smaller breakpoints.
- Any new content added above the fold should be considered in relation to the intro animation and motion design.

## Contact

Use the contact links and form inside the site to connect with me about projects, collaborations, or freelance work.

## License

This project is for my personal portfolio use and is not intended for resale or reuse as a template for other people.
