import React, { Component } from 'react';
import SwatchCard from '../Components/SwatchCard';
import Button from '../Components/Button';

class DetailView extends Component {
  componentWillUpdate() {
    console.log(this.state);
  }

  mainSwatch = hexcode => {
    return <SwatchCard hexcode={`#${hexcode}`} cardSize="large" />;
  };

  otherSwatches = shades => {
    return (
      <div className="detail-view__swatch-container">
        {shades.darkest && <SwatchCard hexcode={`#${shades.darkest}`} cardSize="small" />}
        {shades.darker && <SwatchCard hexcode={`#${shades.darker}`} cardSize="small" />}
        <SwatchCard hexcode={`#${this.props.match.params.hexcode}`} cardSize="small" />
        {shades.lighter && <SwatchCard hexcode={`#${shades.lighter}`} cardSize="small" />}
        {shades.lightest && <SwatchCard hexcode={`#${shades.lightest}`} cardSize="small" />}
      </div>
    );
  };

  render() {
    return (
      <div className="router-view__contents detail-view">
        {this.mainSwatch(this.props.match.params.hexcode)}

        {this.otherSwatches(this.props.location.state.shades)}

        <Button text="Clear" clickAction={() => this.props.history.goBack()} />
      </div>
    );
  }
}

export default DetailView;
