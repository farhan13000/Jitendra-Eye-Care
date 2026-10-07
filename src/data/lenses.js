import { unsplash } from '../utils/image';

/** Lens solutions. `icon` refers to a name in components/Icon.jsx. */
export const lenses = [
  {
    slug: 'single-vision',
    name: 'Single Vision',
    icon: 'eye',
    summary: 'For everyday distance or reading vision.',
    description:
      'One clear prescription across the whole lens: the most common and comfortable choice for short- or long-sightedness.',
    benefits: ['Wide, distortion-free field of view', 'Easy to adapt to', 'Available in all lens indices'],
    idealFor: 'Distance or reading correction',
    image: unsplash('1517841905240-472988babdf9'),
  },
  {
    slug: 'progressive',
    name: 'Progressive',
    icon: 'layers',
    summary: 'For seamless vision across multiple distances.',
    description:
      'A smooth, line-free transition from distance to intermediate to near. One pair of glasses for everything.',
    benefits: ['No visible lines', 'Natural vision at every distance', 'Personalised fitting'],
    idealFor: 'Age-related near vision (40+)',
    image: unsplash('1557862921-37829c790f19'),
  },
  {
    slug: 'blue-light',
    name: 'Blue Light Protection',
    icon: 'monitor',
    summary: 'For digital-screen users.',
    description:
      'A specialised coating that filters a portion of high-energy blue light from screens, for more comfortable long hours at the desk.',
    benefits: ['Reduces glare from screens', 'More comfortable screen time', 'Clear, near-neutral tint'],
    idealFor: 'Office work, students, gamers',
    image: unsplash('1580894908361-967195033215'),
  },
  {
    slug: 'anti-reflective',
    name: 'Anti-Reflective',
    icon: 'sparkle',
    summary: 'Improved clarity and reduced reflections.',
    description:
      'Multi-layer coatings that cut reflections and halos for crisper vision, better night driving and clearer eye contact in photos.',
    benefits: ['Sharper, brighter vision', 'Less glare at night', 'Easier to clean'],
    idealFor: 'Everyone: recommended for every pair',
    image: unsplash('1625591342274-013866180475'),
  },
  {
    slug: 'photochromic',
    name: 'Photochromic',
    icon: 'sun',
    summary: 'Lenses that adapt to changing light conditions.',
    description:
      'Clear indoors and automatically darkening outdoors: the convenience of glasses and sunglasses in a single pair.',
    benefits: ['Automatic tint outdoors', '100% UV protection', 'One pair for indoor & outdoor'],
    idealFor: 'Outdoor commuters & travellers',
    image: unsplash('1473496169904-658ba7c44d8a'),
  },
  {
    slug: 'high-index',
    name: 'High Index',
    icon: 'feather',
    summary: 'Thin and lightweight lenses for higher prescriptions.',
    description:
      'Advanced lens materials that bend light more efficiently, so strong prescriptions look slimmer and feel lighter.',
    benefits: ['Noticeably thinner lenses', 'Lighter on the nose', 'Better looking in any frame'],
    idealFor: 'Higher powers (±4.00 and above)',
    image: unsplash('1614715838608-dd527c46231d'),
  },
  {
    slug: 'uv-protection',
    name: 'UV Protection',
    icon: 'shield',
    summary: 'Protection from harmful UV exposure.',
    description:
      'UV400 filtering that blocks harmful UVA and UVB rays. Essential for long-term eye health, especially outdoors.',
    benefits: ['Blocks 100% UVA & UVB', 'Long-term eye health', 'Available on clear & tinted lenses'],
    idealFor: 'Everyone, especially outdoors',
    image: unsplash('1577744486770-020ab432da65'),
  },
];

/** Simple lens finder: lifestyle need -> recommended lens slugs. */
export const lensNeeds = [
  { id: 'screens', label: 'I spend hours on screens', recommend: ['blue-light', 'anti-reflective'] },
  { id: 'outdoor', label: 'I am outdoors a lot', recommend: ['photochromic', 'uv-protection'] },
  { id: 'reading', label: 'I struggle with near & far', recommend: ['progressive', 'anti-reflective'] },
  { id: 'high-power', label: 'My prescription is strong', recommend: ['high-index', 'anti-reflective'] },
  { id: 'everyday', label: 'I need everyday clarity', recommend: ['single-vision', 'anti-reflective'] },
];

export const getLens = (slug) => lenses.find((l) => l.slug === slug);
