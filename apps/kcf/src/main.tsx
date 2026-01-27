import { StrictMode, useContext } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContext, LanguageProvider } from '@utils/language-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const AppWrapper: React.FC = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LanguageProvider language={language} handleLanguageChange={handleLanguageChange}>
            {/* <ThemeProvider theme={mhpTheme}> */}
            <App />
            {/* </ThemeProvider> */}
          </LanguageProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
};

root.render(<AppWrapper />);
