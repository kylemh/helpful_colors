import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '../Components/Button';

class PaginationNav extends Component {
  state = {
    pagesDisplayed: [],
  };

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    this.setState({ pagesDisplayed: this.pageRange(this.props.currentPageNumber) })
  }

  pageRange = (currentPage) => {
    // TODO: Fix bug when user clicks on 10th, 20th, ... page
    const end = Math.ceil(currentPage / 10) * 10 + 1;
    const start = Math.floor(currentPage / 10) * 10 + 1;

    // Credit: https://twitter.com/_ericelliott/status/726584460154671104
    return Array.from(Array(end - start).keys()).map(i => i + start)
  }

  leftShiftButton = () => {
    const lastPageOnNav = this.state.pagesDisplayed[this.state.pagesDisplayed.length - 1]
    const isDisabled = lastPageOnNav <= 10;

    return (
      <Button
        text="Prev 10"
        className="page-group-shift-button"
        clickAction={() => this.shiftPagesDisplayed('left')}
        isDisabled={isDisabled}
      />
    );
  }

  rightShiftButton = () => {
    const lastPageOnNav = this.state.pagesDisplayed[this.state.pagesDisplayed.length - 1]
    const isDisabled = lastPageOnNav > this.props.numberOfPages - 10;
    return (
      <Button
        text="Next 10"
        className="page-group-shift-button"
        clickAction={() => this.shiftPagesDisplayed('right')}
        isDisabled={isDisabled}
      />
    );
  }

  shiftPagesDisplayed = (direction) => {
    if (direction === 'left') {
      this.setState({ pagesDisplayed: this.state.pagesDisplayed.map((x) => x - 10) })
    } else if (direction === 'right') {
      this.setState({ pagesDisplayed: this.state.pagesDisplayed.map((x) => x + 10) })
    }
  };

  render() {
    return (
      <nav className="page-nav">
        {this.leftShiftButton()}
        <ol className="page-nav__list">
          {this.state.pagesDisplayed.map(n => {
            return (
              <li className="page-nav__number" key={n}>
                <NavLink
                  to={`/${n}`}
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  {n}
                </NavLink>
              </li>
            );
          })}
        </ol>
        {this.rightShiftButton()}
      </nav>
    );
  }
}

PaginationNav.PropTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired
};

export default PaginationNav;
