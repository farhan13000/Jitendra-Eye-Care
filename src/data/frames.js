/**
 * FRAME CATALOGUE
 * ─────────────────
 * To add a frame, copy one object and edit it. Fields:
 *  - slug:        unique URL id (lowercase, hyphens) → /frames/<slug>
 *  - rim:         'Full Rim' | 'Half Rim' | 'Rimless'
 *  - material:    e.g. 'Acetate' | 'Metal' | 'Titanium' | 'TR90'
 *  - gender:      'Men' | 'Women' | 'Unisex' | 'Kids'
 *  - shape:       e.g. 'Square' | 'Rectangle' | 'Cat-Eye' | 'Round'
 *  - collections: any of 'optical' | 'sunglasses' | 'premium' | 'kids' | 'new'
 *  - price:       number in ₹ (formatted automatically)
 *  - size:        optional, e.g. '52 □ 18 – 138'
 *  - images:      first image is the main/card image. Put photos in
 *                 public/images/frames/ and reference them with img('file.jpeg').
 *  - fit:         'contain' shows the whole photo on white instead of cropping it
 *                 (use for product shots on a plain background)
 *  - featured:    true → shown on the homepage
 */

const img = (name) => `/images/frames/${name}`;

export const frames = [
  {
    id: 1,
    slug: 'classic-black',
    name: 'Classic Black',
    rim: 'Full Rim',
    material: 'Acetate',
    gender: 'Unisex',
    shape: 'Square',
    collections: ['optical'],
    price: 1000,
    colors: [{ name: 'Glossy Black', hex: '#141414' }],
    images: [img('Full_frame_sheet1.jpeg')],
    fit: 'contain',
    description:
      'A clean, glossy black square frame that goes with everything. Light on the face and easy to wear all day, for work, college or home.',
    features: ['Lightweight', 'Everyday wear', 'Suits most face shapes', 'Durable sheet frame'],
    featured: true,
  },
  {
    id: 2,
    slug: 'gold-half-rim',
    name: 'Gold Half Rim',
    rim: 'Half Rim',
    material: 'Metal',
    gender: 'Men',
    shape: 'Rectangle',
    collections: ['optical', 'premium'],
    price: 1800,
    colors: [{ name: 'Gold / Wood Brown', hex: '#c9a96e' }],
    size: '52 □ 18 – 138',
    images: [img('Half_frame.jpeg')],
    fit: 'contain',
    description:
      'A sharp gold half-rim with wood-finish temples. Smart and professional, with a light metal brow that keeps the look refined.',
    features: ['Lightweight metal', 'Wood-finish temples', 'Adjustable nose pads', 'Professional look'],
    featured: true,
  },
  {
    id: 3,
    slug: 'silver-rimless',
    name: 'Silver Rimless',
    rim: 'Rimless',
    material: 'Metal',
    gender: 'Men',
    shape: 'Rectangle',
    collections: ['optical', 'premium'],
    price: 2500,
    colors: [{ name: 'Silver / Gold', hex: '#c0c4c8' }],
    images: [img('Rimless_frame.jpeg')],
    fit: 'contain',
    description:
      'Barely-there rimless glasses with detailed twisted temples and black tips. Understated, elegant and very comfortable.',
    features: ['Featherlight', 'Twisted-design temples', 'Adjustable nose pads', 'Minimal look'],
    featured: true,
  },
  {
    id: 4,
    slug: 'rose-rimless-cat-eye',
    name: 'Rose Rimless Cat-Eye',
    rim: 'Rimless',
    material: 'Metal',
    gender: 'Women',
    shape: 'Cat-Eye',
    collections: ['optical', 'new'],
    price: 2200,
    colors: [{ name: 'Rose Pink', hex: '#d49a9a' }],
    images: [img('Rimless_cat_eye.jpeg')],
    description:
      'A delicate rimless cat-eye with slim rose-pink temples. Feminine, light and almost invisible on the face.',
    features: ['Featherlight', 'Flexible thin temples', 'Adjustable nose pads', 'Elegant cat-eye shape'],
    featured: true,
  },
  {
    id: 5,
    slug: 'crystal-cat-eye',
    name: 'Crystal Cat-Eye',
    rim: 'Full Rim',
    material: 'Acetate & Metal',
    gender: 'Women',
    shape: 'Cat-Eye',
    collections: ['optical', 'new'],
    price: 1500,
    colors: [{ name: 'Crystal / Plum Marble', hex: '#8c3a5b' }],
    images: [img('Sheet_Cat_Eye_frame_1.jpeg')],
    fit: 'contain',
    description:
      'A stylish cat-eye with a clear crystal top and plum marble lower rim, finished with slim metal temples.',
    features: ['Lightweight', 'Two-tone design', 'Metal temples', 'Everyday wear'],
    featured: true,
  },
  {
    id: 6,
    slug: 'tortoise-cat-eye',
    name: 'Tortoise Cat-Eye',
    rim: 'Full Rim',
    material: 'Acetate',
    gender: 'Women',
    shape: 'Cat-Eye',
    collections: ['optical'],
    price: 1500,
    colors: [{ name: 'Tortoise', hex: '#6b4226' }],
    images: [img('Sheet_Cat_eye_female_frame_2.jpeg')],
    description:
      'A soft cat-eye in classic tortoiseshell with gold accents on the temples. Warm, flattering and easy to style.',
    features: ['Lightweight', 'Gold temple accents', 'Comfortable fit', 'Everyday wear'],
    featured: true,
  },
  {
    id: 7,
    slug: 'black-white-cat-eye',
    name: 'Black & White Cat-Eye',
    rim: 'Full Rim',
    material: 'Acetate',
    gender: 'Women',
    shape: 'Cat-Eye',
    collections: ['optical'],
    price: 1300,
    colors: [{ name: 'Black / Ivory', hex: '#141414' }],
    images: [img('Sheet_Cat_eye_female_frame_3.jpeg')],
    fit: 'contain',
    description:
      'A bold black cat-eye with an ivory inner outline. A confident, fashionable frame that stands out.',
    features: ['Bold two-tone design', 'Durable sheet frame', 'Comfortable fit', 'Statement look'],
    featured: true,
  },
];

export const getFrameBySlug = (slug) => frames.find((f) => f.slug === slug);
export const featuredFrames = frames.filter((f) => f.featured);
