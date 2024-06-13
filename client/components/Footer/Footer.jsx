import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Footer.scss';

// TODO: write code

class Footer extends Component {
  render() {
    const { className } = this.props;

    return <footer className={classNames('Footer', className)}>Footer</footer>;
  }
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
