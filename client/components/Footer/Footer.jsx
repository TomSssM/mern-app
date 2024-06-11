import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

// TODO: test className can be appended
// TODO: styles

class Footer extends Component {
  render() {
    const { className } = this.props;

    return <footer className={classNames('Footer', className)} />;
  }
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
