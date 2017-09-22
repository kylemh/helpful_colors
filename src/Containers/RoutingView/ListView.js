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
      'C862AD',
      '2494C9',
      '6CEF36',
      'E8FE43',
      '663399',
      'A7AB62',
      'C862AD',
      '2494C9',
      '6CEF36',
      'E8FE43',
    ]
  };

  constructor(props) {
    super(props);
  };

  swatches = () => {
    return this.state.colors.map(color => {
      return <Link to={`/hexcode/${color}`}><SwatchCard hexcode={`#${color}`} /></Link>;
    })
  };

  render() {
    return (
      <div className="router-view__contents list-view">
        <h1>List View</h1>
        {this.swatches()}
        <PaginatationNav
          currentPageNumber={this.state.currentPageNumber}
          numberOfPages={10}
        />
      </div>
    );
  };
}

export default ListView;
