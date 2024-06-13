import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Main.scss';

class Main extends Component {
  render() {
    const { className, children } = this.props;

    return <main className={classNames('Main', className)}>{children}</main>;
  }
}

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
