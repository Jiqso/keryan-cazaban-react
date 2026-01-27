import styles from './cards.module.scss';
import { useState } from 'react';
import { useIntl } from 'react-intl';

export interface PortfolioCardProps {
  companyName: string;
  projectTitle?: string;
  description?: string;
  previewImage?: string;
  websiteUrl?: string;
  // tags?: string[];
}

export function PortfolioCard({
  companyName,
  projectTitle,
  description,
  previewImage,
  websiteUrl,
  // tags = [],
}: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false);
  const intl = useIntl();

  return (
    <div className={styles['card']}>
      {/* Company Name Header */}
      <div className={styles['card-header']}>
        <h3 className={styles['company-name']}>{companyName}</h3>
      </div>

      {/* Website Preview */}
      <div className={styles['card-preview']}>
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
        <div className={styles['card-content']}>
          {/* <h4 className={styles['project-title']}>{projectTitle}</h4> */}
          {/* {description && <p className={styles['description']}>{description}</p>} */}

          {/* Tags */}
          {/* {tags.length > 0 && (
          <div className={styles['tags']}>
            {tags.map((tag, index) => (
              <span key={index} className={styles['tag']}>
                {tag}
              </span>
            ))}
          </div>
        )} */}

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
