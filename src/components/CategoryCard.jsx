import { Link } from 'react-router-dom';
import Img from './Img';
import Icon from './Icon';

export default function CategoryCard({ category, count }) {
  return (
    <Link to={`/frames?category=${category.slug}`} className="category-card">
      <Img
        src={category.image}
        alt=""
        ratio={3 / 4}
        widths={[320, 480, 640]}
        sizes="(max-width: 640px) 50vw, 25vw"
        className={category.fit === 'contain' ? 'img--contain' : undefined}
      />
      <span className="category-card__overlay" />
      <span className="category-card__text">
        <span className="category-card__name">{category.name}</span>
        <span className="category-card__blurb">
          {category.blurb}
          {count != null && ` · ${count} styles`}
        </span>
      </span>
      <span className="category-card__arrow">
        <Icon name="arrowRight" size={18} />
      </span>
    </Link>
  );
}
