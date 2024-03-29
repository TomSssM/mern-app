import React, { useCallback, useContext } from 'react';
import { useIntl } from 'react-intl';
import { AVAILABLE_LOCALES } from '../../../shared/constants/locales';
import { LangContext } from '../IntlProvider';

function LangSwitcher() {
  const { setLocale, locale } = useContext(LangContext);
  const intl = useIntl();
  const onChange = useCallback(
    e => {
      const { value: newLocale } = e.target;
      setLocale(newLocale);
    },
    [setLocale],
  );

  return (
    <select className="LangSwitcher" value={locale} onChange={onChange}>
      {AVAILABLE_LOCALES.map(id => (
        <option key={id} value={id}>
          {intl.formatMessage({
            id,
            defaultMessage: id,
            description: 'Language name',
          })}
        </option>
      ))}
    </select>
  );
}

export default LangSwitcher;
