# Jitendra Eye Care: Website

A premium, frontend-only website for an optical shop, built with **React 19 + React Router + Vite**.
There is no backend, cart or login. Customers browse frames, lenses and services, then enquire via **WhatsApp**.

## Getting started

```bash
npm install
npm run dev        # local development at http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Before going live: update these

| What | Where |
| --- | --- |
| WhatsApp number | `src/config/site.js` → `WHATSAPP_NUMBER` (digits only, with country code, e.g. `919876543210`) |
| Shop name, phone, email, address, hours | `src/config/site.js` → `SITE` |
| Google Maps location | `SITE.mapsQuery` (shop name + address as you'd type it into Google Maps) |
| City for SEO titles | `SITE.city` (e.g. `'Jaipur'` gives "Eyeglass Frames & Sunglasses in Jaipur") |
| Hero numbers (frames in store, rating) | `SITE.stats`; years in business come from `SITE.foundedYear` |
| Social links | `SITE.social` |
| Live domain (for Open Graph links) | `SITE.url` |
| Testimonials | `src/data/testimonials.js` (currently **placeholders**; replace with real reviews) |
| Team names & photos | `src/pages/About.jsx` → `team` (currently **placeholders**) |
| Privacy / Terms copy | `src/pages/Legal.jsx` (template text; have it reviewed) |

## Managing products & content

All content lives in plain JavaScript files in `src/data/`:

- `frames.js`: the frame & sunglasses catalogue. Copy an object to add a product; the `slug` becomes its URL (`/frames/<slug>`). Set `featured: true` to show it on the homepage.
- `categories.js`: homepage category tiles and the catalogue's category filter.
- `lenses.js`: lens types and the "lens finder" recommendations.
- `services.js`: eye-care services.
- `gallery.js`: gallery photos and their categories.
- `faqs.js`: FAQ page.

### Using your own photos

Images currently come from Unsplash as placeholders. To use your own:

1. Put files in `public/images/...`, e.g. `public/images/frames/classic-black.webp`.
2. Reference them by path in the data file: `images: ['/images/frames/classic-black.webp']`.

Recommended sizes: product images square or 4:5, at least 1200px wide, in WebP format.

## WhatsApp enquiries

All links are built in `src/utils/whatsapp.js`:

- `generateWhatsAppLink(product)`: frame enquiry with product name, category, material, selected colour and price.
- `lensEnquiryLink(lens)` and `serviceEnquiryLink(service)`: lens and service enquiries.
- `MESSAGES`: the general, eye-checkup and lens-help messages.

## Deployment

The site is static, so it can be hosted on Netlify, Vercel, Cloudflare Pages, GitHub Pages or any web host.
Because it uses client-side routing, the host must serve `index.html` for every route.
This is already configured for Netlify (`public/_redirects`) and Vercel (`vercel.json`).

## Project structure

```
src/
├── config/site.js      ← business details & WhatsApp number
├── data/               ← frames, lenses, services, gallery, testimonials, FAQs
├── components/         ← Navbar, Footer, Hero, ProductCard, Gallery (lightbox), SearchDialog, …
├── pages/              ← Home, Frames, ProductDetails, Lenses, Services, About, Gallery, Contact, FAQ, Legal
├── utils/              ← whatsapp.js, search.js, image.js, format.js
├── hooks/useReveal.js  ← scroll-reveal & navbar scroll state
└── styles/             ← base.css (design tokens), components.css, pages.css
```

Design tokens (colours, fonts, spacing) are at the top of `src/styles/base.css`.
