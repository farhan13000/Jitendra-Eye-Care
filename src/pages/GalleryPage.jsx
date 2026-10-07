import { useState } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';
import { gallery, galleryCategories } from '../data/gallery';
import { SITE } from '../config/site';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <>
      <Seo title="Gallery" description={`A look inside ${SITE.name}: our store, eyewear collection, team and eye-care studio.`} />
      <PageHeader
        eyebrow="Gallery"
        title="A look inside our studio"
        lead="Our store, our collection, our team, and the happy faces we get to see every day."
        crumbs={[{ label: 'Gallery' }]}
      />
      <section className="section section--catalog">
        <div className="container">
          <div className="chip-row chip-row--scroll" role="group" aria-label="Filter gallery">
            {['All', ...galleryCategories].map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>
          {/* key re-triggers the fade-in when the filter changes */}
          <div key={filter} className="fade-in">
            <Gallery items={items} />
          </div>
        </div>
      </section>
    </>
  );
}
