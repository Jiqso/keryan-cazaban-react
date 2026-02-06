import { render } from '@testing-library/react';

import StickyNavigation from './sticky-navigation';

describe('StickyNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StickyNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
