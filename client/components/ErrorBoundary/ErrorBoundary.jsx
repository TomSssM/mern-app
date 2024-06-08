import React, { Component } from 'react';

import ErrorInfo from '../ErrorInfo';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    const { onError } = this.props;

    // TODO: set error to redux state

    onError?.(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    // TODO: get error from redux state and pass to ErrorInfo

    if (hasError) {
      return <ErrorInfo />;
    }

    return children;
  }
}

export default ErrorBoundary;
