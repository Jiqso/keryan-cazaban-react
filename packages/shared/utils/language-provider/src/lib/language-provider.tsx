import React, { PropsWithChildren, createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { IntlMessages } from '@packages/shared/utils/translation';

interface LanguageContextProps {
  language: 'fr' | 'en';
  messages: Record<string, string>;
  handleLanguageChange: (newLanguage: 'fr' | 'en') => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'fr',
  messages: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLanguageChange: () => {},
});

const LANGUAGE_STORAGE_KEY = 'preferred-language';

// Helper to get initial language from localStorage
const getInitialLanguage = (): 'fr' | 'en' => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') {
      return stored;
    }
  } catch (error) {
    // localStorage might not be available in some environments
    console.warn('Could not access localStorage:', error);
  }
  return 'fr'; // Default fallback
};

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>(getInitialLanguage);

  const handleLanguageChange = (newLanguage: 'fr' | 'en') => {
    setLanguage(newLanguage);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    } catch (error) {
      console.warn('Could not save language preference:', error);
    }
  };

  const messages = IntlMessages(language);

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange, messages }}>
      <IntlProvider locale={language} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
