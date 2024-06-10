import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Routes from '../Routes';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    );
  }
}

export default App;
