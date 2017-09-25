import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import DetailView from './DetailView';
import ListView from './ListView';
import NotFound from '../../Components/NotFound';

class RoutingView extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('👨‍🚀 Application properties:\n', this.props);
    }

    return (
      <section className="router-view">
        <Switch>
          <Redirect exact from="/" to="/1" />
          <Route path="/1" component={ListView} />
          <Route exact path="/:page" component={ListView} />
          <Route exact path="/hexcode/:hexcode" component={DetailView} />
          <Route path="/color_name/:color" component={DetailView} />
          <Route component={NotFound} />
        </Switch>
      </section>
    );
  };
}

export default RoutingView;
