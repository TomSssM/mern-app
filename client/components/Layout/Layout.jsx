import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Layout.scss';

// TODO: test className can be appended

class Layout extends Component {
  render() {
    const { className, children } = this.props;

    return <div className={classNames('Layout', className)}>{children}</div>;
  }
}

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
