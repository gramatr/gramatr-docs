# gramatr-docs

Public documentation for [grāmatr](https://gramatr.com) — real-time intelligent context engineering. Lives at [docs.gramatr.com](https://docs.gramatr.com).

Built on [Astro Starlight](https://starlight.astro.build).

## Status

**Skeleton.** The sidebar structure is in place but most pages are placeholders. Content gets filled in via the gramatr coding agent — see open issues for content briefs.

## Local development

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

## Deploy

This is a Cloudflare Pages project (`gramatr-docs`) hosted at docs.gramatr.com. Pages auto-deploys from this repo's `main` branch.

## Content authoring

Pages are Markdown / MDX files under `src/content/docs/`. The sidebar is configured in `astro.config.mjs`.

Brand tokens (`--sl-color-accent`, wordmark face) are in `src/styles/brand.css` — kept in sync with [gramatr-ai-website](https://github.com/gramatr/gramatr-ai-website)'s `src/styles/global.css` by hand for now. If those tokens change there, update them here too.

Wrap inline grāmatr mentions in `<span class="brand">grāmatr</span>` to get the Outfit-typeface treatment in body copy.

## Related

- [gramatr.com marketing site](https://gramatr.com) ([repo](https://github.com/gramatr/gramatr-ai-website))
- [gramatr platform](https://github.com/gramatr/gramatr) — server-side, not public docs
