import React from 'react';
import './Layout.css';
import Logo from '../Logo';
import Splitter from '../Splitter';
import Footer from '../Footer';

const Layout = ({ children }) => (
  // todo: make more semantic
  <main className="layout">
    <Logo className="layout__logo" />
    <Splitter className="layout__top-splitter" />
    <div className="layout__content">{children}</div>
    <Splitter className="layout__bottom-splitter" />
    <Footer />
  </main>
);

export default Layout;
