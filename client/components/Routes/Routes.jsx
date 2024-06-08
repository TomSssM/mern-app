import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import NotFound from '../../pages/NotFound';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
