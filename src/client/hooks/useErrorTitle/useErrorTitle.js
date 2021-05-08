import { useIntl } from 'react-intl';

const useErrorTitle = code => {
  const intl = useIntl();

  if (code === 404) {
    return intl.formatMessage({
      id: 'page-not-found',
      defaultMessage: 'Page not found',
    });
  }

  return intl.formatMessage({
    id: 'error-title',
    defaultMessage: 'Oops...',
  });
};

export default useErrorTitle;
