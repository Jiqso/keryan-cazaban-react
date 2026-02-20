import { Routes, Route } from 'react-router-dom';
import { FeatureHomepage } from '@packages/kcf/homepage/feature-homepage';
import { FeatureMarketplace } from '@packages/kcf/marketplace/feature-marketplace';
import { FeatureProduct } from '@packages/kcf/marketplace/feature-product';
import { FadedNavigation } from '@packages/shared/navigation/faded-navigation';
import { StickyNavigation } from '@packages/shared/navigation/sticky-navigation';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<FadedNavigation />}>
        <Route index element={<FeatureHomepage />} />
      </Route>
      <Route path="/marketplace" element={<StickyNavigation />}>
        <Route index element={<FeatureMarketplace />} />
        <Route path=":uuid" element={<FeatureProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
