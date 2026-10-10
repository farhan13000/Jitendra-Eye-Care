import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import { SITE } from '../config/site';
import Img from './Img';
import Icon from './Icon';
import Reveal from './Reveal';

/** "Your Eyes Deserve Expert Care." — the primary booking banner. */
export default function CheckupCta() {
  return (
    <section className="section section--tight" aria-labelledby="checkup-title">
      <div className="container">
        <Reveal className="checkup-cta">
          <div className="checkup-cta__media">
            <Img
              src="/images/gallery/eye-care-39.jpg"
              alt="Our optometrist checking a patient's vision with a trial frame"
              ratio={4 / 3}
              widths={[480, 720, 960]}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div className="checkup-cta__body">
            <p className="eyebrow eyebrow--light">Eye Checkup</p>
            <h2 id="checkup-title" className="section-title">
              Your Eyes Deserve Expert Care.
            </h2>
            <p>
              Don&apos;t ignore changes in your vision. Get your eyes checked and receive professional guidance.
            </p>
            <ul className="checkup-cta__points">
              <li>
                <Icon name="clock" size={16} /> 20–30 minute comprehensive exam
              </li>
              <li>
                <Icon name="eye" size={16} /> Modern, computerised equipment
              </li>
              <li>
                <Icon name="calendar" size={16} /> {SITE.hours[0].days}, {SITE.hours[0].time}
              </li>
            </ul>
            <a href={whatsappLink(MESSAGES.checkup)} target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--lg">
              <Icon name="calendar" size={18} /> Book an Eye Checkup
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
