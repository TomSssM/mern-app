import React from 'react';
import './Layout.scss';
import Header from '../Header';
import Logo from '../Logo';
import Splitter from '../Splitter';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <main className="Layout">
    <Header>
      <Logo />
    </Header>
    <Splitter />
    <div className="Layout-Content">{children}</div>
    <Splitter />
    <Footer />
  </main>
);

export default Layout;
