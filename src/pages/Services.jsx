import Seo, { inCity } from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import Icon from '../components/Icon';
import CheckupCta from '../components/CheckupCta';
import { services } from '../data/services';
import { serviceEnquiryLink, whatsappLink, MESSAGES } from '../utils/whatsapp';
import { unsplash } from '../utils/image';

export default function Services() {
  return (
    <>
      <Seo
        title={inCity('Eye Checkup & Eye Care Services')}
        description="Comprehensive eye checkups, vision and lens consultation, frame fitting, kids eye care, contact lens consultation, prescription glasses and sunglasses."
      />
      <PageHeader
        eyebrow="Eye Care Services"
        title="Expert care for every pair of eyes"
        lead="From a thorough eye examination to the final fitting of your glasses, everything happens under one roof."
        crumbs={[{ label: 'Services' }]}
        image={unsplash('1666214280557-f1b5022eb634')}
      >
        <a href={whatsappLink(MESSAGES.checkup)} target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--lg">
          <Icon name="calendar" size={18} /> Book Eye Checkup
        </a>
      </PageHeader>

      <nav className="service-index" aria-label="Services on this page">
        <div className="container">
          <div className="chip-row chip-row--scroll">
            {services.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="chip">
                <Icon name={s.icon} size={15} /> {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="container service-list">
          {services.map((s, i) => (
            <Reveal as="article" key={s.slug} id={s.slug} className={`service-row ${i % 2 ? 'service-row--flip' : ''}`}>
              <div className="service-row__media">
                <Img src={s.image} alt={s.title} ratio={4 / 3} widths={[480, 720, 960]} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="service-row__body">
                <span className="service-row__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <p className="eyebrow">Service {String(i + 1).padStart(2, '0')}</p>
                <h2 className="service-row__title">{s.title}</h2>
                <p className="service-row__summary">{s.summary}</p>
                <p>{s.description}</p>
                <ul className="check-list">
                  {s.benefits.map((b) => (
                    <li key={b}>
                      <Icon name="check" size={16} /> {b}
                    </li>
                  ))}
                </ul>
                <a href={serviceEnquiryLink(s)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                  <Icon name="whatsapp" size={18} /> {s.slug === 'eye-checkup' ? 'Book on WhatsApp' : 'Book / Enquire on WhatsApp'}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CheckupCta />
    </>
  );
}
