import { render } from '@testing-library/react';

import PackagesKcfMarketplaceFeatureMarketplace from './feature-marketplace';

describe('PackagesKcfMarketplaceFeatureMarketplace', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesKcfMarketplaceFeatureMarketplace />);
    expect(baseElement).toBeTruthy();
  });
});
