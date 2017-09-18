import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';

class NavContainer extends Component {
  render() {
    return (
      <div className="Nav__container">
        <Button clickAction={() => {}} text="Random Color" />
        <nav className="Nav__navList">
          <Link to="/notfound">Browns</Link>
        </nav>
      </div>
    );
  }
}

export default NavContainer;
