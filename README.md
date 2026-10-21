# Portfolio (Next.js + TypeScript + Tailwind)

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build && npm start
```

## Make it yours
1. Edit `src/data/content.ts`: name, copy, projects, stack, experience and the code snippets in the inspector.
2. Put your CV at `public/cv.pdf`.
3. Replace each `#` link with your real live and repo URLs.
4. Deploy: push to GitHub and import the repo in Vercel.

## Notes
- Colours are CSS variables in `src/app/globals.css` (light and dark).
- Snippets use a tiny built-in highlighter. For richer highlighting and type tooltips, swap in Shiki.
- Add `/work/[slug]` routes for full case studies when you are ready.
