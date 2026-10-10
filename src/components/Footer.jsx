import { Link } from 'react-router-dom';
import { SITE, fullAddress } from '../config/site';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import Logo from './Logo';
import Icon from './Icon';

const columns = [
  {
    title: 'Quick Links',
    links: [
      ['Home', '/'],
      ['Frames', '/frames'],
      ['Lenses', '/lenses'],
      ['Services', '/services'],
      ['About', '/about'],
      ['Gallery', '/gallery'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Products',
    links: [
      ['Frames', '/frames'],
      ['Cat-Eye Frames', '/frames?category=cat-eye'],
      ['Lenses', '/lenses'],
      ['Contact Lenses', '/services#contact-lens-consultation'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Eye Checkup', '/services#eye-checkup'],
      ['Consultation', '/services#vision-consultation'],
      ['Frame Fitting', '/services#frame-fitting'],
      ['Lens Consultation', '/services#lens-consultation'],
      ['FAQ', '/faq'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p>
              Professional eye care, premium eyewear and honest guidance. Helping you see clearly and look your
              best.
            </p>
            <div className="footer__social">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" size={18} />
              </a>
              <a href={SITE.social.google} target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile">
                <Icon name="google" size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              <h2 className="footer__title">{col.title}</h2>
              <ul>
                {col.links.map(([label, to]) => (
                  <li key={label + to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer__col footer__contact">
            <h2 className="footer__title">Contact</h2>
            <ul>
              <li>
                <Icon name="phone" size={16} />
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              </li>
              <li>
                <Icon name="whatsapp" size={16} />
                <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <Icon name="pin" size={16} />
                <span>{fullAddress()}</span>
              </li>
              {SITE.hours.map((h) => (
                <li key={h.days}>
                  <Icon name="clock" size={16} />
                  <span>
                    {h.days}: {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
          </p>
          <p className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
