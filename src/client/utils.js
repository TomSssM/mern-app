import { select } from '../shared/utils';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '../shared/const/locales';

export const parseNavigatorLanguage = () => {
  const [language] = navigator.language.split('-');
  return select(language, AVAILABLE_LOCALES, DEFAULT_LOCALE);
};
