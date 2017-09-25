import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SwatchCard from '../../Components/SwatchCard';
import Button from '../../Components/Button';

class DetailView extends Component {
  constructor(props) {
    super(props);
  };

  mainSwatch = (hexcode) => {
    return <SwatchCard hexcode={`#${hexcode}`} cardSize="large" />;
  }

  otherSwatches = (shades) => {
    return (
      <div className="detail-view__swatch-container">
        <SwatchCard hexcode={`#${shades.darkest}`} cardSize="small" />
        <SwatchCard hexcode={`#${shades.darker}`} cardSize="small" />
        <SwatchCard hexcode={`#${this.props.match.params.hexcode}`} cardSize="small" />
        <SwatchCard hexcode={`#${shades.lighter}`} cardSize="small" />
        <SwatchCard hexcode={`#${shades.lightest}`} cardSize="small" />
      </div>
    );
  };

  render() {
    console.log(this.props.location.state);
    return (
      <div className="router-view__contents detail-view">
        {this.mainSwatch(this.props.match.params.hexcode)}

        {this.otherSwatches(this.props.location.state.shades)}

        <Button
          text="Clear"
          clickAction={() => this.props.history.goBack()}
        />
      </div>
    );
  };
}

export default DetailView;
