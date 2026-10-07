/**
 * GALLERY
 * Photos live in public/images/gallery/.
 * `category` must be one of galleryCategories. `tall: true` gives a portrait tile.
 */
export const galleryCategories = ['Eye Checkup', 'Equipment', 'Events'];

const img = (name) => `/images/gallery/${name}`;

export const gallery = [
  { id: 1, category: 'Eye Checkup', src: img('eye-care-34.jpg'), alt: 'Vision test with a trial frame during an eye camp' },
  { id: 2, category: 'Eye Checkup', src: img('eye-care-33.jpg'), alt: 'Eye examination for a young patient', tall: true },
  { id: 3, category: 'Equipment', src: img('eye-care-42.jpg'), alt: 'Retinal imaging with a 3nethra fundus camera' },
  { id: 4, category: 'Eye Checkup', src: img('eye-care-44.jpg'), alt: 'Refraction test with trial lenses', tall: true },
  { id: 5, category: 'Eye Checkup', src: img('eye-care-39.jpg'), alt: 'Checking vision with trial lenses' },
  { id: 6, category: 'Equipment', src: img('eye-care-38.jpg'), alt: 'Computerised eye test on an auto-refractometer', tall: true },
  { id: 7, category: 'Eye Checkup', src: img('eye-care-32.jpg'), alt: 'Eye check-up for a school student' },
  { id: 8, category: 'Eye Checkup', src: img('eye-care-50.jpg'), alt: 'Eye examination with an ophthalmoscope', tall: true },
  { id: 9, category: 'Events', src: img('eye-care-41.jpg'), alt: 'Our team with guests at the Netra Kumbh eye camp' },
  { id: 10, category: 'Equipment', src: img('eye-care-43.jpg'), alt: 'Fundus camera eye scan in progress', tall: true },
  { id: 11, category: 'Eye Checkup', src: img('eye-care-49.jpg'), alt: 'Eye check-up for a senior patient', tall: true },
];
