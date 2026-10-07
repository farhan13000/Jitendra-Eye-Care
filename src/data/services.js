import { unsplash } from '../utils/image';

/** Eye-care services. `icon` refers to a name in components/Icon.jsx. */
export const services = [
  {
    slug: 'eye-checkup',
    title: 'Comprehensive Eye Checkup',
    icon: 'eye',
    summary: 'Professional vision assessment and eye examination.',
    description:
      'A thorough, unhurried examination using modern equipment: vision testing, refraction and an overall eye-health assessment, explained clearly at every step.',
    benefits: ['Computerised & subjective refraction', 'Eye-health screening', 'Clear, accurate prescription'],
    image: unsplash('1631217868264-e5b90bb7e133'),
  },
  {
    slug: 'vision-consultation',
    title: 'Vision Consultation',
    icon: 'chat',
    summary: 'Guidance based on your visual requirements.',
    description:
      'A one-to-one conversation about your work, screen time, driving and lifestyle so we can recommend exactly what your eyes need.',
    benefits: ['Lifestyle-based advice', 'Honest recommendations', 'No pressure to buy'],
    image: unsplash('1666214280557-f1b5022eb634'),
  },
  {
    slug: 'frame-fitting',
    title: 'Frame Fitting',
    icon: 'ruler',
    summary: 'Proper frame fitting for comfort and alignment.',
    description:
      'Precise measurements and hand adjustments so your frames sit level, stay put and feel comfortable all day, including free re-adjustments.',
    benefits: ['Pupillary distance measurement', 'Custom nose & temple adjustment', 'Free re-alignment visits'],
    image: unsplash('1556742049-0cfed4f6a45d'),
  },
  {
    slug: 'lens-consultation',
    title: 'Lens Consultation',
    icon: 'layers',
    summary: 'Help choosing the appropriate lens for your prescription and lifestyle.',
    description:
      'Single vision, progressive, blue-light, photochromic or high-index: we explain the options in plain language and help you choose wisely.',
    benefits: ['Prescription-matched options', 'Transparent pricing', 'Coating recommendations'],
    image: unsplash('1612531386530-97286d97c2d2'),
  },
  {
    slug: 'kids-eye-care',
    title: 'Kids Eye Care',
    icon: 'smile',
    summary: 'Eye-care support and vision screening for children.',
    description:
      'Gentle, child-friendly vision screening, plus durable kids frames and impact-resistant lenses built for school and play.',
    benefits: ['Child-friendly screening', 'Durable, flexible frames', 'Guidance for parents'],
    image: unsplash('1471286174890-9c112ffca5b4'),
  },
  {
    slug: 'contact-lens-consultation',
    title: 'Contact Lens Consultation',
    icon: 'drop',
    summary: 'Guidance for suitable contact lens options and usage.',
    description:
      'Advice on daily, monthly and toric options, with hands-on help for insertion, removal and safe lens care.',
    benefits: ['Trial & fitting guidance', 'Care & hygiene training', 'Leading brands available'],
    image: unsplash('1619451334792-150fd785ee74'),
  },
  {
    slug: 'prescription-glasses',
    title: 'Prescription Glasses',
    icon: 'glasses',
    summary: 'Complete solution from prescription to frame and lenses.',
    description:
      'Everything under one roof: eye test, frame selection, lens choice, precise fitting and after-care for the life of your glasses.',
    benefits: ['One-stop service', 'Quality-checked lenses', 'After-sales support'],
    image: unsplash('1574258495973-f010dfbb5371'),
  },
  {
    slug: 'sunglasses',
    title: 'Sunglasses',
    icon: 'sun',
    summary: 'Prescription and non-prescription sunglasses.',
    description:
      'Stylish UV-protective sunglasses, with or without your prescription, including polarised options for driving and travel.',
    benefits: ['100% UV protection', 'Polarised options', 'Prescription available'],
    image: unsplash('1572635196237-14b3f281503f'),
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
