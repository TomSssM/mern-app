import React from 'react';
import Header from '../Header';
import Main from '../Main';

function Page({ children, className }) {
  return (
    <>
      <Header />
      <Main className={className}>{children}</Main>
    </>
  );
}

export default Page;
