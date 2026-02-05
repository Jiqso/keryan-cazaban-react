import { render } from '@testing-library/react';

import FeatureHomepage from './feature-homepage';

describe('FeatureHomepage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureHomepage />);
    expect(baseElement).toBeTruthy();
  });
});
