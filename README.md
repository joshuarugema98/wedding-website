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
- `src/components/our-story.tsx`: the couple's full story, with a short visible opening and a native inline disclosure divided into four chapters.
- `src/components/about-us.tsx`: The Things You Might Not Know, a five-question portrait-photo carousel with keyboard controls and an inline expansion for the third answer.
- `src/lib/about-us.ts`: the supplied Q&As, speaker labels, and static image imports.
- `src/components/navigation.tsx`: floating monogram and Menu control, opening a numbered side panel.
- `src/components/hero.tsx`: text overlapping the cover photo's linen fade from the left on desktop. On mobile, larger names cross the photo's lower edge, with the date and scripture flowing below. The mobile fade occupies the bottom 18% of the photo.
- `src/app/globals.css`: shared design tokens and responsive styles.
- `public/calendar/`: calendars with UTC timestamps matching Kigali local times.
- `public/images/*-placeholder.webp`: replaceable placeholder photography.

The active image paths are recorded in `docs/images.md`. The hero uses the locally
selected `public/images/cover.JPG`. The Q&A carousel uses the five user-supplied
photographs in their original order and preserves the full supplied answers.
Each photograph uses its natural aspect ratio at a consistent width, with controls
beneath the image and text flowing naturally alongside or below. Older generated and
stock placeholders are retained locally but are no longer displayed.
Carousel photographs use content-hashed static imports so replacing a file updates
its browser URL automatically. To use a different filename, update its import in
`src/lib/about-us.ts`, matching the filename's exact casing.

The design reference study and earlier activity research are recorded in
`docs/design-reference.md`. Explore Rwanda links directly to Visit Rwanda rather
than displaying an activity grid. Travel and Explore Rwanda appear last, after
the wedding details and phone-only contacts. The carousel changes the image and
Q&A together, wraps in both directions, and has no autoplay or animation.
Calendar actions use filled rectangular buttons; directions use text links.
The Gift Registry section includes a welcome note and a direct contact link for
monetary gifts. Registry availability shows a coming-soon message. Set
`wedding.registryUrl` in `src/lib/wedding.ts` to display the external registry link.

Directions open Google Maps. Contacts use tap-to-call links. Calendar downloads
include the Gusaba and both wedding-day moments. No RSVP submission service is
connected. Search indexing is disabled in the root layout metadata.
