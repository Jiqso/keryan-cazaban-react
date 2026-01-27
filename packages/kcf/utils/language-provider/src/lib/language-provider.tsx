import React, { PropsWithChildren, createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { IntlMessages } from '@utils/translation';

interface LanguageContextProps {
  language: 'fr' | 'en';
  handleLanguageChange: (newLanguage: 'fr' | 'en') => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'fr',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLanguageChange: () => {},
});

export const LanguageProvider: React.FC<PropsWithChildren<LanguageContextProps>> = ({
  children,
}) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const handleLanguageChange = (newLanguage: 'fr' | 'en') => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      <IntlProvider locale={language} messages={IntlMessages(language)}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
