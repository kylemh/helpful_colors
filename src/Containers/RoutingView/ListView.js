import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SwatchCard from '../../Components/SwatchCard';
import PaginatationNav from '../../Components/PaginationNav';

class ListView extends Component {
  state = {
    currentPageNumber: 1,
    colors: [
      '663399',
      'A7AB62',
      '2494C9',
      'EE11DD',
      '6600FF',
      'C86212',
      '2AA41F',
      '61EAF2',
      'E8FE43',
      '6CAAA6',
      '621FAA',
      'FF1111',
    ]
  };

  constructor(props) {
    super(props);
  };

  swatches = () => {
    var id = 0;
    return this.state.colors.map(color => {
      id++;
      return (
        <Link key={id} to={`/hexcode/${color}`}>
          <SwatchCard key={id} hexcode={`#${color}`} />
        </Link>
      );
    })
  };

  render() {
    return (
      <div className="router-view__contents list-view">
        <div className="list-view__swatch-container">
          {this.swatches()}
        </div>

        <PaginatationNav
          currentPageNumber={this.state.currentPageNumber}
          numberOfPages={10}
        />
      </div>
    );
  };
}

export default ListView;
