/**
 * Frame categories shown on the homepage and as filters on /frames.
 * `match` decides which frames belong to a category.
 * `fit: 'contain'` shows the whole image on white instead of cropping it.
 */
const img = (name) => `/images/frames/${name}`;

export const categories = [
  {
    slug: 'full-rim',
    name: 'Full Rim',
    blurb: 'Bold, structured, everyday classics',
    image: img('Full_frame_sheet1.jpeg'),
    fit: 'contain',
    match: (f) => f.rim === 'Full Rim' && f.collections.includes('optical'),
  },
  {
    slug: 'half-rim',
    name: 'Half Rim',
    blurb: 'Light, refined and professional',
    image: img('Half_frame.jpeg'),
    fit: 'contain',
    match: (f) => f.rim === 'Half Rim',
  },
  {
    slug: 'rimless',
    name: 'Rimless',
    blurb: 'Barely-there minimalism',
    image: img('Rimless_frame.jpeg'),
    fit: 'contain',
    match: (f) => f.rim === 'Rimless',
  },
  {
    slug: 'cat-eye',
    name: 'Cat-Eye',
    blurb: 'Elegant, feminine styles',
    image: img('Sheet_Cat_eye_female_frame_2.jpeg'),
    match: (f) => f.shape === 'Cat-Eye',
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
