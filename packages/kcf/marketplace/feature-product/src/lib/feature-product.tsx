import styles from './feature-product.module.scss';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';

type ProductDetails = {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  rating: number;
  features: string[];
  dimensions: string;
  material: string;
  productionTime: string;
};

type ProductReview = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

// Helper function to get color based on rating (0 = red, 5 = green)
function getRatingColor(rating: number): string {
  // Clamp rating between 0 and 5
  const clampedRating = Math.max(0, Math.min(5, rating));

  // Calculate color on a red-yellow-green gradient
  // 0-2.5: red to yellow
  // 2.5-5: yellow to green
  const percentage = clampedRating / 5;

  let r: number, g: number, b: number;

  if (percentage < 0.5) {
    // Red (220, 38, 38) to Yellow (234, 179, 8)
    const t = percentage * 2; // 0 to 1
    r = Math.round(220 + (234 - 220) * t);
    g = Math.round(38 + (179 - 38) * t);
    b = Math.round(38 + (8 - 38) * t);
  } else {
    // Yellow (234, 179, 8) to Green (22, 163, 74)
    const t = (percentage - 0.5) * 2; // 0 to 1
    r = Math.round(234 + (22 - 234) * t);
    g = Math.round(179 + (163 - 179) * t);
    b = Math.round(8 + (74 - 8) * t);
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export function FeatureProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const intl = useIntl();

  const marketplaceProducts = useMemo<ProductDetails[]>(
    () => [
      {
        id: '1',
        name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.NAME' }),
        category: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.CATEGORY.DECORATION' }),
        image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.IMAGE' }),
        shortDescription: intl.formatMessage({
          id: 'MARKETPLACE.ITEMS.PRODUCT_1.SHORT_DESCRIPTION',
        }),
        longDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.LONG_DESCRIPTION' }),
        price: 19.99,
        rating: 4.5,
        features: [
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.HIGH_QUALITY_FINISH' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.LIGHTWEIGHT_DESIGN' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.EASY_TO_CLEAN' }),
        ],
        dimensions: '12 × 8 × 6 cm',
        material: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.MATERIAL.PLA' }),
        productionTime: '2-3',
      },
      {
        id: '2',
        name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.NAME' }),
        category: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.CATEGORY.FUNCTIONAL_PART' }),
        image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.IMAGE' }),
        shortDescription: intl.formatMessage({
          id: 'MARKETPLACE.ITEMS.PRODUCT_2.SHORT_DESCRIPTION',
        }),
        longDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.LONG_DESCRIPTION' }),
        price: 14.99,
        rating: 3.5,
        features: [
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.STRONG_LAYERS_ADHESION' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.RELIABLE_FIT' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.SUITABLE_FOR_PROTOTYPING' }),
        ],
        dimensions: '10 × 7 × 3 cm',
        material: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.MATERIAL.PLA' }),
        productionTime: '1-2',
      },
      {
        id: '3',
        name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.NAME' }),
        category: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.CATEGORY.GAMING' }),
        image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.IMAGE' }),
        shortDescription: intl.formatMessage({
          id: 'MARKETPLACE.ITEMS.PRODUCT_3.SHORT_DESCRIPTION',
        }),
        longDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.LONG_DESCRIPTION' }),
        price: 29.99,
        rating: 1,
        features: [
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.ERGONOMIC_DESIGN' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.CUSTOM_LOOK' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.COMPATIBLE_WITH_MOST_CONTROLLERS' }),
        ],
        dimensions: '15 × 9 × 4 cm',
        material: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.MATERIAL.PLA_PLUS' }),
        productionTime: '2-4',
      },
      {
        id: '4',
        name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.NAME' }),
        category: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.CATEGORY.JEWELRY' }),
        image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.IMAGE' }),
        shortDescription: intl.formatMessage({
          id: 'MARKETPLACE.ITEMS.PRODUCT_4.SHORT_DESCRIPTION',
        }),
        longDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.LONG_DESCRIPTION' }),
        price: 24.99,
        rating: 2.5,
        features: [
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.ELEGANT_STYLE' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.VERY_LIGHTWEIGHT' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.GREAT_GIFT_IDEA' }),
        ],
        dimensions: '5 × 5 × 2 cm',
        material: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.MATERIAL.RESIN' }),
        productionTime: '3-5',
      },
      {
        id: '5',
        name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.NAME' }),
        category: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.CATEGORY.TOYS' }),
        image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.IMAGE' }),
        shortDescription: intl.formatMessage({
          id: 'MARKETPLACE.ITEMS.PRODUCT_5.SHORT_DESCRIPTION',
        }),
        longDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.LONG_DESCRIPTION' }),
        price: 9.99,
        rating: 4.0,
        features: [
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.PLAYFUL_DESIGN' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.SAFE_ROUNDED_EDGES' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.COLLECTIBLE_FORMAT' }),
        ],
        dimensions: '8 × 8 × 8 cm',
        material: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.MATERIAL.PLA' }),
        productionTime: '1-2',
      },
      {
        id: '6',
        name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.NAME' }),
        category: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.CATEGORY.TECHNOLOGY' }),
        image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.IMAGE' }),
        shortDescription: intl.formatMessage({
          id: 'MARKETPLACE.ITEMS.PRODUCT_6.SHORT_DESCRIPTION',
        }),
        longDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.LONG_DESCRIPTION' }),
        price: 39.99,
        rating: 0.5,
        features: [
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.SMART_CABLE_ROUTING' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.COMPACT_FORMAT' }),
          intl.formatMessage({ id: 'MARKETPLACE.ITEMS.FEATURES.CLEAN_MINIMAL_DESIGN' }),
        ],
        dimensions: '18 × 12 × 5 cm',
        material: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.MATERIAL.PETG' }),
        productionTime: '2-3',
      },
    ],
    [intl],
  );

  const fakeReviews: ProductReview[] = [
    {
      id: 'r-1',
      productId: '1',
      author: 'Emma R.',
      rating: 5,
      comment: 'The finish is excellent and the print looks even better in person.',
      date: '2026-01-15',
    },
    {
      id: 'r-2',
      productId: '1',
      author: 'Lucas M.',
      rating: 4,
      comment: 'Great quality for the price. It was easy to place in my workspace decor.',
      date: '2026-02-03',
    },
    {
      id: 'r-3',
      productId: '2',
      author: 'Noah P.',
      rating: 3.5,
      comment: 'Perfect fit for my project and very solid material.',
      date: '2026-01-27',
    },
    {
      id: 'r-4',
      productId: '3',
      author: 'Sofia L.',
      rating: 1,
      comment: 'Comfortable to use and looks really cool on my setup.',
      date: '2026-02-11',
    },
    {
      id: 'r-5',
      productId: '4',
      author: 'Chloe B.',
      rating: 2.5,
      comment: 'Beautiful design and lightweight, exactly what I expected.',
      date: '2026-01-20',
    },
    {
      id: 'r-6',
      productId: '5',
      author: 'Milo D.',
      rating: 4,
      comment: 'Nice little toy concept, details are clean and smooth.',
      date: '2026-02-07',
    },
    {
      id: 'r-7',
      productId: '6',
      author: 'Ava S.',
      rating: 0.5,
      comment: 'Useful design overall and practical for cable organization.',
      date: '2026-02-14',
    },
  ];

  const product = useMemo(
    () => marketplaceProducts.find(item => item.id === id),
    [id, marketplaceProducts],
  );

  if (!product) {
    return (
      <div className={styles['not-found']}>
        <h1>{intl.formatMessage({ id: 'MARKETPLACE.NOT_FOUND.PAGE' })}</h1>
        <p>{intl.formatMessage({ id: 'MARKETPLACE.NOT_FOUND.DESCRIPTION' })}</p>
        <button type="button" onClick={() => navigate('/marketplace')}>
          {intl.formatMessage({ id: 'MARKETPLACE.NOT_FOUND.BACK_TO_HOME' })}
        </button>
      </div>
    );
  }

  const isFrenchLocale = intl.locale.toLowerCase().startsWith('fr');

  const formattedPrice = new Intl.NumberFormat(intl.locale, {
    style: 'currency',
    currency: isFrenchLocale ? 'EUR' : 'USD',
  }).format(product.price);

  const productReviews = fakeReviews.filter(review => review.productId === product.id);

  return (
    <div className={styles['container']}>
      <section className={styles['hero']}>
        <div className={styles['hero-image']} aria-hidden="true">
          {product.image}
        </div>
        <div className={styles['hero-content']}>
          <span className={styles['category']}>{product.category}</span>
          <h1>{product.name}</h1>
          <p className={styles['short-description']}>{product.shortDescription}</p>
          <p className={styles['long-description']}>{product.longDescription}</p>

          <div className={styles['meta']}>
            <span className={styles['price']}>{formattedPrice}</span>
            <span
              className={styles['rating']}
              style={{ backgroundColor: getRatingColor(product.rating), color: 'white' }}
            >
              ★ {product.rating.toFixed(1)}
            </span>
          </div>

          <a
            className={styles['cta']}
            href={`mailto:hello@example.com?subject=Order ${product.name}`}
          >
            {intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PAGE.ORDER' })}
          </a>
        </div>
      </section>

      <section className={styles['details']}>
        <div className={styles['features']}>
          <h2>{intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PAGE.HIGHLIGHTS' })}</h2>
          <ul>
            {product.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles['specs']}>
          <h2>{intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PAGE.SPECIFICATIONS' })}</h2>
          <dl>
            <div>
              <dt>{intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PAGE.DIMENSIONS' })}</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div>
              <dt>{intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PAGE.MATERIAL' })}</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>{intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PAGE.PRODUCTION_TIME' })}</dt>
              <dd>
                {product.productionTime} {intl.formatMessage({ id: 'SHARED.WORDS.DAYS' })}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles['reviews']}>
        <h2>{intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PAGE.CUSTOMER_REVIEWS' })}</h2>
        <div className={styles['review-list']}>
          {productReviews.map(review => (
            <article key={review.id} className={styles['review-card']}>
              <div className={styles['review-head']}>
                <strong>{review.author}</strong>
                <span style={{ backgroundColor: getRatingColor(review.rating), color: 'white' }}>
                  ★ {review.rating.toFixed(1)}
                </span>
              </div>
              <p>{review.comment}</p>
              <small>
                {new Date(review.date).toLocaleDateString(isFrenchLocale ? 'fr-FR' : 'en-US')}
              </small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FeatureProduct;
