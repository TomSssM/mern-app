import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
