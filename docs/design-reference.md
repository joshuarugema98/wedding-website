# Independent design direction

Mobile navigation uses a linen hamburger square floating over the hero photograph;
the old mobile monogram and Menu + controls are hidden. The hero starts 16px below
the top rather than reserving 90px for the desktop controls. As soon as scrolling starts,
the same hamburger sits at the left of a fixed full-width linen bar. Eight short
section links swipe horizontally beside it, with a green active-section underline.
The linen background is 85% opaque; text and controls stay fully opaque. Returning
to the very top restores the floating hamburger.
Scroll position and section resizing update the active link; horizontal adjustment
keeps that link visible without changing vertical page position. The existing
native dialog retains every full title and Explore Rwanda. Safe-area padding,
keyboard focus, and instant switching are retained; desktop controls are unchanged.

The photos and Q&As are separate sections. After Our Story, desktop shows all six
photos in an asymmetric four-column, two-row collage: a large portrait on the left,
three supporting tiles across the top, and a portrait plus a wider landscape tile
along the lower right. Individual focal points guide crops. At 760px and below, the collage
is replaced by the fixed-height carousel (480px tablet, 440px phone). The complete
photo sits over a blurred copy, with 50% opaque linen arrow backgrounds at the
edges, increasing to 75% on hover or focus. Each desktop collage photo opens a
full-screen native modal dialog with an uncropped image, translucent edge arrows,
a close button, and a photo counter over a dark translucent backdrop. Keyboard
arrows wrap through all six; Escape or a backdrop click closes the dialog and
returns focus to the clicked photo. The page cannot scroll behind the dialog.
Resizing to mobile closes it, leaving the existing mobile carousel unchanged.
Switching remains instant, with no autoplay or animation.
The Things You Might Not Know follows as a continuous list of all five questions
and complete answers, including both perspectives on question three. Questions
sit beside answers on desktop and above them on mobile. Speaker labels remain.
The section heading is 44–48px on desktop and 36px on mobile, questions are
24–26px and 22px respectively, and answer text remains 18px and 17px.
The sections share the linen canvas; #photos and the existing #about anchor are
independent. Content-hashed imports remain in src/lib/photos.ts.

Our Story sits directly below the hero, before the photo carousel. The italic
opening and first paragraph are visible initially. A native details/summary
control expands the rest inline as continuous paragraphs without chapter titles.
The supplied text
is preserved, including the note, yellow jacket, Warakuze, and waterfront passages.
The control changes from Read our story to Show less. The section shares the same
linen canvas, uses a comfortable reading width, and adds no animation or modal.

18 October 2026: the hero now integrates the names, date, and scripture inside
the cover photograph's area. A left-edge linen fade sits behind desktop text;
on mobile, the photo and copy flow vertically, with larger names overlapping the
photo's lower edge by 48px. The mobile frame is 15% shorter, using
clamp(442px, 62.9svh, 646px). An inner image frame keeps the previous full height
at 117.647% of the visible frame and anchors to the bottom, clipping the upper
15% without adding zoom. The photo uses bottom-center positioning to preserve
the lower scene. The date and scripture follow on the linen background
at readable sizes. The photo stays unfaded through 70% of its visible frame, then blends
into solid linen by 98%, with 90% opacity at 86%. The hero grows with its content instead of fitting
everything into a fixed viewport. Desktop styling is unchanged.
The current `public/images/cover.JPG` is retained. Its inaccurate generated-image
caption is removed and alt text describes the actual hillside scene. No raster
image changes or animation are introduced.

Current refinement: a single warm linen canvas replaces the distinct sand, sage,
and clay panels. Story copy, schedules, registry, contacts, and footer share the
same surface, with muted green-gray text, subtle rules, and light tonal controls.
When & where has a centred heading and two equal-height event cards reversing the
page colours: the existing green ink (#4b5047) becomes the card background and the
linen page colour (#e9e5dc) becomes every card's text, icons, and focus outlines.
The surrounding canvas stays linen. Cards sit side by side on desktop and stack on mobile.
Each centres its small event label, serif title, short invitation introduction,
confirmed date, time, venue, and address. Gusaba uses Introduction & dowry as its
label, with a welcome to the traditional Rwandan engagement ceremony; the wedding
invites guests to witness the vows and celebrate with dining and dancing.
Letter-spaced View map links with external arrows sit at the bottom; calendar
buttons are removed. View map opens the corresponding venue in Google Maps.
Card dates are 15% larger (16.1px desktop, 14.95px phone); times and venue names
are 10% smaller (23.4px Gusaba time, 21.6px wedding times and desktop venues,
20.7px phone venues). Address and time-label sizes remain unchanged.
No attire requirements are added. Content widths align across
sections. Gift Registry follows the schedule with the supplied three-paragraph
wording, explaining the return to Canada and asking guests not to bring physical
gifts. View our registry opens the couple's MyRegistry list, configured in
`wedding.registryUrl`. Monetary gifts retain the direct contact anchor.
Travel remains last.

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
