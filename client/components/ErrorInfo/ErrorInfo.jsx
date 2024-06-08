import React from 'react';

// TODO: refactor styles:
import './ErrorInfo.scss';

function ErrorHomeButton() {
  return <span className="ErrorPage-Button" />;
}

function ErrorRefreshButton() {
  return <span className="ErrorPage-Button" />;
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

// TODO: class Component
// TODO: refactor
function ErrorInfo({ code }) {
  const isErrorCode = code >= 500 && code < 600;
  let explanation;
  let title;

  if (isErrorCode || !code) {
    explanation = 'We know about the error and be sure to fix it in no time!';
  }

  if (code === 404) {
    title = 'Page not found';

    explanation = "You came to the page that doesn't appear to exist";
  } else {
    title = 'Oops...';
  }

  return (
    <main className="ErrorPage">
      <span>{title}</span>
      {code && <span className="ErrorPage-Code">{code}</span>}
      {!code && (
        <span className="ErrorPage-ErrorMessage">Something went wrong...</span>
      )}
      {explanation && (
        <span className="ErrorPage-Explanation">{explanation}</span>
      )}
      {code === 404 && <Page404 />}
      {isErrorCode && <Page500 />}
      {!code && <Page500 />}
    </main>
  );
}

export default ErrorInfo;
