## Portfolio: Naduni Katuwandeniya — Fashion Designer

A personal brand portfolio with a soft, romantic Cherry Blossom palette, DM Serif Display headings paired with Fira Sans body, and a masonry-led visual gallery.

### Pages (TanStack Start routes)
- `/` — Home: hero with name + tagline, signature masonry collage of looks, featured collection teaser, footer CTA
- `/collections` — Index of all collections (masonry grid of collection covers)
- `/collections/$slug` — Individual collection: title, season, concept paragraph, masonry of looks
- `/runway` — Runway shows: large image/video stills, show titles, dates, venues
- `/about` — Bio, designer photo, philosophy, training/experience, press logos
- `/contact` — Email, social links, inquiry form (frontend-only mailto for now)

Each route gets its own `head()` with unique title, description, og:title/description. Leaf routes (collection detail) include og:image from cover.

### Visual system (`src/styles.css`)
- Palette tokens (oklch): blush `#fef0f5` background, soft pink `#f8c8d8` surface, rose `#e88aab` accent, deep rose `#c45c7c` primary, ink `#2b1a22` foreground
- Gradients: `--gradient-petal` (blush → soft pink), `--gradient-rose` (rose → deep rose)
- Shadows: `--shadow-soft` (low diffuse rose-tinted)
- Fonts loaded via `<link>` in `__root.tsx` head: DM Serif Display + Fira Sans
- `@theme`: `--font-display: "DM Serif Display"`, `--font-sans: "Fira Sans"`
- Generous whitespace, large serif display sizes, light tracking on body

### Components
- `SiteHeader` — minimal nav: wordmark "Naduni Katuwandeniya" left, links right (Collections, Runway, About, Contact)
- `SiteFooter` — credits, socials (Instagram, Email), copyright
- `MasonryGrid` — CSS columns-based masonry for editorial image layouts
- `Hero` — full-bleed name in DM Serif Display, subtitle in Fira Sans, soft petal gradient backdrop
- `CollectionCard`, `LookCard`, `RunwayCard`

### Images
Use `imagegen` to produce editorial fashion photography placeholders (soft pink/romantic styling) for hero, collection covers, runway stills, and about portrait. Stored under `src/assets/`.

### Tech notes
- TanStack Start file-based routes under `src/routes/`
- Tailwind v4: tokens in `src/styles.css`, no hardcoded colors in components
- Mobile-responsive masonry (1 col → 2 col → 3 col)
- No backend needed for this first pass; contact form opens mailto

### Out of scope (this iteration)
- Lovable Cloud / database / auth
- E-commerce / cart
- CMS-driven content (collections are coded with placeholder content)