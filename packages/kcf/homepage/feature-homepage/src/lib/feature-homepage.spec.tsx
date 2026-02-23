/// <reference types="jest" />
import FeatureHomepage from './feature-homepage';
import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';
import { Outlet, createMemoryRouter, RouterProvider } from 'react-router-dom';

// Wrapper component that provides outlet context
function LayoutWrapper() {
  const mockContextValue = {
    setNavigationItems: () => {
      // Mock implementation
    },
  };

  // We need to use a route with an outlet that can provide context
  return (
    <div>
      <Outlet context={mockContextValue} />
    </div>
  );
}

describe('FeatureHomepage', () => {
  it('should render successfully', () => {
    // Create a router with the layout providing outlet context
    const router = createMemoryRouter(
      [
        {
          element: <LayoutWrapper />,
          children: [
            {
              index: true,
              element: <FeatureHomepage />,
            },
          ],
        },
      ],
      { initialEntries: ['/'] },
    );

    const { baseElement } = IntlHelper(
      <RouterProvider router={router} />,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
