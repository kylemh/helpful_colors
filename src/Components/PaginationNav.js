import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function PaginationNav(props) {
  // Credit: http://www.jstips.co/en/javascript/create-range-0...n-easily-using-one-line/
  const pagesArray = Array.from(new Array(props.numberOfPages), (val, index) => index + 1);

  function styledIfCurrentPage(n) {
    return n === props.currentPageNumber ? 'page-nav__number--selected' : 'page-nav__number';
  };

  return (
    <nav className="page-nav">
      <ol className="page-nav__list">
        {pagesArray.map(n => {
          return (
            <li className={styledIfCurrentPage(n)} key={n}>
              <NavLink
                to={`/${n}`}
                activeClassName="page-nav__link--active"
              >
                {n}
              </NavLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

PaginationNav.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired
};

export default PaginationNav;
