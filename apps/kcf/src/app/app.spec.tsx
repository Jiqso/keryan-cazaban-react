import { IntlHelper } from '@utils/intl-helper';
import { IntlMessages } from '@utils/translation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './app';

describe('App', () => {
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
        <App />
      </QueryClientProvider>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
