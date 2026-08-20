# Fam Jam Redesign Intent And Agent Evaluation

## Purpose

This document captures the owner intent for the Fam Jam Events redesign and gives another agent a structured set of questions and checks to evaluate whether the current implementation is moving in the right direction.

The site should not feel like a generic event vendor template. It should feel organic, handmade, personal, cool, and specific to Fam Jam.

## Current Project Context

- Main repo: `C:\Users\alexa\Downloads\famjam-deploy`
- Local preview: `http://127.0.0.1:4321/`
- Framework: Astro static site
- Main homepage files:
  - `src/pages/index.astro`
  - `src/components/Hero.astro`
  - `src/components/FeatureBoard.astro`
  - `src/components/Nav.astro`
  - `src/components/Footer.astro`
  - `src/styles/global.css`
- New deep-dive route:
  - `src/pages/music.astro`
- Primary brand reference:
  - Fam Jam business card/logo: warm cream paper, black distressed ink, muted teal, tape, palm, rough collage proportions
- Primary Oasis image for The Space card:
  - `public/images/oasis/pool-dusk.avif`

## Core Intent

The homepage should be a simple introduction to three big Fam Jam pillars:

1. The Space
   - Backyard venue / The Oasis
   - Should use `pool-dusk.avif` as the primary visual
   - Should link to `https://oasis.famjamevents.com`

2. The Music
   - DJ / real DJ set
   - Should link to `/music`

3. The Photo Booth
   - DSLR photo booth
   - Should link to `/booth`

The homepage should not try to include every previous section. It should act like a clear front door into the three pillars. The deeper service explanation should live on the pillar pages.

## Non-Negotiables

- The main headline under Fam Jam Events must always be:
  - `Family Parties Done Right`
- The visual language should match the new logo/business-card direction:
  - cream/tan paper
  - distressed black type
  - muted teal
  - masking tape
  - pink accent for contrast/CTA
  - homemade cut-paper/collage feel
- Important text must remain real HTML, not flattened image text.
- The design should feel handmade and intentional, not like generic HTML with texture pasted on top.
- The card system should feel consistent:
  - same paper logic
  - same cut style
  - tape should appear to attach actual paper
  - no random tape scraps floating without purpose
- The first page should be streamlined:
  - hero
  - three-pillar bulletin board
  - CTA
  - footer
- The experience should clearly explain how Fam Jam is different:
  - built around family parties
  - real DJ sets, not playlists
  - actual DSLR photo booth keepsakes
  - optional backyard venue
  - personal, flexible, not canned event-vendor energy

## Things The Owner Has Rejected Or Questioned

- Generic/polished/glossy/pastel event-site design
- Inconsistent boxes around text
- A mix of torn scraps, square boxes, and unrelated cutouts that do not feel like one system
- Sloppy tear effects where other paper elements look clean-cut
- Random tape in the middle of the board with no reason to exist
- A corkboard background when tape is doing the holding
- Overloading the homepage with all old content and sections
- Clunky embedded images used as design shortcuts
- Important text rendered as images instead of accessible HTML

## Desired Homepage UX

The user should understand this within 5 seconds:

- This is Fam Jam Events.
- The brand promise is `Family Parties Done Right`.
- There are three ways to engage:
  - The Space
  - The Music
  - The Photo Booth
- Each card is clickable and leads to more focused information.

The homepage should feel like a bulletin board or handmade party-planning board, not a long corporate service page.

## Booking Page Intent

`/book/` should be a new native page in the redesigned Fam Jam format. It should not use the old HoneyBook experience, a HoneyBook embed, or a HoneyBook redirect.

The booking page should use Netlify Forms for the intake. Required fields should include:

- name
- email
- phone
- event date
- hours
- occasion
- details
- services interested in
- number of people

The page should explain the two booking paths clearly:

- The Oasis space itself is booked through Swimply for insurance and liability.
- DJ, photo booth, vendor planning, and event experience help start through the Fam Jam Netlify intake form.

The booking page should visually match the handmade redesign system: teal paper background, cream paper scraps, tape, organic cut edges, readable HTML text, and clear CTA hierarchy.

## Evaluation Questions

Use these questions to evaluate the current implementation.

### First Impression

1. Does the page immediately feel like the Fam Jam logo/business-card brand?
2. Does it feel handmade, organic, and personal?
3. Does it avoid looking like a generic event vendor template?
4. Is the first screen using space well on desktop, tablet, and mobile?
5. Does the hero feel intentional rather than sparse or overbuilt?

### Message Clarity

1. Is `Family Parties Done Right` the clear main promise?
2. Can a visitor identify the three pillars without scrolling too far?
3. Do the labels `The Space`, `The Music`, and `The Photo Booth` make sense without explanation?
4. Does the copy make Fam Jam feel different from a standard DJ/photo booth vendor?
5. Is there any leftover old copy that distracts from the simplified flow?

### Bulletin Board System

1. Do the hero and board feel like the same visual system?
2. Are paper edges consistent enough to feel intentional?
3. Does tape visually attach paper, or does any tape feel random?
4. Do cards feel handmade without becoming messy?
5. Are shadows, rotations, and cut edges subtle enough to support readability?
6. Are there any rectangular boxes that feel too clean or generic?
7. Are any paper shapes too torn, too jagged, or inconsistent with the rest?

### Three-Pillar Cards

1. Does The Space card use `pool-dusk.avif` as its primary picture?
2. Does the Space card make The Oasis feel like a real venue, not just a text label?
3. Does The Music card clearly communicate "real DJ set, not playlist"?
4. Does The Photo Booth card clearly communicate real photos, prints, and keepsakes?
5. Are the cards visually equal in importance?
6. Are the click targets obvious?
7. Do the CTA labels feel clear and consistent?

### Responsive Behavior

1. On wide desktop, does the hero use horizontal space well?
2. On desktop, does the board feel like a board rather than a vertical list?
3. On mobile, does the hero stack cleanly?
4. On mobile, do headline and card texts wrap without clipping?
5. Is there any horizontal scroll at 390px, 430px, 768px, 1024px, 1440px, or 1920px?

### Accessibility And Content Quality

1. Is important copy readable as HTML text?
2. Are image alt attributes accurate?
3. Is text contrast sufficient on paper and teal backgrounds?
4. Are fonts expressive without making body copy hard to read?
5. Can keyboard users tab through links and CTAs logically?
6. Does the page have a sensible heading order?

### Technical Fit

1. Is Astro still serving the goal well?
2. Are reusable components emerging instead of one-off layout hacks?
3. Are large images and textures becoming a performance risk?
4. Should assets move from raw `public/images` paths into Astro's image pipeline?
5. Are any generated image assets being used where CSS/HTML would be better?

## Required Checks For Another Agent

Run these checks before giving feedback.

### Build Check

```powershell
npm run build
```

Expected:

- Build succeeds.
- `/`, `/music/`, `/booth/`, `/services/`, and `/book/` are generated.

### Local Route Checks

```powershell
curl.exe -I http://127.0.0.1:4321/
curl.exe -I http://127.0.0.1:4321/music/
curl.exe -I http://127.0.0.1:4321/booth/
curl.exe -I http://127.0.0.1:4321/images/oasis/pool-dusk.avif
```

Expected:

- All return `200 OK`.

### Visual Viewport Checks

Capture or inspect these widths:

- 390px mobile
- 430px mobile
- 768px tablet
- 1024px small desktop
- 1440px desktop
- 1920px wide desktop

Check:

- no horizontal overflow
- no clipped headlines
- no clipped CTAs
- no unreadable card copy
- wide desktop does not waste space
- mobile stays clean and stacked

### Link Checks

Verify:

- `The Space` links to `https://oasis.famjamevents.com`
- `The Music` links to `/music`
- `The Photo Booth` links to `/booth`
- `Packages` links to `/services`
- `Book Now` links to `/book`
- `Pick Your Piece` scrolls to `#party-board`
- `/book/` is a native Fam Jam page, not HoneyBook
- `/book/` contains a Netlify form named `fam-jam-intake`
- `/book/` explains that The Oasis books through Swimply while DJ/photo booth/vendor planning uses the intake

### Asset Checks

Verify these load:

- `/images/brand-craft/famjam-business-card-logo.png`
- `/images/brand-craft/paper-texture.png`
- `/images/brand-craft/tape-scraps.png`
- `/images/brand-craft/teal-construction-paper.png`
- `/images/oasis/pool-dusk.avif`
- `/images/dj-action-2.jpg`
- `/images/Photobooth-4.jpg`

### Console Check

Open the page in browser devtools and verify:

- no missing image errors
- no JavaScript errors
- no failed internal links

## Evaluation Output Format

Another agent should report findings in this format:

```md
# Fam Jam Redesign Evaluation

## Overall Verdict
PASS / NEEDS WORK

## What Is Working
- ...

## Highest Priority Issues
1. [Severity] Issue
   - Evidence:
   - Suggested fix:

## Design Fit Score
- Brand fit: 1-5
- Homepage clarity: 1-5
- Handmade/craft feel: 1-5
- Responsiveness: 1-5
- Technical cleanliness: 1-5

## Specific Answers To Owner Intent
- Does the homepage clearly communicate the three pillars?
- Does it feel organic and unique?
- Does it avoid generic template energy?
- Does it avoid clunky embedded-image design?
- Does it preserve readability?

## Recommended Next Changes
1. ...
2. ...
3. ...
```

## Current Working Hypothesis

Astro is still a good fit for this project. The priority is not switching frameworks. The priority is building a stronger Fam Jam craft design system and using Astro's strengths:

- real HTML copy
- reusable components
- fast static pages
- deep-dive routes per pillar
- eventually optimized image handling

The site should become more personalized through systemized handmade components, not through more flattened graphic exports.
