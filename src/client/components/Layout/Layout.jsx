import React from 'react';
import './Layout.css';
import Logo from '../Logo';
import Splitter from '../Splitter';
import Footer from '../Footer';

export const Layout = ({ children }) => (
  <main className="layout">
    <Logo className="layout__logo" />
    <Splitter className="layout__upper-splitter" />
    <div className="layout__content-wrapper">{children}</div>
    <Splitter className="layout__lower-splitter" />
    <Footer />
  </main>
);
