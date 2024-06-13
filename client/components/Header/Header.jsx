import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Header.scss';

// TODO: write code

class Header extends Component {
  render() {
    const { className } = this.props;

    return <header className={classNames('Header', className)}>Header</header>;
  }
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
