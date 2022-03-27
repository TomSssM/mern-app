import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import IntlProvider from '../IntlProvider';
import Layout from '../Layout';
import Footer from '../Footer';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Category from '../../pages/Category';

// todo: bring: React.StrictMode to this file
const App = () => (
  <IntlProvider>
    <Router>
      <Layout>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:id" component={Category} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </ErrorBoundary>
      </Layout>
    </Router>
  </IntlProvider>
);

export default App;
