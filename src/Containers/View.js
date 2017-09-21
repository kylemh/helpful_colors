import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNumber, subtractNumber } from '../Actions/Number.js';
import DetailView from './DetailView';
import ListView from './ListView';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isColorSelected: false,
    }
  }

  render() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('👨‍🚀 Application properties:\n', this.props);
    }

    function RenderView() {
      return this.state.isColorSelected ? <DetailView /> : <ListView />
    }

    return (
      <section className="view">
        {RenderView}
      </section>
    );
  }
}

function mapStateToProps (state) {
  return {
    number: state.number.value
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addNumber,
    subtractNumber
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
