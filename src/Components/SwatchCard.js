import React from 'react';
import PropTypes from 'prop-types';

const SwatchCard = (props) => {
  return (
    <div className="swatch-card">
      <div className="swatch-card__color" style={{ backgroundColor: props.hexcode }}/>
      <div className="swatch-card__text">
        {props.hexcode.toLowerCase()}
      </div>
    </div>
  );
};

SwatchCard.propTypes = {
  hexcode: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

SwatchCard.defaultTypes = {
  isSelected: false,
}

export default SwatchCard;
