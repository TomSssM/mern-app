import React, { createContext, useState, useMemo } from 'react';
import { IntlProvider as IntlProviderBase } from 'react-intl';
import { LOCALES, DEFAULT_LOCALE } from '../../../config/locales';
import { parseNavigatorLanguage } from '../../utils';
import messagesInRussian from '../../../../public/locales/ru.json';
import messagesInEnglish from '../../../../public/locales/en.json';

export const LangContext = createContext();

const navigatorLanguage = parseNavigatorLanguage();

const IntlProvider = ({ children }) => {
  const [locale, setLocale] = useState(navigatorLanguage);

  const messages = useMemo(() => {
    const { EN } = LOCALES;
    switch (locale) {
      case EN:
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
    [locale, setLocale],
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
