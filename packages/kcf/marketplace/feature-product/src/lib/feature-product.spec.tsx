import { render } from '@testing-library/react';

import FeatureProduct from './feature-product';

describe('FeatureProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureProduct />);
    expect(baseElement).toBeTruthy();
  });
});
