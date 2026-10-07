import { useState } from 'react';
import { SITE } from '../config/site';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import Icon from './Icon';

const KEY = 'announcement-dismissed';

export default function AnnouncementBar() {
  const [hidden, setHidden] = useState(() => {
    try {
      return sessionStorage.getItem(KEY) === '1';
    } catch {
      return false;
    }
  });

  if (hidden || !SITE.announcement) return null;

  const dismiss = () => {
    setHidden(true);
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* storage unavailable: dismissal just won't persist */
    }
  };

  return (
    <div className="announcement">
      <p className="announcement__text">
        <span>{SITE.announcement}</span>{' '}
        <a href={whatsappLink(MESSAGES.checkup)} target="_blank" rel="noopener noreferrer">
          Book now <Icon name="arrowRight" size={14} />
        </a>
      </p>
      <button className="announcement__close" onClick={dismiss} aria-label="Dismiss announcement">
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}
