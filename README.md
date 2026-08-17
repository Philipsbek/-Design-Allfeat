# Allfeat — Design Study (Astro)

A faithful front-end recreation of the [allfeat.org](https://allfeat.org) landing page,
built with [Astro](https://astro.build) as a design study.

> **Note:** This is an independent, non-affiliated design study. All body copy is
> original/generated and the illustrations are original SVG artwork created in the
> style of the reference site — Allfeat's proprietary imagery is **not** redistributed.

## What it replicates

- **Design system** — the "backstage monitor at midnight" palette: warm cream
  (`#fffbeb`) on charcoal (`#151515`), Signal Teal (`#00b18c`) as the only action
  color, Ember Coral (`#ff4a5f`) for atmosphere.
- **Typography** — the TASA Orbiter variable typeface, 900px pill controls,
  12px-radius inset-border cards.
- **Motion** — scroll reveals (`cardIn`), the sticky-stacked "staircase" stat
  section, parallax illustrations, an infinite use-case marquee, and the
  counter-rotating orbital hero, all using the reference site's easing curves.

## Sections

Nav · Hero / Our Solution · Prelude · Why (staircase stats) · Stairway (tabbed) ·
Use-case marquee · Build / Share · Orbital "Music, better with you" · FAQ · Footer

## Getting started

```bash
npm install
npm run dev      # http://localhost:4330
npm run build    # static build to ./dist
npm run preview  # preview the production build
```

## Stack

- Astro 4 (static output)
- Zero UI dependencies — hand-written CSS + inline SVG
- Vanilla JS for scroll reveals, parallax, tabs, and the FAQ accordion

## Structure

```
src/
  layouts/Layout.astro        # <head>, fonts, global scripts
  components/
    Nav.astro  Hero.astro  Prelude.astro  WhyStats.astro
    Stairway.astro  Marquee.astro  BuildShare.astro
    Orbital.astro  Faq.astro  Footer.astro
  pages/index.astro
  styles/global.css           # design tokens + primitives
public/fonts/                  # TASA Orbiter (variable woff2)
```
