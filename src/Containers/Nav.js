import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';

class NavContainer extends React.Component {
  state = {
    hover: false,
  };

  constructor(props) {
    super(props);

    this.toggleHover = this.toggleHover.bind(this);
    this.colorOnHover = this.colorOnHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  colorOnHover() {
    // TODO: Implement dynamic color change onHover
    //hexcode `${hexcode}`
    return this.state.hover ? { color: 'red' } : null;
  }

  render() {
    function colorGroupList(colorObjects) {
      return colorObjects.map((colorObject) => {
        var colorName = colorObject.name;

        return (
          <li key={colorObject.id}>
            <Link to={`/${colorName.toLowerCase()}s`}>
              {colorName}
            </Link>
          </li>
        );
      });
    }

    return (
      <section className="Nav__section Nav__section--desktop">
        <Button clickAction={() => {}} text="Random Color" />
        <nav className="Nav__navList">
          <ul>{ colorGroupList(this.props.colorObjectArray) }</ul>
        </nav>
      </section>
    );
  }
}

NavContainer.PropTypes = {
  colorObjectArray: PropTypes.array.isRequired,
};

export default NavContainer;
