import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Routes from '../Routes';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </React.StrictMode>
    );
  }
}

export default App;
