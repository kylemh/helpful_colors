import React, { Component } from 'react';
import SwatchCard from '../Components/SwatchCard';

class DetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        '#52297A',
        '#5C2E8A',
        '#663399',
        '#7038A8',
        '#7A3DB8',
      ]
    };
  }

  render() {
    function Swatches() {
      this.state.colors.map((color) => {
        return  <SwatchCard hexcode={color} />;
      })
    }

    return (
      <div className="swatchList">
        {Swatches}
      </div>
    );
  }
}

export default DetailView;
