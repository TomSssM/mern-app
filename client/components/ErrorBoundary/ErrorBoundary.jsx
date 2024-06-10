import React, { Component } from 'react';

import ErrorInfo from '../ErrorInfo';
import Layout from '../Layout';

// TODO: connect to redux

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error,
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    const hasError = this.state.hasError || this.props.hasError;
    const error = this.state.error || this.props.error;

    if (hasError) {
      return (
        <Layout>
          <ErrorInfo statusCode={error.statusCode} />
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
