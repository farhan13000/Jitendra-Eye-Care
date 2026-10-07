import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Icon from '../components/Icon';
import { faqs } from '../data/faqs';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';

export default function Faq() {
  return (
    <>
      <Seo title="FAQ" description="Answers to common questions about eye checkups, frames, lenses, pricing and delivery times." />
      <PageHeader
        eyebrow="Help"
        title="Frequently Asked Questions"
        lead="Everything you need to know before your visit."
        crumbs={[{ label: 'FAQ' }]}
      />
      <section className="section section--tight">
        <div className="container container--narrow">
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>
                  {f.q}
                  <Icon name="chevronDown" size={18} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="faq__more">
            <p>Still have a question?</p>
            <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              <Icon name="whatsapp" size={18} /> Ask us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
