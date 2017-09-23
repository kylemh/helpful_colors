import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SwatchCard from '../../Components/SwatchCard';
import Button from '../../Components/Button';

class DetailView extends Component {
  state = {
    colors: [
      '52297A',
      '5C2E8A',
      '663399',
      '7038A8',
      '7A3DB8',
    ]
  };

  constructor(props) {
    super(props);
  };

  mainSwatch = () => {
    var colorsCopy = this.state.colors;
    var middleColor = colorsCopy[Math.round((colorsCopy.length - 1) / 2)];
    return <SwatchCard hexcode={`#${middleColor}`} cardSize="large" />;
  }

  otherSwatches = () => {
    var id = 0;
    return this.state.colors.map(color => {
      id++;
      return (
        <Link key={id} to={`/hexcode/${color}`}>
          <SwatchCard key={id} hexcode={`#${color}`} cardSize="small" />
        </Link>
      );
    })
  };

  render() {
    return (
      <div className="router-view__contents detail-view">
        {this.mainSwatch()}
        <div className="detail-view__swatch-container">
          {this.otherSwatches()}
        </div>
        <Button text="Clear" clickAction={() => {}}/>
      </div>
    );
  };
}

export default DetailView;
