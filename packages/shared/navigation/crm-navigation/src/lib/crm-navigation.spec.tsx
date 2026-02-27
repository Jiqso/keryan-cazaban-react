import { render } from '@testing-library/react';

import CrmNavigation from './crm-navigation';

describe('CrmNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrmNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
