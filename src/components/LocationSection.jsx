import { SITE, fullAddress, mapsDirectionsUrl, mapsEmbedUrl } from '../config/site';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Icon from './Icon';

/** Address, hours, contact buttons and an embedded Google Map. */
export default function LocationSection({ headingLevel = 'h2', eyebrow = 'Visit Us', title = 'Come see the collection in person' }) {
  return (
    <section className="section" aria-label="Store location">
      <div className="container">
        <SectionHeading as={headingLevel} eyebrow={eyebrow} title={title} />
        <div className="location">
          <Reveal className="location__info">
            <div className="info-row">
              <span className="info-row__icon">
                <Icon name="pin" />
              </span>
              <div>
                <h3>Visit Our Store</h3>
                <p>{fullAddress()}</p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-row__icon">
                <Icon name="phone" />
              </span>
              <div>
                <h3>Call Us</h3>
                <p>
                  <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                </p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-row__icon">
                <Icon name="whatsapp" />
              </span>
              <div>
                <h3>WhatsApp</h3>
                <p>
                  <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
                    {SITE.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-row__icon">
                <Icon name="clock" />
              </span>
              <div>
                <h3>Opening Hours</h3>
                <dl className="hours">
                  {SITE.hours.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="location__ctas">
              <a href={mapsDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <Icon name="directions" size={18} /> Get Directions
              </a>
              <a href={whatsappLink(MESSAGES.visit)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                <Icon name="whatsapp" size={18} /> Chat on WhatsApp
              </a>
              <a href={`tel:${SITE.phoneHref}`} className="btn btn--outline">
                <Icon name="phone" size={18} /> Call Now
              </a>
            </div>
          </Reveal>
          <Reveal className="location__map" delay={120}>
            <iframe
              title={`Map showing ${SITE.name}`}
              src={mapsEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
