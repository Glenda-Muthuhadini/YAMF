# Young Ambitious Models Foundation

Static landing page hero recreated from the supplied visual reference, using the foundation logo in `assets/images/`.

Open `index.html` in a browser. No dependencies or build step are required. The hero includes responsive navigation, programme and competition links, and four focus areas.

Shared styles are in `css/style.css`, responsive adjustments in `css/responsive.css`, and the mobile menu in `js/main.js`.

The shared glass header stays fixed while scrolling, floating 16px from the viewport top on desktop and 12px on phones. Its height is 80px on desktop, 76px on tablets, and 72px on phones. The original logo scales proportionally. Home, About and Gallery hero backgrounds start at the page top behind the header; shared clearance variables keep hero copy below it. Anchor scrolling also accounts for the header height.

The Our Brands section follows the hero with three non-clickable brand cards and hover animations, using the supplied emblems in `assets/images/brands/`. The cards stack on mobile. The Gallery page's Miss Teen Elegant South Africa section uses photos from `assets/images/Miss Teen Elegant South Africa/`.

The Gallery page reuses the landing-page navigation and has square photo placeholders grouped by pageant and programme. The placeholders can be replaced when gallery photos are supplied.

The model artwork uses `assets/images/hero-models-clean.png`, edited from the supplied reference with the built-in image generation tool. Edit prompt: remove all text, logos, navigation, buttons, icons, panels and the feature strip; preserve the three models and soft architectural background, filling removed areas seamlessly. The original reference is not used by the page.

The header displays the complete original rectangular logo at its natural aspect ratio, without added organization text or registration number. The heading, description, navigation, buttons, and feature strip are HTML. About, Gallery and Contact pages are implemented; other files in `pages/` remain placeholders for future page content.

The About page uses the landing page's header and footer markup and shared styles, with relative URLs adjusted and About marked as the active page. Its separate styles live in `css/about.css`. The purple hero has a straight bottom edge. Mission, vision, programmes, objectives, values and the journey invitation follow the supplied layout, adapting to smaller screens. The contact invitation links to the Contact page.

The Contact page (`pages/contact.html`) uses the existing header, footer, fonts and purple crown artwork. Page-specific styles and behaviour are in `css/contact.css` and `js/contact.js`. It uses the site's existing contact details rather than the example phone number/email in the reference. The reference screenshot is not copied into the project. The form validates required fields and email format, then opens a populated email draft via `mailto:`; the visitor must send it from their email app. Messages are not stored or submitted to a server. Partner With Us selects the partnership subject and focuses the form. Social platform icons are display-only until actual account URLs are supplied.

About hero asset: `assets/images/about-hero.png`, generated with the built-in image generation tool. Final prompt: "Create only a standalone wide landscape photographic hero background based on the upper purple banner: two young Black people, young man with short natural hair behind and young woman with natural curly ponytail in front on the right side, looking aspirationally upwards toward the left, cinematic purple and magenta rim lighting, dark plum background fading to near black on the left 55 percent for editable page text. Preserve their profile composition. No text, logo, watermark, header, buttons, panels or icons. Rectangular image with a straight horizontal bottom edge, no waves or white swoosh. Only the purple photo background; do not reproduce the website." The About design screenshot remains outside the project.

The lower landing page contains Who We Are, four What We Do cards, the founder's message, and the footer. All text and layout are HTML/CSS. The founder section uses the provided `assets/images/Founder.png`. Its image differs from the design reference intentionally to use the supplied founder photo.

Who We Are uses a compact desktop panel (500–560px) so its square crown image stays close to its natural proportions; on mobile it keeps a minimum height of one viewport (`100vh`, with `100svh` for browser controls). What We Do and the founder's message each have a minimum height of one viewport. Sections can grow to fit text and stacked cards on smaller screens. The founder photo and message occupy separate grid columns on desktop and stack below 760px. The portrait and decorative quotation mark stay in normal layout flow to prevent overlap. The site favicon uses `assets/images/Favicon.png`.

The standalone crown asset is saved as `assets/images/pageant-crown.png`, created with the built-in image generation tool. Final prompt: "Extract/recreate ONLY the close-up golden crystal pageant crown resting on ivory satin shown at upper right. Produce a standalone high quality photographic asset, square composition, whole crown clearly visible with satin foreground, soft warm champagne and muted lavender background, shallow depth of field. No text, no logos, no UI, no borders. Keep the intricate tall central crystal and gold ornamentation faithful to the reference. This asset will be placed in an HTML section; do not reproduce any website layout."

The new reference screenshot remains outside this project. Only the standalone crown asset is added. Footer phone and email links use the reference contact details. Social icons and legal labels remain display-only until account URLs and legal pages are available. A live browser preview was unavailable; validation covers local assets, links, unique section IDs, CSS brace balance, and JavaScript syntax.
