import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import Icon from './Icon';

/** Floating WhatsApp shortcut, bottom-right on every page. */
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink(MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" size={26} />
      <span className="wa-float__label">Chat with us</span>
    </a>
  );
}
