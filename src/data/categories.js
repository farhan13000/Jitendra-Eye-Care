import { unsplash } from '../utils/image';

/**
 * Frame categories shown on the homepage and as filters on /frames.
 * `match` decides which frames belong to a category.
 */
export const categories = [
  {
    slug: 'full-rim',
    name: 'Full Rim',
    blurb: 'Bold, structured, everyday classics',
    image: unsplash('1625591342274-013866180475'),
    match: (f) => f.rim === 'Full Rim' && f.collections.includes('optical'),
  },
  {
    slug: 'half-rim',
    name: 'Half Rim',
    blurb: 'Light, refined and professional',
    image: unsplash('1574258495973-f010dfbb5371'),
    match: (f) => f.rim === 'Half Rim',
  },
  {
    slug: 'rimless',
    name: 'Rimless',
    blurb: 'Barely-there minimalism',
    image: unsplash('1557862921-37829c790f19'),
    match: (f) => f.rim === 'Rimless',
  },
  {
    slug: 'metal',
    name: 'Metal Frames',
    blurb: 'Fine wire, titanium & steel',
    image: unsplash('1614715838608-dd527c46231d'),
    match: (f) => /metal|steel|titanium/i.test(f.material),
  },
  {
    slug: 'acetate',
    name: 'Acetate Frames',
    blurb: 'Rich colours, hand-polished',
    image: unsplash('1566492031773-4f4e44671857'),
    match: (f) => /acetate/i.test(f.material),
  },
  {
    slug: 'kids',
    name: 'Kids Frames',
    blurb: 'Flexible, safe & fun',
    image: unsplash('1471286174890-9c112ffca5b4'),
    match: (f) => f.collections.includes('kids'),
  },
  {
    slug: 'premium',
    name: 'Premium Frames',
    blurb: 'Our finest craftsmanship',
    image: unsplash('1591076482161-42ce6da69f67'),
    match: (f) => f.collections.includes('premium'),
  },
  {
    slug: 'sunglasses',
    name: 'Sunglasses',
    blurb: 'UV protection, with style',
    image: unsplash('1572635196237-14b3f281503f'),
    match: (f) => f.collections.includes('sunglasses'),
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
