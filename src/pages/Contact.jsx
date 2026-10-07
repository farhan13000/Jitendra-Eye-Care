import { Link } from 'react-router-dom';
import Seo, { inCity } from '../components/Seo';
import PageHeader from '../components/PageHeader';
import LocationSection from '../components/LocationSection';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { SITE, fullAddress } from '../config/site';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';

const quick = [
  { icon: 'calendar', title: 'Book an eye checkup', text: 'Pick a convenient time', href: whatsappLink(MESSAGES.checkup) },
  { icon: 'glasses', title: 'Ask about a frame', text: 'Availability, colours & sizes', href: whatsappLink('Hello, I would like to ask about a frame I saw on your website.') },
  { icon: 'layers', title: 'Lens advice', text: 'Share your prescription', href: whatsappLink(MESSAGES.lensHelp) },
];

export default function Contact() {
  return (
    <>
      <Seo
        title={inCity('Contact & Directions')}
        description={`Visit ${SITE.name} at ${fullAddress()}. Call ${SITE.phone} or chat on WhatsApp.`}
      />
      <PageHeader
        eyebrow="Contact"
        title="We'd love to see you"
        lead="Visit the store, give us a call, or message us on WhatsApp. We usually reply quickly during opening hours."
        crumbs={[{ label: 'Contact' }]}
      >
        <div className="page-header__ctas">
          <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
            <Icon name="whatsapp" size={20} /> Chat on WhatsApp
          </a>
          <a href={`tel:${SITE.phoneHref}`} className="btn btn--outline btn--lg">
            <Icon name="phone" size={18} /> Call Now
          </a>
        </div>
      </PageHeader>

      <section className="section section--tight" aria-label="Quick enquiries">
        <div className="container quick-grid">
          {quick.map((q, i) => (
            <Reveal as="a" key={q.title} href={q.href} target="_blank" rel="noopener noreferrer" className="quick-card" delay={i * 70}>
              <span className="quick-card__icon">
                <Icon name={q.icon} size={22} />
              </span>
              <span>
                <strong>{q.title}</strong>
                <small>{q.text}</small>
              </span>
              <Icon name="arrowRight" size={18} />
            </Reveal>
          ))}
        </div>
      </section>

      <LocationSection headingLevel="h2" eyebrow="Find Us" title="Store details & directions" />

      <section className="section section--tight">
        <div className="container center-cta">
          <p className="muted">
            Have a question first? Browse our <Link to="/faq" className="text-link">frequently asked questions</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
