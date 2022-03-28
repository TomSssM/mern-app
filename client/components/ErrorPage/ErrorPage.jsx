import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';
import Main from '../Main';
import HomeButton from '../HomeButton';
import RefreshButton from '../RefreshButton';
import './ErrorPage.scss';
import Heading from '../Heading';

function ErrorHomeButton() {
  return <HomeButton className="ErrorPage-Button" />;
}

function ErrorRefreshButton() {
  return <RefreshButton className="ErrorPage-Button" />;
}

function ButtonsContainer({ children }) {
  return <div className="ErrorPage-ButtonsContainer">{children}</div>;
}

function Page404() {
  return (
    <ButtonsContainer>
      <ErrorHomeButton primary />
      <ErrorRefreshButton />
    </ButtonsContainer>
  );
}

function Page500() {
  return (
    <ButtonsContainer>
      <ErrorRefreshButton primary />
      <ErrorHomeButton />
    </ButtonsContainer>
  );
}

function ErrorPage({ code }) {
  const intl = useIntl();
  const isErrorCode = code >= 500 && code < 600;
  let explanation;
  let title;

  if (isErrorCode || !code) {
    explanation = intl.formatMessage({
      id: 'error-explanation',
      defaultMessage:
        'We know about the error and be sure to fix it in no time!',
    });
  }

  if (code === 404) {
    title = intl.formatMessage({
      id: 'page-not-found',
      defaultMessage: 'Page not found',
    });

    explanation = intl.formatMessage({
      id: '404-explanation',
      defaultMessage: "You came to the page that doesn't appear to exist",
    });
  } else {
    title = intl.formatMessage({
      id: 'error-title',
      defaultMessage: 'Oops...',
    });
  }

  return (
    <Main className="ErrorPage">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading className="ErrorPage-Heading">{title}</Heading>
      {code && <span className="ErrorPage-Code">{code}</span>}
      {!code && (
        <span className="ErrorPage-ErrorMessage">
          <FormattedMessage
            id="client-error"
            defaultMessage="Something went wrong..."
          />
        </span>
      )}
      {explanation && (
        <span className="ErrorPage-Explanation">{explanation}</span>
      )}
      {code === 404 && <Page404 />}
      {isErrorCode && <Page500 />}
      {!code && <Page500 />}
    </Main>
  );
}

export default ErrorPage;
