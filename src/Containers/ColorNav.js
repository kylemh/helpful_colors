import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '../Components/Button';

class ColorNav extends Component {
  state = {
    hover: false,
  };

  constructor(props) {
    super(props);
  };

  colorGroupList = (colorObjects) => {
    return colorObjects.map((colorObject) => {
      var colorName = colorObject.name;

      return (
        <li key={colorObject.id}>
          <div className="color-block" style={{ backgroundColor: `${colorName.toLowerCase()}` }}></div>
          <NavLink
            to={`/color_name/${colorName.toLowerCase()}s`}
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'underline',
              textDecorationColor: 'black',
            }}
          >
            {colorName}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="side-nav side-nav--desktop">
        <Button clickAction={() => {}} text="Random Color" />
        <u style={{ padding: '0 0 10px 0' }}>List By Color</u>
        <nav className="side-nav__links">
          <ul>{ this.colorGroupList(this.props.colorObjectArray) }</ul>
        </nav>
      </section>
    );
  };
}

ColorNav.PropTypes = {
  colorObjectArray: PropTypes.array.isRequired,
};

export default ColorNav;
