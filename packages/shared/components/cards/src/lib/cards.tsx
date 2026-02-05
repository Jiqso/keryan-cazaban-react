import styles from './cards.module.scss';
import { useState } from 'react';
import { useIntl } from 'react-intl';

export interface PortfolioCardProps {
  companyName: string;
  projectTitle?: string;
  description?: string;
  previewImage?: string;
  websiteUrl?: string;
  tags?: string[];
}

export function PortfolioCard({
  companyName,
  projectTitle,
  description,
  previewImage,
  websiteUrl,
  tags = [],
}: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false);
  const intl = useIntl();

  return (
    <div className={styles['portfolio']}>
      {/* Company Name Header */}
      <div className={styles['portfolio-header']}>
        <h3 className={styles['company-name']}>{companyName}</h3>
      </div>

      {/* Website Preview */}
      <div className={styles['portfolio-preview']}>
        {!imageError && previewImage ? (
          <img
            src={previewImage}
            alt={`${projectTitle} preview`}
            className={styles['preview-image']}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles['preview-placeholder']}>
            <span>
              {intl.formatMessage({ id: 'COMPONENTS.CARDS.PORTFOLIO.PREVIEW_UNAVAILABLE' })}
            </span>
          </div>
        )}
      </div>

      {/* Project Details */}
      {(websiteUrl || description || projectTitle) && (
        <div className={styles['portfolio-content']}>
          <h4 className={styles['project-title']}>{projectTitle}</h4>
          {description && <p className={styles['description']}>{description}</p>}

          {/* Tags */}
          {tags.length > 0 && (
            <div className={styles['tags']}>
              {tags.map((tag, index) => (
                <span key={index} className={styles['tag']}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Visit Button */}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['visit-button']}
              onClick={e => e.stopPropagation()}
            >
              {intl.formatMessage({ id: 'COMPONENTS.CARDS.PORTFOLIO.VISIT_WEBSITE' })} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export interface MarketplaceCardProps {
  name: string;
  image: string;
  shortDescription: string;
  price: number;
  rating: number;
  onClick: () => void;
}

export function MarketplaceCard({
  name,
  image,
  shortDescription,
  price,
  rating,
  onClick,
}: MarketplaceCardProps) {
  return (
    <div className={styles['marketplace']} onClick={onClick}>
      <span className={styles['marketplace-icon']} role="img" aria-label="Art">
        {image}
      </span>
      <h3>{name}</h3>
      <div className={styles['marketplace-details']}>
        <p>{price} €</p>
        <div className={styles['marketplace-rating']}>
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              className={
                star <= Math.round(rating)
                  ? rating > 3.5
                    ? styles['star-good']
                    : rating > 2
                      ? styles['star-average']
                      : styles['star-bad']
                  : styles['star-empty']
              }
              aria-label={star <= Math.round(rating) ? 'Filled star' : 'Empty star'}
              role="img"
            >
              ★
            </span>
          ))}
          <span className={styles['marketplace-rating-value']}>{rating}</span>
        </div>
      </div>
    </div>
  );
}
