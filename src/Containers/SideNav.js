import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

class SideNav extends Component {
  state = {
    hover: false,
  };

  colorGroupList = colorObjects => {
    return colorObjects.map(colorObject => {
      var colorName = colorObject.name;

      return (
        <li key={colorObject.id}>
          <div className="color-block" style={{ backgroundColor: `${colorName.toLowerCase()}` }} />
          <NavLink
            to={`/color_name/${colorName.toLowerCase()}`}
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
  };

  goToRandom = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    this.props.history.push('/hexcode/' + color, {
      shades: {},
      fromRandom: true,
    });
  };

  render() {
    return (
      <section className="side-nav side-nav--desktop">
        <button className="button router-button" onClick={this.goToRandom}>
          Random Color
        </button>
        <u style={{ padding: '0 0 10px 0' }}>List By Color</u>
        <nav className="side-nav__links">
          <ul>{this.colorGroupList(this.props.colorObjectArray)}</ul>
        </nav>
      </section>
    );
  }
}

SideNav.propTypes = {
  colorObjectArray: PropTypes.array.isRequired,
};

export default withRouter(SideNav);
