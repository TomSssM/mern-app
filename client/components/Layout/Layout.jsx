import React from 'react';

// TODO: refactor styles (height 100vh display flex center pos relative, Main > flex 1, Header > pos sticky):
import './Layout.scss';

// TODO: find use case somewhere in code classNames(...)
// TODO: refactor
// TODO: class Component
function Layout({ children }) {
  return <div className="Layout">{children}</div>;
}

export default Layout;
