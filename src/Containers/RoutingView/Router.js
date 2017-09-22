import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNumber, subtractNumber } from '../../Actions/Number.js';
import DetailView from './DetailView';
import ListView from './ListView';
import NotFound from '../../Components/NotFound';

class Router extends Component {
  // state = {
  //   isColorSelected: false,
  // }

  constructor(props) {
    super(props);
  };

  render() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('👨‍🚀 Application properties:\n', this.props);
    }

    // function RenderView() {
    //   return this.state.isColorSelected ? <DetailView /> : <ListView />
    // }
    return (
      <section className="router-view">
        <Switch>
          <Route exact path="/:page" component={ListView} />
          <Route path="/color/:color" component={DetailView} />
          <Route component={NotFound} />
        </Switch>
      </section>
    );
  };
}

function mapStateToProps (state) {
  return {
    number: state.number.value
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addNumber,
    subtractNumber
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);