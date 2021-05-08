import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import useErrorTitle from '../../hooks/useErrorTitle';
import Main from '../Main';
import Button from '../Button';
import './ErrorPage.scss';

const ErrorButton = props => (
  <Button className="ErrorPage-Button" size="xl" theme="control" {...props} />
);

const HomeButton = props => (
  <>
    <ErrorButton {...props} type="router" to="/">
      <FormattedMessage id="go-to-main" defaultMessage="Go to main" />
    </ErrorButton>
  </>
);

const RefreshButton = props => {
  const onClick = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <ErrorButton {...props} onClick={onClick}>
      <FormattedMessage id="refresh" defaultMessage="Reload" />
    </ErrorButton>
  );
};

const ButtonsContainer = ({ children }) => (
  <div className="ErrorPage-ButtonsContainer">{children}</div>
);

const Page404 = () => (
  <ButtonsContainer>
    <HomeButton primary />
    <RefreshButton />
  </ButtonsContainer>
);

const Page500 = () => (
  <ButtonsContainer>
    <RefreshButton primary />
    <HomeButton />
  </ButtonsContainer>
);

const ErrorPage = ({ code }) => {
  const title = useErrorTitle(code);
  return (
    <Main className="ErrorPage">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1 className="ErrorPage-Heading">{title}</h1>
      <span className="ErrorPage-Code">{code}</span>
      {code === 404 && <Page404 />}
      {code >= 500 && code < 600 && <Page500 />}
    </Main>
  );
};

export default ErrorPage;
