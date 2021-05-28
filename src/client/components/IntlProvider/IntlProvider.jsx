import React, { createContext, useState, useMemo, useEffect } from 'react';
import { IntlProvider as IntlProviderBase } from 'react-intl';
import { LOCALE_LS_KEY, getInitialLocale } from './utils';
import { DEFAULT_LOCALE } from '../../../shared/constants/locales';
import messagesInRussian from '../../../../public/locales/ru.json';
import messagesInEnglish from '../../../../public/locales/en.json';

export const LangContext = createContext();

const initialLocale = getInitialLocale();

const IntlProvider = ({ children }) => {
  const [locale, setLocale] = useState(initialLocale);

  const messages = useMemo(() => {
    switch (locale) {
      case 'en':
        return messagesInEnglish;
      default:
        return messagesInRussian;
    }
  }, [locale]);

  useEffect(() => {
    if (locale) {
      localStorage.setItem(LOCALE_LS_KEY, locale);
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
