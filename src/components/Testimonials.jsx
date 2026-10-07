import { testimonials } from '../data/testimonials';
import { SITE } from '../config/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Icon from './Icon';

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          id="testimonials-title"
          title="Trusted by families across the city"
          lead="What our customers say about their experience with us."
          action={
            <a href={SITE.social.google} target="_blank" rel="noopener noreferrer" className="text-link">
              Read reviews on Google <Icon name="arrowRight" size={14} />
            </a>
          }
        />
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.name} className="testimonial" delay={i * 80}>
              <div className="testimonial__stars" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Icon key={k} name="star" size={14} />
                ))}
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.detail}</small>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
