import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IntlProvider from '../IntlProvider';
import Layout from '../Layout';
import Footer from '../Footer';
import { Home, NotFound, Category } from '../../pages';

const App = () => (
  <Router>
    <IntlProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:id" component={Category} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Layout>
    </IntlProvider>
  </Router>
);

export default App;
