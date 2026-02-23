import styles from './feature-marketplace.module.scss';
import { MarketplaceCard } from '@packages/shared/components/cards';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';

export function FeatureMarketplace() {
  const navigate = useNavigate();
  const intl = useIntl();

  function handleCardClick(productId: number) {
    navigate(`/marketplace/${productId}`);
  }
  const itemsTemplate = [
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_1.SHORT_DESCRIPTION',
      }),
      price: 19.99,
      rating: 4.5,
      onClick: () => {
        handleCardClick(1);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_2.SHORT_DESCRIPTION',
      }),
      price: 14.99,
      rating: 3.5,
      onClick: () => {
        handleCardClick(2);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_3.SHORT_DESCRIPTION',
      }),
      price: 29.99,
      rating: 1,
      onClick: () => {
        handleCardClick(3);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_4.SHORT_DESCRIPTION',
      }),
      price: 24.99,
      rating: 2.5,
      onClick: () => {
        handleCardClick(4);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_5.SHORT_DESCRIPTION',
      }),
      price: 9.99,
      rating: 4.0,
      onClick: () => {
        handleCardClick(5);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.IMAGE' }),
      shortDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.SHORT_DESCRIPTION' }),
      price: 39.99,
      rating: 0.5,
      onClick: () => {
        handleCardClick(6);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_1.SHORT_DESCRIPTION',
      }),
      price: 19.99,
      rating: 4.5,
      onClick: () => {
        handleCardClick(1);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_2.SHORT_DESCRIPTION',
      }),
      price: 14.99,
      rating: 3.5,
      onClick: () => {
        handleCardClick(2);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_3.SHORT_DESCRIPTION',
      }),
      price: 29.99,
      rating: 1,
      onClick: () => {
        handleCardClick(3);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_4.SHORT_DESCRIPTION',
      }),
      price: 24.99,
      rating: 2.5,
      onClick: () => {
        handleCardClick(4);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_5.SHORT_DESCRIPTION',
      }),
      price: 9.99,
      rating: 4.0,
      onClick: () => {
        handleCardClick(5);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.IMAGE' }),
      shortDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.SHORT_DESCRIPTION' }),
      price: 39.99,
      rating: 0.5,
      onClick: () => {
        handleCardClick(6);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_1.SHORT_DESCRIPTION',
      }),
      price: 19.99,
      rating: 4.5,
      onClick: () => {
        handleCardClick(1);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_2.SHORT_DESCRIPTION',
      }),
      price: 14.99,
      rating: 3.5,
      onClick: () => {
        handleCardClick(2);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_3.SHORT_DESCRIPTION',
      }),
      price: 29.99,
      rating: 1,
      onClick: () => {
        handleCardClick(3);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_4.SHORT_DESCRIPTION',
      }),
      price: 24.99,
      rating: 2.5,
      onClick: () => {
        handleCardClick(4);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_5.SHORT_DESCRIPTION',
      }),
      price: 9.99,
      rating: 4.0,
      onClick: () => {
        handleCardClick(5);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.IMAGE' }),
      shortDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.SHORT_DESCRIPTION' }),
      price: 39.99,
      rating: 0.5,
      onClick: () => {
        handleCardClick(6);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_1.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_1.SHORT_DESCRIPTION',
      }),
      price: 19.99,
      rating: 4.5,
      onClick: () => {
        handleCardClick(1);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_2.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_2.SHORT_DESCRIPTION',
      }),
      price: 14.99,
      rating: 3.5,
      onClick: () => {
        handleCardClick(2);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_3.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_3.SHORT_DESCRIPTION',
      }),
      price: 29.99,
      rating: 1,
      onClick: () => {
        handleCardClick(3);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_4.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_4.SHORT_DESCRIPTION',
      }),
      price: 24.99,
      rating: 2.5,
      onClick: () => {
        handleCardClick(4);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_5.IMAGE' }),
      shortDescription: intl.formatMessage({
        id: 'MARKETPLACE.ITEMS.PRODUCT_5.SHORT_DESCRIPTION',
      }),
      price: 9.99,
      rating: 4.0,
      onClick: () => {
        handleCardClick(5);
      },
    },
    {
      name: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.NAME' }),
      image: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.IMAGE' }),
      shortDescription: intl.formatMessage({ id: 'MARKETPLACE.ITEMS.PRODUCT_6.SHORT_DESCRIPTION' }),
      price: 39.99,
      rating: 0.5,
      onClick: () => {
        handleCardClick(6);
      },
    },
  ];

  return (
    <div className={styles['marketplace-content']}>
      <div className={styles['product-grid']}>
        {itemsTemplate.map((item, index) => (
          <MarketplaceCard
            key={index}
            name={item.name}
            image={item.image}
            shortDescription={item.shortDescription}
            price={item.price}
            rating={item.rating}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureMarketplace;
