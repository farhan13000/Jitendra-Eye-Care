/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION
 *  Update the business details below — every page reads from here.
 * ─────────────────────────────────────────────────────────────
 */

/** WhatsApp number in international format, digits only (country code + number). */
export const WHATSAPP_NUMBER = '919044663154';

export const SITE = {
  name: 'Jitendra Eye Care',
  shortName: 'Jitendra',
  tagline: 'Premium Eyewear & Eye Care',
  description:
    'Premium eyewear, advanced lenses and trusted eye-care services — all under one roof.',
  // Used in SEO titles, e.g. "Premium Frames, Lenses & Eye Care in <city>". Leave empty to omit.
  city: 'Badlapur',
  url: 'https://www.example.com', // your live domain (used for Open Graph URLs)
  ogImage:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=630&fit=crop&q=75',

  phone: '+91 90446 63154', // displayed
  phoneHref: '+919044663154', // used for tel: links
  whatsappDisplay: '+91 90446 63154',
  email: 'hello@example.com',

  address: {
    line1: 'Ajay Watch House, Basement',
    line2: 'In front of Saltanat Bahadur Inter College',
    city: 'Badlapur, Jaunpur',
    state: 'Uttar Pradesh',
    pin: '222125',
  },
  // Text Google Maps should search for (shop name + address works best).
  mapsQuery: 'Ajay Watch House, Badlapur, Jaunpur, Uttar Pradesh 222125',

  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', time: 'By appointment' },
  ],

  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    google: 'https://www.google.com/maps',
  },

  // Headline numbers shown in the hero. Years in business is calculated from foundedYear.
  stats: [
    { value: '500+', label: 'Frames in store' },
    { value: '4.9★', label: 'Google rating' },
  ],

  announcement: 'Comprehensive eye checkups available every day — book your slot on WhatsApp.',
  foundedYear: 2008,

  // "Starting from" price (in ₹) shown on the Frames and Lenses pages and on each lens card.
  startingPrice: 1000,
};

export const fullAddress = () => {
  const a = SITE.address;
  return [a.line1, a.line2, `${a.city}, ${a.state} ${a.pin}`].filter(Boolean).join(', ');
};

export const mapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;
