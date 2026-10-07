import { useState } from 'react';
import Seo, { inCity } from '../components/Seo';
import PageHeader from '../components/PageHeader';
import LensCard from '../components/LensCard';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CheckupCta from '../components/CheckupCta';
import Icon from '../components/Icon';
import { lenses, lensNeeds, getLens } from '../data/lenses';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import { unsplash } from '../utils/image';
import { formatPrice } from '../utils/format';
import { SITE } from '../config/site';

export default function Lenses() {
  const [need, setNeed] = useState(null);
  const selected = lensNeeds.find((n) => n.id === need);
  const recommended = selected ? selected.recommend.map(getLens) : [];

  const finderMessage = selected
    ? `Hello, I need help choosing lenses. ${selected.label}. You suggested ${recommended
        .map((l) => l.name)
        .join(' + ')}. Could you share options and pricing?`
    : MESSAGES.lensHelp;

  return (
    <>
      <Seo
        title={inCity('Prescription Lenses: Progressive, Blue Light & More')}
        description="Single vision, progressive, blue-light, anti-reflective, photochromic, high-index and UV-protective lenses, matched to your prescription and lifestyle."
      />
      <PageHeader
        eyebrow="Lens Solutions"
        title="The Right Lens Makes All the Difference"
        lead="Your frame is what people see. Your lenses are how you see. We help you choose both, wisely."
        priceFrom={formatPrice(SITE.startingPrice)}
        crumbs={[{ label: 'Lenses' }]}
        image={unsplash('1614715838608-dd527c46231d')}
      />

      {/* Lens finder */}
      <section className="section section--tight" id="lens-finder" aria-labelledby="finder-title">
        <div className="container">
          <Reveal className="finder">
            <div className="finder__intro">
              <p className="eyebrow">Lens Finder</p>
              <h2 id="finder-title" className="section-title">
                Find the Right Lens for You
              </h2>
              <p>Choose what describes you best and we&apos;ll suggest a starting point.</p>
            </div>
            <div className="finder__options" role="radiogroup" aria-label="Your vision needs">
              {lensNeeds.map((n) => (
                <button
                  key={n.id}
                  role="radio"
                  aria-checked={need === n.id}
                  className={`finder__option ${need === n.id ? 'is-active' : ''}`}
                  onClick={() => setNeed(n.id)}
                >
                  {n.label}
                  <Icon name="check" size={16} />
                </button>
              ))}
            </div>
            <div className="finder__result" aria-live="polite">
              {selected ? (
                <>
                  <p className="finder__label">We recommend</p>
                  <ul>
                    {recommended.map((l) => (
                      <li key={l.slug}>
                        <a href={`#${l.slug}`}>
                          <Icon name={l.icon} size={18} /> {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="finder__note">Your optician will confirm the best choice after checking your prescription.</p>
                </>
              ) : (
                <p className="finder__note">Select an option to see our recommendation.</p>
              )}
              <a href={whatsappLink(finderMessage)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                <Icon name="whatsapp" size={18} /> Ask an Expert
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="all-lenses-title">
        <div className="container">
          <SectionHeading
            id="all-lenses-title"
            eyebrow="All Lens Types"
            title="Clarity, comfort and protection"
            lead="Every lens can be combined with coatings such as anti-reflective and UV protection."
          />
          <div className="lens-grid">
            {lenses.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 3) * 70}>
                <LensCard lens={l} highlighted={recommended.some((r) => r.slug === l.slug)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CheckupCta />
    </>
  );
}
