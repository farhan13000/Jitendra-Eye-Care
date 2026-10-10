import { WHATSAPP_NUMBER, SITE } from '../config/site';
import { formatPrice } from './format';

/** Build a wa.me link with a pre-filled message. */
export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MESSAGES = {
  general: 'Hello, I would like to know more about your eyewear and eye-care services.',
  checkup: 'Hello, I would like to book an eye checkup. Please let me know the available timings.',
  lensHelp:
    'Hello, I need help choosing the right lenses for my glasses. Could you please guide me?',
  visit: `Hello, I would like to visit ${SITE.name}. Could you share the best time to come in?`,
};

/** Product (frame) enquiry — includes name, category and price. */
export function generateWhatsAppLink(product, { intent = 'details', color } = {}) {
  const lines = [
    'Hello, I am interested in the following product:',
    '',
    `Product: ${product.name}`,
    `Category: ${product.rim ?? product.category}`,
  ];
  if (product.material) lines.push(`Material: ${product.material}`);
  if (color) lines.push(`Colour: ${color}`);
  if (product.price != null) lines.push(`Price: ${formatPrice(product.price)}`);
  lines.push('');
  lines.push(
    intent === 'availability'
      ? 'Is this frame currently available in store? Please let me know.'
      : 'Please share availability and more details.'
  );
  return whatsappLink(lines.join('\n'));
}

export const brandEnquiryLink = (brand) =>
  whatsappLink(
    `Hello, I would like to know more about ${brand.name} lenses.

Please share the options and pricing for my prescription.`
  );

export const lensEnquiryLink = (lens) =>
  whatsappLink(
    `Hello, I would like to know more about ${lens.name} lenses.\n\nPlease share the options, pricing and suitability for my prescription.`
  );

export const serviceEnquiryLink = (service) =>
  whatsappLink(
    service.slug === 'eye-checkup'
      ? MESSAGES.checkup
      : `Hello, I would like to enquire about your ${service.title} service.\n\nPlease share the details and available timings.`
  );
