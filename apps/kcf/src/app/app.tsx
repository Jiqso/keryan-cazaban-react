import { Routes, Route } from 'react-router-dom';
import { FeatureHomepage } from '@packages/kcf/homepage/feature-homepage';
import { FeatureMarketplace } from '@packages/kcf/marketplace/feature-marketplace';

export function App() {
  return (
    <Routes>
      <Route index element={<FeatureHomepage />} />
      <Route path="/marketplace" element={<FeatureMarketplace />} />
    </Routes>
  );
}

export default App;
