import React, { createContext, useState, useMemo } from 'react';
import { IntlProvider as IntlProviderBase } from 'react-intl';
import { parseNavigatorLanguage } from '../../utils';
import { DEFAULT_LOCALE } from '../../../shared/const/locales';
import messagesInRussian from '../../../../public/locales/ru.json';
import messagesInEnglish from '../../../../public/locales/en.json';

export const LangContext = createContext();

const navigatorLanguage = parseNavigatorLanguage();

const IntlProvider = ({ children }) => {
  const [locale, setLocale] = useState(navigatorLanguage);

  const messages = useMemo(() => {
    switch (locale) {
      case 'en':
        return messagesInEnglish;
      default:
        return messagesInRussian;
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <IntlProviderBase
      locale={locale}
      messages={messages}
      defaultLocale={DEFAULT_LOCALE}
    >
      <LangContext.Provider value={value}>{children}</LangContext.Provider>
    </IntlProviderBase>
  );
};

export default IntlProvider;
