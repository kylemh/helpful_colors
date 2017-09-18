import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import ListView from './Containers/ListView';
import DetailView from './Containers/DetailView';
import NotFound from './Components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={ListView} />
    <Route exact path="/Purple" component={DetailView} />
    {/*<Route path='/<path-name>' component={Component} />*/}
    <Route component={NotFound} />
  </Switch>
);
