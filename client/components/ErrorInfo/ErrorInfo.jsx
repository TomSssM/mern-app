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

// TODO: propTypes
// TODO: class Component
// TODO: refactor
function ErrorInfo({ statusCode }) {
  const isErrorCode = statusCode >= 500 && statusCode < 600;
  let explanation;
  let title;

  if (isErrorCode || !statusCode) {
    explanation = 'We know about the error and be sure to fix it in no time!';
  }

  if (statusCode === 404) {
    title = 'Page not found';

    explanation = "You came to the page that doesn't appear to exist";
  } else {
    title = 'Oops...';
  }

  return (
    <main className="ErrorPage">
      <span>{title}</span>
      {statusCode && <span className="ErrorPage-Code">{statusCode}</span>}
      {!statusCode && (
        <span className="ErrorPage-ErrorMessage">Something went wrong...</span>
      )}
      {explanation && (
        <span className="ErrorPage-Explanation">{explanation}</span>
      )}
      {statusCode === 404 && <Page404 />}
      {isErrorCode && <Page500 />}
      {!statusCode && <Page500 />}
    </main>
  );
}

export default ErrorInfo;
