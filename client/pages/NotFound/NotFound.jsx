import React from 'react';
import ErrorPage from '../../components/ErrorPage';

function NotFound() {
  return <ErrorPage code={404} />;
}

export default NotFound;
