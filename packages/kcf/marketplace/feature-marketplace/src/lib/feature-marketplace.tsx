import styles from './feature-marketplace.module.scss';
import { StickyNavigation } from '@packages/shared/navigation/sticky-navigation';

export function FeatureMarketplace() {
  return <StickyNavigation children={<h1>Welcome to FeatureMarketplace!</h1>} />;
}

export default FeatureMarketplace;
