# RREV — SEO launch checklist

## Already done in the code

- **Per-page titles and descriptions** — `src/components/Seo.jsx`, used by all 8 pages. Every title is under 60 characters and every description under 155.
- **Canonical URL, Open Graph and Twitter cards** on every page, so links shared on WhatsApp, LinkedIn and X show the logo and a proper summary.
- **`public/robots.txt`** — allows all crawlers and points to the sitemap.
- **`public/sitemap.xml`** — all 8 pages with priorities.
- **`public/_redirects`** — deep links work on Netlify (see below for other hosts).
- **Organization structured data** (JSON-LD) in `index.html`.
- **Google Analytics 4 snippet** in `index.html`, commented out and waiting for your Measurement ID.
- **Mobile-first layout** — every page was checked at 390px wide.

## Do this before launch

1. **Replace the placeholder domain.** `https://www.rrev.in` appears in three places:
   - `src/components/Seo.jsx` (the `SITE_URL` constant)
   - `public/sitemap.xml`
   - `public/robots.txt` and the canonical/OG tags in `index.html`
2. **Fill in the business details** in the JSON-LD block in `index.html`: address, phone, email. These must match your Google Business Profile exactly.
3. **Switch on Google Analytics 4**: create a GA4 property, then paste the Measurement ID into `index.html` and remove the `<!--` `-->` around that block.
4. **Hosting rewrite rule.** This is a single-page app, so every route must serve `index.html`:
   - Netlify — `public/_redirects` already does it.
   - Vercel — add `vercel.json` with a rewrite of `/(.*)` to `/index.html`.
   - Apache — `.htaccess` with `FallbackResource /index.html`.
   - Nginx — `try_files $uri /index.html;`

## Then, off the site

1. **Google Search Console** — add a Domain property, verify by DNS record, submit `https://yourdomain/sitemap.xml`, and request indexing for the homepage, Solar EPC, Capabilities and Contact.
2. **Google Business Profile** — claim or create the listing, use the exact business name, pick "Solar energy contractor" or "Renewable energy supplier" as the category, add service areas, hours, phone and the website URL, then complete verification.
3. **Bing Webmaster Tools** — import the verified Search Console profile in one click, and add the listing to Bing Places.
4. **PageSpeed Insights** — run the homepage and fix what it flags. Two things worth checking on this site: the hero slide images (the biogas dome photo is an upscaled 500px original) and the logo PNGs, which could be served as WebP.
5. **Link GA4 to Search Console** so traffic and query data sit together.

## Notes worth knowing

- **This is a React single-page app.** Google renders JavaScript, so the pages do get indexed, but the titles and descriptions are set after the page loads. If search traffic matters a lot, prerendering (`vite-plugin-ssr`, `react-snap`, or moving to Next.js) makes the HTML complete on first response and is the single biggest technical SEO improvement available here.
- **Keep one keyword per page.** Right now: Home — "CBG plants and solar EPC"; Solar EPC — "solar EPC company, rooftop solar"; Capabilities — "CBG project execution"; Projects — gallery; Contact — enquiries.
- **Internal links** already run between Home, Capabilities, Solar EPC, Execution, Projects and Contact through the service cards, value chain and footer.
