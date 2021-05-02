import React from 'react';
import Header from '../Header';
import Main from '../Main';

const Page = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Page;
