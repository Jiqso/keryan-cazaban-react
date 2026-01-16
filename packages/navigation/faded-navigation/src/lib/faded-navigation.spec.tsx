import { render } from '@testing-library/react';

import FadedNavigation from './faded-navigation';

describe('FadedNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FadedNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
