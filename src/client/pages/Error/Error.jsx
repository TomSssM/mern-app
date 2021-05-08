import React from 'react';
import ErrorPage from '../../components/ErrorPage';

const Error = ({ code: codeRaw }) => {
  const code =
    Number.isInteger(codeRaw) && codeRaw >= 500 && codeRaw < 600
      ? codeRaw
      : 500;
  return <ErrorPage code={code} />;
};

export default Error;
