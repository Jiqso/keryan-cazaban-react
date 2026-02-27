import { Routes, Route } from 'react-router-dom';
// Navigation
import { FadedNavigation } from '@packages/shared/navigation/faded-navigation';
import { StickyNavigation } from '@packages/shared/navigation/sticky-navigation';
import { CrmNavigation } from '@packages/shared/navigation/crm-navigation';

// Homepage Feature
import { FeatureHomepage } from '@packages/kcf/homepage/feature-homepage';

// Marketplace Feature
import { FeatureMarketplace } from '@packages/kcf/marketplace/feature-marketplace';
import { FeatureProduct } from '@packages/kcf/marketplace/feature-product';

// CRM Feature
import { FeatureDashboard } from '@packages/kcf/crm/feature-dashboard';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<FadedNavigation />}>
        <Route index element={<FeatureHomepage />} />
      </Route>
      <Route path="/marketplace" element={<StickyNavigation />}>
        <Route index element={<FeatureMarketplace />} />
        <Route path=":id" element={<FeatureProduct />} />
      </Route>
      <Route path="/crm" element={<CrmNavigation />}>
        <Route index element={<FeatureDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
