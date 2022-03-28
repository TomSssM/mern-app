import { select } from '../../../shared/utils';
import {
  AVAILABLE_LOCALES,
  DEFAULT_LOCALE,
} from '../../../shared/constants/locales';

export const LOCALE_LS_KEY = 'locale';

function parseNavigatorLanguage() {
  const [language] = navigator.language.split('-');
  return select(language, AVAILABLE_LOCALES, DEFAULT_LOCALE);
}

export function getInitialLocale() {
  const navigatorLanguage = parseNavigatorLanguage();
  const savedLanguage = localStorage.getItem(LOCALE_LS_KEY);

  return savedLanguage
    ? select(savedLanguage, AVAILABLE_LOCALES, navigatorLanguage)
    : navigatorLanguage;
}
