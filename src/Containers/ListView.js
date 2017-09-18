import React, { Component } from 'react';
import SwatchCard from '../Components/SwatchCard';

class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        '#663399',
        '#A7AB62',
        '#C862AD',
        '#2494C9',
        '#6CEF36',
        '#E8FE43',
        '#663399',
        '#A7AB62',
        '#C862AD',
        '#2494C9',
        '#6CEF36',
        '#E8FE43',
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

export default ListView;
