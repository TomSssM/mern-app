import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '../config/locales';
import { select } from '../shared/utils';

export const parseNavigatorLanguage = () => {
  const { language: rawLanguage } = navigator;
  const [language] = rawLanguage.split('-');
  return select(language, AVAILABLE_LOCALES, DEFAULT_LOCALE);
};
