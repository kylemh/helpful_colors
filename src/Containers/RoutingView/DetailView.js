import React, { Component } from 'react';
import SwatchCard from '../../Components/SwatchCard';

class DetailView extends Component {
  state = {
    colors: [
      '#52297A',
      '#5C2E8A',
      '#663399',
      '#7038A8',
      '#7A3DB8',
    ]
  };

  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.state.colors);
    function Swatches() {
      this.state.colors.map((color) => {
        return  <SwatchCard hexcode={color} />;
      })
    }

    return (
      <div className="router-view__contents detail-view">
        <h1>Detail View</h1>
        {Swatches}
      </div>
    );
  };
}

export default DetailView;
