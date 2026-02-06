import { IntlHelper } from '@packages/shared/utils/intl-helper';
import { IntlMessages } from '@packages/shared/utils/translation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>,
      'en',
      IntlMessages('en'),
    );
    expect(baseElement).toBeTruthy();
  });
});
