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

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  colorOnHover = () => {
    // TODO: Implement dynamic color change onHover
    //hexcode `${hexcode}`
    return this.state.hover ? { color: 'red' } : null;
  };

  colorGroupList = (colorObjects) => {
    return colorObjects.map((colorObject) => {
      var colorName = colorObject.name;

      return (
        <li key={colorObject.id}>
          <NavLink
            to={`/color_name/${colorName.toLowerCase()}s`}
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'underline',
              textDecorationColor: 'black',
              color: `${colorName.toLowerCase()}`
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
