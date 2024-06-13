import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { STATUS_CODE_TO_TITLE_MAP } from './constants';

import './ErrorInfo.scss';

class ErrorInfo extends Component {
  render() {
    const { statusCode, title, message } = this.props;

    return (
      <div className="ErrorInfo">
        <span className="ErrorInfo-StatusCode">{statusCode}</span>
        <span className="ErrorInfo-Title">
          {title ?? STATUS_CODE_TO_TITLE_MAP[statusCode]}
        </span>
        {message && <span className="ErrorInfo-Message">{message}</span>}
      </div>
    );
  }
}

ErrorInfo.propTypes = {
  statusCode: PropTypes.oneOf([500, 404, 403, 401, 400]),
  title: PropTypes.string,
  message: PropTypes.string,
};

ErrorInfo.defaultProps = {
  statusCode: 500,
};

export default ErrorInfo;
