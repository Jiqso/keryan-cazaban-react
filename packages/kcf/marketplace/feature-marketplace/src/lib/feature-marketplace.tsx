import styles from './feature-marketplace.module.scss';
import { MarketplaceCard } from '@packages/shared/components/cards';

export function FeatureMarketplace() {
  const itemsTemplate = [
    {
      name: 'Product 1',
      image: '🎨',
      shortDescription: 'Amazing 3D print',
      price: 19.99,
      rating: 4.5,
      onClick: () => console.log('Clicked Product 1'),
    },
    {
      name: 'Product 2',
      image: '🔧',
      shortDescription: 'Functional part',
      price: 14.99,
      rating: 4.2,
      onClick: () => console.log('Clicked Product 2'),
    },
    {
      name: 'Product 3',
      image: '🎮',
      shortDescription: 'Gaming accessory',
      price: 29.99,
      rating: 3.2,
      onClick: () => console.log('Clicked Product 3'),
    },
    {
      name: 'Product 4',
      image: '💍',
      shortDescription: 'Stylish jewelry',
      price: 24.99,
      rating: 4.3,
      onClick: () => console.log('Clicked Product 4'),
    },
    {
      name: 'Product 5',
      image: '🧸',
      shortDescription: 'Fun toy',
      price: 9.99,
      rating: 4.0,
      onClick: () => console.log('Clicked Product 5'),
    },
    {
      name: 'Product 6',
      image: '💻',
      shortDescription: 'Tech gadget',
      price: 39.99,
      rating: 1.2,
      onClick: () => console.log('Clicked Product 6'),
    },
    {
      name: 'Product 7',
      image: '🎨',
      shortDescription: 'Artistic piece',
      price: 22.99,
      rating: 3.7,
      onClick: () => console.log('Clicked Product 7'),
    },
    {
      name: 'Product 8',
      image: '🔧',
      shortDescription: 'Useful tool',
      price: 12.99,
      rating: 4.1,
      onClick: () => console.log('Clicked Product 8'),
    },
    {
      name: 'Product 9',
      image: '🎮',
      shortDescription: 'Game accessory',
      price: 27.99,
      rating: 0.5,
      onClick: () => console.log('Clicked Product 9'),
    },
    {
      name: 'Product 10',
      image: '💍',
      shortDescription: 'Elegant jewelry',
      price: 34.99,
      rating: 4.5,
      onClick: () => console.log('Clicked Product 10'),
    },
    {
      name: 'Product 11',
      image: '🧸',
      shortDescription: 'Educational toy',
      price: 19.99,
      rating: 2.8,
      onClick: () => console.log('Clicked Product 11'),
    },
    {
      name: 'Product 12',
      image: '💻',
      shortDescription: 'Electronic accessory',
      price: 44.99,
      rating: 4.7,
      onClick: () => console.log('Clicked Product 12'),
    },
    {
      name: 'Product 13',
      image: '🎨',
      shortDescription: 'Creative sculpture',
      price: 26.99,
      rating: 4.3,
      onClick: () => console.log('Clicked Product 13'),
    },
    {
      name: 'Product 14',
      image: '🔧',
      shortDescription: 'Handy tool',
      price: 15.99,
      rating: 1,
      onClick: () => console.log('Clicked Product 14'),
    },
    {
      name: 'Product 15',
      image: '🎮',
      shortDescription: 'Gaming figure',
      price: 31.99,
      rating: 1.78,
      onClick: () => console.log('Clicked Product 15'),
    },
    {
      name: 'Product 16',
      image: '💍',
      shortDescription: 'Chic pendant',
      price: 28.99,
      rating: 3.7,
      onClick: () => console.log('Clicked Product 16'),
    },
    {
      name: 'Product 17',
      image: '🧸',
      shortDescription: 'Fun puzzle',
      price: 14.99,
      rating: 2.4,
      onClick: () => console.log('Clicked Product 17'),
    },
    {
      name: 'Product 18',
      image: '💻',
      shortDescription: 'Tech mount',
      price: 37.99,
      rating: 2.4,
      onClick: () => console.log('Clicked Product 18'),
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
