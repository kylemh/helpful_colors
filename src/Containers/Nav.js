import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '../Components/Button';

class NavContainer extends Component {
  // TODO: Rename to ColorNavContainer
  state = {
    hover: false,
  };

  constructor(props) {
    super(props);

    this.toggleHover = this.toggleHover.bind(this);
    this.colorOnHover = this.colorOnHover.bind(this);
  };

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  };

  colorOnHover() {
    // TODO: Implement dynamic color change onHover
    //hexcode `${hexcode}`
    return this.state.hover ? { color: 'red' } : null;
  };

  render() {
    function colorGroupList(colorObjects) {
      return colorObjects.map((colorObject) => {
        var colorName = colorObject.name;

        return (
          <li key={colorObject.id}>
            <NavLink
              to={`/color/${colorName.toLowerCase()}s`}
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
    };

    return (
      <section className="side-nav side-nav--desktop">
        <Button clickAction={() => {}} text="Random Color" />
        <nav className="side-nav__links">
          <ul>{ colorGroupList(this.props.colorObjectArray) }</ul>
        </nav>
      </section>
    );
  };
}

NavContainer.PropTypes = {
  colorObjectArray: PropTypes.array.isRequired,
};

export default NavContainer;
