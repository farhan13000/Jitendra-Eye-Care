/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION
 *  Update the business details below — every page reads from here.
 * ─────────────────────────────────────────────────────────────
 */

/** WhatsApp number in international format, digits only (country code + number). */
export const WHATSAPP_NUMBER = '919876543210';

export const SITE = {
  name: 'Jitendra Eye Care',
  shortName: 'Jitendra',
  tagline: 'Premium Eyewear & Eye Care',
  description:
    'Premium eyewear, advanced lenses and trusted eye-care services — all under one roof.',
  // Used in SEO titles, e.g. "Premium Frames, Lenses & Eye Care in <city>". Leave empty to omit.
  city: '',
  url: 'https://www.example.com', // your live domain (used for Open Graph URLs)
  ogImage:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=630&fit=crop&q=75',

  phone: '+91 98765 43210', // displayed
  phoneHref: '+919876543210', // used for tel: links
  whatsappDisplay: '+91 98765 43210',
  email: 'hello@example.com',

  address: {
    line1: 'Shop No. 12, Main Market Road',
    line2: 'Near City Centre',
    city: 'Your City',
    state: 'State',
    pin: '000000',
  },
  // Text Google Maps should search for (shop name + address works best).
  mapsQuery: 'Jitendra Eye Care, Main Market Road',

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
};

export const fullAddress = () => {
  const a = SITE.address;
  return [a.line1, a.line2, `${a.city}, ${a.state} ${a.pin}`].filter(Boolean).join(', ');
};

export const mapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;
