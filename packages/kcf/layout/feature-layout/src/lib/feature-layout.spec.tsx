import FeatureLayout from './feature-layout';
import { IntlHelper } from '@utils/intl-helper';
import { IntlMessages } from '@utils/translation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('FeatureLayout', () => {
  it('should render successfully', () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    const { baseElement } = IntlHelper(
      <QueryClientProvider client={queryClient}>
        <FeatureLayout />
      </QueryClientProvider>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
