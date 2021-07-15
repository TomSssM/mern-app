import React from 'react';
import Header from '../Header';
import Main from '../Main';

const Page = ({ children, className }) => (
  <>
    <Header />
    <Main className={className}>{children}</Main>
  </>
);

export default Page;
