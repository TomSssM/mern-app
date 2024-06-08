import React from 'react';

// TODO: refactor styles:
import './Layout.scss';

// TODO: refactor
// TODO: class Component
// TODO: use something like:
/*
<Header />

<Main>
  <Helmet>
    <title>{title}</title>
  </Helmet>
</Main>

<Footer />
*/
function Layout({ children }) {
  return <div className="Layout">{children}</div>;
}

export default Layout;
