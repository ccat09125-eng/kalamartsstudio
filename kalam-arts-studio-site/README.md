# KALAM ARTS STUDIO — Multi-page static website

A responsive static website built with HTML, CSS and vanilla JavaScript. It requires no framework or build step. The supplied KALAM ARTS STUDIO logo is used as provided. 43 project and service images from the supplied ZIP are included as web-optimised WebP files; the uploaded source images remain unchanged outside this website package.

## Preview locally

1. Extract this ZIP.
2. Open a terminal in this folder.
3. Run `python -m http.server 8000`.
4. Visit `http://localhost:8000`.

Opening `index.html` directly may work, but a local server is recommended.

## Pages

- `index.html` — home and six studio highlight categories
- `services.html` — service directory
- `3d-models-craft.html` — 3D models and craft landing page
- `canvas-art.html` — canvas and art landing page
- `portraits.html` — portrait landing page
- `school-expo.html` — school and expo landing page
- `interior-branding.html` — interior, murals and branding landing page
- `studio-process.html` — sketch/planning to fabrication and finishing
- `work.html` — filterable portfolio using supplied project images
- `journal.html` — blog index
- `journal-commissioning-3d-model.html` — 3D model article
- `journal-choosing-canvas-art.html` — canvas art article
- `journal-portrait-reference-photo.html` — portrait reference article
- `about.html` — studio introduction
- `contact.html` — enquiry form that opens WhatsApp

## Images and logo

The original transparent PNG logo supplied by the user is at `assets/images/kalam-arts-logo.png` and has not been redrawn. Project images supplied in the ZIP were converted to WebP copies for faster website loading. The complete source-to-web filename mapping is documented in `asset-manifest.json`. The displayed images are not synthetically altered; image layout uses contained frames so complete artworks and promotional project visuals remain visible.

The supplied asset set does not include verified written customer testimonials or WhatsApp review screenshots. The homepage therefore links the Client Reviews highlight to the studio's Instagram profile and does not fabricate review quotations. Add approved review screenshots or text when available.

## Contact details configured

- WhatsApp: +971 56 469 2102
- Email: info@kalamartsstudio.com
- Instagram: @kalamartsstudio
- Location: Abu Dhabi, UAE
- Website canonical: https://kalamartsstudio.com

## Functionality and limitations

- Responsive desktop, tablet and mobile layouts.
- Mobile navigation, portfolio filters and FAQ accordions.
- Service-specific landing pages and blog article pages.
- Contact form prepares an enquiry and opens WhatsApp. No form data is stored on a server.
- No CMS, database, admin panel, payment checkout or online booking engine is included. Blog posts are edited directly in HTML.
- Meta Pixel, Google Analytics and other tracking are not configured because account IDs and consent requirements were not supplied.

## Before going live

1. Preview every page and confirm the selected images, crops and service descriptions.
2. Add only genuine customer feedback with permission.
3. Confirm pricing, turnaround times, delivery coverage and any service limitations.
4. Upload the folder to hosting with HTTPS enabled and point `kalamartsstudio.com` to the host.
5. Test every WhatsApp link and the enquiry form on desktop and mobile.
6. Configure analytics and Meta Pixel only with the correct IDs and privacy/consent setup.
7. Submit `sitemap.xml` to Google Search Console after launch.

This is a static HTML website, not WordPress.


## Recent interface additions

- **Dark mode toggle:** available in the header on every page. The selected theme is remembered on the visitor's device and the first visit follows the device theme preference.
- **Instagram direct-message button:** floating shortcut on every page, opening https://ig.me/m/kalamartsstudio. The existing WhatsApp enquiry button remains available.


## SEO, AEO and local/GEO content upgrade

The site has been updated with page-specific titles and descriptions, canonical URLs, Open Graph/Twitter metadata, descriptive image alternatives, structured data, breadcrumb markup, a current XML sitemap, and an RSS feed for the Journal. Service pages now have distinct descriptions and visible question-and-answer content. The homepage states the studio's Abu Dhabi location and the real customer groups it serves. Three additional guides cover school science models, mural planning and portrait commissions.

### Important limits

SEO, AEO and GEO are discoverability practices, not ranking guarantees. Google states that AI search features use the same foundational SEO and indexing requirements, with no special AI-only files or schema required. The site's content and structured data are therefore designed to be useful, crawlable and consistent with what visitors can actually see. Do not add fake review markup, invented opening hours, prices, physical street addresses or service claims.

### Before launch / ongoing work

1. Confirm the site is live on the canonical HTTPS domain and that every listed page returns HTTP 200.
2. Verify `kalamartsstudio.com` in Google Search Console and Bing Webmaster Tools; submit `/sitemap.xml`.
3. Create or claim the real Google Business Profile if eligible. Use the exact business name, phone, website and service-area details; keep profile information consistent with the site. Do not add a made-up street address or public walk-in hours.
4. Add genuine project case studies over time: project brief, constraints, materials actually used, stages, final photographs, and location where the client has agreed to publication.
5. Add only real customer reviews with permission. Do not use aggregate ratings or testimonials that cannot be substantiated.
6. Track qualified WhatsApp enquiries and confirmed projects, not only traffic. Add analytics/consent tooling only after the correct property IDs and privacy requirements are confirmed.
7. Refresh the sitemap `lastmod` values only when pages are materially updated. Re-submit or request recrawling after the live pages are available.
8. Review search queries and conversions after the site has been crawled; refine wording based on real customer language rather than keyword repetition.

The sitemap currently lists all static HTML pages. `feed.xml` is an optional Journal RSS feed. No `llms.txt` or AI-specific crawler file has been added because Google does not require one for AI search inclusion.


## Final quality and discoverability pass

- Removed repeated document declarations and added keyboard skip navigation, visible focus states, reduced-motion support, and a small-screen spacing pass.
- Added a web app manifest and a strict-origin referrer policy.
- Regenerated the XML sitemap from the canonical URLs present on the site.
- Checked all local page, stylesheet, script, image and manifest references; checked JSON-LD syntax, one H1 per page, title/description/canonical metadata, image alt text, and the WhatsApp, Instagram and theme controls on every page.
- Kept local business details limited to the known city-level location (Abu Dhabi, UAE); no street address, opening hours, ratings, review quotes or service guarantees were invented.

### Search and AI discovery reality check

The site is structured for crawlability and clear entity/service understanding, but no developer can guarantee a top Google ranking, AI answer citation, or map-pack placement. After deployment: verify the domain in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, connect the real Google Business Profile, keep its name/category/contact/coverage consistent, request genuine customer reviews, and earn relevant UAE links/mentions. Do not create duplicate doorway pages for every neighbourhood.

### Not configured because access/details were not supplied

Google Analytics, Search Console ownership verification, Google Business Profile, Meta Pixel, consent management, server-side form handling, and any CRM integration still require the owner's accounts and hosting access. The contact form opens WhatsApp; it does not store submissions.

## GitHub and Netlify deployment

This repository hosts the static website in `kalam-arts-studio-site/`. The `netlify.toml` at the repository root publishes that folder; no build command is required. Keep the base directory at the repository root so Netlify can discover the configuration.

1. Keep `netlify.toml` at the repository root and the website files inside `kalam-arts-studio-site/`.
2. Connect the GitHub repository to Netlify using the `main` branch.
3. Leave the build command empty and use `kalam-arts-studio-site` as the publish directory, as configured in the root `netlify.toml`.
4. Deploy and verify `/`, `/about.html`, and `/assets/css/style.css` on the generated `*.netlify.app` URL. Each page has its own HTML file, so no SPA catch-all redirect is needed; unknown URLs should return 404.
5. Add `kalamartsstudio.com` under **Domain management** and follow the DNS records Netlify displays for that site.
6. After DNS and HTTPS are active, verify the canonical domain, test all enquiry links, and submit `https://kalamartsstudio.com/sitemap.xml` in Google Search Console.

The GitHub and Netlify accounts must be authorized by the site owner. Never put access tokens, passwords, or private API keys in this repository. Netlify hosting does not itself configure the domain registrar's DNS or create Google Search Console ownership.
