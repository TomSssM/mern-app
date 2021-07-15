import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import IntlProvider from '../IntlProvider';
import Layout from '../Layout';
import Footer from '../Footer';
import { Home, NotFound, Category } from '../../pages';

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
