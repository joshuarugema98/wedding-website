# Independent design direction

The Things You Might Not Know replaces the About Us title and placeholder Q&As.
Five slides use the complete supplied answers and images 1–5 in question order.
Named responses have clear speaker labels. The third slide initially shows Joshua's
answer, with Sandrine's response and the conclusion behind a native Read more
disclosure. Photos use their natural aspect ratios at a consistent width, so
landscape photos are shorter and portraits are taller without empty bands or
cropping. Controls sit directly beneath the photo; expanding an answer does not
move them. Text has natural height.
The section keeps its existing #about anchor and the shared linen background.

Our Story sits directly below the hero, before the About Us carousel. The italic
opening and first paragraph are visible initially. A native details/summary
control expands the rest inline, with four chapters: The mysterious note,
Different continents, The yellow jacket, and The waterfront. The supplied text
is preserved, including the note, yellow jacket, Warakuze, and waterfront passages.
The control changes from Read our story to Show less. The section shares the same
linen canvas, uses a comfortable reading width, and adds no animation or modal.

18 October 2026: the hero now integrates the names, date, and scripture inside
the cover photograph's area. A left-edge linen fade sits behind desktop text;
on mobile, the photo and copy flow vertically, with larger names overlapping the
photo's lower edge by 64px. The date and scripture follow on the linen background
at readable sizes. The photo stays unfaded through 82% of its height, then blends
into linen at its bottom edge. The hero grows with its content instead of fitting
everything into a fixed viewport. Desktop styling is unchanged.
The current `public/images/cover.JPG` is retained. Its inaccurate generated-image
caption is removed and alt text describes the actual hillside scene. No raster
image changes or animation are introduced.

Current refinement: a single warm linen canvas replaces the distinct sand, sage,
and clay panels. Story copy, schedules, registry, contacts, and footer share the
same surface, with muted green-gray text, subtle rules, and light tonal controls.
Event cards no longer have separate fills or heavy accent borders. Content widths
align across sections. Gift Registry follows the schedule and shows a coming-soon
message because the user has no registry link yet; `wedding.registryUrl` enables
the real external link later. Travel remains last.

## Previous palette

The user asked to move away from the reference's visual treatment while keeping
the carousel and information flow. The current design uses warm sand, pale sage,
and soft clay surfaces, forest text, rust accents, and Georgia serif headings.
The hero places the invitation beside a photograph, stacking on mobile. Floating
monogram and Menu controls open a numbered side panel instead of horizontal tabs.
Calendar actions are filled rectangles; directions are text links, and carousel
arrows use solid square controls. The two celebrations sit in cards on a sage
field. No motion or autoplay is introduced. Content and source credits are retained.

## Earlier screenshot study

Latest refinement: About Us follows the hero as a manual photo-and-Q&A carousel.
Left/right buttons and keyboard arrows change the image, question, and answer
together, wrapping in both directions, with no autoplay or animation. Generated
photographs replace the empty photo boxes; personal story answers remain editable
placeholders where no details were supplied. Contacts show phone numbers only,
and Travel and the direct Explore Rwanda link appear last. The dietary question
and the activity grid remain removed. The activity research below is history.

Primary visual reference: the eight mobile screenshots supplied by the user from
https://withjoy.com/peter-kevin-and-diana.

The screenshots directly establish the design direction: a full-height photograph
with light names and scripture overlaid near the bottom; a floating ivory menu
button; a sticky, horizontally scrollable section menu with an olive underline;
centered schedule headings and dates; thin dividers; olive outline pill buttons;
large, readable body copy; and warm ivory surfaces. The page’s source also declares
Quicksand and Lato, which are bundled locally for this implementation.

Applied this direction to Joshua and Sandrine’s existing content. Their confirmed
December dates, Kigali venues, contacts, calendars, and Rwanda activity links are
retained. No biography, gift instructions, dress code, hotel arrangements, dates,
or photographs were copied from the reference couple. The scripture appears once,
in the hero. Motion and 3D remain absent.

The generated couple photographs are clearly labelled placeholders, ready
to be replaced with Joshua and Sandrine’s own photographs. Image sources and
generation prompts are recorded in `images.md` and `generated-couple-images.md`.

Browser review remains skipped at the user’s previous instruction; validation
uses the production build, source checks, and local HTTP/asset checks.

## Earlier reference research

Reference: https://www.wealthsimple.com/en-ca

Reviewed the live public HTML, 42 linked CSS files (323 KB combined), the current
hero media poster, content hierarchy, navigation, and typography tokens. No
Wealthsimple assets, fonts, logos, copy, or CSS are included in this project.

## Wealthsimple findings studied

- The current campaign hero uses a confident, heavy sans-serif headline. Product
  sections generally use compact 32–48 px sans-serif headlines; large serif
  statements are used selectively. That study informed the earlier version; the supplied wedding screenshots now
  determine the typography and layout.
- Its warm linen surfaces, slate text, full-bleed media, and occasional dark
  sections create contrast without relying on decoration. The redesign uses
  original warm neutrals, photography, and a dark contact footer.
- Navigation is direct, with clear category links and a single pill-shaped CTA.
- Product stories use prominent media with brief descriptions. Here, one
  celebration image accompanies both complete event schedules, and the Rwanda
  section uses destination images with short, source-linked recommendations.
- Responsive layouts change composition. The redesign stacks schedules, changes
  the activity grid from three to two to one column, and uses a native mobile menu.

All motion, animation libraries, 3D rendering, rings, repeat invitation text,
repeated FAQ schedules, and the duplicate guest-guide dialog were removed.

## Activity sources

- Inema Arts Center: https://inemaartcenter.com/
- Nyandungu Eco-Park: https://nyandunguecopark.rw/activities
- Lake Kivu: https://visitrwanda.com/destinations/lake-kivu/
- Akagera: https://visitrwanda.com/destinations/akagera-national-park/
- Volcanoes: https://visitrwanda.com/destinations/volcanoes-national-park/
- Gorilla permits: https://visitrwanda.com/interests/gorilla-tracking/
- Nyungwe canopy walk: https://visitrwanda.com/interests/canopy-walkway/
- Visitor essentials: https://visitrwanda.com/practical-information/

Activity copy is deliberately brief. Live pricing, opening hours, travel times,
and transport or accommodation promises are omitted. Guests follow official
links for planning and availability. These are independent activity suggestions,
not events arranged by the wedding hosts.
