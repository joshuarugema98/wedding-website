# Joshua & Sandrine

A static, photography-led wedding website for the Gusaba on 18 December 2026 and
wedding ceremony and reception on 20 December 2026 in Kigali, Rwanda.

Built with Next.js App Router, React, strict TypeScript, and Tailwind CSS 4.
Georgia headings pair with Lato, bundled locally through Fontsource. One warm
linen surface and quiet tonal controls give the page a continuous, light feel. There is no
3D rendering, animation, or motion library.

## Development

Use Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Open the address printed by Next.js, normally http://localhost:3000.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Editing

- `src/app/page.tsx`: celebration schedules, guest details, scripture, contacts.
- `src/lib/wedding.ts`: confirmed wedding data, maps, and phone numbers.
- `src/components/our-story.tsx`: the couple's full story, with a short visible opening and a native inline disclosure flowing as continuous paragraphs without chapter headings.
- `src/components/photo-carousel.tsx`: clickable desktop collage with a full-screen lightbox and independent mobile carousel, with translucent edge arrows and keyboard controls.
- `src/lib/photos.ts`: content-hashed static photo imports, descriptions, and collage focal points.
- `src/components/about-us.tsx`: The Things You Might Not Know, a list of all five questions and full answers.
- `src/lib/about-us.ts`: the supplied Q&As and speaker labels.
- `src/components/navigation.tsx`: desktop monogram and Menu control; mobile hamburger over the hero becomes a fixed, swipeable section bar as soon as scrolling begins. Both open the existing numbered side panel.
- `src/components/hero.tsx`: text overlapping the cover photo's linen fade from the left on desktop. On mobile, the bottom-anchored photo clips the upper 15% of its previous view without increasing its scale; larger names overlap the shorter frame by 48px, with the date and scripture flowing below. The mobile fade starts at 70% of the visible frame and reaches solid linen at 98%.
- `src/app/globals.css`: shared design tokens and responsive styles.
- `public/calendar/`: calendars with UTC timestamps matching Kigali local times.
- `public/images/*-placeholder.webp`: replaceable placeholder photography.

The active image paths are recorded in `docs/images.md`. The hero uses the locally
selected `public/images/cover.JPG`. A separate carousel between Our Story and the
questions uses the six supplied photos. Desktop shows all six in an asymmetric
collage. Clicking a desktop photo opens its uncropped view in a modal lightbox;
edge arrows and keyboard arrows browse all six. Escape, the close button, or
the surrounding backdrop closes it and returns focus to the clicked photo.
Mobile keeps a fixed-height stage showing the full photo over a blurred
decorative copy, with translucent arrows at the left and right edges.
All five questions and answers are visible in the list below. Older generated
and stock placeholders are retained locally but are no longer displayed.
Carousel photographs use content-hashed static imports so replacing a file updates
its browser URL automatically. To use a different filename, update its import in
`src/lib/photos.ts`, matching the filename's exact casing.

The design reference study and earlier activity research are recorded in
`docs/design-reference.md`. Explore Rwanda links directly to Visit Rwanda rather
than displaying an activity grid. Travel and Explore Rwanda appear last, after
the wedding details and phone-only contacts. The mobile photo carousel wraps
in both directions, with no autoplay or animation. The questions use a two-column
layout on desktop and stack above their answers on mobile.
Mobile navigation uses a linen hamburger square over the hero, without the desktop
header's reserved top space. As soon as scrolling starts, it becomes a full-width
linen bar at 85% background opacity with
a pinned hamburger, horizontally scrollable section links, and a green underline
tracking the current section. Active links stay visible without moving the page
vertically. Short mobile labels keep the full story and registry titles in the
menu; desktop navigation is unchanged. All changes between states are instant.
View map uses text links; calendar buttons are omitted.
When & where uses centred green event cards with linen text on the linen canvas,
side by side on desktop and stacked on mobile. Short invitation introductions
welcome guests to each celebration. View map links with external arrows sit at
the bottom of each card. Dates, times, venues, and addresses
are preserved; View map opens the corresponding venue in Google Maps.
The Gift Registry section uses the supplied invitation wording, asks guests not
to bring physical gifts because the couple will return to Canada, and links
directly to their MyRegistry gift list. Monetary gifts link to the contact section.
Edit `wedding.registryUrl` in `src/lib/wedding.ts` to change the registry link.

Directions open Google Maps. Contacts use tap-to-call links. Retained calendar files
include the Gusaba and both wedding-day moments. No RSVP submission service is
connected. Search indexing is disabled in the root layout metadata.
