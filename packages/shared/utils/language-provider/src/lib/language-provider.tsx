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

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const handleLanguageChange = (newLanguage: 'fr' | 'en') => {
    setLanguage(newLanguage);
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
