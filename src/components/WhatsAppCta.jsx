import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import Icon from './Icon';
import Reveal from './Reveal';

const steps = [
  { icon: 'glasses', title: 'Browse', text: 'Explore frames and lenses online.' },
  { icon: 'whatsapp', title: 'Enquire', text: 'Tap “Enquire” to message us instantly.' },
  { icon: 'pin', title: 'Visit', text: 'Try on in store with expert guidance.' },
];

/** Explains the Browse → Enquire → Visit journey and invites a WhatsApp chat. */
export default function WhatsAppCta() {
  return (
    <section className="section section--tight" aria-labelledby="wa-cta-title">
      <div className="container">
        <Reveal className="wa-cta">
          <div className="wa-cta__copy">
            <p className="eyebrow">Have a question?</p>
            <h2 id="wa-cta-title" className="section-title">
              Talk to an expert on WhatsApp
            </h2>
            <p className="lead">
              Share your prescription, ask about a frame, or check availability. Real answers from our opticians, no
              bots.
            </p>
            <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              <Icon name="whatsapp" size={20} /> Chat on WhatsApp
            </a>
          </div>
          <ol className="wa-cta__steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="wa-cta__step-icon">
                  <Icon name={s.icon} size={20} />
                </span>
                <span>
                  <small>Step {i + 1}</small>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
